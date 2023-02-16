import validations from './validations/schemas';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
  const user = req.body;
  const { error } = validations.userSchema.validate(user);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}