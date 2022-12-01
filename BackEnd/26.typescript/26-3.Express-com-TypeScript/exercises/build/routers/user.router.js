"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const validateUser_1 = __importDefault(require("../middlewares/validateUser"));
const validateJWT_1 = __importDefault(require("../auth/validateJWT"));
const router = (0, express_1.Router)();
router.get('/', user_controller_1.default.getAll);
router.get('/:id', user_controller_1.default.getById);
router.post('/', validateUser_1.default, user_controller_1.default.createUser);
router.put('/:id', validateJWT_1.default, validateUser_1.default, user_controller_1.default.updateUser);
router.delete('/:id', validateJWT_1.default, user_controller_1.default.deleteUser);
exports.default = router;
