// 在每个js自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息，
console.log(module)

// module.exports 对象
//  向外共享成员

const m = require('./16.m1')

console.log(m) //  exports: {}

// 在外界使用require方法，使用自定义模块，得到的永远是是 module.exports所指向的对象
console.log(exports == module.exports)



// 小节
// CommonJS 规定
// 每个模块内部，module 变量代表当前模块。
// module 变量是一个对象，它的 exports 属性(即 module。exports）是对外的接口。
// 加载某个模块，其实是加载该模块的 module。exports 属性。require0 方法用于加载模块。