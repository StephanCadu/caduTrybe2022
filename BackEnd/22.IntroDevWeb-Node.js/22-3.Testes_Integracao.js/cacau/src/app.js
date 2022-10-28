const express = require('express');
const cacau = require('./cacau');

const app = express();

app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacau.getChocolatesByName(name);
  if (!chocolates.length) return res.status(404).json(chocolates);
  res.status(200).json(chocolates);
});

app.get('/chocolates/total', async (_req, res) => {
  const total = await cacau.getChocolatesTotal();
  res.status(200).json({ total });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacau.getChocolateById(+id);
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

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolate = await cacau.putChocolate({ id: +id, name, brandId });
  if (!chocolate) return res.status(404).json({ message: "chocolate not found" });
  res.status(200).json(chocolate);
});

module.exports = app;
