module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'area_id', {
      type: Sequelize.INTEGER,
      references: { model: 'areas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'area_id');
  },
};
