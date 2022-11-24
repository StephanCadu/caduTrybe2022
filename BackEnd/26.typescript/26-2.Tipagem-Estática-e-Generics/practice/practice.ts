// TYPES
type Bird = {
  specie: string,
  gender: string,
  age: number,
};

type Sum = (a: number, b: number) => number;

// type Address = {
//   street: string,
//   city: string,
//   number: number,
// };

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

// INTERFACES
interface Auto {
  wheels: number;
  model: string;
  releaseYear: Date;
  color: string;
  type: string;
  turnOn(): void;
  turnOff: () => void;
  speedUp(): void;
  speedDown: () => void;
}

interface Feline {
  specie: string;
  domestic: boolean;
  color: string;
  gender: string;
  wheight: number;
  hunt: () => void;
  eat: () => void;
  purr: () => void;
  meow: () => void;
}

interface Airplane {
  turbines: number;
  model: string;
  size: number;
  releaseYear: Date;
  capacity: number;
  fly(): void;
}

// TYPE ASSERTIONS
type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
function stringToJson(str: string): unknown {
  const result = JSON.parse(str);
  return result;
}

// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;

// const str: unknown = 'texto'; // simulando um valor supostamente desconhecido

// str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
// (str as string).split('') // Corrigindo o erro acima usando o 'as'

// const num: string = '2';

// num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
// (num as unknown) as number // Corrigindo o erro acima convertendo primeiramente para unknown

// GENERICS
const newStringToJson = <T>(str: string): T => {
  const result = JSON.parse(str);
  return result;
}

const newUser = newStringToJson<User>(
  '{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}'
);

const newAddress = newStringToJson<Address>(
  '{"street":"Rua Tamarindo","number":1}'
);

console.log(newUser.name, newAddress.number);

const stringToJsonWithId = <T, U>(str: string, id: U): T & { id: U } => {
  const result = JSON.parse(str);
  result.id = id;
  return result;
}

const userWithId = stringToJsonWithId<User, number>(
  '{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}',
  Date.now(),
);

const addressWithId = stringToJsonWithId<Address, string>(
  '{"street":"Rua Tamarindo","number":1}',
  '#01',
);

console.log(userWithId.id, addressWithId.id);

function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação