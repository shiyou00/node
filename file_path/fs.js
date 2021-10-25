const fs = require("fs");

// fs.readFile('./path.js','utf-8',function(err,data){
//    console.log(data);
// });


function copy(src,dest,callback){
    const rs = fs.createReadStream(src);
    const ws = fs.createWriteStream(dest);
	rs.pipe(ws); // 输出到写入流中
  
    ws.on('finish',()=>{
        callback && callback();
    });
}

copy("6.txt","7.txt",()=>{
    console.log("copy结束")
});