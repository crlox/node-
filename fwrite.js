const fs = require('fs')

//写入文件
//options 为对象或者字符串类型 使用 a 进行追加写入操作
// fs.writeFile("1.txt","write11\n",{flag:"a",encoding:"utf-8"},(err) => {
//     if(!err){
//         console.log("写入完毕")
//     }
// })
//封装异步操作
function wFile(fpath,content){
    return new Promise(function(resolve,reject){
        fs.writeFile(fpath,content+"\n",{flag:"a",encoding:"utf-8"},(err) => {
            if(!err){
                //console.log("写入完毕")
                resolve(err)
            }
            reject(err)
        })
    }) 
}
//创建异步函数 使用await异步调用函数 按照 1 2 3顺序写入
// async function writeF(){
//     await wFile("1.txt","+1")
//     await wFile("1.txt","+2")
//     await wFile("1.txt","+3")
// }
// writeF()

//导出写入文件模块 导出用花括号 导入也需要花括号
module.exports = {wFile}