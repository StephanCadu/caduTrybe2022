import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { message, name } = err;

  switch (name) {
    case 'BadRequestError': res.status(400).json({ message }); break;
    case 'ValidationError': res.status(400).json({ message }); break;
    case 'NotFoundError': res.status(404).json({ message }); break;
    case 'ConflictError': res.status(409).json({ message }); break;
    default: console.log(err); res.sendStatus(500);
  }

  next();
}