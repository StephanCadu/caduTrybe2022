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
const blogPost_service_1 = __importDefault(require("../services/blogPost.service"));
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield blogPost_service_1.default.getAll();
    res.status(200).json(posts);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield blogPost_service_1.default.getById(+id);
    if (!post)
        return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
});
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    const newPost = yield blogPost_service_1.default.createPost(post);
    res.status(200).json(newPost);
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = req.body;
    const updatedPost = yield blogPost_service_1.default.updatePost(+id, post);
    if (!updatedPost)
        return res.status(400).json({ message: 'Post not found' });
    res.status(200).json(updatedPost);
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield blogPost_service_1.default.deletePost(+id);
    res.sendStatus(204);
});
const searchPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q } = req.query;
    const postsFound = yield blogPost_service_1.default.searchPost(q);
    res.status(200).json(postsFound);
});
exports.default = {
    getAll,
    getById,
    createPost,
    updatePost,
    deletePost,
    searchPost,
};
