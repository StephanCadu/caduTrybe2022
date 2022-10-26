// EXERCÍCIO 1:

function retornaPalindromo(word) {
    let revWord;
    let spaced;
    let result = false;

    spaced = word.split('');
    revWord = spaced.reverse();
    revWord = revWord.join('');
      if(word === revWord){
        result = true; 
      }
      console.log(result);
}
retornaPalindromo('subinoonibus');

// EXERCÍCIO 2: 

let numbers = [22, 3, 6, 7, 10, 11, 131];

function highestIndex(numbers) {
    let highest = 0;
    let result = 0;

    for (let index of numbers){
        if (index > highest){
            highest = index;
            result = numbers.indexOf(index);
        }
    }
    console.log(result);
}
highestIndex(numbers);

// EXERCÍCIO 3: 

function lowestIndex(numbers) {
    let lowest = 100;
    let result = 0;

    for (let index of numbers){
        if (index < lowest){
            lowest = index;
            result = numbers.indexOf(index);
        }
    }
    console.log(result);
}
lowestIndex(numbers);

// EXERCÍCIO 4: 

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function higgestString(test){
    let result = '';

    for (const index of test) {
       if (index.length > result.length) {
           result = index;
       }; 
    };
    console.log(result);
};
higgestString(test);

// EXERCÍCIO 5:

let foreheadando = [2, 3, 2, 5, 3, 8, 2, 3];

function maisRepetido(array){
  let numRepetido = 0;
  let vezesRepetido = 0;
  let maisVezes = 0;
  let maisRep = 0;
  
  for (let index = 0; index < array.length; index +=1) {
    let numAtual = array[index];
    for (let index2 = 0; index2 < array.length; index2 +=1) {
      if(numAtual == array[index2]){
          vezesRepetido +=1;
          numRepetido = array[index]
      }        
    } 
    if(vezesRepetido > maisVezes){
      maisRep = numRepetido;
    }
    vezesRepetido = 0;  
  }
  console.log(maisRep);
}
maisRepetido([2, 3, 2, 5, 3, 8, 8, 8]);

function mostRepeated (array) {
    let repeated = 0;
    let numberCount = 0;
    let repeatedIndex = 0;

    for (let num in array){
        let currentNum = array[num];
        for (let equal in array){
            if(currentNum === array[equal]){
                numberCount += 1;
            }
        }
        if (numberCount > repeated){
            repeated = numberCount;
            repeatedIndex = num;
        }
        numberCount = 0;
    }
    console.log(array[repeatedIndex])
}
mostRepeated([2, 3, 2, 5, 3, 8, 2, 3]);

// EXERCÍCIO 6:

function retornaSoma(valor){
    let soma = 0;
    for(let ind = 1; ind <= valor; ind += 1){
      soma += ind 
    }
    console.log(soma);
}
retornaSoma(10);

// // EXERCÍCIO 7:

function verifyWordEnd (word, end){
    let invertWord = word.split('').reverse().join('');
    let invertEnd = end.split('').reverse().join('');
    let result;

    for (let index = 0; index < invertEnd.length; index +=1) {
        if (invertWord[index] !== invertEnd[index]){
            result = false;
        } else {
            result = true;
        } 
    }
    return result;
}

console.log(verifyWordEnd('czr', 'zr'));