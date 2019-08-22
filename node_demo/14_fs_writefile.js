const fs = require('fs');

const buffer = Buffer.from('this is a test.');
fs.writeFile('./text', buffer, (err)=>{
  if(err) throw err;
  console.log('文件写入完毕');
});
