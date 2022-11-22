import readline from 'readline-sync';

enum Symbols {
  kl = 1000,
  hl = 100,
  dal = 10,
  l = 1,
  dl = 0.1,
  cl = 0.01,
  ml = 0.001,
};

type measures = 'kl' | 'hl' | 'dal' | 'l' | 'dl' | 'cl' | 'ml' ;

const convert = (value: number, baseUnit: measures, convertUnit: measures): string => {
  const newValue = (value * Symbols[baseUnit]) / Symbols[convertUnit];

  return `${value}${baseUnit} equivalem a ${newValue}${convertUnit}`;
};

const value: number = readline.questionFloat('Insert value to convert: ');
const baseUnit: string = readline.question('Insert base unit: ');
const convertUnit: string = readline.question('Insert convert unit: ');

const exec = (): void => {
  const result = convert(value, baseUnit as measures, convertUnit as measures);
  console.log(result);
};

exec();

export default exec;
