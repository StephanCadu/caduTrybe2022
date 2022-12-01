import validations from './validations/schemas';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const post = req.body;
  const { error } = validations.postSchema.validate(post);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};