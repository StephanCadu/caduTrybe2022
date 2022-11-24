"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('BI BIIIIIII');
    }
    turnOn() {
        console.log('Car turned on');
    }
    turnOff() {
        console.log('Car turned off');
    }
    speedUp() {
        console.log('Car speed up');
    }
    speedDown() {
        console.log('Car speed down');
    }
    stop() {
        console.log('Car stops');
    }
    turn(direction) {
        console.log(`Car turns ${direction}`);
    }
}
exports.default = Car;
