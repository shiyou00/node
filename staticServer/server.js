const express = require('express'); //express框架模块
const path = require('path'); //系统路径模块
const app = express();

const hostName = '127.0.0.1'; //ip
const port = 8099; //端口

app.use(express.static(path.join(__dirname, 'public'))); //指定静态文件目录

app.listen(port, hostName, function() {
  console.log(`服务器运行在http://${hostName}:${port}`);
});
