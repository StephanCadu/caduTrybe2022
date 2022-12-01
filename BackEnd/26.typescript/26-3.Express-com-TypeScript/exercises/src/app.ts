import express from 'express';
import 'express-async-errors';
import handleError from './middlewares/handleError';
import { userRouter } from './routers'

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(handleError);

export default app;
