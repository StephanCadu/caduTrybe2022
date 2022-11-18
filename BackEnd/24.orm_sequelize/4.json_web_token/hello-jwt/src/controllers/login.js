require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const secret = process.env.JWT_SECRET;

const isBodyValid = (username, password) => username && password;

const isAdmin = (username, password) => username === 'admin'
  && password === 's3nh4S3gur4???';

module.exports = async (req, res) => {
  const { username, password } = req.body;

  if (!isBodyValid(username, password)) {
    return res.status(401).json({ message: 'Informacões inválidas' });
  }

  const user = await userService.getUserByName(username);

  if (!user) return res.status(404).json({ error: { message: 'User not found' } });

  if (user.admin && user.password === password) {
    return res.status(404)
      .json({ error: { message: 'Admins must login with different passwords' } });
  }

  const { admin } = user;

  const jwtConfig = { algorithm: 'HS256', expiresIn: '1h' };

  const token = isAdmin(username, password)
    ? jwt.sign({ data: { username, admin: true } }, secret, jwtConfig)
    : jwt.sign({ data: { username, admin } }, secret, jwtConfig);

  res.status(200).json({ token });
};