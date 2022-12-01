import { Request, Response } from "express";
import restaurantsService from "../services/restaurants.service";

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const restaurants = await restaurantsService.getAll();
  res.status(200).json(restaurants);
}

const getById = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const restaurant = await restaurantsService.getById(+id);
  if (!restaurant) return res.status(400).json({ message: 'Restaurant not found' });
  res.status(200).json(restaurant);
}

const createRestaurant = async (req: Request, res: Response): Promise<void> => {
  const restaurant = req.body;
  const newRestaurant = await restaurantsService.createRestaurant(restaurant);
  res.status(200).json(newRestaurant);
}

const updateRestaurant = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const restaurant = req.body;
  const updatedRestaurant = await restaurantsService.updateRestaurant(+id, restaurant);
  if (!updatedRestaurant) return res.status(404).json({ message: 'Restaurant not found' });
  res.status(200).json(updatedRestaurant);
}

const deleteRestaurant = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await restaurantsService.deleteRestaurant(+id);
  res.sendStatus(204);
}

const getOpenRestaurants = async (req: Request, res: Response): Promise<void> => {
  const openRestaurants = await restaurantsService.getOpenRestaurants();
  res.status(200).json(openRestaurants);
}


export default {
  getAll,
  getById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getOpenRestaurants,
}