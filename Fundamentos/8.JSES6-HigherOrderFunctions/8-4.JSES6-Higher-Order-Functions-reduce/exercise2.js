const books = require('./codeEx234');

const reduceNames = books.reduce((a, b) => a + `${b.author.name}, `, '');

// usando concat; ps: nesse caso não vale a pena
const reduceNames2 = books.reduce((a, b) => a.concat(`${b.author.name}, `), '')

console.log(reduceNames);
console.log(reduceNames2);
