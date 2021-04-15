# **node.js学习笔记**
## 1--fs文件操作
读取文件
```
fs.readFile(fPath,"utf-8",(err,data) => {
            //读取失败时 调用reject
            if(err) return reject (err);
    
            //读取成功 调用 resolve
            resolve (data);//返回数据信息到readPromise对象
    
        })
```
写入文件
```
fs.writeFile(fpath,content+"\n",{flag:"a",encoding:"utf-8"},(err) => {
            if(!err){
                //console.log("写入完毕")
                resolve(err)
            }
            reject(err)
        })
```
## 2--buffer缓冲区
```
Buffer.alloc(size[, fill[, encoding]])
var buf1 = Buffer.from('1a03','hex');
console.log(Buffer.allocUnsafe(50))
```
## 3--目录读取删除
```
fs.readdir("./txt",(err,data) => {
    if(err) throw err;
    else{
    console.log(data);
    }
})
删除文件夹 fs.rmdir(path[, options], callback)
```
## 4--输入输出流
```
1
const rl= readline.createInterface({
    input:process.stdin,//可读流
    output:process.stdout
});
2 创建异步写入流
function rlf(answer){
      return new Promise((resolve,reject) => {
            rl.question(`${answer}？`, (result) => {
            resolve(result);
          });
      }) 
  }
```
