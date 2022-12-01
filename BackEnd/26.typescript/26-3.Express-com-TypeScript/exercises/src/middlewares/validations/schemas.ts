import Joi from "joi";

const userSchema = Joi.object({
  id: Joi.number().integer().min(1),
  name: Joi.string().min(3).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

const postSchema = Joi.object({
  id: Joi.number().integer().min(1),
  title: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  publicationDate: Joi.date().required(),
});

export default {
  userSchema,
  postSchema,
}