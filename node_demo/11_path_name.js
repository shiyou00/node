const { basename, dirname, extname } = require('path');

const filePath = '/usr/local/bin/e.text';

console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));