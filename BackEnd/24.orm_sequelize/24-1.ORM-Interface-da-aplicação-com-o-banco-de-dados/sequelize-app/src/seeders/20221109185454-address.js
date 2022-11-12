'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Address',[
      {
        address: 'Rua João Casagrande, 53',
        user_id: 1,
      },
      {
        address: 'Av. Paes de Barros, 1603',
        user_id: 2,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Address', null, {});
  }
};
