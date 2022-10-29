const express = require('express');
const crypto = require('crypto');
const {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validateUser,
  validateToken,
} = require('./middlewares')

const generateCrypto = () => crypto.randomBytes(8).toString('hex');

const app = express();

app.use(express.json());

app.post(
  '/activities',
  validateToken,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => res.status(201)
    .json({ message: 'Atividade cadastrada com sucesso!' }));

app.post(
  '/signup',
  validateUser,
  (_req, res) => res.status(201)
    .json({ token: generateCrypto() }));

module.exports = app;