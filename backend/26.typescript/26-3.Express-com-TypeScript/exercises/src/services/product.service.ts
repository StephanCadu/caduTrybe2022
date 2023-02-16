import ProductModel from '../database/models/Product';
import IProduct from '../interfaces/product.interface';
import { Sequelize, Op } from 'sequelize';
import * as config from '../database/config/database';

const sequelize = new Sequelize(config);

const getAll = async (): Promise<IProduct[]> => {
  const products = await ProductModel.findAll();
  return products;
};

const getById = async (id: number): Promise<IProduct | null> => {
  const product = await ProductModel.findOne({ where: { id } });
  return product;
};

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await ProductModel.create({ ...product });
  return newProduct
};

const updateProduct = async (id: number, product: IProduct): Promise<IProduct | null> => {
  const updatedProduct = await sequelize.transaction(async (t) => {
    await ProductModel.update(product, { where: { id }, transaction: t });
    const updated = await ProductModel.findOne({ where: { id }, transaction: t });
    return updated;  
  });
  return updatedProduct;
};

const deleteProduct = async (id: number): Promise<void> => {
  await ProductModel.destroy({ where: { id } });
};

type dateSearch = { start: string, end: string };

const searchProduct = async ({ start, end }: dateSearch): Promise<IProduct[]> => {
  const productsFound = await ProductModel.findAll({
    where: {
      [Op.and]: [
        // gt = greather than (gte = greather than or equal to)
        { price: { [Op.gte]: start } },
        // lt = lower than (lte = lower than or equal to) 
        { price: { [Op.lte]: end } },
      ]
    }
  });
  return productsFound;
};

const getValidProducts = async (): Promise<IProduct[]> => {
  const productsFound = await ProductModel.findAll({
    where: {
      expirationDate: { [Op.gt]: new Date() }
    }
  });
  return productsFound;
};

export default {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  getValidProducts
}