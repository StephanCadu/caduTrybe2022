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