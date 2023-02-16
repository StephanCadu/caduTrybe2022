const readline = require('readline-sync');

const chosenNumber = readline.question('Choose fibonacci sequence length ')

const fibonacci = (n) => {
  if (n < 1) return 'número inválido';
  return new Array(n).fill(1).map((_, ind) => ind === 0 ? 1 : (ind) * 2);
}

console.log(fibonacci(+chosenNumber));
