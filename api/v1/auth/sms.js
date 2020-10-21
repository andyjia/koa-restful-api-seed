/**
 * @author ngtwewy <mail@restfulapi.cn>
 * @link https://restfulapi.cn
 */

var Parameter = require('parameter');
var i18n = require('i18n');

var config = require("../../../config/config.default");
var verificationCode = require("../../../models/verificationCode");
var smsService = require("./sms.service");

exports.sendCode = async (ctx) => {
  // 验证参数
  var validator = new Parameter();
  var rule = {
    mobile: { type: 'string', min: 11, max: 11 },
    length: { type: 'int', required: false }
  };

  var errors = validator.validate(rule, ctx.request.body);
  if (errors && errors.length) {
    ctx.status = 400;
    ctx.body = { error: errors[0]['field'] + " " + errors[0]['message'] };
    return;
  }

  // 生成验证码
  var length = ctx.request.body.length
    ? ctx.request.body.length
    : config.verificationCode.length;
  var code = Math.random().toString();
  code = code.substr(2, length);

  // 发送验证码
  smsService.send(code);

  // 保存验证码
  var time = Math.floor(Date.now() / 1000);
  var data = {
    code,
    account: ctx.request.body.mobile,
    is_used: 0,
    create_time: time,
    expire_time: time + 60 * 30
  };
  try {
    await verificationCode.create(data);
    ctx.body = {
      message: i18n.__('add_success'),
      verificationCode: data
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: i18n.__('add_failed') };
  }
}






/**

3140166
2019-08-05 21:52:47
系统 李生
(da9a****9c5a)
验证码类
【旷野的风】您的验证码是#code#。如非本人操作，请忽略本短信
审核成功
/


 */