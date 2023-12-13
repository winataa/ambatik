'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('quizzes', [
      {
        type: 'origin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'pattern',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'meaning',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more product objects as needed
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('quizzes', null, {});
  }
};
