import { Router } from "express";
import productController from "../controllers/product.controller";

const router = Router();

router.get('/search', productController.searchProduct);

router.get('/valid', productController.getValidProducts);

router.get('/', productController.getAll);

router.get('/:id', productController.getById);

router.post('/', productController.createProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

export default router;