const books = require('./exCode');

const getNamedBook = (arr) => arr.find((obj) => obj.name.length === 26).name;

console.log(getNamedBook(books));
