import { Request, Response, NextFunction } from 'express';
import validations from './validations/schemas';

export default (req: Request, res: Response, next: NextFunction) => {
  const { start, end } = req.query;
  const { error } = validations.priceSchema.validate({ start, end });
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};