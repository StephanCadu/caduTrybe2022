const books = require('./exCode');

const someBookWasReleaseOnThe80s = (arr) => arr.some((obj) => obj.releaseYear > 1979 && obj.releaseYear < 1990);

// modo alternativo de fazer verificando se releaseYear começa com 198.
const someBooksOn80s = (arr) => arr.some((obj) => obj.releaseYear.toString().startsWith('198'));

console.log(someBookWasReleaseOnThe80s(books));
console.log(someBooksOn80s(books));
