const books = require('./codeEx234');

const longestNamedBook = books.reduce((a, b) => a.length < b.name.length ? b : a, '');

console.log(longestNamedBook);
