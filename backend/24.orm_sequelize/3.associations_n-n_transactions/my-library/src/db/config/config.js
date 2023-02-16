require('dotenv').config();

const config = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  host: process.env.SQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: { ...config, database: 'books_database-development' },
  test: { ...config, database: 'books_database-test' },
  production: { ...config, database: 'books_database-production' },
};