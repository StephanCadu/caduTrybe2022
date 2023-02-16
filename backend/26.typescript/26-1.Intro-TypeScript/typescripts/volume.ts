import readline from 'readline-sync';

enum Symbols {
  'km³' = Math.pow(10, 9),
  'hm³' = Math.pow(10, 6),
  'dam³' = Math.pow(10, 3),
  'm³' = 1,
  'dm³' = Math.pow(10, -3),
  'cm³' = Math.pow(10, -6),
  'mm³' = Math.pow(10, -9),
};

type measures = 'km³' | 'hm³' | 'dam³' | 'm³' | 'dm³' | 'cm³' | 'mm³' ;

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
