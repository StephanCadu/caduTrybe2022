// parâmetro rest:

// permite que sejam passados vários parâmetros para uma função
// empacota todos os parâmetros em um array

const firstArray = [3, 5, 7];

const secondArray = [2, ...firstArray, 4];

console.log(secondArray);