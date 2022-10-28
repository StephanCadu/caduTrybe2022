function generatePhoneNumber (array) {
  let resultado = '';

  let junto = array.join('');
  let ddd = junto.slice(0, 2);
  let part1 = junto.slice(2, 7);
  let part2 = junto.slice(7, 11);
  resultado =  `(${ddd}) ${part1}-${part2}`;

  let repetido = 0;
  for (let num of array){
    let analisado = num;
    for (let num2 of array) {
      if (analisado === num2) {
        repetido += 1;
      }
    }
    if (repetido > 2 || num < 0 || num > 9) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    }
    repetido = 0;
  }  
  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  }
  return resultado;
};
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));