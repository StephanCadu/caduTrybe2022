import Book from './database/models/Book';

(async () => {
  const books = await Book.findAll();
  console.table(books.map((book) => book.toJSON()));
  process.exit(0);
})();