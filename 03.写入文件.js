
//1. 导入fs文件系统模块

const fs = require('fs')


// 2. 调用 fs.writefile(）方法，写入文件的内容
// 参数1: 表示文件的存放路径
// 参数2：表示要写入的内容
// 参数3：回调函数

// 这里省略了 设置编码格式的参数， 默认utf-8的格式输入

fs.writeFile('./files2/2.txt','abcd', function(err) {
    // 2.1 如果文件写入成功，则 err 的值等于 null
    console.log(err)
    // 2.2 如果文件写入失败， 则err 的值等于 一个错误对象
    
    /**  errno: -2,
         code: 'ENOENT',
        syscall: 'open',
        path: './files2/2.txt'
    */ 
})


