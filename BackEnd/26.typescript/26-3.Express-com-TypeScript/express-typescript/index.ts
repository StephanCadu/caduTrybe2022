import express, { Request, Response, NextFunction } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';
import BookRoute from './routes/book.route';

const app = express();

app.use(express.json());

const PORT = 7000;

app.get('/', (req: Request, res: Response) => {
  res.status(statusCodes.OK).send('Express + TypeScript');
});

app.use('/books', BookRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequestError': res.status(statusCodes.BAD_REQUEST).json({ message }); break;
    case 'ValidationError': res.status(statusCodes.BAD_REQUEST).json({ message }); break;
    case 'NotFoundError': res.status(statusCodes.NOT_FOUND).json({ message }); break;
    case 'ConflictError': res.status(statusCodes.CONFLICT).json({ message }); break;
    default: console.log(err); res.sendStatus(500);
  }

  next();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
