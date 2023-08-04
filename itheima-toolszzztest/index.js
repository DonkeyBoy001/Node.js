

// This the entrance of package

const date = require('./src/dateFormate')
const escape = require('./src/htmlEscape')

// Expose the required members
// ... 表示 展开 该对象的所有属性
module.exports = {
    ...date,
    ...escape
};


/*
将不同的功能进行模块化拆分

将格式化时间的功能，拆分到 src -> dateformatjs 中

将处理 HTML字符串的功能，拆分到 src -> htmlEscape.js 中
在indexjs 中，导入两个模块，得到需要向外共享的方法在indexjs 中，
使用 module.exports 把对应的方法共享出去
*/

/*
编写自己的README.md 文件

我们所创建的这个包的 README.md 文档中，会包含以下5项内容：
安装方式、
导入方式、
格式化时间、
转义 HTML 中的特殊字符、
开源协议
*/