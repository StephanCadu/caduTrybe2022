'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Facebook vai dividir departamento de realidade aumentada e virtual',
        author: 'Renan',
        category: 'tecnologia',
        publicationDate: '2021-10-26'
      },
      {
        title: 'O que é UDP e quais as diferenças com o TCP?',
        author: 'Giulianna',
        category: 'tecnologia',
        publicationDate: '2021-10-26'
      }
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
