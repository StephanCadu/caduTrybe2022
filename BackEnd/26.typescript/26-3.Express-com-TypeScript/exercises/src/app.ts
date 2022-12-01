import express from 'express';
import 'express-async-errors';
import handleError from './middlewares/handleError';
import { userRouter, blogPostRouter } from './routers'

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use('/posts', blogPostRouter);

app.use(handleError);

export default app;
