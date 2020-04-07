const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 16;
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 24;

const username = {
  name: "username",
  label: "Username",
  type: "text",
  validation: {
    required: true,
    validate: (value) => {
      const val = value.trim().length;
      if (val < MIN_NAME_LENGTH) {
        return `Username should be min. ${MIN_NAME_LENGTH} characters length.`;
      } else if (val > MAX_NAME_LENGTH) {
        return `Username should be max ${MAX_NAME_LENGTH} characters length.`;
      }
    },
  },
};

const password = {
  name: "password",
  label: "Password",
  type: "password",
  validation: {
    required: true,
    validate: (value) => {
      const val = value.trim().length;
      if (val < MIN_PASSWORD_LENGTH) {
        return `Password should be min. ${MIN_PASSWORD_LENGTH} characters length.`;
      } else if (val > MAX_PASSWORD_LENGTH) {
        return `Password can have max ${MAX_PASSWORD_LENGTH} characters.`;
      }
    },
  },
};

const email = {
  name: "email",
  label: "E-mail",
  type: "email",
  validation: {
    required: true,
    validate: (value) => {
      if (!/\S+@\S+\.\S+/.test(value)) {
        return "Email address is invalid";
      }
    },
  },
};

const confirmPassword = {
  name: "confirmPassword",
  type: "password",
  label: "Confirm password",
  validation: {
    required: true,
  },
};

export const loginInputs = [email, password];

export const signupInputs = [username, email, password, confirmPassword];
