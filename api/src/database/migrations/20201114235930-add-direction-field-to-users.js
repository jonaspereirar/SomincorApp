module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'direction_id', {
      type: Sequelize.INTEGER,
      references: { model: 'directions', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'direction_id');
  },
};
