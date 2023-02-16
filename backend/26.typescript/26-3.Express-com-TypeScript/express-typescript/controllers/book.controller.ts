import { Request, Response } from "express";
import statusCodes from "../statusCodes";
import BookService from "../services/book.service";

class BookController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await this.bookService.getById(+id);

    if (!book) return res.status(statusCodes.NOT_FOUND).json({ message: 'Book not found' });

    res.status(statusCodes.OK).json(book);
  }

  public create = async (req: Request, res: Response) => {
    const book = req.body;
    const newBook = await this.bookService.create(book);
    res.status(statusCodes.OK).json(newBook);
  }

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = req.body;
    await this.bookService.update(+id, book);
    res.sendStatus(statusCodes.NO_CONTENT);
  }

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.bookService.remove(+id);
    res.sendStatus(statusCodes.NO_CONTENT);
  }

  public updateById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = req.body;

    await this.bookService.updateById(+id, book);
    res.sendStatus(statusCodes.NO_CONTENT);
  }
};

export default BookController;