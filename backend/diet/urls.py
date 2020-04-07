from rest_framework import routers
from .api import (
    IngredientsApi,
    IngredientTypesApi,
    MealsApi,
    MealTypesApi,
)

router = routers.DefaultRouter()

router.register('ingredients', IngredientsApi, 'ingredients')
router.register('meals', MealsApi, 'meals')
router.register('types/ingredients', IngredientTypesApi, 'ingredient-types')
router.register('types/meals', MealTypesApi, 'meal-types')
urlpatterns = router.urls
