// Exercício 1

const hired = (name) => {
  return {
    Nome: name,
    Email: `${name.toLowerCase().split(' ').join('_')}@trybe.com`
  }
}

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'),
      id2: func('Luiza Drumond'),
      id3: func('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(hired));

// Exercício 2

const check = (num, luck) => num === luck ? 'Parabéns você ganhou' : 'Tente novamente'; 

const luckyDay = (num, func) => {
  const luck = parseInt(Math.random() * 6);
  console.log(luck);
  return func(num, luck)
}
console.log(luckyDay(2, check));

// Exercício 3

const gradeCalc = (right, verify) => {
  let point = 0;
    if (right === verify) {
      point = 1;
    } else if (verify === 'N.A') {
      point = 0;
    } else {
      point = -0.5;
    }
  return point
};

const finalGrade = (right, verify, func) => {
  let result = 0;
  for(let i in right) {
    result += func(right[i], verify[i]);
  }
  return `Você marcou ${result} pontos`
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(finalGrade(rightAnswers, studentAnswers, gradeCalc));