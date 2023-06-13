
// 1.导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件内容

fs.readFile('./files/成绩.txt', 'utf8', function(err, datasStr){

    // 3. 判断是否读取成功

    if (err) {
        return console.log('读取文件失败！' + err.message)
    }

    // console.log('读取文件成功' + datasStr)

    // 4.1 先把成绩的数据，按照空格进行分割
    const arrOld = datasStr.split(' ')

    // 4.2 循环分割后的数组，对母一项数据，进行字符串的替换操作
    
    const arrNew = []

    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '))
    })

    const newStr = arrNew.join('\r\n');
    // console.log(newStr)

    // 5. 调用 fs.writefile()方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('./files/grades.txt', newStr, function(err) {

        if (err) {
            return console.log("写入失败" + err.message)
        }

        console.log('写入成功!')
    })

})
    
