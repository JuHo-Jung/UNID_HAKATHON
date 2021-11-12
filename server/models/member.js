const Sequelize = require("sequelize");

module.exports = class Member extends Sequelize.Model {
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
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      nickname: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      telephone: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      point: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Member',
      tableName: 'member',
    });
  }

  static associate(db) {}
};