'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'macbook pro 16',
        brand: 'apple',
        price: 3600,
        manufacturingDate: '2021-10-25',
        expirationDate: '2026-10-25',
      },
      {
        name: 'surface pro',
        brand: 'microsoft',
        price: 2500,
        manufacturingDate: '2021-10-25',
        expirationDate: '2024-10-25',
      },
      {
        name: 'alienware',
        brand: 'dell',
        price: 2000,
        manufacturingDate: '2021-10-25',
        expirationDate: '2022-10-25',
      },
      {
        name: 'alienware expired',
        brand: 'dell',
        price: 2000,
        manufacturingDate: '2015-10-25',
        expirationDate: '2016-10-25',
      },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
