import Sequelize, { Model } from 'sequelize';

class Eletric extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'eletrics'
      }
    );
    return this;
  }
      // static associate(models) {
      //   this.belongsToMany(models.User, { foreignKey: 'departamento_id', through: 'user_departamentos', as: 'users'  })
      // }

  }


export default Eletric;
