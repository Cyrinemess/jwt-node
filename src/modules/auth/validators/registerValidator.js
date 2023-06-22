const joi = require("joi");

const registerValidator = joi.object({
  firstName: joi.string().min(2).max(50).required().label("first name"),
  lastName: joi.string().min(2).max(50).required().label("first name"),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(15).required(),
});

module.exports = registerValidator;
