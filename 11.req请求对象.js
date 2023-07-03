
// 1.导入 http 模块
// 1. Import HTTP module

const http = require('http')

// 2. 创建 web 服务器实例
// 2. Create a web server instance
const server = http.createServer()

// 3.为服务器实例绑定 request 事件，监听客户端的请求
// Bind the request event to the server instance and listen for client requests
const res = 
// req是请求对象，包含与客户端相关属性和地址
//Req is a request object that contains attributes and addresses related to the client

server.on('request', (req,res) => {
    // req.url 是客户端请求的url地址
    // Req.url is the URL address requested by the client
    const url = req.url
    // req.method: 客户端请求method 类型
    //Req.method: Client Request Method Type
    const method = req.method
    const str = `Your request is ${url}, and request method is ${method}`
    console.log(str)

    // res.end() 响应 客户端请求
    // Res. end() responds to client requests
    res.end(str)

    // 中文乱码问题
    // 当调用 res.end（）方法，向客户端发送中文內容的时候，会出现乱码问题，
    // 此时，需要手动设置内容的编码格式：

    
})

// 4. 启动服务器
// 4. Start the server

server.listen(80, () => {
    console.log('sever running at http://127.0.0.1')
})