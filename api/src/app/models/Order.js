import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        description: Sequelize.STRING,
        front: Sequelize.STRING,
        location_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'orders',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'user_id',
      through: 'orders',
      as: 'order',
    });
    this.belongsToMany(models.Location, {
      foreignKey: 'location_id',
      through: 'orders',
      as: 'location',
    });
    // this.belongsToMany(models.Area, {
    //   foreignKey: 'area_id',
    //   through: 'orders',
    //   as: 'area',
    // });
  }
}

export default Order;
