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

console.log(convert(30, 'km²', 'm²'));

export default convert;