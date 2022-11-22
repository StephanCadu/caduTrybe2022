"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Symbols;
(function (Symbols) {
    Symbols[Symbols["km\u00B2"] = Math.pow(10, 6)] = "km\u00B2";
    Symbols[Symbols["hm\u00B2"] = Math.pow(10, 4)] = "hm\u00B2";
    Symbols[Symbols["dam\u00B2"] = Math.pow(10, 2)] = "dam\u00B2";
    Symbols[Symbols["m\u00B2"] = 1] = "m\u00B2";
    Symbols[Symbols["dm\u00B2"] = Math.pow(10, -2)] = "dm\u00B2";
    Symbols[Symbols["cm\u00B2"] = Math.pow(10, -4)] = "cm\u00B2";
    Symbols[Symbols["mm\u00B2"] = Math.pow(10, -6)] = "mm\u00B2";
})(Symbols || (Symbols = {}));
;
const convert = (value, baseUnit, convertUnit) => {
    const newValue = (value * Symbols[baseUnit]) / Symbols[convertUnit];
    return `${value}${baseUnit} equivalem a ${newValue}${convertUnit}`;
};
console.log(convert(30, 'km²', 'm²'));
exports.default = convert;
