const express = require('express');
const teams = require('../data/teams');
const {
  existingId,
  validateTeam,
  apiCredentials
} = require('../middlewares');

const router = express.Router();

router.get('/', (_req, res) => res.json(teams));

router.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === +id);
  res.status(200).json(team);
});

let nextId = 3;
router.post('/', validateTeam, (req, res) => {
  const authTeam = req.teams.teams.includes(req.body.sigla);
  const teamExists = teams.some((team) => team.sigla === req.body.sigla);
  if(!authTeam && teamExists) return res.sendStatus(401);
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', validateTeam, existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find(t => t.id === +id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
