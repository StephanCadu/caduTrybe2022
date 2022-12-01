import { Router } from "express";
import restaurantController from "../controllers/restaurant.controller";
import validateRestaurant from "../middlewares/validateRestaurant";

const router = Router();

router.get('/open', restaurantController.getOpenRestaurants);

router.get('/', restaurantController.getAll);

router.get('/:id', restaurantController.getById);

router.post('/', validateRestaurant, restaurantController.createRestaurant);

router.put('/:id', validateRestaurant, restaurantController.updateRestaurant);

router.delete('/:id', restaurantController.deleteRestaurant);

export default router;