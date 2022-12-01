import { Router } from "express";
import blogPostController from "../controllers/blogPost.controller";
import validatePost from "../middlewares/validatePost";

const router = Router();

router.get('/search', blogPostController.searchPost);

router.get('/', blogPostController.getAll);

router.get('/:id', blogPostController.getById);

router.post('/', validatePost, blogPostController.createPost);

router.put('/:id', validatePost, blogPostController.updatePost);

router.delete('/:id', blogPostController.deletePost);

export default router;