const fs = require('fs');

const rs = fs.createReadStream('./01_run.js');

rs.pipe(process.stdout); // 输出到控制台
