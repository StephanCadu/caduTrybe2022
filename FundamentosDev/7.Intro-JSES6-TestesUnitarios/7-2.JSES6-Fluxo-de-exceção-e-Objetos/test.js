const verify = (num1, num2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
}

const sum = (value1, value2) => {
  try {
    verify(value1, value2);
    return value1 + value2;
  } catch (error) {
      return error.message;
  }
};
  
console.log(sum(2, '3'));

const obj = {
  name: 'cadu',
  age: 22,
  favortiteTrick: 'hardflip',
};

function createNewKey(object, key, prop) {
  object[key] = prop
  return object;
}

console.log(createNewKey(obj, 'crush', 'bruninha'));

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

const exibit = (obj) => {
  for (let i in obj) {
    console.log(`${i}, Nível: ${obj[i]}`);
  }    
}
exibit(student1);
exibit(student2);

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  

// console.log(Object.keys(coolestTvShow));
console.log(Object.values(coolestTvShow));
console.log(Object.entries(coolestTvShow));


const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };