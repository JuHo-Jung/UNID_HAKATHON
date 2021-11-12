const Sequelize = require("sequelize");

module.exports = class Restaurant extends Sequelize.Model {
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
      divison_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      openhours: {
        type: Sequelize.STRING(500),
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
      imagepath: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Menu',
      tableName: 'menu',
    });
  }

  static associate(db) {}
};