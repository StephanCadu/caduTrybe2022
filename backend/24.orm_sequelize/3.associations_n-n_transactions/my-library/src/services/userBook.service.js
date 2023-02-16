const { User, Book } = require('../db/models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  include: [{
    model: Book,
    as: 'books',
    through: {
      // sem essa propriedade é retornado um user em cada book
      attributes: []
    } }
  ],
});

module.exports = {
  getUsersBooksById,
};