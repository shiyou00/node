var fs = require('fs')
var path = require('path')
var readline = require('readline') // 引用 readline

// 文件名
var fileName = path.resolve(__dirname, 'data.txt')
// 创建读取文件的 stream 对象
var readStream = fs.createReadStream(fileName)

readStream.on('data', function (chunk) {
    console.log(chunk instanceof Buffer)
    console.log(chunk)
})

// // 创建 readline 对象
// var rl = readline.createInterface({
//     // 输入，依赖于 stream 对象
//     input: readStream
// })

// // 监听逐行读取的内容
// rl.on('line', function (lineData) {
//     console.log(lineData)
//     console.log('----- this line read -----')
// })
// // 监听读取完成
// rl.on('close', function () {
//     console.log('readline end')
// })