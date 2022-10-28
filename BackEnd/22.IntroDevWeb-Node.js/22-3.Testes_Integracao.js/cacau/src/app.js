const express = require('express');
const cacau = require('./cacau');

const app = express();

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacau.getChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;
