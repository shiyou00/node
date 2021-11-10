const dns = require('dns');

// dns.lookup('github.com', (err, address, family) => {
//     console.log('地址: %j 地址族: IPv%s', address, family);
// });

dns.resolve('github.com', (err, records) => {
    console.log(records);
});