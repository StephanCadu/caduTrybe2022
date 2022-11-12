const userService = require('../services/user.service');

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json(user);
};

const getByIdAndEmail = async (req, res) => {
  const { id } = req.params;
  const { email } = req.query;
  const user = await userService.getByIdAndEmail(id, email);
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { fullName, email } = req.body;
  const newUser = await userService.createUser(fullName, email);
  return res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email } = req.body;
  const updatedUser = await userService.updateUser(id, fullName, email);
  if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  return res.status(200).json({ message: 'User deleted' });
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};
