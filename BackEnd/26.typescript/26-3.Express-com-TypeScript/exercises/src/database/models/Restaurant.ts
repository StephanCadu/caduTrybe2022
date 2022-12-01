import { Model, STRING, INTEGER, TIME } from "sequelize";
import db from '.';
import IRestaurant from "../../interfaces/restaurant.interface";

class Restaurant extends Model implements IRestaurant {
  declare id: number;
  declare name: string;
  declare category: string;
  declare openingTime: string;
  declare closingTime: string;
}

Restaurant.init({
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
  category: {
    type: STRING,
    allowNull: false,
  },
  openingTime: {
    type: TIME,
    allowNull: false,
  },
  closingTime: {
    type: TIME,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'restaurants',
  timestamps: false,
});

export default Restaurant;