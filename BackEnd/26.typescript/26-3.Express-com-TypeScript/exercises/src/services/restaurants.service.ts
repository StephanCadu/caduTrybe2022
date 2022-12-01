import RestaurantModel from '../database/models/Restaurant';
import IRestaurant from '../interfaces/restaurant.interface';
import { Sequelize, Op } from 'sequelize';
import * as config from '../database/config/database';

const sequelize = new Sequelize(config);

const getAll = async (): Promise<IRestaurant[]> => {
  const restaurants = await RestaurantModel.findAll();
  return restaurants;
}

const getById = async (id: number): Promise<IRestaurant | null> => {
  const restaurant = await RestaurantModel.findOne({ where: { id } });
  return restaurant;
}

const createRestaurant = async (restaurant: IRestaurant): Promise<IRestaurant> => {
  const newRestaurant = await RestaurantModel.create({ ...restaurant });
  return newRestaurant;
}

const updateRestaurant = async (id: number, restaurant: IRestaurant): Promise<IRestaurant | null> => {
  const updatedRestaurant = sequelize.transaction(async (t) => {
    await RestaurantModel.update(restaurant, { where: { id }, transaction: t });
    const updated = await RestaurantModel.findOne({ where: { id }, transaction: t });
    return updated;
  });
  return updatedRestaurant;
}

const deleteRestaurant = async (id: number): Promise<void> => {
  await RestaurantModel.destroy({ where: { id } });
}

const getOpenRestaurants = async (): Promise<IRestaurant[]> => {
  const openRestaurants = await RestaurantModel.findAll({
    where: {
      closingTime: { [Op.gt]: new Date().toLocaleTimeString() }
    }
  });
  return openRestaurants;
}


export default {
  getAll,
  getById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getOpenRestaurants,
}