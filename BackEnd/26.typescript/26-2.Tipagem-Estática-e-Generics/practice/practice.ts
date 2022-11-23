// TYPES
type Bird = {
  specie: string,
  gender: string,
  age: number,
};

type Sum = (a: number, b: number) => number;

type Address = {
  street: string,
  city: string,
  number: number,
};

// TYPE UNIONS
const imprimeCPF = (cpf: number | string): void => console.log(`Seu CPF é: ${cpf}`);

type MatterPhysicalStates = 'liquid' | 'solid' | 'gas';

type CPF = string | number;

type OS = 'linux' | 'mac' | 'windows';

type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';

// CLASSES
class Person {
  name: string;
  birthDate: Date;
  age?: number;

  constructor(name: string, birthDate: Date, age?: number) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} está falando`);
  }

  eat(): void {
    console.log(`${this.name} está comendo`);
  }

  walk(): void {
    console.log(`${this.name} está andando`);
  }
}

const luffy = new Person('Monkey D. Luffy', new Date('1978-05-05'), 19);
const zoro = new Person('Roronoa Zoro', new Date('1976-11-11'), 21);
const jinbe = new Person('Roronoa Zoro', new Date('1943-04-02'));

console.log(luffy);
zoro.walk();
jinbe.age = 46;

interface Dog {
  name: string;
  breed: string;
  age: number;
  bestFriend?: string;
  bark(): void;
}

class Dog {
  constructor(name: string, breed: string, age: number, bestFriend?: string) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.bestFriend = bestFriend;
  }

  bark(): void {
    console.log(`${this.name} late: AUAUAUAUAUAUAUAU`)
  }
}

const caramelo = new Dog('doguinho caramelo', 'vira-lata', 13);

console.log(caramelo.bark());

interface House {
  size: number;
  owner: string;
  number: number;
}

class House {
  constructor(size: number, owner: string, number: number) {
    this.size = size;
    this.owner = owner;
    this.number = number;
  }
}

const matoca = new House(20000, 'Gutão', 547);

console.log(matoca.owner);

interface Fly {
  passengers: number;
  pilot: string;
  origin: string;
  destin: string;
  start: Date;
  plane: string;
}

class Fly {
  constructor(passengers: number, pilot: string, origin: string, destin: string, start: Date, plane: string) {
    this.passengers = passengers;
    this.pilot = pilot;
    this.origin = origin;
    this.destin = destin;
    this.start = start;
    this.plane = plane;
  }

  startFly(): void {
    console.log(`${this.plane}, commanded by ${this.pilot} has left
${this.origin} at ${this.start} with ${this.passengers} passangers traveling to ${this.destin}`);
  }
}

const voo1 = new Fly(10, 'Jacquin', 'Cortiço', 'Tangamandápio', new Date('1945-12-10'), 'Boeing 274');

console.log(voo1.startFly());
