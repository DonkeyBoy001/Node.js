
//1. 导入服务器模块
//1. Import HTTP module
const http = require('http')


//2. 创建服务器实例对象
//2. Create a web server instance
const server = http.createServer()

// 客户端请求服务器 就会触发 server.on
// The client requests the server and triggers server.on

// use on method to bind request event
server.on('request',(req, res)=> {
    console.log('Someone viite our web server.')
})
//  只要服务器接收到了客户端的请求，
// 就会调用通过 server.on() 为服务器绑定的 request 事件处理函数。

//As long as the server receives a request from the client,
//The request event handler bound to the server through server. on() will be called.

//3. 启动服务器
//3. Start Server
// first para: port number
// second para: Callback function： when the sever start, it will run the callback function
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')
})






