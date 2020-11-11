import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Notification from '../app/models/Notification';
import Direction from '../app/models/Direction';
import Area from '../app/models/Area';
import Eletric from '../app/models/Eletric';
import Fixo from '../app/models/Fixo';
import Movel from '../app/models/Movel';
import Instrumentation from '../app/models/Instrumentation';
import Location from '../app/models/Location';
import Order from '../app/models/Order';

import databaseConfig from '../config/database';

const models = [User, File, Notification, Direction, Area, Eletric, Fixo, Movel, Instrumentation, Location, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));

  }
}

export default new Database();
