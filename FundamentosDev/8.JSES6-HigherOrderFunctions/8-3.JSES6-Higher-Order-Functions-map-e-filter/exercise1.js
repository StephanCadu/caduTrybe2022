const books = require('./exCode');

const formatedBookNames = (arr) => arr.map((obj) => `${obj.name} - ${obj.genre} - ${obj.author.name}`);

console.log(formatedBookNames(books));
