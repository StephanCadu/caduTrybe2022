'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        username: 'Monkey D. Luffy',
        admin: true,
        password: 'sanji-niku'
      },
      {
        username: 'Roronoa Zoro',
        admin: false,
        password: 'nihonchu'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
