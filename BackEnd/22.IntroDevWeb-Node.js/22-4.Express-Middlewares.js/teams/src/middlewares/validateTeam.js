const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if(requiredProperties.every((prop) => prop in req.body)) {
    next();
  } else {
    res.status(400);
  }
}

module.exports = validateTeam;