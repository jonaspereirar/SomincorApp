import Sequelize, { Model } from 'sequelize';

class Direction extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'directions',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'direction_id',
      through: 'users',
      as: 'direction',
    });
  }
}

export default Direction;
