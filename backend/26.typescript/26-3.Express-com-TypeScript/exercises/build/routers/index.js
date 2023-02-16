"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogPostRouter = exports.userRouter = void 0;
const user_router_1 = __importDefault(require("./user.router"));
exports.userRouter = user_router_1.default;
const blogPost_router_1 = __importDefault(require("./blogPost.router"));
exports.blogPostRouter = blogPost_router_1.default;
