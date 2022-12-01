'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {
        name: 'Los Pollos Hermanos',
        category: 'Fast Food',
        openingTime: '10:00:00',
        closingTime: '23:00:00',
      },
      {
        name: 'Central Perk',
        category: 'Coffee House',
        openingTime: '07:00:00',
        closingTime: '13:30:00',
      }
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {});
  }
};
