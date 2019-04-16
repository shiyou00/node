const { parse, format} = require('path');

const filePath = '/usr/local/node_modules/n/package.json';

console.log(parse(filePath));
console.log(format(parse(filePath)));