// FALTA REFATORAR

function verificaTamanho(array) {
    let resultado = '';    
    if (array.length !== 11) {
      resultado = 'Array com tamanho incorreto.';
    }
    for (let ind of array) {
      if (ind < 0 || ind > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';  
      }  
    }
    return resultado
  }    

// NÃO TERMINADA  
  function repetidos(array) {
    let resultado = '';
    let repetido = 0;
    for (let num of array) {
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
    return resultado;
  }

// NÃO TERMINADA  
  function repetidosResult(num){
    let resultado = '';
    if (num > 2) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    }  
    return resultado;
  }
  
  function criaNumero(array) {
    let resultado = '';  
    let junto = array.join('');
    let ddd = junto.slice(0, 2);
    let part1 = junto.slice(2, 7);
    let part2 = junto.slice(7, 11);
    resultado = `(${ddd}) ${part1}-${part2}`;
    return resultado;
  }

  

function generatePhoneNumber(array) {
  let resultado = '';
  if (verificaTamanho(array) === 'Array com tamanho incorreto.') {
    resultado = verificaTamanho(array);  
  } else if (repetidos(array) === 'não é possível gerar um número de telefone com esses valores') {
    resultado = repetidos(array);  
  } else {
  resultado = criaNumero(array);
  }
  return resultado;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]));



function repetidos(array) {
   let items = {
       0: 0,
       1: 0,
       2: 0,
       3: 0,
       4: 0,
       5: 0,
       6: 0,
       7: 0,
       8: 0,
       9: 0,
    }
    for (let num of array) {
      for (let item in items) {
        if (num == item) {
          items[item] += 1;   
        }
      }
    }
    return items;
  }

  let obijetu = repetidos([1, 2, 3, 4, 1, 6, 7, 8, 9, 1, 0]);

  function repetidosResult(object){
    let resultado = '';
    for (let item of object) {
      if (object[item] > 2) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
      } 
    }
    return resultado;
  }
console.log(repetidosResult(obijetu));