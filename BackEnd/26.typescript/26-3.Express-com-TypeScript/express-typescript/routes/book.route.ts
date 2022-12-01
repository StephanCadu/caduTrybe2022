import { Router } from "express";
import BookController from "../controllers/book.controller";

const router = Router();

const bookController = new BookController();

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

router.post('/', bookController.create);

router.put('/:id', bookController.update);

router.delete('/:id', bookController.remove);

router.patch('/:id', bookController.updateById);

export default router;