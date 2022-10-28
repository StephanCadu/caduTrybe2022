// ----CRESCENTE----

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }   
 console.log(numbers);



// ----DECRESCENTE----

let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < num.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (num[index] > num[secondIndex]) {
        let position = num[index];
        num[index] = num[secondIndex];
        num[secondIndex] = position;
        }
    }
    }   
console.log(num);


// ----MULTIPLICADOS----    

// Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:



let vezes = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];

for(let ind = 0; ind < vezes.length; ind += 1){
    if(vezes[ind] < (vezes.length - 1)){
    resultado.push(vezes[ind] * vezes[ind + 1])
    }else{
    resultado.push(vezes[ind] * 2);    
    }
}
console.log(resultado);

    
    
