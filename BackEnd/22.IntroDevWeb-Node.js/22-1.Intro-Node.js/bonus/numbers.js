const readline = require('readline-sync');

const a = readline.questionInt('Type first number: ');
const b = readline.questionInt('Type second number: ');
const c = readline.questionInt('Type third number: ');

const calcNumbers = () => new Promise((resolve, reject) => {
  if ([a, b, c].some((n) => Number.isNaN(n))) return reject('Informe apenas números');
  const result = (a + b) * c;
  return resolve(result > 50 ? result : 'Número muito baixo');
})

console.log(calcNumbers());
