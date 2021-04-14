const fs = require('fs')

//写入文件
//获取文件描述符 写入文件不会覆盖之前的
var ff
fs.open('1.txt','r',(err,fd) =>{
    ff=fd
    console.log(ff)
})
console.log(ff)
fs.writeFile(ff,"write11","utf-8",(err) => {
    if(!err){
        console.log("写入完毕")
    }
})