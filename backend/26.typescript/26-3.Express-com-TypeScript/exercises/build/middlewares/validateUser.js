"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = __importDefault(require("./validations/schemas"));
exports.default = (req, res, next) => {
    const user = req.body;
    const { error } = schemas_1.default.userSchema.validate(user);
    if (error)
        return res.status(400).json({ message: error.details[0].message });
    next();
};
