import BlogPostModel from '../database/models/BlogPost';
import IBlogPost from '../interfaces/blogPost.interface';
import { Sequelize, Op } from 'sequelize';
import * as config from '../database/config/database';

const sequelize = new Sequelize(config);

const getAll = async (): Promise<IBlogPost[]> => {
  const posts = await BlogPostModel.findAll();
  return posts;
}

const getById = async (id: number): Promise<IBlogPost | null> => {
  const post = await BlogPostModel.findOne({ where: { id } });
  return post;
}

const createPost = async (post: IBlogPost): Promise<IBlogPost> => {
  const newPost = await BlogPostModel.create({ ...post });
  return newPost;
}

const updatePost = async (id: number, post: IBlogPost): Promise<IBlogPost | null> => {
  const updatedPost = await sequelize.transaction(async (t) => {
    await BlogPostModel.update(post, { where: { id }, transaction: t });
    const updated = await BlogPostModel.findOne({ where: { id }, transaction: t });
    return updated;
  });
  return updatedPost;
}

const deletePost = async (id: number): Promise<void> => {
  await BlogPostModel.destroy({ where: { id } });
};

const searchPost = async (search: string): Promise<IBlogPost[]> => {
  const postsFound = await BlogPostModel.findAll({
    where: {
      [Op.or]: [
        { author: search },
        { category: search },
        { publicationDate: search }
      ]
    }
  });
  return postsFound;
}

export default {
  getAll,
  getById,
  createPost,
  updatePost,
  deletePost,
  searchPost,
}
