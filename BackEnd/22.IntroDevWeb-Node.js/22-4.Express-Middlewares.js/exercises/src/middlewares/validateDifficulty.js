const validateDifficulty = (req, res, next) => {
  const acceptedOptions = ['Fácil', 'Médio', 'Difícil'];
  const { description: { difficulty } } = req.body;
  if (!acceptedOptions.includes(difficulty)) return res.status(400)
    .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' })
  next();
};

module.exports = validateDifficulty;
