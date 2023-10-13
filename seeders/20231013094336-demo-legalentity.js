'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('legalentities', [{
      pic_name: 'Ahmad Septian',
      pic_email: 'ahmad@gmail.com',
      pic_position: 'Software Engineer',
      company_name: 'PT Ahmad Pembangunan',
      company_mobile: '08961201261',
      company_npwp: '0-0128161-126182',
      company_address: 'Ragkasbitung',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('legalentities', null, {});
  }
};
