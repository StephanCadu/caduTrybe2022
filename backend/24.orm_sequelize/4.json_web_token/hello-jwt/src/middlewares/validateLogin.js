const { loginSchema } = require('./validations/schemas');

const validateLogin = (req, res, next) => {
  const user = req.body;
  const { error } = loginSchema.validate(user);
  if (error) return res.status(422).json({ message: error.details[0].message });
  next();
};

module.exports = validateLogin;