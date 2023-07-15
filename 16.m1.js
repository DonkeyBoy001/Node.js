// 当前模块就是一个自定义模块
console.log("加载了06这个用户自己定义模块")

//向 module.exports 对象上挂载 username 属性
module.exports.username = 'zs'

// 向 module.exports 对象上挂载 sayHellg 方法
module.exports.sayHello = function() {
    console.log('Hello!')
}

// 让module.exports 指向一个全新的对象

// module.exports = {
//     nickname: "小黑",
//     sayHi() {
//         console.log("Hi");
//     }
// }

// exports 和 module.exports 一个意思 它们都是指向同一个对象

const nickname = "小黑"
exports.nickname =  nickname
exports.sayHi = function() {
            console.log("Hi");
        }
exports.age = 20
