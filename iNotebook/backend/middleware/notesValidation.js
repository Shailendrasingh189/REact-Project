const { checkSchema } = require("express-validator");

const notesValidationSchema = checkSchema({
  title: {
    in: ["body"],
    isLength: {
      errorMessage: "Title must be 5 characters",
      options: { min: 5 },
    },
    isString: {
      errorMessage: "Title must be a string",
    },
    notEmpty: {
      errorMessage: "Title is required",
    },
  },
  description: {
    in: ["body"],
    isLength: {
      errorMessage: "Description must be at least 5 characters",
      options: { min: 5 },
    },
    isString: {
      errorMessage: "Description must be a string",
    },
    notEmpty: {
      errorMessage: "Description is required",
    },
  },
  tag: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "Tag must be a string",
    },
    isLength: {
      errorMessage: "Tag must not exceed 30 characters",
      options: { max: 30 },
    },
    trim: true, // Removes leading/trailing spaces
  },
});

module.exports = { notesValidationSchema };
