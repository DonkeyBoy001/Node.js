
// 导入path包
const path = require('path')
// //  ../ 会抵消前面的路径
// const pathStr = path.join('/a', '/b/c', '../', './d', 'e')

// console.log(pathStr)  //  /a/b/d/e

// 导入fs
const fs = require('fs')

fs.readFile(path.join(__dirname, '/files/1.txt'),'utf8', function(err, dataStr){
    if (err) {
        return console.log(err.message)
    }
    console.log(dataStr)
})