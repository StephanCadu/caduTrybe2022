// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// passo 1: criar um laço que percorra de 0 a 50 [X]
// passo 2: criar um array que armazene os números primos [X]
// passo 3: criar função que determine o que é primo []
//  - se a quantidade de divisores for maior que 2, sabemos que não é primo
// passo 4: criar função que retorne o maior número deste array []

// let primos = [];
// let quantDivisores = 0;

// for (let i = 0; i < 51; i += 1) {
//     for (let x = 1; x <= i; x += 1){
//         if (i % x === 0) {
//           quantDivisores += 1;  
//         }
//     } 
//     if (quantDivisores == 2){
//         primos.push(i);
//     }  
// }
// console.log(primos);

let maiorPrimo = 0;

for (let numAtual = 0; numAtual < 51; numAtual += 1){
    let ehPrimo = true;
    for (let divisorAtual = 2; divisorAtual < numAtual; divisorAtual += 1){
        if (numAtual % divisorAtual === 0){
            ehPrimo = false;
        }
    }
    if (ehPrimo) {
        maiorPrimo = numAtual;
    }
}
console.log(maiorPrimo);


