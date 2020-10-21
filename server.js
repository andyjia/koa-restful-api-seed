const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 3000;
const SERVER = http.createServer(app.callback());

// Request logging
const logger = require('koa-logger')
app.use(logger());

// Server start
SERVER.listen(PORT, '0.0.0.0', () => {
  console.log(`Running on port: http://127.0.0.1:${PORT}`);

});

