"use strict";
class Bird {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    getBirthDate() { return this.birthDate; }
    fly() { console.log(`${this.name} está voando!`); }
}
const parrot = new Bird('Papagaio', new Date(Date.parse('Aug 16, 2015')));
console.log(parrot.age);
parrot.fly();
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(param) {
        return `your result is ${this.myNumber + param}`;
    }
}
const myClass = new MyClass(2);
console.log(myClass.myFunc(3));
