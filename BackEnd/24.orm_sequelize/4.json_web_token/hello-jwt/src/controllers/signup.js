const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  const { username } = req.body;
  const userExists = await userService.verifyUserExists(username);
  if (userExists) {
    return res.status(409).json({ error: { message: 'user already exists' } });
  }

  const admin = Math.floor(Math.random() * 100) > 60;

  const user = await userService.createUser({ username, admin });

  if (!user) throw new Error

  const jwtConfig = { algorithm: 'HS256', expiresIn: '1h' };

  const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);

  return res.status(200).json({ token })
};