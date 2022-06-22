const books = require('./exCode');

const booksOrderedByReleaseYearDesc = (arr) => arr.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(booksOrderedByReleaseYearDesc(books));
