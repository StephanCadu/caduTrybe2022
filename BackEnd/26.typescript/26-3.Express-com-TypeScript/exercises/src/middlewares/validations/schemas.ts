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

const productSchema = Joi.object({
  id: Joi.number().integer().min(1),
  name: Joi.string().min(3).required(),
  brand: Joi.string().min(3).required(),
  price: Joi.number().integer().required(),
  manufacturingDate: Joi.string().required(),
  expirationDate: Joi.string().required(),
});

const priceSchema = Joi.object({
  start: Joi.number().integer().min(0).required(),
  end: Joi.number().integer().min(0).required(),
});

const restaurantSchema = Joi.object({
  id: Joi.number().integer().min(1),
  name: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  openingTime: Joi.string().required(),
  closingTime: Joi.string().required(),
});

export default {
  userSchema,
  postSchema,
  productSchema,
  priceSchema,
  restaurantSchema,
}