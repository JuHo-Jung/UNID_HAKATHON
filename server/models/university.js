const Sequelize = require("sequelize");

module.exports = class University extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      latitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      mailpath1: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      mailpath2: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      imagepath: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'University',
      tableName: 'university',
    });
  }

  static associate(db) {}
};