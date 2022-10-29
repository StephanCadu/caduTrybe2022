const validateRating = (req, res, next) => {
  const { description: { rating } } = req.body;
  if (rating < 1 || rating > 5) return res.status(400)
    .json({ message: 'Rating field must be an integer between 1 and 5' });
  next();
};

module.exports = validateRating;
