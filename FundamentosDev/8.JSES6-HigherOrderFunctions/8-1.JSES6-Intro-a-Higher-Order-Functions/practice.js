// /** Passando função como argumento de outra */
// const sayHello = () => {
//     return ('hello trybers');
//   }
  
//   const printGreeting = (callback) => {
//       console.log(callback());
//   }
  
//   printGreeting(sayHello);

// /** Retornando uma função de outra */
// const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }
  
//   const initialSum = sumFixAmount(10)
// //   console.log(initialSum(20));

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(10, (number) => {
//     number % 2 === 0 ? console.log(number, 'is even') : console.log(number, 'is odd');
//   });

//   const numberGenerator = () => {
//     return Math.random() * 100;
//   }
  
//   console.log(parseInt(numberGenerator()));

// const wake = () => 'Acordando!!';
// const coffee = () => 'Bora tomar café!!';
// const sleep = () => 'Partiu dormir!!';

// const doingThings = (func) => func();

// console.log(doingThings(wake));
// console.log(doingThings(coffee));
// console.log(doingThings(sleep));

/** Exemplo de map */
// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = birthYear.map(year => 2018 - year);
// console.log(ages);

// /** Exemplo de filter */
// const persons = [
//   { name: 'Peter', age: 16 },
//   { name: 'Mark', age: 18 },
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 14 },
//   { name: 'Tony', age: 24},
// ];
// const fullAge = persons.filter(person => person.age >= 18);
// console.log(fullAge);

// /** Exemplo de reduce */
// const arr = [5, 7, 1, 8, 4];
// const sum = arr.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 10);
// console.log(sum);

// /** Arrow function */
// isso = (x, y) => x + y;

// /** Função retornada */
// aquilo = (x) => (y) => x + y;

// const aquilo7 = aquilo(7);
// const desseJeito = aquilo7(8);

// console.log(`isso imprime ${isso(3, 4)} e aquilo imprime ${aquilo(3)(4)}
// porém, também da pra fazer desse jeito ${desseJeito} `);

// /** Testando startsWith e endsWith */
// const eu = 'eu';
// console.log(eu.endsWith('u'));
// console.log(eu.startsWith('e'));

/** Array pra testar map, filter e reduce */
users = [
  {
    name: 'Yazeed',
    age: 25
  },
  {
    name: 'Sam',
    age: 30
  },
  {
    name: 'Bill',
    age: 20
  }
];

const getName = (user) => user.name;

/** Sem map */
usernames = [];
for (let i = 0; i < users.length; i++) {
  const name = getName(users[i]);

  usernames.push(name);
}

console.log(usernames);

/** Com map */
userMap = users.map(getName);

console.log(userMap);

const startsWithB = (string) => string.toLowerCase().startsWith('b');

/** Sem filter */
namesStartingWithB = [];
for (let i = 0; i < users.length; i++) {
  if (startsWithB(users[i].name)) {
    namesStartingWithB.push(users[i]);
  }
}

console.log(namesStartingWithB);

/** Com filter */
namesWithBFilter = users.filter((user) => startsWithB(user.name));

console.log(namesWithBFilter);

/** Sem reduce */
total = 0;
for (let i = 0; i < users.length; i++) {
  total += users[i].age;
}

console.log(total);

/** Com reduce */
totalAge = users.reduce((total, user) => user.age + total, 0);

console.log(totalAge);
