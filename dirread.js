const fs = require('fs')
const rFile = require('./fread')
const {wFile} = require('./fwrite')
//读取文件夹下的所有文本文件全部保存到一个文件中

//1. 读取当前文件夹下的所有文件 fs.readFile(path[, options], callback)
//data是文件的内容
fs.readdir("./txt",(err,data) => {
    if(err) throw err;
    else{
        //当前元素 当前索引 当前元素所属数组对象
        data.forEach( async (value,index,arr) => {
            //console.log(value)
            //console.log(index)
            //console.log(arr)
            //console.log(await rFile("./txt/"+value))
            
            await wFile("./txt/content.txt",await rFile("./txt/"+value))
            //console.log("导入成功")
        });
    }
    //console.log(files)
})
//删除文件夹 fs.rmdir(path[, options], callback)
