const validateCreatedAt = (req, res, next) => {
  const { description: { createdAt } } = req.body;
  const validFormat = /\d{2}\/\d{2}\/\d{4}/.test(createdAt);
  if (!validFormat) return res.status(400)
    .json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });

  const
    parsedData = createdAt.split('/'),
    day = +parsedData[0],
    month = +parsedData[1],
    year = +parsedData[2];
  const
    dayValid = day > 0 && day <= 31,
    monthValid = month > 0 && month <= 12,
    yearValid = year > 1969 && year <= new Date().getFullYear();

  if (!dayValid) return res.status(400).json({ message: 'Invalid day value' });
  if (!monthValid) return res.status(400).json({ message: 'Invalid month value' });
  if (!yearValid) return res.status(400).json({ message: 'Ai vc foi longe demais meu garoto' });
  next();
};

module.exports = validateCreatedAt;
