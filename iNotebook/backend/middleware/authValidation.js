const { checkSchema } = require("express-validator");

const authValidationSchema = checkSchema({
  name: {
    in: ["body"],
    isLength: {
      errorMessage: "Name is very Short",
      options: { min: 5},
    },
    isString: {
      errorMessage: "Name must be a string",
    },
    notEmpty: {
      errorMessage: "Name is required",
    },
  },
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "Please enter a valid email address",
    },
    notEmpty: {
      errorMessage: "Email is required",
    },
    normalizeEmail: true,
  },
  password: {
    in: ["body"],
    isLength: {
      errorMessage: "Password should be at least 6 characters",
      options: { min: 6 },
    },
    notEmpty: {
      errorMessage: "Password is required",
    },
  },
});

const loginValidation = checkSchema({
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "Please enter a valid email address",
    },
    notEmpty: {
      errorMessage: "Email is required",
    },
    normalizeEmail: true,
  },
  password: {
    in: ["body"],
    exists: {
      errorMessage: "Name is required",
    },
    isLength: {
      errorMessage: "Password cannot be blank",
      options: { min: 6 },
    },
  },
});

module.exports = {
  authValidationSchema,
  loginValidation,
};
