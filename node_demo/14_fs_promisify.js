const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

read('./text').then((data)=>{
  console.log(data.toString());
}).catch((e)=>{
  console.log(e);
});

async function test() {
  try {
    const content = await read('./text');
    console.log(content);
  }catch (e) {
    throw e;
  }
}
test();


// promisify 方法的实现
function util_promisify (func) {
  return (...arg) => new Promise((resolve, reject) => {
    func(...arg, (err, arg) => {
      if (err) reject(err);
      else resolve(arg)
    })
  })
}
