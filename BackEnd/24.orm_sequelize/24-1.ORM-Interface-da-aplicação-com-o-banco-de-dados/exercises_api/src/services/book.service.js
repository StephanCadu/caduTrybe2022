const { Book } = require('../db/models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

module.exports = {
  getAll,
};