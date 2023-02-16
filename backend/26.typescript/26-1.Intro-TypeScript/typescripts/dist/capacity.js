"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
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
const value = readline_sync_1.default.questionFloat('Insert value to convert: ');
const baseUnit = readline_sync_1.default.question('Insert base unit: ');
const convertUnit = readline_sync_1.default.question('Insert convert unit: ');
const exec = () => {
    const result = convert(value, baseUnit, convertUnit);
    console.log(result);
};
exec();
exports.default = exec;
