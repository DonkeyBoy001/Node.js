// 1. 获取请求的 url 地址
// 1. Obtain the requested URL address
// 2. 设置默认的响应内容为 404 Not found
// 2. Set the default response content to 404 Not found
// 3. 判断用户请求的是否为 / 或 /index.html 首页
// 3. Determine if the user's request is/or/index.html homepage
// 4. 判断用户请求的是否为 /about.html 关于页面
// 4. Determine whether the user's request is/about. html About the page
// 5. 设置 Content-Type 响应头，防止中文乱码
// 5. Set the Content Type response header to prevent Chinese garbled code
// 6. 使用 res.end() 把内容响应给客户端
// 6. Use res. end() to respond to the content to the client

const http = require('http')
server = http.createServer()

server.on('request', function(req, res) {
    // const定义的变量不可以被修改。
    const url = req.url

    let content = '<h1>404 Not Found!</h1>'
    // ==会转换数据类型 ===不会转换数据类型
    if (url === '/'|| url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }

    res.setHeader('Content-Type','text/html; charset=utf-8')

    res.end(content)
})

server.listen(80,() => {
    console.log("http:127.0.0.1")
})