module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      direction_id: {
        type: Sequelize.INTEGER,
        references: { model: 'directions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      area_id: {
        type: Sequelize.INTEGER,
        references: { model: 'areas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      eletric_id: {
        type: Sequelize.INTEGER,
        references: { model: 'eletrics', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      fixo_id: {
        type: Sequelize.INTEGER,
        references: { model: 'fixos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      movel_id: {
        type: Sequelize.INTEGER,
        references: { model: 'moveis', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      instrumentation_id: {
        type: Sequelize.INTEGER,
        references: { model: 'instrumentations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: { model: 'locations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('user_orders');
  },
};
