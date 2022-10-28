// Exercício 1:

// Função a ser modificada

function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

// Função modificada

const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';

const testScope = (escopo) => escopo ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) : console.log(elseScope);

testScope(false);

// Exercício 2:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

oddsAndEvens.sort(function(a, b){return a - b})

console.log(`Os números ${oddsAndEvens.sort(function(a, b){return a - b})} se encontram ordenados de forma crescente!`); 