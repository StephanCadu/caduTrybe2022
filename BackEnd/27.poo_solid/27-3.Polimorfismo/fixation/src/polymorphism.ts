abstract class Character {
  abstract talk(): void
  abstract specialMove(): void
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('this character say: hi!');
  }

  specialMove(): void {
    console.log('this character punches you in the face');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('this character say: shhhh!');
  }

  specialMove(): void {
    console.log('this character throw a spell on you');
  }
}

const characterInteract = (char: Character): void => {
  char.talk();
  char.specialMove();
}

const axe = new MeleeCharacter();
const invoker = new LongRangeCharacter();

characterInteract(axe);
characterInteract(invoker);

// using interfaces and generics
interface ICharacter {
  name: string;
  specialMove: string;
}

interface DbCharacter extends ICharacter {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(char: ICharacter): DbCharacter
  findAll(): DbCharacter[]
  findById(id: number): DbCharacter
  update(id: number, char: ICharacter): DbCharacter
  delete(id: number): boolean
}

class LocalDbModel implements IModel {
  create(char: ICharacter): DbCharacter {
    const newChar = { ...char, id: db.length }
    db.push(newChar);
    return newChar
  }

  findAll(): DbCharacter[] {
    return db;
  }

  findById(id: number): DbCharacter {
    const found = db.find((cha) => cha.id === id);
    return found !== undefined ? found : { name: '', id: 0, specialMove: '' }
  }

  update(id: number, char: DbCharacter): DbCharacter {
    const found = db.find((elm) => elm.id === id);
    if (found) {
      const index = db.indexOf(found);
      db[index] = char;
      return char;
    }
    return char;
  }

  delete(id: number): boolean {
    const found = db.find((elm) => elm.id === id);
    if (found) {
      const index = db.indexOf(found);
      db.splice(index, 1)
      return true;
    }
    return false
  }
}

class CharacterService {
  constructor(public db: IModel = new LocalDbModel()) {}
}

const naruto = { name: 'Naruto', id: 33, specialMove: 'Rasengan' }
const sasuke = { name: 'Sasuke', id: 32, specialMove: 'Chidori' }

class MockedDbModel implements IModel {
  create(char: ICharacter): DbCharacter { return sasuke }

  findAll(): DbCharacter[] { return [sasuke, naruto] }

  findById(id: number): DbCharacter { return naruto }

  update(id: number, char: DbCharacter): DbCharacter { return naruto }

  delete(id: number): boolean { return true }
}

const test1 = new CharacterService(new LocalDbModel());
const test2 = new CharacterService(new MockedDbModel());