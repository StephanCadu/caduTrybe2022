"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const convertions = ['length', 'mass', 'capacity', 'area', 'volume'];
const chosenConvertion = readline_sync_1.default.keyInSelect(convertions, 'Choose the convertion type: ');
require(`./${convertions[chosenConvertion]}`);
