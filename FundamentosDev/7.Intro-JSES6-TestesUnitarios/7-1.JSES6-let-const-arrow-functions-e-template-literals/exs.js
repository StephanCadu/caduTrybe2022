// Exercício 3

// document.querySelector('#btn').addEventListener('click', () => {
//   let h2 = document.querySelector('#h2').innerHTML;
//   let clickCount = parseInt(h2) + 1;
//   h2 = clickCount;
//   document.querySelector('#h2').innerHTML = h2;
// });

// Exercício 4

const changeX = (string) => {
  const newString = string.replace(/x/gi, 'cadu');
  return newString;
}

changeX('O X é o x pois o x é o X');

const skius = ['JS', 'React', 'Python', 'HoFs', 'POO'];

const concat = (string) => {
  let result = `${string}
  Minhas cinco principais habilidades serão:`;
  const ord = skius.sort();
  ord.forEach(skill => 
  result = `${result}
   - ${skill}`);
   result = `${result}
   #goTrybe.`;

  return result;
}

console.log(concat(changeX('O X é o x pois o x é o X')));
