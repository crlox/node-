//Buffer 对象用于表示 固定长度 的字节序列
//Buffer 可以指定字符编码 默认utf-8
//以16进制编码
var buf1 = Buffer.from('1a03','hex');
//console.log(buf1)
//16进制编码转字符串输出
var buf2 = Buffer.from('7468697320697320612074c3a97374','hex');
//console.log(buf2.toString())

//使用Buffer.alloc(size[, fill[, encoding]])分配大小为x 字节的Buffer(缓冲区)
//fill为填充数据 默认为0

//从内存中直接获取一块空间 不进行清空 可能有其他程序遗留在内存中的信息
console.log(Buffer.allocUnsafe(50))
