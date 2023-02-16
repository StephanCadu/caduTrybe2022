"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Books extends sequelize_1.Model {
}
Books.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: (0, sequelize_1.STRING)(30),
        allowNull: false,
    },
    price: {
        type: (0, sequelize_1.DECIMAL)(10, 2),
        allowNull: false,
    },
    author: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
    isbn: {
        type: (0, sequelize_1.STRING)(100),
    },
}, {
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
});
exports.default = Books;
// EXEMPLO DE ASSOCIATIONS
// import OtherModel from './OtherModel'; // Nossa outra entidade
// class Example extends Model {
//   // declare <campo>: <tipo>;
// }
// Example.init({
//   // ... Campos
// }, {
//   // ... Outras configs
//   underscored: true,
//   sequelize: db,
//   // modelName: 'example',
//   timestamps: false,
// });
// /**
//   * `Workaround` para aplicar as associations em TS:
//   * Associations 1:N devem ficar em uma das instâncias de modelo
//   * */
// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });
// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });
