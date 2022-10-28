const fs = require('fs').promises;
const { join } = require('path');

const readCacauFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const content = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(error);
  }
};

const getChocolates = async () => {
  const cacau = await readCacauFile();
  return cacau.chocolates;
};

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

module.exports = {
  getChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesTotal,
  getChocolatesByName,
};
