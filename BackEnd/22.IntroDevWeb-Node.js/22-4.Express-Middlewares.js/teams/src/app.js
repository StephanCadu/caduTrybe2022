require('express-async-errors');
const teams = require('./data/teams.js');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {
  validateTeam,
  existingId,
  apiCredentials,
} = require('./middlewares');

const app = express();

app.use(express.static('./images'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/teams', (_req, res) => res.json(teams));

app.use(apiCredentials);

app.get('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === +id);
  res.status(200).json(team);
});

let nextId = 3;
app.post('/teams', validateTeam, (req, res) => {
  const authTeam = req.teams.teams.includes(req.body.sigla);
  const teamExists = teams.some((team) => team.sigla === req.body.sigla);
  if(!authTeam && teamExists) return res.sendStatus(401);
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find(t => t.id === +id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;
