import { Request, Response } from 'express';
import userService from '../services/user.service';
import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'segredo';
const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' }

const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getAll();
  res.status(200).json(users);
};

const getById = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const user = await userService.getById(+id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
};

const createUser = async (req: Request, res: Response): Promise<Response | void> => {
  const user = req.body;
  const newUser = await userService.createUser(user);  
  if (!newUser) return res.status(400).json({ message: 'User already registered' });
  const token = jwt.sign({ ...newUser }, secret, jwtConfig as SignOptions);
  res.status(201).json({ token });
}

const updateUser = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const user = req.body;
  const updatedUser = await userService.updateUser(+id, user);
  if (!updatedUser) return res.status(400).json({ message: 'Something went wrong' });
  res.status(201).json(updatedUser);
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await userService.deleteUser(+id);
  res.sendStatus(204);
}

export default {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
}