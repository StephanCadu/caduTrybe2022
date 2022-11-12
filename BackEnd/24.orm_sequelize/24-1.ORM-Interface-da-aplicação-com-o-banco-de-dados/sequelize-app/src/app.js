const express = require('express');

const handleError = require('./middlewares/error.middleware');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user/:id', User.getById);

app.get('/user/search/:id', User.getByIdAndEmail);

app.get('/user', User.getAll);

app.post('/user', User.createUser);

app.put('/user/:id', User.updateUser);

app.delete('/user/:id', User.deleteUser);

app.use(handleError);

module.exports = app;
