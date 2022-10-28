const express = require('express');
const cacau = require('./cacau');

const app = express();

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacau.getChocolateById(+id);
  console.log('uleeakjddsnkjcdas');
  if(!chocolate) return res.status(404).json({ message: "Chocolate not found" });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacau.getChocolatesByBrand(+brandId);
  if(!chocolates.length) return res.status(404).json({ message: "Chocolates not found" });
  res.status(200).json({ chocolates });
});

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacau.getChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;
