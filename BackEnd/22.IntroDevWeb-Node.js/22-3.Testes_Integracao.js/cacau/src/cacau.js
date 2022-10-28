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

module.exports = { getChocolates };
