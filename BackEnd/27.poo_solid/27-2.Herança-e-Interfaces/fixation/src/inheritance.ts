// inheritance example

class SuperClass {
  constructor(public isSuper: boolean = true) {}

  sayHello() {
    console.log('Olá mundo!');
  }
}

class SubClass extends SuperClass {

}

const myFunc = (obj: SuperClass) => {
  obj.sayHello()
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);