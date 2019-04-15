setImmediate(()=>{
    console.log('setImmediate');
});

console.log('之后输出');

process.nextTick(()=>{
    console.log('nextTick');
});