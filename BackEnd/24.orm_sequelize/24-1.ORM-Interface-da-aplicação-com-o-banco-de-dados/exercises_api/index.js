const express = require('express');
const bookRouter = require('./src/routers/book.router');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
