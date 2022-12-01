"use strict";
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
const user_service_1 = __importDefault(require("../services/user.service"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET || 'segredo';
const jwtConfig = { expiresIn: '2d', alg: 'HS256' };
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.getAll();
    res.status(200).json(users);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_service_1.default.getById(+id);
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const newUser = yield user_service_1.default.createUser(user);
    if (!newUser)
        return res.status(400).json({ message: 'User already registered' });
    const token = jsonwebtoken_1.default.sign(Object.assign({}, newUser), secret, jwtConfig);
    res.status(201).json({ token });
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = yield user_service_1.default.updateUser(+id, user);
    if (!updatedUser)
        return res.status(400).json({ message: 'Something went wrong' });
    res.status(201).json(updatedUser);
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_service_1.default.deleteUser(+id);
    res.sendStatus(204);
});
exports.default = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
};
