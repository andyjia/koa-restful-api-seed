'use strict';

var Sequelize = require("sequelize");
var db = require('./db');

var Page = db.define('tb_article_page',
  {
    id: { type: Sequelize.STRING, allowNull: false, primaryKey: true, autoIncrement: true },
    user_id: { type: Sequelize.BIGINT, allowNull: false },
    category_id: { type: Sequelize.BIGINT, allowNull: true },
    title: { type: Sequelize.STRING(255), allowNull: false },
    thumbnail: Sequelize.STRING(255),
    content: { type: Sequelize.STRING, allowNull: false },
    description: Sequelize.TEXT,
    more: Sequelize.TEXT,
    create_time: Sequelize.BIGINT(11),
    update_time: Sequelize.BIGINT(11),
    delete_time: Sequelize.BIGINT(11),
    status: Sequelize.BIGINT(11),
    url: Sequelize.STRING(255),
    hit_counter: Sequelize.BIGINT(11),
    list_order: Sequelize.BIGINT(11),
    is_show: Sequelize.BIGINT(11),
    // createTime: { field: 'create_time', type: Sequelize.DATE, allowNull: false },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = Page;


