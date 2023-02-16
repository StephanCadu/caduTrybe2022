import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUser from '../middlewares/validateUser';
import validateJWT from '../auth/validateJWT';

const router = Router();

router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.post('/', validateUser, userController.createUser);

router.put('/:id', validateJWT, validateUser, userController.updateUser);

router.delete('/:id', validateJWT, userController.deleteUser);

export default router;