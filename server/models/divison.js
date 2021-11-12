const Sequelize = require("sequelize");

module.exports = class Divison extends Sequelize.Model {
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
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Divison',
      tableName: 'divison',
    });
  }

  static associate(db) {}
};