import readline from 'readline-sync';

enum Symbols {
  'km²' = Math.pow(10, 6),
  'hm²' = Math.pow(10, 4),
  'dam²' = Math.pow(10, 2),
  'm²' = 1,
  'dm²' = Math.pow(10, -2),
  'cm²' = Math.pow(10, -4),
  'mm²' = Math.pow(10, -6),
};

type measures = 'km²' | 'hm²' | 'dam²' | 'm²' | 'dm²' | 'cm²' | 'mm²' ;

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
