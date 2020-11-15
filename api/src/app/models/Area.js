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
      through: 'users',
      as: 'area',
    });
  }
}

export default Area;
