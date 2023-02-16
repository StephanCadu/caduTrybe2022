import readline from 'readline-sync';

const convertions = ['length', 'mass', 'capacity', 'area', 'volume'];

const chosenConvertion = readline.keyInSelect(convertions, 'Choose the convertion type: ');

require(`./${convertions[chosenConvertion]}`);
