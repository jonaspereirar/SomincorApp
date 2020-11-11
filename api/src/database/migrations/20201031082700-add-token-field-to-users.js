'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn(
  'users',
  'token_id',
    {
    type: Sequelize.INTEGER,
    references: { model: 'notifications', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
    },
  );
},

  down: queryInterface => {
  return queryInterface.removeColumn('users', 'token_id');
  },
};
