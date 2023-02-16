"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
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
const value = readline_sync_1.default.questionFloat('Insert value to convert: ');
const baseUnit = readline_sync_1.default.question('Insert base unit: ');
const convertUnit = readline_sync_1.default.question('Insert convert unit: ');
const exec = () => {
    const result = convert(value, baseUnit, convertUnit);
    console.log(result);
};
exec();
exports.default = exec;
