// parâmetro rest:

// permite que sejam passados vários parâmetros para uma função
// empacota todos os parâmetros em um array

const quantosParam = (...par) => console.log(`Parâmetros: ${par}, 
Quantidade: ${par.length}`);

quantosParam(1, 2, 'a', false, { a: 3 }, [2, 3, 4]);

// pode ser bem útil em uma função que soma todos os números passados

const sum = (...nums) => nums.reduce((a, b) => a + b);

console.log(sum(1, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7));