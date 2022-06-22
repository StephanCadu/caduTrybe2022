const books = require('./exCode');

const smallerName = (arr) => {
  let nameBook = 'nomeInicial';
  arr.forEach((obj) => { if (obj.name.length < nameBook.length) nameBook = obj.name; });
  return nameBook;
}

console.log(smallerName(books));