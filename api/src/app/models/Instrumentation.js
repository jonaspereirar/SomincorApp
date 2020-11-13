import Sequelize, { Model } from 'sequelize';

class Instrumentation extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'instrumentations',
      }
    );
    return this;
  }
  // static associate(models) {
  //   this.belongsToMany(models.User, { foreignKey: 'departamento_id', through: 'user_departamentos', as: 'users'  })
  // }
}

export default Instrumentation;
