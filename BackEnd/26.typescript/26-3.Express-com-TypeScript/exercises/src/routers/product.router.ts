import { Router } from "express";
import productController from "../controllers/product.controller";
import validateProduct from "../middlewares/validateProduct";
import validatePrice from "../middlewares/validatePrice";

const router = Router();

router.get('/search', validatePrice, productController.searchProduct);

router.get('/valid', productController.getValidProducts);

router.get('/', productController.getAll);

router.get('/:id', productController.getById);

router.post('/', validateProduct, productController.createProduct);

router.put('/:id', validateProduct, productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

export default router;