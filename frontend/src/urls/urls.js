export const loginURL = "/auth/login/";
export const refreshTokenURL = "/auth/token/refresh/";
export const signupURL = "/auth/signup/";
export const ingredientsURL = "/ingredients/";
export const ingredientTypesURL = "/types/ingredients/";
export const singleIngredientURL = (id) => `${ingredientsURL}${id}/`;

//meals
export const mealsURL = "/meals/";
export const mealTypesURL = `/types${mealsURL}`;
export const singleMealURL = (id) => `${mealsURL}${id}/`;
