const teams = require('../data/teams.js');

const existingId = (req, res, next) => {
  const { id } = req.params;
  if (teams.some((team) => team.id === +id)) {
    next();
  } else {
    res.status(400).json({ message: 'Id inexistente' });
  }
}

module.exports = existingId;
