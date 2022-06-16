/** Passando função como argumento de outra */
const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

/** Retornando uma função de outra */
const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(10)
//   console.log(initialSum(20));

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(10, (number) => {
    number % 2 === 0 ? console.log(number, 'is even') : console.log(number, 'is odd');
  });

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(parseInt(numberGenerator()));

const wake = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wake));
console.log(doingThings(coffee));
console.log(doingThings(sleep));
