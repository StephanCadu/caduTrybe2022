// Parte I

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

// Exercício 1

const randomBetween = (min, max) => Math.round(Math.random() * (max - min)) + min;

const dragonDamage = () => randomBetween(15, dragon.strength);

// console.log(dragonDamage());

// Exercício 2

const warriorDamage = () => randomBetween(warrior.strength, warrior.strength * warrior.weaponDmg);
// console.log(warriorDamage());

// Exercício 3

const mageDamage = () => {
  const mageStats = {
    damage: 0,
    mana: 0,
  }
  mageStats.damage = randomBetween(mage.intelligence, mage.intelligence * 2);
  
  if (mage.mana < 15) { 
    mageStats.damage = 'Not enough mana...'
    mageStats.mana = mage.mana;
  } else {
    mageStats.mana = mage.mana - 15;
    mage.mana = mage.mana - 15;
  };
  
  return mageStats.damage
}
// console.log(mageDamage());

// Parte II

// Exercício 1

const warriorAtk = (func) => {
  warrior.damage = func();
  dragon.healthPoints -= warrior.damage;
  return `Warrior attacks Dragon with ${warrior.damage}DP`
}

// Exercício 2

const mageAtk = (func) => {
  mage.damage = func();
  dragon.healthPoints -= mage.damage;
  return `Mage attacks Dragon with ${mage.damage}DP`
}

// Exercício 3

const dragonAtk = (func) => {
  dragon.damage = func();
  warrior.healthPoints -= dragon.damage;
  mage.healthPoints -= dragon.damage;
  return `Dragon attacks Warrior and Mage with ${dragon.damage}DP each`
}

// Exercício 4

const turnStats = (obj) => obj;

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: warriorAtk(warriorDamage),
  mageTurn: mageAtk(mageDamage),
  dragonTurn: dragonAtk(dragonDamage),
  turnResult: turnStats(battleMembers), 
};
console.log(gameActions);


