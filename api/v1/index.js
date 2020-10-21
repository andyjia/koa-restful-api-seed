const Router = require('koa-router');

const auth = require('./auth/routes');
const home = require('./home/routes');
const articles = require('./articles/routes');

const v1 = new Router({
  prefix: '/v1',
});

v1.get(`/`, (ctx) => {
  var data = {
    "document_url": "https://restfulapi.cn/manual",
    "version": "v1.1.20201018"
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = data;
});

v1.use(auth.routes());
v1.use(home.routes());
v1.use(articles.routes());

module.exports = v1;
