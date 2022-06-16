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

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dragonDamage = () => {
  return randomBetween(15, dragon.strength);
}
console.log(dragonDamage());

// Exercício 2

const warriorDamage = () => {
  return randomBetween(warrior.strength, warrior.strength * warrior.weaponDmg);
}

console.log(warriorDamage());

// Exercício 3

const mageDamage = () => {
  const mageStats = {
    damage: 0,
    mana: 0,
  }
  mageStats.damage = randomBetween(mage.intelligence, mage.intelligence * 2);
  
  if (mage.mana < 15) { 
    mageStats.damage = 'Não possui mana suficiente'
    mageStats.mana = mage.mana;
  } else {
    mageStats.mana = mage.mana - 15;
    mage.mana = mage.mana - 15;
  };
  
  return mageStats
}

console.log(mageDamage());
