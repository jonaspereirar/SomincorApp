'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
          name: 'Spiderman',
          number: '1414',
          email: 'Spiderman@gmail.com',
          password_hash: '123456',
          created_at: new Date(),
          updated_at: new Date(),
          },
        {
          name: 'Hulk',
          number: '1414',
          email: 'hulk@gmail.com',
          password_hash: '123456',
          created_at: new Date(),
          updated_at: new Date(),
          }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});

  }
};
