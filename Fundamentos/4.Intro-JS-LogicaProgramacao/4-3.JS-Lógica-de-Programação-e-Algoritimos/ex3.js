let array = ['java', 'javascript', 'python', 'html', 'css', 'batatadocecomlimao', 'pneumoultramicroscopicosilicovulcanoconiotico', 'oi'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

//----MAIOR----

let maior = array[0];

for (let i = 0; i < array.length; i += 1){
    if (array[i].length > maior.length){
        maior = array[i]
    }
}
console.log(maior);

//----MENOR----

let menor = array[0];

for (let i = 0; i < array.length; i += 1){
    if (array[i].length < menor.length){
        menor = array[i]
    }
}
console.log(menor);
