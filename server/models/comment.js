const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
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
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      comment: {
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
      modelName: 'Comment',
      tableName: 'comment',
    });
  }

  static associate(db) {}
};