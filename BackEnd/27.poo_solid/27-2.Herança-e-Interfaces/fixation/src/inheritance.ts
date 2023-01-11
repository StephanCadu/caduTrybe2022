// inheritance example

// class SuperClass {
//   constructor(public isSuper: boolean = true) {}

//   // protected example
//   protected sayHello() {
//     console.log('Olá mundo!');
//   }
// }

// class SubClass extends SuperClass {
//   public sayHello2() {
//     this.sayHello();
//   }
// }

// const myFunc = (obj: SubClass) => {
//   obj.sayHello2()
// }

// // const sup = new SuperClass();
// const sub = new SubClass();

// // myFunc(sup);
// myFunc(sub);

class SuperClass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super(false)
  }
}

const myFunc = (obj: SuperClass) => {
  obj.sayHello()
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
  
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);