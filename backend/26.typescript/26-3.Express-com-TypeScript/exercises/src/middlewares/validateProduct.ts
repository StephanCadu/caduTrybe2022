import validations from './validations/schemas';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const { error } = validations.postSchema.validate(product);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { manufacturingDate, expirationDate } = product;
  if (manufacturingDate === expirationDate) {
    return res.status(400)
      .json({ message: 'manufacturingDate and expirationDate must be different' })
  }
  next();
};