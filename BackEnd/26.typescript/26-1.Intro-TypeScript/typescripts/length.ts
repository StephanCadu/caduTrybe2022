import readline from 'readline-sync';

enum Symbols {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
};

type measures = "km" | "hm" | "dam" | "m" | "dm" | "cm" | "mm";

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

export default { convert };
