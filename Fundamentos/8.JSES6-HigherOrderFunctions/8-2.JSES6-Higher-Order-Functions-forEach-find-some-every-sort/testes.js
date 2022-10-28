const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// Pra fixar forEach

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);

// Pra fixar find

// 1
const nums = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (arr) => arr.find((num) => num % 3 === 0 && num % 5 === 0);

console.log(findDivisibleBy3And5(nums));

// 2

const nomes = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => arr.find((str) => str.length === 5);

console.log(findNameWithFiveLetters(nomes));

// 3

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
const findMusic = (id) => musicas.find((el) => el.id === id);
  
console.log(findMusic('31031685'))

// Pra fixar some e every

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

// 1

const people = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((el) => el === name);

console.log(hasName(people, 'Ana'))

// 2

const somePeople = [
    { name: 'Mateus', age: 20 },
    { name: 'José', age: 18 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((el) => el.age >= minimumAge);
  
  console.log(verifyAges(somePeople, 18));

// Pra fixar sort

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => a - b);
console.log(points); 

points.sort((a, b) => b - a);
console.log(points);

// 1

const peopleArr = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
peopleArr.sort((a, b) => a.age - b.age);
  
console.log(peopleArr);

// 2

peopleArr.sort((a, b) => b.age - a.age);
  
console.log(peopleArr);
