import { Model, STRING, INTEGER } from "sequelize";
import IBlogPost from "../../interfaces/blogPost.interface";
import db from '.';

class BlogPost extends Model implements IBlogPost {
  declare id?: number;
  declare title: string;
  declare author: string;
  declare category: string;
  declare publicationDate: string;
}

BlogPost.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  title: {
    type: STRING,
    allowNull: false,
  },
  author: {
    type: STRING,
    allowNull: false,
  },
  category: {
    type: STRING,
    allowNull: false,
  },
  publicationDate: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'posts',
  // modelName: 'blogPosts',
  timestamps: false,
  // underscored: true,
});

export default BlogPost;