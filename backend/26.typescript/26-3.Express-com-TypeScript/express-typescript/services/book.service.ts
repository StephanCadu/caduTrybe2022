import connection from "../models/connection";
import BookModel from "../models/book.model";
import Book from '../interfaces/book.interface';
import { BadRequestError, NotFoundError } from 'restify-errors';

const bookProps = ['title', 'price', 'author', 'isbn'];

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  static validateProps(book: Book): [boolean, string | null] {
    for (let i = 0; i < bookProps.length; i += 1) {
      if (!book.hasOwnProperty(bookProps[i])) return [false, bookProps[i]];
    }
    return [true, null];
  }

  static validateValues(book: Book): [boolean, string | null] {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
      const [prop, value] = bookProps[i];
      if (!value) return [false, prop];
    }
    return [true, null];
  }

  static validateBook(book: Book): void | string {
    let [valid, prop] = this.validateProps(book);

    if (!valid) return `O campo ${prop} é obrigatório`;

    [valid, prop] = this.validateValues(book);

    if (!valid) return `O campo ${prop} não pode ser nulo ou vazio`;
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public async create(book: Book): Promise<Book> {
    const isValid = BookService.validateBook(book);

    if (typeof isValid === 'string') throw new BadRequestError(isValid);

    const newBook = await this.model.create(book);
    return newBook;
  }

  public  async update(id: number, book: Book): Promise<void> {
    const isValid = BookService.validateBook(book);

    if (typeof isValid === 'string') throw new BadRequestError(isValid);

    const bookFound = await this.model.getById(id);

    if (!bookFound) throw new NotFoundError('Book not found');

    const updatedBook = await this.model.update(id, book);
    return updatedBook;
  }

  public async remove(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);

    if (!bookFound) throw new NotFoundError('Book not found');

    await this.model.remove(id);
  }

  public async updateById(id: number, book: Partial<Book>): Promise<void> {
    const isValid = bookProps.some((prop) => prop in book);

    if (isValid) throw new BadRequestError('Inexistent property');

    const bookFound = await this.model.getById(id);

    if (!bookFound) throw new NotFoundError('Book not found');

    const updatedBook = await this.model.update(id, { ...bookFound, ...book });
    return updatedBook;
  }
};

export default BookService