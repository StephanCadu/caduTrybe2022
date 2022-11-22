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

console.log(convert(30, 'kl', 'l'));

export default convert;