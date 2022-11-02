const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());

app.use('/people', peopleRoutes);

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Something went wrong :(
    message: ${err.message}` });
});

module.exports = app;