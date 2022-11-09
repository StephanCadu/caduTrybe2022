// default params.

const greeting = (user = 'user') => console.log(`Welcome ${user}!`)

greeting();

// pra fixar

const multiply = (number, value = 1) => number * value; 
  
console.log(multiply(8));