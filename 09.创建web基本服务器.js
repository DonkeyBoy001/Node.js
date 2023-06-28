

//1. Import HTTP module

const http = require('http')


//2. Create a web server instance

const server = http.createServer()

// 客户端请求服务器 就会触发 server.on
server.on('request',(req, res)=> {
    console.log('Someone viite our web server.')
})
//  只要服务器接收到了客户端的请求，
// 就会调用通过 server.on() 为服务器绑定的 request 事件处理函数。



//3 Start Server
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')
})






