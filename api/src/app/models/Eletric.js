import Sequelize, { Model } from 'sequelize';

class Eletric extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'eletrics',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'eletric_id',
      through: 'user_orders',
      as: 'eletricusers',
    });
  }
}

export default Eletric;
