// const itheima = require('../itheima-tools/index')
const itheima = require('../itheima-tools')

// 格式化时间功能

const dtStr = itheima.dataFormat(new Date())

console.log(dtStr)


const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;<span></h1>'

const str = itheima.htmlEscape(htmlStr)

console.log(str)