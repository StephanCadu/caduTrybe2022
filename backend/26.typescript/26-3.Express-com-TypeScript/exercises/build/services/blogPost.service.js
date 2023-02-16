"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlogPost_1 = __importDefault(require("../database/models/BlogPost"));
const sequelize_1 = require("sequelize");
const config = __importStar(require("../database/config/database"));
const sequelize = new sequelize_1.Sequelize(config);
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield BlogPost_1.default.findAll();
    return posts;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield BlogPost_1.default.findOne({ where: { id } });
    return post;
});
const createPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = yield BlogPost_1.default.create(Object.assign({}, post));
    return newPost;
});
const updatePost = (id, post) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPost = yield sequelize.transaction((t) => __awaiter(void 0, void 0, void 0, function* () {
        yield BlogPost_1.default.update(post, { where: { id }, transaction: t });
        const updated = yield BlogPost_1.default.findOne({ where: { id }, transaction: t });
        return updated;
    }));
    return updatedPost;
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield BlogPost_1.default.destroy({ where: { id } });
});
const searchPost = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const postsFound = yield BlogPost_1.default.findAll({
        where: {
            [sequelize_1.Op.or]: [
                { author: search },
                { category: search },
                { publicationDate: search }
            ]
        }
    });
    return postsFound;
});
exports.default = {
    getAll,
    getById,
    createPost,
    updatePost,
    deletePost,
    searchPost,
};
