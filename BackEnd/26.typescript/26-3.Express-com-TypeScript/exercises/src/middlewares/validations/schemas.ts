import Joi from "joi";

const userSchema = Joi.object({
  id: Joi.number().integer().min(1),
  name: Joi.string().min(3).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

export default {
  userSchema,
}