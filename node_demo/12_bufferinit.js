const key = "a123456789";
const bytes = Buffer.alloc(30);

bytes.fill(key,0,10);

console.log(bytes);