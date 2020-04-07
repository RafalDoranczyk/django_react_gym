from django.db import models
from django.contrib.auth import get_user_model
from authentication.models import CustomUser

User = get_user_model()


class Ingredient(models.Model):
    CARBOHYDRATES = 'CB'
    PROTEINS = 'P'
    FATS = 'F'
    PROTEINS_AND_FATS = 'PF'
    DRINKS = 'D'
    VEGETABLES = 'V'
    SOURCE_TYPE_CHOICES = [
        (CARBOHYDRATES, 'Carbohydrates'),
        (PROTEINS, 'Proteins'),
        (FATS, 'Fats'),
        (PROTEINS_AND_FATS, 'Proteins and fats'),
        (DRINKS, 'Drinks'),
        (VEGETABLES, 'Vegetables')
    ]
    PER_100G = '100'
    PER_ONE_PIECE = '1'
    COUNT_TYPE_CHOICES = [
        (PER_100G, '100g'),
        (PER_ONE_PIECE, 'One piece'),
    ]
    name = models.CharField(max_length=64)
    image = models.ImageField(upload_to='media', blank=True)
    kcal = models.DecimalField(max_digits=5, decimal_places=2)
    carbs = models.DecimalField(max_digits=5, decimal_places=2)
    protein = models.DecimalField(max_digits=5, decimal_places=2)
    fat = models.DecimalField(max_digits=5, decimal_places=2)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    source_type = models.CharField(max_length=3, choices=SOURCE_TYPE_CHOICES)
    count_type = models.CharField(max_length=12, choices=COUNT_TYPE_CHOICES)

    def __str__(self):
        return self.name


class MealIngredient(models.Model):
    quantity = models.DecimalField(max_digits=5, decimal_places=2)
    ingredient = models.ForeignKey('Ingredient', on_delete=models.CASCADE)
    meal = models.ForeignKey('Meal', on_delete=models.CASCADE)


class Meal(models.Model):
    BREAKFAST = 'B'
    SECOND_BREAKFAST = 'SB'
    DINNER = 'D'
    BEFORE_WORKOUT = 'BW'
    AFTER_WORKOUT = 'AW'
    SUPPER = 'S'
    MEAL_TYPES_CHOICES = [
        (BREAKFAST, 'Breakfast'),
        (SECOND_BREAKFAST, 'Second breakfast'),
        (DINNER, 'Dinner'),
        (BEFORE_WORKOUT, 'Before workout'),
        (AFTER_WORKOUT, 'After workout'),
        (SUPPER, 'Supper'),
    ]
    meal_type = models.CharField(max_length=3, choices=MEAL_TYPES_CHOICES, default=BREAKFAST)
    name = models.CharField(max_length=64)
    description = models.TextField()
    image = models.ImageField(upload_to='media', blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ingredients = models.ManyToManyField(Ingredient, through=MealIngredient)


class FoodDay(models.Model):
    name = models.CharField(max_length=64)
