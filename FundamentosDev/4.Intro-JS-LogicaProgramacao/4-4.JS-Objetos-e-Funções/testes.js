let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado'
};

console.log(diasDaSemana['1']);

let player = {
 name: 'Marta',
 lastName: 'Silva',
 age: 34,
 medals: { golden: 2, silver: 3 },
};

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' possui ' + player['age'] + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
player['fullName'] = player['name'] + ' ' + player['lastName'];

console.log('A jogadora ' + player['fullName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index + ':',  cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index + ':', car[index]);
  }

let food = ['hamburguer', 'bife', 'acarajé'];

  for (let value of food) {
  console.log(value);
  };

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (const key in names) {
     console.log('Olá ', names[key]);
  }

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in carro) {
    console.log(key + ':', carro[key]);
}


function calc(a, b, oper) {
  if (oper === '+'){
    return a + b;
  }
}
calc(4, 5, '+');
