"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Symbols;
(function (Symbols) {
    Symbols[Symbols["kg"] = 1000] = "kg";
    Symbols[Symbols["hg"] = 100] = "hg";
    Symbols[Symbols["dag"] = 10] = "dag";
    Symbols[Symbols["g"] = 1] = "g";
    Symbols[Symbols["dg"] = 0.1] = "dg";
    Symbols[Symbols["cg"] = 0.01] = "cg";
    Symbols[Symbols["mg"] = 0.001] = "mg";
})(Symbols || (Symbols = {}));
;
const convert = (value, baseUnit, convertUnit) => {
    const newValue = (value * Symbols[baseUnit]) / Symbols[convertUnit];
    return `${value}${baseUnit} equivalem a ${newValue}${convertUnit}`;
};
console.log(convert(30, 'kg', 'g'));
exports.default = convert;
