
const fs = require('fs')

// 出现路径错误问题，是因为出现了 相对路径
// 提供绝对路径 可以 避免这个错误
// fs.readFile('./files/1.txt', 'utf8', function(err, datasStr) {

// if (err) {
// return console.log("读取失败" + err.message)
// }

// console.log('读取成功！' + datasStr)
// })


// __dirname 表示 当前文件所处的目录
// console.log(__dirname)

fs.readFile(__filename + '/files/1.txt', 'utf8', function(err, datasStr) {

if (err) {
return console.log("读取失败" + err.message)
}

console.log('读取成功！' + datasStr)
})

