const books = require('./exCode');

const nameAndAge = (arr) => arr.map((obj) => ({ age: obj.releaseYear - obj.author.birthYear, author: obj.author.name })).sort((a, b) => a.age - b.age);

console.log(nameAndAge(books));
