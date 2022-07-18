---
title: ESM 和 CJS
---

## 三个差异

1. - CJS 模块输出值拷贝

     > 模块加载以后，它内部变化就影响不到输出的值

   - ES6 模块输出值引用

     > 生成的是只读引用，使用时再取值

1. - CJS 模块运行时加载

     > CJS 加载的是一个对象（即`module.exports`属性）
     >
     > 该对象在模块脚本运行完后生成

   - ES6 模块编译时输出接口

     > 代码静态解析阶段生成

1. - CJS 模块的 require()同步加载模块

     > `require`第一次加载该脚本时执行整个脚本，然后在内存生成一个对象
     >
     > 再次执行`require`命令，也不会再次执行该模块

   - ES6 模块的 import 命令异步加载，有独立的模块依赖解析阶段

     > 脚本静态分析时，遇到模块加载命令`import`，生成一个只读引用

## 语法

### import

#### CJS

```javascript
let _module = require('module-name')

//可以使用析构赋值
let { p1, p2, p3 } = require('module-name')
```

#### ESM

```javascript
//模块使用别名应在配置文件中指定路径
import { p1, p2 } from './file-path.js'
import { p as aliasP } from 'module-name'

//全部引入
import * as aliasP from 'module-name'

//默认引入
import _module from 'module-name'
//或者
import { default as _module } from 'module-name'

//混用
import _module, { p1, p2 } from 'module-name'

//仅执行模块
import 'module-name'
```

### export

#### CJS

```javascript
let varName = 'value'

module.exports = {
    varName: varName;
}
```

#### ESM

```javascript
export let varName = 'value'
export function fName() { ... }

//重命名，可多次输出
let varName = 'value'
function fName() { ... }
export {
	varName as aliasV,
    fName as aliasF1,
    fName as aliasF2
}

//整体输出
let varName = 'value'
function fName() { ... }
export { varName, fName }

//默认输出
export default fName() { ... }
//或者
function fName() { ... }
export { fName as default }
```

### 额外

ES2020 引入了 `import()` 为 ESM 带来运行时加载模块功能

`import()` 接收与 `import` 一致的参数，返回 `Promise`
