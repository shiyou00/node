const fs = require('fs');

const ws = fs.createWriteStream('./text');

const tid = setInterval(()=>{
  const num = Math.random() * 10;
  console.log(num);
  if(num<8){
    ws.write(num + '');
  }else{
    clearInterval(tid);
    ws.end();
  }
},1000);

ws.on('finish',()=>{
  console.log('写入完毕');
});
