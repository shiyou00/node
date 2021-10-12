var http = require('http');
var fs = require('fs');
var path = require('path');

// var server = http.createServer(function (req, res) {
//     var fileName = path.resolve(__dirname, '../../task.txt');
//     console.log(fileName);
//     fs.readFile(fileName, function (err, data) {
//         res.end(data);
//     });
// });

var server = http.createServer(function (req, res) {
    var fileName = path.resolve(__dirname, '../../task.txt');
    var stream = fs.createReadStream(fileName);  // 这一行有改动
    stream.pipe(res); // 这一行有改动
});

// process.stdin.on('data', function (chunk) {
//     console.log('stream by stdin', chunk.toString())
// })

server.listen(8000);