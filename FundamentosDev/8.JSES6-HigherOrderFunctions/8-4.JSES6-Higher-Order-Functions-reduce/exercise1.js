const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// solução com concat
const flatten = () => arrays.reduce(((a, b) => a.concat(b)), []);

console.log(flatten());

// solução com spread
const flatten2 = () => arrays.reduce(((a, b) => [...a, ...b]), []);

console.log(flatten2());

// solução com flat
const flatten3 = () => arrays.flat();

console.log(flatten3());
