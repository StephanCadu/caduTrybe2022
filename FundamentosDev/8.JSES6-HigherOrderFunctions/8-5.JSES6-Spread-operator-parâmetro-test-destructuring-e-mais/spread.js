// abbreviation object literal;
// default params.

// spread operator:
const numbers = [1, 2, 3];
const numbers2 = [5, 6, 7];

const newArray = [...numbers, 4, ...numbers2];

console.log(newArray); 

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];

console.log(months);

// usando toFixed()
console.log(1234.567.toFixed(2));
console.log(98.54.toFixed(1));

// usando spread como argumento de função que recebe dois parâmetros
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

// descobrir máximo e mínimo
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); 
console.log(Math.min(...randomNumbers));

// juntar dois objetos
const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };

const customer = { ...people, ...about};

console.log(customer);

// pra fixar
const specialFruit = ['manga', 'abacate', 'morango', 'goiaba'];

const additionalItens = ['bolo de cenoura', 'strogonoff', 'pizza', 'pudim'];

const sucos = {
  limão: ['batido', 'espremido'],
  açúcar: false,
  ml: 500,
}

const fruitSalad = (fruit, add, juice) => [...fruit, ...add, ...Object.entries(juice)];

console.log(fruitSalad(specialFruit, additionalItens, sucos));