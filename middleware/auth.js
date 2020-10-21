
const Router = require('koa-router');


async function auth(ctx, next) {
  console.log("后台权限检查中间件！");
  if (!ctx.session.user) {
    ctx.redirect('/login');
  }
  // ctx.session.user
  await next();
}

module.exports = auth;

