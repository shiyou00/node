var http = require('http');
var fs = require('fs');
var path = require('path');

// var server = http.createServer(function (req, res) {
//     var method = req.method; // 获取请求方法
//     if (method === 'POST') { // 暂只关注 post 请求
//         req.on('data', function (chunk) {
//             // 接收到部分数据
//             console.log('chunk', chunk.toString().length);
//         });
//         req.on('end', function () {
//             // 接收数据完成
//             console.log('end');
//             res.end('OK');
//         });
//     }
//     // 其他请求方法暂不关心
// });

var server = http.createServer(function (req, res) {
    var method = req.method; // 获取请求方法
    if (method === 'POST') { // 暂只关注 post 请求
        req.pipe(res)  // 将 request 数据直接 response
    }
    // 其他请求方法暂不关心
});


server.listen(8000);