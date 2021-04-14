
const fs = require('fs')

fs.unlink('3.txt',(err) => {
    if(err) throw err;
    console.log("文件删除成功");
})
//对空 非空的目录 不起作用
//使用 fs.rmdir()删除目录