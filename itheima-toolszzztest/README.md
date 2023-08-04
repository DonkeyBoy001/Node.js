## Install

```
npm install itheima-tools
```

## Import
```js
const itheima = require('itheima-tools')
```


## Date Formation
```js
// 调用dataFormat 进行格式化
const dtStr = itheima.dataFormat(new Date())

console.log(dtStr)
```

## Escaping the Special sub symbol in HTML
```js
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;<span></h1>'

const str = itheima.htmlEscape(htmlStr)

console.log(str)
```

## Open source protocol
ISC