const books = require('./exCode');

const oldBooksOrdered = (arr) => arr.filter((obj) => (2022 - obj.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);

console.log(oldBooksOrdered(books));
