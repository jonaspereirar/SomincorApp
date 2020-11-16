import Sequelize, { Model } from 'sequelize';

class Location extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'locations',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Order, {
      foreignKey: 'location_id',
      through: 'orders',
      as: 'location',
    });
  }
}

export default Location;
