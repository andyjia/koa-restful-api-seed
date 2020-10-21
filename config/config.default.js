
module.exports = {
  // 服务器配置
  SERVICE: {
    HOST: "",
    PORT: "3000"
  },
  // 数据库连接配置
  database: {
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    database: 'cn_net_javascript',
    port: 3306,
    connection_limit: 10
  },
  languange: 'zh-CN',
  siteUrl: 'http://127.0.0.1:3000',
  jwt: {
    secret: 'shared-secret'
  },
  verificationCode: {
    isTest: true, // 为真的话不发送验证码，并且在返回数据中给出验证码
    length: 4
  }
};