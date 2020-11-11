import Sequelize, { Model } from 'sequelize';

class Area extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'areas'
      }
    );
    return this;
  }
      // static associate(models) {
      //   this.belongsToMany(models.User, { foreignKey: 'departamento_id', through: 'user_departamentos', as: 'users'  })
      // }

  }


export default Area;
