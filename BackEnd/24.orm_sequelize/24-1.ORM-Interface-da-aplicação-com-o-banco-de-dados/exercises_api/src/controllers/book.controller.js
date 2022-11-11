const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
};

const create = async (req, res) => {
  const newBook = await BookService.create(req.body);
  return res.status(201).json(newBook);
};

const update = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const updatedBook = await BookService.update(id, book);
  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(updatedBook);
};

const remove = async (req, res) => {
  const { id } = req.params;
  await BookService.remove(id);
  return res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};