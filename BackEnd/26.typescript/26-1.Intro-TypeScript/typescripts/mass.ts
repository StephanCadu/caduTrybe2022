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

console.log(convert(30, 'kg', 'g'));

export default convert;