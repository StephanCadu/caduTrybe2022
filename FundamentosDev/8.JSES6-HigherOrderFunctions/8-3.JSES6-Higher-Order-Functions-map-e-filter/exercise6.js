const books = require('./exCode');

const oldBooks = (arr) => arr.filter((obj) => 2022 - obj.releaseYear > 60).map((obj) => obj.name);

console.log(oldBooks(books));
