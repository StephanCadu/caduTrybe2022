"use strict";
// inheritance example
class SuperClass {
    constructor(isSuper = true) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class SubClass extends SuperClass {
}
const myFunc = (obj) => {
    obj.sayHello();
};
const sup = new SuperClass();
const sub = new SubClass();
myFunc(sup);
myFunc(sub);
