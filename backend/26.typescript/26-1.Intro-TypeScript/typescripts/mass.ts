import readline from 'readline-sync';

enum Symbols {
  kg = 1000,
  hg = 100,
  dag = 10,
  g = 1,
  dg = 0.1,
  cg = 0.01,
  mg = 0.001,
};

type measures = 'kg' | 'hg' | 'dag' | 'g' | 'dg' | 'cg' | 'mg' ;

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
