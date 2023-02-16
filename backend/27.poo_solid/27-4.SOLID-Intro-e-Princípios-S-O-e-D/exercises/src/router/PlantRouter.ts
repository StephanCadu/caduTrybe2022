import { Router, Request, Response, NextFunction } from 'express';
import PlantController from '../controllers/PlantController';
// import PlantModel from '../models/PlantModel';
import Mysql2PlantModel from '../models/Mysql2PlantModel';
import PlantService from '../services/PlantService';

const plantModel = new Mysql2PlantModel();
const plantService = new PlantService(plantModel);
const plantController = new PlantController(plantService);

const plantRouter = Router();

plantRouter.get('/', (req: Request, res: Response, next: NextFunction) => plantController.getAll(req, res, next));
plantRouter.post('/', (req: Request, res: Response, next: NextFunction) => plantController.create(req, res, next));
plantRouter.get('/:id', (req, res, next) => plantController.getById(req, res, next));
plantRouter.delete('/:id', (req, res, next) => plantController.remove(req, res, next));
plantRouter.put('/:id', (req, res, next) => plantController.update(req, res, next));

export default plantRouter;