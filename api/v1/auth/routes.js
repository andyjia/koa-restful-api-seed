const Router = require('koa-router');

const loginService = require('./login');
const smsService = require('./sms');

const router = new Router({
  prefix: '/auth',
});

router.post(`/login`, loginService.login);
router.post('/signup', loginService.signup);
router.post('/sendcode', smsService.sendCode);

module.exports = router;

