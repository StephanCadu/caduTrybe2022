"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    id: joi_1.default.number().integer().min(1),
    name: joi_1.default.string().min(3).required(),
    password: joi_1.default.string().min(6).max(12).required(),
    email: joi_1.default.string().email().required(),
});
const postSchema = joi_1.default.object({
    id: joi_1.default.number().integer().min(1),
    title: joi_1.default.string().min(3).required(),
    author: joi_1.default.string().min(3).required(),
    category: joi_1.default.string().min(3).required(),
    publicationDate: joi_1.default.date().required(),
});
exports.default = {
    userSchema,
    postSchema,
};
