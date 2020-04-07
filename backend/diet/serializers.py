from rest_framework.serializers import ModelSerializer
from .models import (
    Ingredient,
    Meal,
    MealIngredient
)


class IngredientSerializer(ModelSerializer):

    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'image', 'kcal', 'carbs', 'protein', 'fat', 'price', 'source_type', 'count_type']


class MealIngredientSerializer(ModelSerializer):

    class Meta:
        model = MealIngredient
        fields = '__all__'


class MealSerializer(ModelSerializer):

    class Meta:
        model = Meal
        fields = ['id', 'name', 'description', 'image', 'meal_type']

