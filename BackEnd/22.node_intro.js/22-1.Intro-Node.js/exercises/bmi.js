const readline = require('readline-sync');

const height = readline.questionInt('What\'s your height? ');
const weight = readline.questionFloat('What\'s your weight? ');

const heightInMeters = height / 100;

const bmiCategory = (bmi) => {
  if (bmi < 18.5) return 'Abaixo do peso'
  if (bmi < 24.9) return 'Peso normal'
  if (bmi < 29.9) return 'Acima do peso'
  if (bmi < 34.9) return 'Obesidade grau I'
  if (bmi < 39.9) return 'Obesidade grau II'
  return 'Obesidade graus III e IV'
}

const bmi = () => {
  const bmiValue = weight / (heightInMeters ** 2);
  console.log(bmiValue, bmiCategory(bmiValue));
}

bmi();
