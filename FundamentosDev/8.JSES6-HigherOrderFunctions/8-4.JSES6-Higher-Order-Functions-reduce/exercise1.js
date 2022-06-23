const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce(((a, b) => a.concat(b)), []);

console.log(flatten());

// nota pra lembrar de voltar nesse exercício e realizar apenas com reduce