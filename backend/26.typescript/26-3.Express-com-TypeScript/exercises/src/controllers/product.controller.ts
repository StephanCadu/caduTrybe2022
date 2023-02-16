import { Request, Response } from "express";
import productService from "../services/product.service";

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const products = await productService.getAll();
  res.status(200).json(products);
}

const getById = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const product = await productService.getById(+id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
}

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = req.body;
  const newProduct = await productService.createProduct(product);
  res.status(201).json(newProduct);
}

const updateProduct = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const product = req.body;
  const updatedProduct = await productService.updateProduct(+id, product);
  if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(updatedProduct);
}

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await productService.deleteProduct(+id);
  res.sendStatus(204);
}

type dateSearch = { start: string, end: string };

const searchProduct = async (req: Request, res: Response): Promise<void> => {
  const { start, end } = req.query;
  const productsFound = await productService.searchProduct({ start, end } as dateSearch);
  res.status(200).json(productsFound);
}


const getValidProducts = async (req: Request, res: Response): Promise<void> => {
  const validProducts = await productService.getValidProducts();
  res.status(200).json(validProducts);
}


export default {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  getValidProducts
}