
// 3. npm 和 包

// 3. 1 包
// 包：Nodejs 中的第三方模块
// 包来源：第三方开发

// 哪里下载包
// https://www.npmjs.com
// https://registry.npmjs.org/

// npm -v 查看npm包管理工具



// 体验格式化时间包
// 0 npm install 包名 
// 简写 npm i 包名
// 1 使用 npm 包管理工具，在项目中安装格式化时间的包 moment

// 2 使用 require 导入格式化时间的包

// 3 参考moment 的官方 API文档对时间进行格式化


const moment = require('moment')

const dt = moment().format(`YYYY-MM-DD HH:mm:ss`)


console.log(dt)