const http = require("https");
http.get('https://api.66mz8.com/api/music.163.php?format=json', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  // 任何 2xx 状态码都表示成功的响应，但是这里只检查 200。
  if (statusCode !== 200) {
    error = new Error('请求失败\n' +
                      `状态码: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('无效的 content-type.\n' +
                      `期望的是 application/json 但接收到的是 ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // 消费响应的数据来释放内存。
    res.resume();
    return;
  }
 res.resume();
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`出现错误: ${e.message}`);
});