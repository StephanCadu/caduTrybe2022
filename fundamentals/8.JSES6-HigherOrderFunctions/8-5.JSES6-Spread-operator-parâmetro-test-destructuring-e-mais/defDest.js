// default destructuring:

// adicionando uma chave ao objeto com default destructuring
const someone = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const some2 = { ...someone, country: 'Brazil'}

console.log(some2);

const { originCountry = 'Brazilian' } = someone;

console.log(someone);

const position2d = [4.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x, y, z);

// pra fixar

// faça com que a função retorne João is Brazilian
const getNationality = ({ firstName, lastName, nationality }) => `${firstName} ${lastName} is ${nationality}`;

const person = {
  firstName: 'Henrique',
  lastName: 'da Costa Mecking',
};

const otherPerson = {
  firstName: 'Garry',
  lastName: 'Kasparov',
  nationality: 'Russian',
};

// usando spread pra criar um novo obj adicionando a chave desejada
const person2 = { ...person, nationality: 'Brazilian' };

console.log(getNationality(otherPerson));
console.log(getNationality(person2));

const { firstName = 'Meckinho' } = person;

console.log(person);
console.log(firstName);