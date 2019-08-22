const fs = require('fs');

fs.readFile('./14_fs_readfile.js','utf8',(err,data)=>{
  if(err) throw err;
  console.log(data);
});

try {
  const data = fs.readFileSync('./14_fs_readfile.js','utf8');
  console.log(data);
}catch (e) {
  throw e;
}

