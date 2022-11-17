const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/db/models/book.model');

describe('Testando o BookModel', function () {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('O nome do model é Book', () => {
    checkModelName(Book)('Book');
  });

  describe('Possui todas as propriedades', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});