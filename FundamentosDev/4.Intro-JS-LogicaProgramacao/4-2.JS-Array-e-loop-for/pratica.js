// ----ACHAR NOME POR ID----

let users = [
    {id: 1, name: "cadu"},
    {id: 2, name: "joao"},
    {id: 3, name: "coquinho"}
];

let user = users.find(item => item.id == 1);
let indice = users.findIndex(item => item.id == 1);

console.log(user.name); 
console.log(indice);

// ----ACHAR IDADE----

const ages = [3, 10, 17, 23, 52, 20];
let index = ages.findIndex( age => age > 50);
console.log(index);

//----NÚMERO FATORIAL----

// let fatorial = 6;
// let resultado = fatorial;
// for (let i = 1; i < fatorial; i += 1){
//     resultado *= i;
// }
// console.log(resultado);

// o código acima funciona, porém não está de acordo com a lógica matemática desta operação, uma vez que um número fatorial(n!) resulta da multiplicação de um algarismo pelos seus antecessores até 1, ou seja, decrescente. Para ficar de acordo com a lógica do cálculo se faz:

let fatorial = 14;
let resultado = fatorial;
let primeiroMultiplicador = fatorial - 1;
for (let i = primeiroMultiplicador; i > 1; i -= 1){
    resultado *= i;
}

console.log('O resultado de ' + fatorial + '! é: ' + resultado);

// visto que 0! e 1! resultam em 1 e não existe fatorial de números decimais ou negativos, podemos melhorar esse código dessa forma:
 
function calcFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return('Não existe fatorial de um texto');
    } else if (!Number.isInteger(fatorial) || fatorial < 0){
        return('Não existe fatorial de números não naturais (decimais ou negativos)');
    } else if (fatorial === 0 || fatorial === 1){
        return(1);
    } else {
        let resultado = fatorial;
        let primeiroMultiplicador = fatorial - 1;
        for (let i = primeiroMultiplicador; i > 1; i -= 1){
          resultado *= i;
       }
      return resultado;    
    }
}
console.log(calcFatorial(fatorial));

// usando o operador ternário:

let fato = function fac(n) {
    return n<2 ? 1 : n*fac(n-1);
}
console.log(fato(9));