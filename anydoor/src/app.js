const http = require("http");
const conf = require("./config/defaultConfig");
// const chalk = require('chalk');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world");
});

server.listen(conf.port, conf.host, () => {
  const addr = `http://${conf.host}:${conf.port}`;
  console.info(`Server started at ${addr}`);
});

const app = {
  a: 4,
  b: 5
};
console.info(app);

if (app) {
  /* comment */
  return app;
}
