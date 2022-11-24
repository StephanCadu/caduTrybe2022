'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      isbn: {
        allowNull: false,
        type: Sequelize.STRING(100),
      }
    }, {
      timestamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
