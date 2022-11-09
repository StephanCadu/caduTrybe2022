// const readline = require('readline-sync');
const fs = require('fs').promises;

// const name = readline.question('Qual seu nome? ');
// const age = readline.questionInt('Qual sua idade? ');
// console.log(`Hello ${name}, you are ${age} years old.`);

const main = async () => {
  try {
    await fs.writeFile('./arquivo.txt', 'um texto alterado');
    console.log('Arquivo escrito com sucesso');
  } catch (error) {
    console.log(error.message);
  }
};

main();
