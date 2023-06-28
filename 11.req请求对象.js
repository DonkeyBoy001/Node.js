
const http = require('http')

const server = http.createServer()

const res = 
// req是请求对象，包含与客户端相关属性和地址
server.on('request', (req,res) => {

    // req.url 是客户端请求的url地址

    const url = req.url

    // req.method 客户端请求method 类型
    const method = req.method

    const str = `Your request is ${url}, and request method is ${method}`

    console.log(str)


    // res.end() 响应 客户端请求
    res.end(str)

    // 中文乱码问题
    // 当调用 res.end（）方法，向客户端发送中文內容的时候，会出现乱码问题，
    // 此时，需要手动设置内容的编码格式：

    
})


server.listen(80, () => {
    console.log('sever running at http://127.0.0.1')
})