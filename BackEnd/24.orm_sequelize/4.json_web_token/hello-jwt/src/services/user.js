const { user: User } = require('../db/models');

const verifyUserExists = async (username) => {
  const user = await User.findOne({ where: { username } });
  return user !== null;
};

const createUser = async ({ username, admin }) => {
  const user = await User.create({ username, admin });
  return user;
};

module.exports = {
  verifyUserExists,
  createUser,
};