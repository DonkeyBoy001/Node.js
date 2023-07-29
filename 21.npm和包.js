
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
// 后面加@ 指定版本
// 1 使用 npm 包管理工具，在项目中安装格式化时间的包 moment

// 2 使用 require 导入格式化时间的包

// 3 参考moment 的官方 API文档对时间进行格式化

/*
包的版本号是以”点分十进制”形式进行定义的，总共有三位数字，例如 2.24.0 其中每一位数字所代表的的含义如下：

第1位数字：大版本

第2位数字：功能版本

第3位数字：Bug修复版本

只要前面的版本号增长了，则后面的版本号归零。

npm 规定，在项目根目录中，必须提供一个叫做 package。json 的包管理配置文件。用来记录与项目有关的一些配置信息。
*/

/* 多人协作问题

第三方包： 体积过大，不方便成员之间共享代码。

共享时， 剔除 node_modules

如何记录项目安装了哪些 第三方包
项目根目录 package.json文件 记录

因此， 今后 开发 要把node_modules文件，添加到.gitgnore忽略文件中

*/


// 快速创建 package.json文件
// npm init -y


// 如何一次性 安装 多个包
// npm install
// 简写 npm i

// 执行 npm install 命令时，npm 包管理工具会先读取 package.json 中的 dependencies节点，
// 读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性 下载到项目中


// 卸载包
// npm uninstall

/*
那些被安装到项目的 node modules 目录中的包，都是项目包。

项目包又分为两类，分别是：

开发依赖包（被记录到 devDependencies 节点中的包，只在开发期间会用到） 
核心依赖包（被记录到 dependencies 节点中的包，在开发期问和项目上线之后都会用到）
*/

// deDependencites节点

/*
如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies 节点中。

与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。
*/

// npm i 包名 -D


// 3.5 包的分类

// 全局包
// npm install 包名 -g
/*
只有工具性质包， 才有全局安装必要性
*/


// i5ting_toc 包
/*
功能：可以将 .md文件 转为 html
安装：  npm install -g i5ting_toc

调用 i5ting_toc，轻松实现 md 转 html 的功能
i5ting_toc -f 要转换的md文件路径 -o
*/


/*
包的分类 总结
被安装到项目的 node modules 目录中的包，都是项目包。

项目包又分：

开发依赖包（被记录到 devDependencies 节点中的包，只在开发期间会用到） 
npm i 包名 -D 开发依赖包（会被记录到 devDependencies 节点下）

核心依赖包（被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到）
npm i 包名 # 核心依赖包（会被记录到 dependencies 节点下）


包的规范
在module 目录下 单独目录存在
                包的目录下，包含package.json
                            package.json 包含 name， version main 名字 版本 包入口
*/




const moment = require('moment')

const dt = moment().format(`YYYY-MM-DD HH:mm:ss`)

console.log(dt) 

