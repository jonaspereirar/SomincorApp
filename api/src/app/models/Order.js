import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'orders'
      }
    );
    return this;
  }
      static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'order_id', through: 'user_order', as: 'users'  })
      }

  }


export default Order;
