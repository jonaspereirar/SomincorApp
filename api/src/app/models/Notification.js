import Sequelize, { Model } from 'sequelize';

class Notification extends Model {
  static init(sequelize) {
    super.init(
      {
        notification: Sequelize.STRING,
        notification_created_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

 }

export default Notification;
