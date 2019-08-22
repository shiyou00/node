const fs = require('fs');

fs.stat('./text',(err,stats)=>{
  if(err) throw err;
  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats);
});
