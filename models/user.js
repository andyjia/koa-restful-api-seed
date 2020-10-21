var Sequelize = require("sequelize");
var db = require('./db');

var User = db.define('tb_user',
  {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
    username: Sequelize.STRING(100),
    nickname: Sequelize.STRING(100),
    email: Sequelize.STRING(100),
    mobile: Sequelize.STRING(20),
    password: Sequelize.STRING(100),
    gender: Sequelize.BIGINT(11),
    birthday: Sequelize.BIGINT(11),
    score: Sequelize.BIGINT(11),
    coin: Sequelize.BIGINT(11),
    balance: Sequelize.DECIMAL(10, 2),
    avatar: Sequelize.STRING(100),
    signature: Sequelize.STRING(255),
    last_login_ip: Sequelize.STRING(15),
    key: Sequelize.STRING(100),
    more: Sequelize.TEXT,
    address: Sequelize.STRING(255),
    type: Sequelize.INTEGER,
    create_time: Sequelize.BIGINT(11),
    login_time: Sequelize.BIGINT(11),
    update_time: Sequelize.BIGINT(11),
    is_black: Sequelize.INTEGER,
    is_active: Sequelize.INTEGER
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = User;
