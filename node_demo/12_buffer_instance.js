const buf = Buffer.from('this is a test!');

console.log(buf.length); // 15

const buf1 = Buffer.alloc(10);

console.log(buf1.length); // 10

console.log(buf.toString('base64')); // dGhpcyBpcyBhIHRlc3Qh

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);// <Buffer d1 6f 50 89 fb 35 00 00 00 00>
console.log(buf3.fill(10,2,6)); // <Buffer d1 6f 0a 0a 0a 0a 00 00 00 00>

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');

console.log(buf4.equals(buf5)); // true
console.log(buf4.indexOf('es')); // 找到则范围索引1 ， 找不到则返回-1
