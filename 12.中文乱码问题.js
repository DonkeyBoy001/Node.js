
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    // define a str
    const str = `您的请求 URL 地址 ${req.url}, 请求method类型${req.method}`
    //为了防止中文显示乱码的问题，
    //To prevent the issue of garbled Chinese display,
    // 需要设置响应头 Content-Type 的值为 text/html；charset-utf-8
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // res.end() 将内容响应给客户端
    //Res. end() responds to the content to the client
    res.end(str)
})


server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})