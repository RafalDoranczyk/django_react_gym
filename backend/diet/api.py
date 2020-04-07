from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import get_user_model
from .models import (Ingredient, Meal, MealIngredient, )
from .serializers import (IngredientSerializer, MealSerializer, MealIngredientSerializer, )
from django.db.models import Sum
User = get_user_model()


class IngredientsApi(ModelViewSet):
    serializer_class = IngredientSerializer
    queryset = Ingredient.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def list(self, request, *args, **kwargs):
        ingredients_source = request.query_params.get('type')
        ingredient_name = request.query_params.get('name')
        if ingredients_source:
            ingredients = Ingredient.objects.filter(user=request.user, source_type=ingredients_source)
            self.paginate_queryset(ingredients)
            paginated = self.get_paginated_response(ingredients).data
            serializer = self.get_serializer(paginated['results'], many=True)
            res = {
                'data': serializer.data,
                'count': paginated['count'],
                'pages': paginated['pages']
            }
            return Response(res)
        elif ingredient_name:
            ingredients = Ingredient.objects.filter(user=request.user, name__istartswith=ingredient_name)[:15]
            serializer = self.get_serializer(ingredients, many=True)
            return Response(serializer.data)
        else:
            ingredients = Ingredient.objects.all()
            serializer = self.get_serializer(ingredients, many=True)
            return Response(serializer.data)


class IngredientTypesApi(ViewSet):

    def list(self, request):
        counts = Ingredient.COUNT_TYPE_CHOICES
        types = Ingredient.SOURCE_TYPE_CHOICES
        ctx = {
            'counts': counts,
            'types': types,
        }
        return Response(ctx)


def create_meal_ingredients(ingredients, meal_id):
    for ing in ingredients:
        MealIngredient.objects.create(
            quantity=ing['quantity'],
            ingredient_id=ing['id'],
            meal_id=meal_id
        )


class MealsApi(ModelViewSet):
    serializer_class = MealSerializer
    queryset = Meal.objects.all()

    def list(self, request, *args, **kwargs):
        meal_type = request.query_params.get('type') or Ingredient.SOURCE_TYPE_CHOICES[0]
        meals = Meal.objects.filter(user=request.user, meal_type=meal_type)
        self.paginate_queryset(meals)
        result = []
        for meal in meals:
            obj = {
                'kcal' : 0,
                'carbs': 0,
                'protein': 0,
             }
            ingredient_meals = MealIngredient.objects.filter(meal_id=meal.pk)
            for ing in ingredient_meals:
                quantity = ing.quantity
                obj['kcal'] += ing.ingredient.kcal * quantity
            result.append(obj)
        print(result)
        paginated = self.get_paginated_response(meals).data
        serializer = self.get_serializer(paginated['results'], many=True)
        for data in serializer.data:
            print(data)
        res = {
            'data': serializer.data,
            'count': paginated['count'],
            'pages': paginated['pages']
        }
        return Response(res)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        ingredients = request.data['ingredients']
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        print(serializer.data)
        for ingredient in ingredients:
            MealIngredient.objects.create(
                ingredient_id=ingredient['id'],
                meal_id=serializer.data['id'],
                quantity=ingredient['quantity']
            )
        headers = self.get_success_headers(serializer.data)
        res = {
            'msg': "You've created new meal!"
        }
        return Response(res, status=status.HTTP_201_CREATED, headers=headers)


class MealTypesApi(ViewSet):

    def list(self, request):
        types = Meal.MEAL_TYPES_CHOICES
        ctx = {'types': types}
        return Response(ctx)
