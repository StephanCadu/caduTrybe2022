const books = require('./exCode');

const authorWith3DotsOnName = (arr) => arr.find((obj) => obj.author.name.split('').filter((char) => char === '.').length === 3).name;

console.log(authorWith3DotsOnName(books));

// testando como achar o '.' dentro de uma string
// console.log('George R. R. Martin'.split('').filter((char) => char === '.'));

// ref que ajudou na resolução: https://pt.stackoverflow.com/questions/486918/como-contar-ocorr%C3%AAncias-de-uma-letra-em-uma-frase#:~:text=%C3%89%20poss%C3%ADvel%20utilizar%20o%20m%C3%A9todo,String%20ou%20uma%20express%C3%A3o%20regular.


const nome = 'Qualquer. Coisa.'

const arrNome = nome.split('');

console.log(arrNome);

const pontos = arrNome.filter((caracter) => caracter === '.');

console.log(pontos);

console.log(pontos.length);