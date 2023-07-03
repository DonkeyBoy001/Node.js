// 核心： 把文件的实际存放路径，作为每个资源的请求 url 地址。

// 实现步骤
// 1 导入需要的模块

// 2 创建基本的 web 服务器

// 3 将资源的请求 url 地址映射为文件的存放路径

// 4 读取文件内容并响应给客户端

// 5 优化资源的请求路径


// 1 导入需要的模块
const http = require('http') // 创建web服务器
const fs = require('fs') // 读取文件
const path = require('path') // 处理文件路径
// 2 创建基本的 web 服务器

// 2.1 创建web服务器
const server = http.createServer()
// 2.2 监听web服务器request事件
server.on('request', function(req, res) {
    // 3 将资源的请求 url 地址映射为文件的存放路径
    // 3.1 获取客户端请求的url 地址
    // eg: /clock/index.html
    // eg: /clock/index.css
    // eg: /clock/index.js

    const url = req.url
    // 3.2 把请求的url递增，映射为本地文件的存放地址
    // const fpath = path.join(__dirname, url)
    // 优化定义文件存放路径
    let fpath = ''
    if (url == '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock', url)
    }


    // 4 读取文件内容并响应给客户端
    // 4.1 根据 mapping file path read file
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 4.2 when reading error happen, sending error to client
        if (err) return res.end('404 Not Found')
        // 4.3 whne reading successfuly, sending success to client
        res.end(dataStr)
    })


})
// 2.3 启动web服务
server.listen(80, function() {
    console.log('server listen at http://127.0.0.1')
})





// 5 优化资源的请求路径