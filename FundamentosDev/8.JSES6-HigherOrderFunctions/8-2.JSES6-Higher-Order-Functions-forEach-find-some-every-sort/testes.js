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
