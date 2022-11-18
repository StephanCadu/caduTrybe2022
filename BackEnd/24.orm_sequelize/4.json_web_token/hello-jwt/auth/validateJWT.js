const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ error: { message: 'Token not found' } });

  try {
    const user = jwt.verify(token, secret);

    req.user = user;

    next();
  } catch (e) {
    e.statusCode = 404;
    next(e);
  }
};