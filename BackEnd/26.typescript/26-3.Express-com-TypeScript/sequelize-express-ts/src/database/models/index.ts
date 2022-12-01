import { Sequelize } from "sequelize";
import * as config from '../config/database';

export default new Sequelize(config);

// Lembrar que migrations e seeds são em JS e models são em classes com TS