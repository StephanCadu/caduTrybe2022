'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      totalPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'total_pages',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
