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

console.log(convert(30, 'km³', 'm³'));

export default convert;