// array destructuring:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const [first, second, third, fourth] = arrayCountries;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [greeting, func] = saudacoes;

func(greeting);

// 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const [food, pet, drink] = [bebida, comida, animal];
comida = food;
animal = pet;
bebida = drink;

console.log(comida, animal, bebida);

// 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [, , , ...pares] = numerosPares;

console.log(pares);