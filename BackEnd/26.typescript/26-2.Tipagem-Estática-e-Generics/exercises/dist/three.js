"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor(flavor, slices) {
        this.flavor = flavor;
        this.slices = slices;
    }
}
const pizza1 = new Pizza('Calabresa', 8);
const pizza2 = new Pizza(['Marguerita', 'Palmito'], 6);
const pizza3 = new Pizza('Nutela', 4);
exports.default = Pizza;
