"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const handleError_1 = __importDefault(require("./middlewares/handleError"));
const routers_1 = require("./routers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/users', routers_1.userRouter);
app.use(handleError_1.default);
exports.default = app;
