"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class BlogPost extends sequelize_1.Model {
}
BlogPost.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    author: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    publicationDate: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    tableName: 'posts',
    // modelName: 'blogPosts',
    timestamps: false,
    // underscored: true,
});
exports.default = BlogPost;
