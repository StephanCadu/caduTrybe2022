"use strict";
// class Animal {
//   constructor(protected birthDate: Date) { }
// }
// class Bird extends Animal {
//   constructor(public name: string) { } // ERRO: constructor deve respeitar o contrato da superclasse
// }
// it works because Bird uses super() to apply the superclass birthDate attribute
class Animal {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
class Bird extends Animal {
    constructor(name) {
        super(new Date());
        this.name = name;
    }
}
