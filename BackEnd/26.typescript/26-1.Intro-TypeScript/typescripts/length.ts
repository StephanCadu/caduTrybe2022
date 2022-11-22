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

console.log(convert(3, 'km', 'm'));
console.log(convert(555, 'mm', 'km'));
console.log(convert(12, 'dam', 'cm'));
console.log(convert(70, 'dm', 'hm'));


export default convert;