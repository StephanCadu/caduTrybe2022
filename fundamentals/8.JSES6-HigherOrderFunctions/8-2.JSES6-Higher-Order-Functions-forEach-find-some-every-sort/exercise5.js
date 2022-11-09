const books = require('./exCode');

// visto que o século XX durou de 1901 a 2000:
const everyoneWasBornOnSecXX = (arr) => arr.every((obj) => obj.author.birthYear > 1900 && obj.author.birthYear < 2001)

console.log(everyoneWasBornOnSecXX(books));
