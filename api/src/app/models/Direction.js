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
    this.belongsTo(models.User, {
      foreignKey: 'direction_id',
      as: 'direction',
    });
  }
}

export default Direction;
