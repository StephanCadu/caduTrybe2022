export default class Person {
  private _name: string
  private _birthDate: string

  constructor(
    name: string,
    birth: string
  ) {
    if (name.length < 3) this._name = '';
    else {
      this._name = name;
    }

    const curDate = new Date();
    const thisYear = curDate.getFullYear();
    const birthYear = +birth.split('/')[2];
    console.log(thisYear, birthYear, thisYear -  birthYear > 120);
    
    if (
      birthYear > thisYear
      || thisYear -  birthYear > 120
    ) this._birthDate = `1/1/${thisYear}`;
    else {
      this._birthDate = birth;
    }
  }

  get name() { return this._name }

  get birthDate() { return this._birthDate }

  set name(newName: string) { this._name = newName }
}

const rightPerson = new Person('Camila', '12/3/2040');
const wrongPerson = new Person('Ca', '12/3/1850');

console.log(rightPerson.birthDate);
console.log(wrongPerson.birthDate);
