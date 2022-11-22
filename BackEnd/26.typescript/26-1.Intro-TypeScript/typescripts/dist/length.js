"use strict";
// type Symbols = {
//   km: number,
//   hm: number,
//   dam: number,
//   m: number,
//   dm: number,
//   cm: number,
//   mm: number,
// };
var Symbols;
(function (Symbols) {
    Symbols[Symbols["km"] = 1000] = "km";
    Symbols[Symbols["hm"] = 100] = "hm";
    Symbols[Symbols["dam"] = 10] = "dam";
    Symbols[Symbols["m"] = 1] = "m";
    Symbols[Symbols["dm"] = 0.1] = "dm";
    Symbols[Symbols["cm"] = 0.01] = "cm";
    Symbols[Symbols["mm"] = 0.001] = "mm";
})(Symbols || (Symbols = {}));
;
const convert = (value, baseUnit, convertUnit) => {
    const newValue = (value * Symbols[baseUnit]) / Symbols[convertUnit];
    return `${value}${baseUnit} equivalem a ${newValue}${convertUnit}`;
};
console.log(convert(3, 'km', 'm'));
console.log(convert(555, 'mm', 'km'));
console.log(convert(12, 'dam', 'cm'));
console.log(convert(70, 'dm', 'hm'));
