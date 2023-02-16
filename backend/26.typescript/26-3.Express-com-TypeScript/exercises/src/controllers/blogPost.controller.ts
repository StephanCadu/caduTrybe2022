import { Request, Response } from "express";
import blogPostService from "../services/blogPost.service";

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const posts = await blogPostService.getAll();
  res.status(200).json(posts);
}

const getById = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const post = await blogPostService.getById(+id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.status(200).json(post);
}

const createPost = async (req: Request, res: Response): Promise<void> => {
  const post = req.body;
  const newPost = await blogPostService.createPost(post);
  res.status(200).json(newPost);
}

const updatePost = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const post = req.body;
  const updatedPost = await blogPostService.updatePost(+id, post);
  if (!updatedPost) return res.status(400).json({ message: 'Post not found' });
  res.status(200).json(updatedPost);
}

const deletePost = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await blogPostService.deletePost(+id);
  res.sendStatus(204);
}

const searchPost = async (req: Request, res: Response): Promise<void> => {
  const { q } = req.query;
  const postsFound = await blogPostService.searchPost(q as string);
  res.status(200).json(postsFound);
}

export default {
  getAll,
  getById,
  createPost,
  updatePost,
  deletePost,
  searchPost,
}