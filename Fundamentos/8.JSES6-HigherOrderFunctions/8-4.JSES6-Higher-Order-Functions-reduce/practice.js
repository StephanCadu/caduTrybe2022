const numbers = [32, 15, 3, 2, -5, 56, 10];

const sum = numbers.reduce((a, b) => a + b);

// console.log(sum);

const sum2 = numbers.reduce(((a, b) => a + b), 10);

// console.log(sum2);

const highest = numbers.reduce((a, b) => a > b ? a : b);

// console.log(highest);

// somar pares só com reduce
const sumEven = numbers.reduce(((a, b) => b % 2 === 0 ? a + b : a), 0);

console.log(sumEven);

// somar pares com reduce e filter
const sumFilterEven = numbers.filter((n) => n % 2 === 0).reduce((a, b) => a + b);

console.log(sumFilterEven);
