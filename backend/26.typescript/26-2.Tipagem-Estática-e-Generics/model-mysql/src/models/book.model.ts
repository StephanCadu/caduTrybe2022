import connection from './connection';
// import readline from 'readline-sync';
// import { ResultSetHeader } from 'mysql2';
import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

// o tipo de retorno da função connection.execute é:
/*
  execute<
      T extends RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader
    >(
      sql: string,
      values: any | any[] | { [param: string]: any }
    ): Promise<[T, FieldPacket[]]>;
*/

// const findAll = async () => {
//   const [result] = await connection.execute('SELECT * FROM books');
//   return result;
// }

// const insert = async () => {
//   const title = readline.question('Type the book title');
//   const price = readline.questionFloat('Type the book price');
//   const author = readline.question('Type the book author');
//   const isbn = readline.question('Type the book isbn');

//   // sem ResultSetHeader o ts não compila esse código pois não há insertId no retorno padrão da função
//   const [{ insertId }] = await connection.execute<ResultSetHeader>(
//     'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
//     [title, price, author, isbn],
//   );
//   console.log(insertId);
// };

// insert();

// export default {
//   findAll,
// };

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
}

export default class BookModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    // com generics
    const [result] = await this.connection.execute<(Book & RowDataPacket)[]>('SELECT * FROM books');

    // com type assertions
    // return result as Book[];

    return result;
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;

    const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );

    return { id, ...book };
  }
}