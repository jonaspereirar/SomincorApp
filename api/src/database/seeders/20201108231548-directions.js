'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('directions', [
        {
          name: 'Produção',
          created_at: new Date(),
          updated_at: new Date(),
          },
        {
          name: 'Manutenção',
          created_at: new Date(),
          updated_at: new Date(),
          },
        {
          name: 'security',
          created_at: new Date(),
          updated_at: new Date(),
          },
        {
          name: 'Pessoal',
          created_at: new Date(),
          updated_at: new Date(),
          }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('directions', null, {});

  }
};
