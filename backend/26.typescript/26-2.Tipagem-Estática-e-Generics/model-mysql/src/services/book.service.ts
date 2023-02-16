import BookModel, { Book } from '../models/book.model';
import readline from 'readline-sync';

const getBooks = async () => {
  const bookModel = new BookModel();
  const books = await bookModel.getAll();
  console.log(books);
  return books;
};

getBooks();

const insertBook = async () => {
  const bookModel = new BookModel();

  const title = readline.question('Digite o título do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const newBook: Book = { title , price , author , isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook)
};

insertBook();

export default {
  getBooks,
};