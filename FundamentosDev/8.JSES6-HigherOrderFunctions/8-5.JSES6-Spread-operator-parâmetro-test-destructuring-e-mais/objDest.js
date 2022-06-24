// object destructuring;

const product = {
    type: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

// propriedade desejada entre chaves do lado esquerdo
// objeto acessado do lado direito
const { type, seller } = product;

console.log(type);
console.log(seller);

// extraia o nome, idade, planeta e se é um jedi desse objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      nome: 'Tatooine',
      population: '200000',
    },
  };

const { name, age, homeWorld: { nome: planet }, description: { jedi } } = character;

console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planet} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// misturando desestruturação com spread
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

const { workDays, weekend } = daysOfWeek;

const week = [...workDays, ...weekend];

console.log(week);

// alterando nome da variável

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matemática',
  };
  
const { a: estudante, b: classAssigned, c: subject } = student;

console.log(`${estudante} é da turma ${classAssigned} e gosta de ${subject}`);

// pra fixar

// 1

const user = {
    person: 'Maria',
    old: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const worker = {...user, ...jobInfos}

const { person, old, nationality, profession, squad, squadInitials} = worker;

console.log(`Hi, my name is ${person}, I'm ${old} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);