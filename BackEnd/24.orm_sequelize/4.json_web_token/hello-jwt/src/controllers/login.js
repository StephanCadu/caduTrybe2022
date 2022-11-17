require('dotenv').config();
const jwt = require('jsonwebtoken');
// const { userService } = require('../..');

const secret = process.env.JWT_SECRET;

const isBodyValid = (username, password) => username && password;

const isAdmin = (username, password) => username === 'admin'
  && password === 's3nh4S3gur4???';

module.exports = (req, res) => {
  const { username, password } = req.body;

  if (!isBodyValid(username, password)) {
    return res.status(401).json({ message: 'Informacões inválidas' });
  }

  const jwtConfig = { algorithm: 'HS256', expiresIn: '1h' };

  const token = isAdmin
    ? jwt.sign({ data: { username, admin: true } }, secret, jwtConfig)
    : jwt.sign({ data: { username, admin: false } }, secret, jwtConfig);

  res.status(200).json({ token });
};