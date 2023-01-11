// class Animal {
//   constructor(protected birthDate: Date) { }
// }

// class Bird extends Animal {
//   constructor(public name: string) { } // ERRO: constructor deve respeitar o contrato da superclasse
// }

// it works because Bird uses super() to apply the superclass birthDate attribute
// class Animal {
//   constructor(protected birthDate: Date) { }
// }

// class Bird extends Animal {
//   constructor(public name: string) {
//     super(new Date());
//   }
// }