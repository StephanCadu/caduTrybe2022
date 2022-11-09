// Exercício 1:

const fatorial = (n) => {
    return n === 0 ? 1 : n * fatorial(n - 1);
}

console.log(fatorial(8));

// Exercício 2:

const longestWord = (string) => {
  const space = string.split(' ');
  let result = '';
  for (let i of space) {
    i.length > result.length ? result = i : result;
  }
  return result;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu isso')) // retorna 'aconteceu'