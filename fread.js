const fs = require('fs')

//同步读取文件内容
// var content = fs.readFileSync("1.txt","utf-8")
// console.log(content)

//异步读取
//回调函数返回 两个参数 err data(为文件内容) 
//箭头函数 （err,data）=> {} 等于 function(err,data){}
// fs.readFile("1.txt","utf-8",(err,data) => {
//     if (err) throw err;
//     console.log(data);
// })
//使用promise对象来异步读取文件内容
function rFile(fPath){
    var readPromise = new Promise(function(resolve,reject){
        fs.readFile(fPath,"utf-8",(err,data) => {
            //读取失败时 调用reject
            if(err) return reject (err);
    
            //读取成功 调用 resolve
            resolve (data);//返回数据信息到readPromise对象
    
        })
    })
    //返回对应promise对象
    return readPromise
}

//使用then方法
//依次读取1 2
// rFile("1.txt")
//     .then((data) => {
//     console.log(data)
//     return rFile("2.txt")
// })
//     .then((data) => {
//     console.log(data)
//     })

//使用async 和 await 非链式调用 promise 读取文件内容
async function rdfile(){
    var file1 = await rFile("1.txt");
    console.log(file1);
    var file1 = await rFile("2.txt");
    console.log(file1);
}
rdfile()