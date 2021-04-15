//readline提供接口 一次一行的读取 可读流数据
const readline = require('readline');
const {wFile} = require('./fwrite')


const rl= readline.createInterface({
    input:process.stdin,//可读流
    output:process.stdout
});

// rl.question('你最喜欢的食物是什么？', (answer) => {
//     console.log(`你最喜欢的食物是 ${answer}`);
//     rl.close()
//   });

  //创建一个异步 写入 流
function rlf(answer){
      return new Promise((resolve,reject) => {
            rl.question(`${answer}？`, (result) => {
            resolve(result);
          });
      }) 
  }
//调用异步函数 多个写入
async function rlw(){
    let name = await rlf("名字是");
    let type = await rlf("类型是");
    let author = await rlf("作者是");
    let content =`
    {
      "name": "${name}",
      "version": "1.0.0",
      "description": "",
      "main": "fdelete.js",
      "scripts": {
        "test": "echo Error: no test specified && exit 1"
      },
      "repository": {
        "type": "${type}",
        "url": "git+https://github.com/crlox/node-.git"
      },
      "keywords": [],
      "author": "${author}",
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/crlox/node-/issues"
      },
      "homepage": "https://github.com/crlox/node-#readme",
      "dependencies": {
        "cheerio": "^1.0.0-rc.6",
        "request": "^2.88.2"
      }
    }
    `
    await wFile('input.json',content)
    rl.close();
}
rlw()