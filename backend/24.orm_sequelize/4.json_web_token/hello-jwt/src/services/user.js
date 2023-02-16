const { user: User } = require('../db/models');

const getUserByName = async (username) => {
  const user = await User.findOne({ where: { username } });
  return user;
}

const createUser = async ({ username, password, admin }) => {
  const user = await User.create({ username, password, admin });
  return user;
};

module.exports = {
  createUser,
  getUserByName,
};