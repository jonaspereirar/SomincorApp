import Sequelize, { Model } from 'sequelize';

class Area extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'areas',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'area_id',
      through: 'user_orders',
      as: 'areausers',
    });
  }
}

export default Area;
