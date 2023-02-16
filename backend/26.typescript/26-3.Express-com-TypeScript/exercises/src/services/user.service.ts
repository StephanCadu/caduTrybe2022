import UserModel from '../database/models/User';
import IUser from '../interfaces/user.inteface';
import validateUserEmail from './validations/validateUserEmail';
import { Sequelize } from 'sequelize';
import * as config from '../database/config/database';

const sequelize = new Sequelize(config);

const getAll = async (): Promise<IUser[]> => {
  const users = await UserModel.findAll();
  return users;
};

const getById = async (id: number): Promise<IUser | null> => {
  const user = await UserModel.findOne(
    { where: { id }, attributes: { exclude: ['password'] } }
  );
  return user;
}

const createUser = async (user: IUser): Promise<IUser | null> => {
  const userExists = await validateUserEmail(user.email);
  if (userExists) return null;
  const newUser = await UserModel.create({ ...user });
  return newUser;
}

const updateUser = async (id: number, user: IUser): Promise<IUser | null> => {
  const updatedUser = await sequelize.transaction(async (t) => {
    await UserModel.update(user, { where: { id }, transaction: t });

    const updated = await UserModel.findByPk(id, { transaction: t });

    return updated;
  });

  return updatedUser as IUser;
}

const deleteUser = async (id: number): Promise<void> => {
  await UserModel.destroy({ where: { id } });
} 

export default {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
}