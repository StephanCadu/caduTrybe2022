const BookModel = (Sequelize, DataTypes) => {
  const Book = Sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, { underscored: true });
  return Book;
};

module.exports = BookModel;