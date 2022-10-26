const books = require('./exCode');

const fantasyOrScienceFictionAuthors = (arr) => arr.filter((obj) => obj.genre === 'Fantasia' || obj.genre === 'Ficção Científica').map((obj) => obj.author.name).sort();

console.log(fantasyOrScienceFictionAuthors(books));
