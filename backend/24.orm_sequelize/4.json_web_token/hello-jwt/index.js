require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./src/controllers');
const { error, validateLogin } = require('./src/middlewares');
const { validateJWT, validateAdmin } = require('./src/auth');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/login', validateLogin, controllers.login);

app.get('/users/me', validateJWT, controllers.user);

app.get('/top-secret', validateJWT, validateAdmin, controllers.secret);

app.post('/signup', validateLogin, controllers.signup);

app.use(error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
