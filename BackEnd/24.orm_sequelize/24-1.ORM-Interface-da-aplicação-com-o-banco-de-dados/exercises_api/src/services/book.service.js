const { Book } = require('../db/models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
};

const update = async (id, book) => {
  const [updatedBook] = await Book.update(book, { where: { id } });
  return updatedBook;
};

const remove = async (id) => {
  const bookRemoved = await Book.destroy({ where: { id } });
  return bookRemoved;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};