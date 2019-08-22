const fs = require('fs');

fs.watch('./',{
  recursive: true // 是否递归
}, (eventType, filename)=>{
  console.log(eventType, filename);
});
