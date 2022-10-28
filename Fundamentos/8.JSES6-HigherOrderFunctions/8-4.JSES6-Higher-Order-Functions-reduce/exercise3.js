const books = require('./codeEx234');

const averageAge = (books.reduce((a, b) => a + (b.releaseYear - b.author.birthYear), 0)) / books.length;

console.log(averageAge);
