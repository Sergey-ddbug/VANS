'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('categories',
      [
        {
          category_name: 'Yoga',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Meditation',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Web Development',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Social',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'TV Show Talks',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Sport Talks',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Breathwork',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_name: 'Other',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('categories', null, {});
  }
};
