"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Symbols;
(function (Symbols) {
    Symbols[Symbols["kl"] = 1000] = "kl";
    Symbols[Symbols["hl"] = 100] = "hl";
    Symbols[Symbols["dal"] = 10] = "dal";
    Symbols[Symbols["l"] = 1] = "l";
    Symbols[Symbols["dl"] = 0.1] = "dl";
    Symbols[Symbols["cl"] = 0.01] = "cl";
    Symbols[Symbols["ml"] = 0.001] = "ml";
})(Symbols || (Symbols = {}));
;
const convert = (value, baseUnit, convertUnit) => {
    const newValue = (value * Symbols[baseUnit]) / Symbols[convertUnit];
    return `${value}${baseUnit} equivalem a ${newValue}${convertUnit}`;
};
console.log(convert(30, 'kl', 'l'));
exports.default = convert;
