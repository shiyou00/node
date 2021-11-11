const fs = require('fs');
const { Logger } = require('./logger');

const output = fs.createWriteStream('./stdout.txt');
const errorOutput = fs.createWriteStream('./stderr.txt');

const logger = Logger(output, errorOutput);

logger.info('hello world!'); // 内容输出到 stdout.txt 文件
logger.error('错误日志记录'); // 内容输出到 stderr.txt 文件
logger.trace('测试错误');
const family = {
    name: 'Jack',
    brother: {
        hobby: ['篮球', '足球']
    }
}

logger.dir(family, {depth: 3});

// { name: 'Jack', brother: { hobby: [ '篮球', '足球' ] } }

// 启动计时器
logger.time('计时器');

// 中间写一些测试代码
for(let i=0; i < 1000000000; i++){}

// 停止计时器
logger.timeEnd('计时器');

// 计时器: 718.034ms
