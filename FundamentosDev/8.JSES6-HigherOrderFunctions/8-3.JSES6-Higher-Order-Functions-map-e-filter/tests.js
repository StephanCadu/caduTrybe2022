// filter

// fixando a diferença entre find e filter
const numbers = [19, 21, 30, 3, 45, 22, 15];

const evensFind = (arr) => arr.find((num) => num % 2 === 0);
const evensFilter = (arr) => arr.filter((num) => num % 2 === 0);

console.log(evensFind(numbers));
console.log(evensFilter(numbers));

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

const cantDrive = (arr) => arr.filter((el) => el.age < 18);

console.log(cantDrive(objPeople));

// map

// criando nomes completos
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames);

// transformando números positivos em negativos
const nums = [1, 2, 3, 4, -5];

const negativeNums = nums.map((num) => num > 0 ? num * -1 : num);

console.log(negativeNums);

// criando objeto a partir de dois arrays
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (prod, pric) => prod.map((element, index) => ({ [element]: pric[index] }));


console.log(listProducts(products, prices));

// array para os ex
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

// nome completo estudantes da manhã
const morningStudentsFullname = estudantes.filter((stud) => stud.turno === 'Manhã').map((aluno) => `${aluno.nome} ${aluno.sobrenome}`);

console.log(morningStudentsFullname);

// buscar um estudante pelo nome e retornar a situação dele em cada matéria
const studentSituation = (nome, arr) => arr.find((stud) => stud.nome === nome).materias.map((subject) => `${subject.name}: ${subject.nota >= 60 ? 'Aprovado' : 'Reprovado'}`);

console.log(studentSituation('Jorge', estudantes));