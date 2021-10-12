var http = require('http');
var fs = require('fs');
var path = require('path');

// var server = http.createServer(function (req, res) {
//     var method = req.method; // 获取请求方法
//     if (method === 'GET') { // 暂只关注 get 请求
//         var fileName = path.resolve(__dirname, 'data.txt');
//         fs.readFile(fileName, function (err, data) {
//             res.end(data);
//         });
//     }
//     // 其他 method 暂时忽略
// });

var server = http.createServer(function (req, res) {
    var method = req.method; // 获取请求方法
    if (method === 'GET') { // 暂只关注 get 请求
        var fileName = path.resolve(__dirname, 'data.txt');
        var stream = fs.createReadStream(fileName);
        stream.pipe(res); // 将 res 作为 stream 的 dest
    }
    // 其他 method 暂时忽略
});


server.listen(8000);