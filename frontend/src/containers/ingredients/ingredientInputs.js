const MIN_NAME_LENGTH = 4;
const MAX_NAME_LENGTH = 64;

const name = {
  name: "name",
  label: "Ingredient",
  type: "text",
  validation: {
    required: true,
    validate: (value) => {
      const val = value.trim().length;
      if (val < MIN_NAME_LENGTH) {
        return `Ingredient name should be min. ${MIN_NAME_LENGTH} characters length.`;
      } else if (val > MAX_NAME_LENGTH) {
        return `Ingredient name should be max ${MAX_NAME_LENGTH} characters length.`;
      }
    },
  },
};

const kcal = {
  name: "kcal",
  label: "Kcal",
  type: "number",
  validation: {
    required: true,
    validate: (value) => {
      if (value < 0) {
        return "This value can't be less than 0.";
      }
    },
  },
};

const carbs = {
  name: "carbs",
  type: "number",
  label: "Carbohydrates",
  validation: {
    required: true,
    validate: (value) => {
      if (value < 0) {
        return "This value can't be less than 0.";
      }
    },
  },
};

const protein = {
  name: "protein",
  type: "number",
  label: "Protein",
  validation: {
    required: true,
    validate: (value) => {
      if (value < 0) {
        return "This value can't be less than 0.";
      }
    },
  },
};

const fat = {
  name: "fat",
  type: "number",
  label: "Fat",
  validation: {
    required: true,
    validate: (value) => {
      if (value < 0) {
        return "This value can't be less than 0.";
      }
    },
  },
};

const price = {
  name: "price",
  type: "number",
  label: "Price",
  validation: {
    required: true,
    validate: (value) => {
      if (value < 0) {
        return "This value can't be less than 0.";
      }
    },
  },
};

export const ingredientInputs = [name, kcal, carbs, protein, fat, price];
