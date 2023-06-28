/* 
1. 创建两个正则表达式，分别用来匹配 <style> 和 <script> 标签

使用 fs模块，读取需要被处理的 HTML 文件

自定义 resolveCSS 方法，来写入 index。css 样式文件

自定义 resolveJS 方法，来写入 index js 脚本文件

自定义 resolveHTML 方法，来写入 index。html 文件
*/

// 1. 创建两个正则表达式，分别用来匹配 <style> 和 <script> 标签
// 1.1 导入 fs模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')
// 1.3 定义正则表达式，分别匹配 <stylex</style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/


// 2. 使用 fs模块，读取需要被处理的 HTML 文件

// 2.1 调用 fs.readFile()方法读取文件

fs.readFile(path.join(__dirname, './素材/index.html'), 'utf8', function(err, dataStr) {
    // 2.2 读取 HTML 文件失败
    if (err) return console.log("读取HTML文件失败!" + err.message)
    // 2.3 读取文件成功调 用对应的三个方法，分别拆解出 css， js， html 文件
    resolveCSS(dataStr)
})

// 3.1定义处理css样式的方法
function resolveCSS(htmlStr) {

    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)

    // console.log(r1)

    // 3.3 将提取出来的 进行替换操作

    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    // console.log(newCSS)

    // 3.4 调用fs.writeFile() 写入clock file中 index.css 文件
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err){
        if (err) console.log("写入失败" + err.message)

        console.log("写入成功")
    })
}

// 小节
// fs.writeFile() 方法只能用来创建文件，不能用来创建路径
// 重复调用 fs.writefile() 写入同一个文件，新写入的内容会覆盖之前的旧内容