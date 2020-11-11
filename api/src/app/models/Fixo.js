import Sequelize, { Model } from 'sequelize';

class Fixo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'fixos'
      }
    );
    return this;
  }
      // static associate(models) {
      //   this.belongsToMany(models.User, { foreignKey: 'departamento_id', through: 'user_departamentos', as: 'users'  })
      // }

  }


export default Fixo;
