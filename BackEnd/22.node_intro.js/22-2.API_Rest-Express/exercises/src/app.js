const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const readData = async () => {
  const dataJson = await fs.readFile(path.resolve(__dirname, './movies.json'));
  const data = JSON.parse(dataJson);
  return data;
};

app.get('/movies/search/', async (req, res) => {
  const { q } = req.query;
  const data = await readData();

  const newData = data.reduce((acc, cur) => {
    if (cur.movie.toUpperCase().includes(q.toUpperCase())) return [...acc, cur];
    return acc;
  }, []);

  res.status(200).json({ newData });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readData();
  const chosenMovie = data.find((movie) => movie.id === +id);
  if (!chosenMovie) res.status(404).json({ message: 'movie not found' });
  if (chosenMovie) res.status(200).json({ chosenMovie });
});

app.get('/movies', async (req, res) => {
  const data = await readData();
  res.status(200).json({ data });
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const data = await readData();
  const newId = Math.max(...data.map(({ id }) => id)) + 1;
  const newMovie = { id: newId, movie, price }
  const movies = [...data, newMovie];
  await fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(movies));
  res.status(200).json({ movies });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const data = await readData();

  const newData = data.map((mov) => {
    if (mov.id === +id) return { ...mov, movie, price };
    return mov;
  });

  await fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(newData))
  res.status(200).json({ message: `filme ${movie} alterado com sucesso` });
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readData();

  const newData = data.filter((movie) => movie.id !== +id);

  await fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(newData))
  res.status(200).json({ message: `filme com id ${id} deletado com sucesso` });
});

module.exports = app;