import { Model, STRING, INTEGER } from "sequelize";
import IProduct from "../../interfaces/product.interface";
import db from '.';

class Product extends Model implements IProduct {
  declare id?: number;
  declare name: string;
  declare brand: string;
  declare price: number;
  declare manufacturingDate: string;
  declare expirationDate: string;
}

Product.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  brand: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: INTEGER,
    allowNull: false,
  },
  manufacturingDate: {
    type: STRING,
    allowNull: false,
  },
  expirationDate: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'products',
  timestamps: false,
});

export default Product;