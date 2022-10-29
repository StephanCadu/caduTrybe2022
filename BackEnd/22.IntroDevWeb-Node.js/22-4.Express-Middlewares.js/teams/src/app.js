require('express-async-errors');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const teamsRouter = require('./routes/teamsRouter');
const { apiCredentials } = require('./middlewares');

const app = express();

app.use(express.static('./images'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/teams', teamsRouter);

app.use(apiCredentials);

// routes not found treatment
app.use((_req, res) => res.sendStatus(404));

// express counts the parameters to tell apart common middlewares from error middlewares
// this is an error middleware
app.use((err, _req, _res, next) => {
  console.log(err.stack);
  // pass the error to the next middleware
  next(err);
});

// receive the error
app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Something went wrong :(
    message: ${err.messsage}` });
});

module.exports = app;
