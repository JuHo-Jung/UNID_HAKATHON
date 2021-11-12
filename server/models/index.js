const Sequelize = require('sequelize');
const Comment = require('./comment');
const Divison = require('./divison');
const Mail = require('./mail');
const Member = require('./member');
const Menu = require('./menu');
const Restaurant = require('./restaurant');
const University = require('./university');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.University = University;
University.init(sequelize);
University.associate(db);

db.Mail = Mail;
Mail.init(sequelize);
Mail.associate(db);

db.Member = Member;
Member.init(sequelize);
Member.associate(db);

db.Divison = Divison;
Divison.init(sequelize);
Divison.associate(db);

db.Restaurant = Restaurant;
Restaurant.init(sequelize);
Restaurant.associate(db);

db.Menu = Menu;
Menu.init(sequelize);
Menu.associate(db);

db.Comment = Comment;
Comment.init(sequelize);
Comment.associate(db);

module.exports = db;