import Book from './database/models/Book';
import Author from './database/models/Author';
import sequelize from 'sequelize';

// (async () => {
//   const authors = await Author.findAll();
//   console.table(authors.map((author) => author.toJSON()));
//   process.exit(0);
// })();

// (async () => {
//   const books = await Book.findAll();
//   console.table(books.map((book) => book.toJSON()));
//   process.exit(0);
// })();

(async () => {
  const authorsBooks = await Author.findAll({
    // sem isso o código quebra
    raw: true,
    // incluindo books
    include: {
      model: Book,
      // para que o book não traga authors repetidos
      attributes: [],
    },
    attributes: [
      // sintaxe dos atributos é ['coluna', 'alias']
      ['name', 'author'],
      // sequelize.fn para fazer COUNT dos books
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'books'],
    ],
    // GROUP BY
    group: 'authors.name',
    // ORDER BY
    order: [
      ['books', 'DESC'],
      ['name', 'ASC'],
    ],
  });

  console.log(authorsBooks);

  process.exit(0);
})();