import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        number: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    this.belongsTo(models.Notification, {
      foreignKey: 'token_id',
      as: 'tokens',
    });
    this.belongsToMany(models.Direction, {
      foreignKey: 'user_id',
      through: 'user_orders',
      as: 'directions',
    });
    this.belongsToMany(models.Area, {
      foreignKey: 'user_id',
      through: 'user_orders',
      as: 'areas',
    });
    this.belongsToMany(models.Eletric, {
      foreignKey: 'user_id',
      through: 'user_orders',
      as: 'eletric',
    });
    this.belongsToMany(models.Location, {
      foreignKey: 'user_id',
      through: 'user_orders',
      as: 'location',
    });

    this.belongsToMany(models.Order, {
      foreignKey: 'user_id',
      through: 'user_orders',
      as: 'orders',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
