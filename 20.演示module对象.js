// 在每个js自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息，
console.log(module)

// module.exports 对象
//  向外共享成员

const m = require('./16.m1')

console.log(m) //  exports: {}

// 在外界使用require方法，使用自定义模块，得到的成员是 module.exports所指向的对象

console.log(exports == module.exports)