const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 64;

const MAX_DESCRIPTION_LENGTH = 400;

const name = {
  name: "name",
  label: "Meal",
  type: "text",
  validation: {
    required: true,
    validate: (value) => {
      const val = value.trim().length;
      if (val < MIN_NAME_LENGTH) {
        return `Meal name should be min. ${MIN_NAME_LENGTH} characters length.`;
      } else if (val > MAX_NAME_LENGTH) {
        return `Meal name should be max ${MAX_NAME_LENGTH} characters length.`;
      }
    },
  },
};

const description = {
  name: "description",
  label: "Meal description",
  type: "text",
  validation: {
    required: true,
    validate: (value) => {
      const val = value.trim().length;
      if (val < MIN_NAME_LENGTH) {
        return `Meal name should be min. ${MIN_NAME_LENGTH} characters length.`;
      } else if (val > MAX_NAME_LENGTH) {
        return `Meal name should be max ${MAX_DESCRIPTION_LENGTH} characters length.`;
      }
    },
  },
};

export const mealInputs = [name, description];
