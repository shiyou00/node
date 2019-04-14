console.log('module');

const NUM = 100;

function test (){
    console.log(NUM);
}

// 输出常量
module.exports.num = NUM;
// 输出函数
module.exports.testFn = test;

console.log(module);