// EXERCÍCIO 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 8;
let inputLine = '';
for(let ind = 0; ind < n; ind +=1){
    inputLine += '*'
}
for(let index = 0; index < n; index +=1){
    console.log(inputLine);
}

//EXERCÍCIO 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let x = 5;
let aux = "";
for (let linha = 1; linha <= x; linha++) {
   aux += '*'
   console.log(aux);
}

//EXERCÍCIO 3- Agora inverta o lado do triângulo.
// ex: n = 5
//         *
//        **
//       ***
//      ****
//     *****
// ESSE É MUITO DIFÍCIL!!!

let y = 7;
let symbolPosition= y;
let space = ' ';
let symbol = '*'
let changedPlace = '';

for (let linha = 1; linha <= y; linha +=1) {
    for (let coluna = 1; coluna <= y; coluna += 1) {
       if (coluna < symbolPosition){
           changedPlace += space;
       }else{
           changedPlace += symbol;
       }
    }
    console.log(changedPlace);
    changedPlace = '';
    symbolPosition-= 1;
}

//EXERCÍCIO 4- Depois, faça uma pirâmide com n asteriscos de base:

function isoscelesTriangleDraw(baseSize){
    if(typeof baseSize !== 'number') return;

    let size = baseSize-2;
    
    for(let index = 2; index <= size+1; index++){
        let line = ' ';
        for(let index2 = 0; index2 <= baseSize; index2++){
            (index2 > index || index2 <= size-index) ? line += ' ' : line += '*';
        }
        console.log(line);
    }
}

isoscelesTriangleDraw(9);



let baseSize = 7;

let size = baseSize-2;

  for (let index = 2; index <= size + 1; index += 1) {
      let line = ' ';
      for (let index2 = 0; index2 <= baseSize; index2 += 1) {
          if (index2 > index || index2 <= size-index) {
              line += ' ';
          }else{
              line += '*';
          } 
      }
      console.log(line);
  }
