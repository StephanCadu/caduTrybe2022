import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = process.env.JWT_SECRET || 'segredo';

export default (req: Request, res: Response, next: NextFunction): void | Response => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const user = jwt.verify(token, secret);

  if (!user) throw new Error('Expired or invalid token');

  req.body = user;
  
  next();
}