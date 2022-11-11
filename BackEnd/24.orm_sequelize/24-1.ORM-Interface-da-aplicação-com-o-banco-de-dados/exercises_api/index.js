const express = require('express');
const bookRouter = require('./src/routers/book.router');
const errorHandler = require('./src/middlewares/error.middleware');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/books', bookRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
