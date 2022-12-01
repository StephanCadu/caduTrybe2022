"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogPost_controller_1 = __importDefault(require("../controllers/blogPost.controller"));
const validatePost_1 = __importDefault(require("../middlewares/validatePost"));
const router = (0, express_1.Router)();
router.get('/search', blogPost_controller_1.default.searchPost);
router.get('/', blogPost_controller_1.default.getAll);
router.get('/:id', blogPost_controller_1.default.getById);
router.post('/', validatePost_1.default, blogPost_controller_1.default.createPost);
router.put('/:id', validatePost_1.default, blogPost_controller_1.default.updatePost);
router.delete('/:id', blogPost_controller_1.default.deletePost);
exports.default = router;
