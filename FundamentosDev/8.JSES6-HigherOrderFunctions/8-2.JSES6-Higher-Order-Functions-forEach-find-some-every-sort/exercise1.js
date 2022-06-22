const books = require('./exCode');

const authorBornIn1947 = (arr) => arr.find((obj) => obj.author.birthYear === 1947).author.name;

console.log(authorBornIn1947(books));