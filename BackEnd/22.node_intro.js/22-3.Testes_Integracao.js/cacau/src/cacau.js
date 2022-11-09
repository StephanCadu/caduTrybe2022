const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauFile = async () => {
  try {
    const content = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(error);
  }
}

const changeCacauFile = async (chocolate) => {
  try {
    const contentJson = await fs.readFile(join(__dirname, path), 'utf-8');
    const content = JSON.parse(contentJson)
    const chocolateChange = content.chocolates.find((choc) => choc.id === chocolate.id);
    if (!chocolateChange) return chocolateChange;
    const newContent = content.chocolates.map((choco) => {
      if(choco.id === chocolate.id) return chocolate;
      return choco;
    });
    await fs.writeFile(join(__dirname, path), JSON.stringify({ ...content, chocolates: newContent }, null, 2));
    return chocolate;
  } catch (error) {
    console.error(error);
  }
}

const getChocolates = async () => {
  const cacau = await readCacauFile();
  return cacau.chocolates;
}

const getChocolateById = async (id) => {
  const cacau = await readCacauFile();
  const chocolate = cacau.chocolates.find((choc) => choc.id === id);
  return chocolate;
}

const getChocolatesByBrand = async (brand) => {
  const cacau = await readCacauFile();
  const chocolates = cacau.chocolates.filter((choc) => choc.brandId === brand);
  return chocolates;
}

const getChocolatesTotal = async () => {
  const cacau = await readCacauFile();
  const total = cacau.chocolates.length;
  return total;
}

const getChocolatesByName = async (name) => {
  const cacau = await readCacauFile();
  const chocolates = cacau.chocolates.filter((choc) => choc.name.includes(name));
  return chocolates;
}

const putChocolate = async (chocolate) => {
  const cacau = await changeCacauFile(chocolate);
  return cacau;
}

module.exports = {
  getChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesTotal,
  getChocolatesByName,
  putChocolate,
};
