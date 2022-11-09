const fs = require('fs').promises;

const simpsonsFile = 'simpsons.json';
const simpsonsBackup = 'simpsons_backup.json'
const simpsonsFamilyFile = 'simpsonsFamily.json';

const readSimpsons = async () => {
  try {
    const simpsons = await fs.readFile(simpsonsFile, 'utf-8');
    const parsedSimpsons = JSON.parse(simpsons);
    parsedSimpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`))
  } catch (error) {
    console.error(error.message);
  }
}

const searchSimpsonId = async (id) => {
  try {
    const simpsons = await fs.readFile(simpsonsFile, 'utf-8');
    const parsedSimpsons = JSON.parse(simpsons);
    const chosenCharacter = parsedSimpsons.find((simp) => +simp.id === id);
    if (!chosenCharacter) throw new Error('id não encontrado');
    console.log(chosenCharacter);
  } catch (error) {
    console.error(error);
  }
}

const promiseSimpsonId = (id) => new Promise(async (resolve, reject) => {
  const simpsons = await fs.readFile(simpsonsFile, 'utf-8');
  const parsedSimpsons = JSON.parse(simpsons);
  const chosenCharacter = parsedSimpsons.find((simp) => +simp.id === id);
  if (!chosenCharacter) reject('id não encontrado');
  else {
    resolve(chosenCharacter);
  }

})

const filterSimpsons = async () => {
  try {
    const simpsons = await fs.readFile(simpsonsFile, 'utf-8');
    const parsedSimpsons = JSON.parse(simpsons);
    const filteredSimpsons = parsedSimpsons.filter(({ id }) => +id !== 10 && +id !== 6);
    await fs.writeFile(simpsonsFile, JSON.stringify(filteredSimpsons));
    console.log('Alteração concluída com sucesso!', filteredSimpsons);
  } catch (error) {
    console.error(error);
  }
}

const retrieveSimpsons = async () => {
  try {
    const originalSimpsons = await fs.readFile(simpsonsBackup, 'utf-8');
    await fs.writeFile(simpsonsFile, originalSimpsons);
  } catch (error) {
    console.error(error);
  }
}

const filterFamily = async () => {
  try {
    const originalSimpsons = await fs.readFile(simpsonsBackup, 'utf-8');
    const parsedSimpsons = JSON.parse(originalSimpsons);
    const simpsonsFamily = parsedSimpsons.filter(({ id }) => +id < 5);
    await fs.writeFile(simpsonsFamilyFile, JSON.stringify(simpsonsFamily));
    console.log(simpsonsFamily);
  } catch (error) {
    console.error(error);
  }
}

const addNelson = async () => {
  try {
    const nelson = { "id": "8", "name": "Nelson Muntz" };
    const simpsonsFamily = await fs.readFile(simpsonsFamilyFile, 'utf-8');
    const parsedSimpsons = JSON.parse(simpsonsFamily);
    const newFamily = [...parsedSimpsons, nelson];
    console.log(newFamily);
    await fs.writeFile(simpsonsFamilyFile, JSON.stringify(newFamily))
  } catch (error) {
    console.error(error);
  }
}

const changeNelsonToMaggie = async () => {
  try {
    const maggie = { "id": "5", "name": "Maggie Simpson" };
    const simpsonsFamily = await fs.readFile(simpsonsFamilyFile, 'utf-8');
    const parsedSimpsons = JSON.parse(simpsonsFamily);
    const newFamily = parsedSimpsons.map((simp) => {
      if (+simp.id === 8) return maggie;
      return simp
    });
    console.log(newFamily);
    await fs.writeFile(simpsonsFamilyFile, JSON.stringify(newFamily))
  } catch (error) {
    console.error(error);
  }
}

// readSimpsons();

// searchSimpsonId(3);

// filterSimpsons();

// retrieveSimpsons();

// filterFamily();

// addNelson();

// changeNelsonToMaggie();

promiseSimpsonId(5);
