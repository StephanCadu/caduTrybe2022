"use strict";
// class Animal {
//   constructor(private birthDate: Date) { } // Repare no private
// }
// class Bird extends Animal {
//   showBirthDate() {
//     console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
//   }
// }
// it works because protected modifier allows subclasses having access to superclasses attributes and methods
// class Animal {
//   constructor(protected birthDate: Date) { } // Protected: classe filha pode ler e escrever, mas acessos externos não
// }
// class Bird extends Animal {
//   showBirthDate() {
//     console.log(this.birthDate); // Okay!
//   }
// }
