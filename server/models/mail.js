const Sequelize = require("sequelize");

module.exports = class Mail extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      university_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      authcode: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      starttime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      endtime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Mail',
      tableName: 'mail',
    });
  }

  static associate(db) {}
};