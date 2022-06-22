const books = require('./exCode');

// some não funciona pois caso encontre um elemento diferente retorna true na hora
const authorUnique = (arr) => arr.every((obj) => arr.every((obj2) => obj.author.birthYear !== obj2.author.birthYear));

console.log(authorUnique(books));

// solução alternativa usando o índice para comparar um elemento com seu sucessor
const authorUn = (arr) => arr.every((obj, ind) => obj.author.birthYear !== arr[ind + 1].author.birthYear);

console.log(authorUn(books));

// agradeço ao Renan por me ajudar nesse ex
