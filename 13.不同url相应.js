// 获取请求的 url 地址

// 设置默认的响应内容为 404 Not found

// 判断用户请求的是否为 / 或 /index。html 首页

// 判断用户请求的是否为 /about。html 关于页面

// 设置 Content-Type 响应头，防止中文乱码

// 使用 res.end() 把内容响应给客户端


server.on('request', function(req, res) {

    const ur = req.url

    let content = '<h1>404 Not Found!</h1>'

    if (url === '/'|| url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }


    res 
})