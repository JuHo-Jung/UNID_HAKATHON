const Sequelize = require("sequelize");

module.exports = class Menu extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      price: {
        type: Sequelize.INTEGER,
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