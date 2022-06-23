const books = require('./exCode');

const fantasyOrScienceFiction = (arr) => arr.filter((obj) => obj.genre === 'Fantasia' || obj.genre === 'Ficção Científica')

console.log(fantasyOrScienceFiction(books));
