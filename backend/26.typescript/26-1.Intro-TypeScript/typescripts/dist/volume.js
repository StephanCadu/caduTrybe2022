"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var Symbols;
(function (Symbols) {
    Symbols[Symbols["km\u00B3"] = Math.pow(10, 9)] = "km\u00B3";
    Symbols[Symbols["hm\u00B3"] = Math.pow(10, 6)] = "hm\u00B3";
    Symbols[Symbols["dam\u00B3"] = Math.pow(10, 3)] = "dam\u00B3";
    Symbols[Symbols["m\u00B3"] = 1] = "m\u00B3";
    Symbols[Symbols["dm\u00B3"] = Math.pow(10, -3)] = "dm\u00B3";
    Symbols[Symbols["cm\u00B3"] = Math.pow(10, -6)] = "cm\u00B3";
    Symbols[Symbols["mm\u00B3"] = Math.pow(10, -9)] = "mm\u00B3";
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
