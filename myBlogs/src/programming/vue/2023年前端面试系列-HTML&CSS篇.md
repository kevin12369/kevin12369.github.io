---
icon: edit
date: 2023-05-19
category:
  - 前端面试
tag:
  - HTML&CSS面试题
sticky: true
lastUpdated: true
footer: HTML&CSS 常见面试题总结
---

# HTML&CSS 常见面试题总结

[参考自掘金《2023 前端面试系列--HTML & CSS 篇》](https://juejin.cn/post/7175048315111735352)
[参考自掘金《做了一份前端面试复习计划，保熟～》](https://juejin.cn/post/7061588533214969892)
[参考自掘金《连八股文都不懂还指望在前端混下去么》](https://juejin.cn/post/7016593221815910408)
[参考自掘金《写给女朋友的中级前端面试秘籍（含详细答案，15k 级别）》](https://juejin.cn/post/6844904115428917255)
[参考自 CSDN《[前端基础] HTML5 篇》](https://blog.csdn.net/by6671715/article/details/127599870)

## HTML

## 语义化

1. 语义化，指对文本内容的结构化（内容语义化），选择合乎语义的标签（代码语义化）。
2. 语义化标签：`header`、`nav`、`main`、`article`、`section`、`aside`、`footer`等。
3. 优点：

- 代码结构清晰，易于阅读，有利于维护
- 方便其他设备解析（如：屏幕阅读器）
- 有利于搜索引擎优化（SEO），搜索引擎爬虫会根据不同的标签来赋予不同的权重

建议阅读文章：[百度 IFE 的 H5 语义化文章](https://rainylog.com/post/ife-note-1/)

## script 标签中属性 async 和 defer 的区别？

- `script`：会阻碍 HTML 解析，只有下载好并执行完脚本才会继续解析 HTML。
- `async script`：解析 HTML 的过程中会进行脚本的异步下载，下载成功后立马执行，因此有可能会阻断 HTML 的解析。多个脚本的执行循序无法保证。
- `defer script`：也是异步下载脚本，加载完成后，如果此时 HTML 还没有解析完，浏览器不会暂停解析去执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码，如果存在多个`defer script`标签，浏览器（IE9 及以下除外）会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。

建议阅读文章：[图解 script 标签中的 async 和 defer 属性](https://juejin.cn/post/6894629999215640583)

## DOCTYPE 的作用是什么？

`<!DOCTYPE>`声明一般位于文档的第一行，它的作用主要是告诉浏览器以什么样的模式来解析文档。一般指定了之后会以“标准模式”进行文档解析，否则就以“兼容模式”进行解析。

- 在`标准模式`下，浏览器的解析规则都是按照最新的标准进行解析的。
- 而在`兼容模式`下，浏览器会以向后兼容的方式来模拟老式浏览器的行为，以保证一些老的网站能正常访问。

## SGML、HTML、XML 和 XHTML 的区别？

- `SGML`是标准通用标记语言，是一种定义电子文档结构和描述其内容的伙计标准语言，是所有电子文档标记语言的起源。
- `HTML`是超文本标记语言，主要是用于规定怎样显示网页。
- `XML`是可拓展标记语言，是未来网页语言的发展方向，XML 和 HTML 的最大区别就在于 XML 的标签是可以自己创建的，数量无限多，而 HTML 的标签都是固定的而且数量有限。
- `XHTML`也是现在基本上搜友网页都在用的标记语言，他起始和 HTML 没什么本质的区别，标签都一样，用法也都一样，就是比 HTML 更严格，比如标签必须都用小写，标签都必须有闭合标签等。

## HTML5 有哪些新特性、移除了哪些元素？

HTML5 现在已经不是 SGML 的子集，主要是关于图像、位置存储、多任务等功能的增加。

新增的：

- 绘图`canvas`
- 用于媒介回放的`video`和`audio`元素
- 本地离线存储`localStorage`、`sessionStorage`
- 语义化更好的内容元素，如：`header`、`article`、`nav`、`section`、`footer`等
- 表单控件`calender`、`date`、`time`、`email`、`url`、`search`等
- 新的技术`webworker`、`websocket`
- 新的文档属性`document.visibilityState`

移除的：

- 纯表现的元素：`basefont`、`big`、`center`、`s`、`tt`、`u`
- 对可用性产生负面影响的元素：`frame`、`frameset`、`noframes`

## 对浏览器内核的理解？

主要分为两个部分:渲染引擎和 JS 引擎

- 渲染引擎：其职责就是渲染,即在浏览器窗口中显示所请求的内容。默认情况下，渲染引擎可以显示 HTML、XML 文档及图片，它也可以借助一些浏览器扩展插件显示其他类型数据，如：使用 PDF 阅读器插件可以显示 PDF 格式。

- JS 引擎：解析和执行 JavaScript 来实现网页的动态效果。

## JS 中的作用于和作用域链？

`作用域`，即变量（变量作用域又称上下文）和函数生效（能被访问）的区域或集合。作用域决定了代码区块中变量和其他资源的可见性。一般分为：`全局作用域`、`局部作用域（函数作用域）`、`块级作用域`。

- 全局作用域：任何不在函数中或者是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程的任意位置访问。
- 局部作用域：也叫做函数作用域，如果一个变量是在函数内部声明的，它就在一个函数作用域下面。这些变量只能在函数内部访问，不能再函数以外去访问。
- 块级作用域：凡是代码块就可以划分变量的作用域，这种作用域的规则就叫做块级作用域。

作用域链：当在 JS 中使用一个变量时，JS 引擎会尝试在当前作用域下寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推，直至找到该变量或是查找至全局作用域，如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量（非严格模式下）或是直接报错。

**js 采用的是静态作用域，所以函数的作用域在函数定义时就确定了**

推荐阅读：[JavaScript 深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)

## JS 的预解析？

JS 代码的执行是由浏览器中的 JS 解析器来执行的，JS 解析器执行 JS 代码时，分为两个过程：`预解析过程`和`代码执行过程`。预解析分为`变量预解析（变量提升）`和`函数预解析（函数提升`）；代码执行是指按顺序从上至下执行：

- 变量提升：把变量的声明提升到当前作用域的最前面，只提升声明，不提升赋值；
- 函数提升：把函数的声明提升到当前作用域的最前面，只提升声明，不提升调用；

**函数表达式的写法不存在函数提升**

**函数提升优先级高于变量提升，即函数提升在变量提升之上，且不会被同名变量声明时覆盖，但是会被同名变量赋值后覆盖**

## Array.from()和 Array.of()的使用及区别？

`Array.from()`：将伪数组对象或可遍历对象转换为真数组。接受三个参数：input、map、context。input：待转换的伪数组对象或可遍历对象；map：类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组；context：绑定 map 中用到的 this。

`Array.of()`：将一系列值转换成数组，会创建一个包含所有传入参数的数组，而不管参数的数量与类型，解决了 `new Array()`行为不统一的问题。

## 原型和原型链？

JS 是面向对象的，每个实例对象都有一个`__proto__`属性，概述想指向它的`原型`对象。该实例的构造函数有一个原型属性`prototype`，与实例的`__proto__`属性指向同一个对象。同时，原型对象的`constructor`指向构造函数本身。

[对象原型](./images/对象原型.png '对象原型')

当一个对象在查找一个属性时，自身没有就会根据`__proto__`属性向它的`原型`进行查找，如果还是没有，则向它的`原型`的`原型`继续查找，直至查到`Object.prototype.__proto__`也就是`null`，这样就形成了`原型链`。

推荐阅读：[轻松理解 JS 原型和原型链](https://juejin.cn/post/6844903989088092174)

## 闭包？

在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。可以在一个内层函数中访问到其外层函数的作用域。
闭包就是能够读取其他函数内部变量的函数。主要作用是解决变量污染问题，也可以用来延长局部变量的生命周期。
优点：延长局部变量的生命周期
缺点：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏
推荐阅读：[我从来不理解 JavaScript 闭包，直到有人这样向我解释它](https://juejin.cn/post/6844903858636849159)

## new 操作符的实现机制？

1. 首先创建了一个新的`空对象`
2. `设置原型`，将对象的原型设置为函数的`prototype`对象
3. 让函数的`this`指向这个对象，执行构造函数的代码（为这个对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

```js
function myNew(context) {
  const obj = new Object()
  obj.__proto__ = context.prototype
  const res = context.apply(obj, [...argments].slice(1))
  return typeof res == 'object' ? res : obj
}
```

## this 的理解？

1. 概念：
   `this`是 JS 的一个关键字，它是函数运行时，自动生成的一个内部对象，只能在函数内部使用，随着函数使用场合的不同，`this`的值会发生变化，但有一个总的原则：`this指的是调用函数的那个对象`。
2. this 的指向：
   - 作为普通函数执行时，`this` 指向 `window`，但在严格模式下 `this` 指向 `undefined`。
   - 函数作为对象里的方法被调用时，`this` 指向该对象。
   - 当用`new`运算符调用构造函数时，`this`指向返回的这个对象。
   - 箭头函数的`this`绑定看的是`this`所在函数定义函数定义在哪个对象下，就绑定哪个对象。如果存在嵌套，则`this`绑定到最近的一层对象上。
   - `call()`、`apply()`、`bind()`是函数的三个方法，都可以显示的指定调用函数的 `this` 指向。

## call、apply、bind 的区别以及手写实现

- `call()`可以传递两个参数，第一个参数是指定函数内部中 `this` 的指向，第二个参数是函数调用时需要传递的参数。改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次。

```js
// 实现call方法
Function.protoptype.myCall = function (context) {
  // 判断调用对象
  if (typeof this != 'function') {
    throw new Error('type error')
  }
  // 首先获取参数
  let args = [...arguments].slice(1)
  let res = null
  // 将被调用的方法置入context的属性
  // this 即为要调用的方法
  context.fn = this
  // 执行要被调用的方法
  res = context.fn(...args)
  // 删除手动增加的属性方法
  delete context.fn
  // 执行结果返回
  return res
}
```

- `apply()`接受两个参数，第一个参数是 this 的指向，第二个参数是函数接受的参数，以`数组`的形式传入。改变 `this` 指向后原函数会立即执行,且此方法只是临时改变 `this` 指向一次。

```js
// 实现apply方法
Function.prototype.myApply = function (context) {
  if (typeof this != 'function') {
    throw new Error('type error')
  }
  let res = null
  context = context || window
  // 使用 symbol 来保证属性唯一
  // 也就是保证不会重写用户自己原来定义在 context 中的同名属性
  const fnSymbol = Symbol()
  context[fnSymbol] = this
  // 执行被调用的方法
  if (arguments[1]) {
    res = context[fnSymbol](...arguments[1])
  } else {
    res = context[fnSymbol]()
  }
  delete context[fnSymbol]
  return res
}
```

- `bind()`方法的第一参数也是 `this` 的指向，后面窜如的也是一个参数列表（但是这个参数列表可以分多次传入）。改变 `this` 指向后不会立即执行，而是返回一个永久改变 `this` 指向的函数。

```js
//
Function.prototype.myBind = function (context) {
  if (typeof this != 'function') {
    throw new Error('type error')
  }
  let args = [...arguments].slice(1)
  const fn = this
  return function Fn() {
    return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments))
  }
}
```

共同点：改变函数执行时的上下文，简而言之就是改变函数运行时的 this 指向。
不同点：

- `call()`和 `bind()`第二个参数是列表形式的；`apply()`第二个参数是数组形式。

- `call()`和 `apply()`是立即执行；`bind()`不会立即执行而是生成一个修改 `this` 之后的新函数

## 箭头函数？

1. 箭头函数时定义函数一种新的方式，比普通函数定义更加方便和简单。
2. 箭头函数不绑定 `this，会捕获其所在上下文的` `this`，作为自己的 `this`。
3. 箭头函数不能用作构造函数，也就是说不可以使用 `new` 命令，否则会抛出错误。
4. 箭头函数不绑定 `arguments`，取而代之用 `rest` 参数解决，同时没有 `super` 和 `new.target`。
5. 使用 `call`,`apply`,`bind` 并不会改变箭头函数中的 `this` 指向。对箭头函数使用 `call` 或 `apply` 方法时，只会传入参数并调用函数；对箭头函数使用 `bind` 方法时，只会返回一个预设参数的新函数，并不会改变这个新函数的 `this` 指向。

## 浅拷贝和深拷贝的实现？

`浅拷贝`：如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，拷贝的就是内存地址。即浅拷贝是`拷贝一层`，深层次的引用类型则共享内存地址。常用的方法有：object.assign，扩展运算符等等

```js
var a = { count: 1, deep: { count: 2 } }
var b = Object.assign({}, a)
// 或
var c = { ...a }
// 实现一个浅拷贝
function shallowClone(obj) {
  const newObj = {}
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop]
    }
  }
  return newObj
}
```

`深拷贝`：开辟一个新的栈，两个对象的属性完全相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

```js
/**
 * 深拷贝
 * @param {object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */

function deepClone(obj = {}, map = new Map()) {
  if (obj === null) return obj // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  // 可能是对象或者普通的值 如果是函数的话是不需要深拷贝
  if (typeof obj !== 'object') return obj
  if (map.get(obj)) {
    return map.get(obj)
  }
  let result = {} // 初始化返回的值
  // 加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
  if (obj instanceof Array || Objcet.prototype.toString(obj) === '[object aArray]') {
    return (result = [])
  }
  // 防止循环引用
  map.set(obj, result)
  for (const key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map)
    }
  }
  return result
}
```

## JavaScript 中内存泄漏的几种情况？

内存泄漏一般是指系统进程不在用到的内存，没有及时释放，造成内存资源的浪费，导致程序运行速度慢甚至西永崩溃等严重后果。

造成内存泄漏的原因有：

1. `全局变量。`在局部作用域中，函数执行完毕后，变量就没有存在的必要了，垃圾回收机制很快的做出判断并回收；但是对于全局变量，很难判断什么时候不用这些变量，无法正常回收。

   - 解决办法：
     - 尽量少使用全局变量
     - 使用严格模式，在 js 文件头部或者函数的顶部加上`use strict`。

2. `闭包引起的内存泄漏。`闭包可以读取函数内部的变量，然后让这些变量始终保存在内存中，如果在使用结束后没有将局部变量清除，就可能导致内存泄漏。

   - 解决办法：将事件处理函数定义在外部，解除闭包。

3. `被遗忘的定时器。`定时器 `setInterval` 或者 `setTimeout` 不再需要使用时，且没有被清除，导致定时器的回调函数及其内部依赖的变量都不能被回收，就会造成内存泄漏。

   - 解决办法：当不需要定时器的时候，调用 `clearInterval` 或者 `clearTimeout` 手动清除。

4. `事件监听。`垃圾回收机制不好判断事件是否需要被解除，导致 `callback` 不能被释放，此时需要手动解除绑定。

   - 解决办法：及时使用 `removeEventlistener` 移除事件监听。

5. `元素引用没有清理。`

   - 解决办法：移除元素后，手动设置元素的引用为 `null`。

6. `console。`传递给 `console.log` 的对象是不能被垃圾回收，可能会存在内存泄漏。
   - 解决办法：清除不必要的 `console`。

## 防抖和节流的区别，以及手写实现？

`防抖`：多次触发事件，事件处理函数只执行一次，并且是在触发操作结束时执行。也就是说，当一个事件被触发，准备执行事件函数前，会等待一定的时间，在这个等待时间内，如果，如果没有再次被触发，那么就执行这个事件函数；如果又触发了，那么本次动作作废，重置等待时间，直到最终能执行为止。

主要应用场景：搜索框搜索输入，用户最后一次输入完成后，再发送请求；手机号邮箱严重输入检测。

`节流`：事件触发后，规定时间内，事件处理函数不能再次被调用。也就是说在规定的时间内，函数只能被调用一次，切实最先被出发调用的那次。

主要是应用场景：高频点击、表单重复提交等。

```js
/**
 * 函数类型：防抖函数
 * 函数用途：n 秒后再执行该事件，若在 n 秒内被重复触发，则重新计时
 * @param func 要被防抖的函数
 * @param wait 规定的时间
 */
function debounce(func, wait) {
  let timeout
  return function () {
    let context = this //保持this指向
    let args = arguments //拿到 event 对象

    clearTimeout(timeout) // 清除定时器，释放内存
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}

/**
 * 函数类型：节流函数
 * 函数用途：n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
 * @param fn 要被节流的函数
 * @param wait 规定的时间
 */
function throttled(fn, wait) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait)
    }
  }
}
```

## EventLoop 事件循环？

js 是单线成运行的，当遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行 执行栈中的其他任务。当一个异步事件返回结果后，js 会将这个事件加入与当前执行栈不同的另一个队列--`事件队列(Task Queue)`。被放入事件队列不会立即执行其回调，而是等待当前执行栈中所有任务都执行完毕，主程序处于闲置状态时，主线程会去查找事件队列中是否有任务，如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，遮掩就形成了一个无限的循环，这个过程被称为`事件循环(Event Loop)`。

实际上，异步任务之间并不相同，他们的执行优先级也有区别。一步任务分两类：`微任务(micro task)`和 `宏任务(macro task)`。

微任务包括：`promise` 的回调、node 中的 `process.nextTick`、对 Dom 变化监听的 `MutationObserver`。

宏任务包括：script 脚本的执行，setTimeout、setInterval 和 setImmediate 一类的定时事件，还有 I/O 操作，UI 渲染等。

在一个事件循环中，异步事件返回结果后会被放到一个时间队列中。然而，根据这个异步事件的类型，这个事件实际上会被对应的`宏任务队列`或者`微任务队列`中去。并且在当前执行栈为空的时候，主线程会查看微任务队列是否事件存在。如果不存在，那么再去宏任务队列中取出一个事件并把对应的回调加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈...如此反复，进入循环。

**在当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。**

推荐阅读：

[详解 JavaScript 中的 Event Loop（事件循环）机制](https://zhuanlan.zhihu.com/p/33058983)

[微任务、宏任务与 Event-Loop](https://juejin.cn/post/6844903657264136200)

## Promise？

`Promise` 异步编程的一种解决方案。`Promise` 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是 `pending`（初始状态）、`fulfilled`（成功的操作） 和 `rejected`（失败的操作），分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 fulfilled 或者 rejected 状态，并且状态一经改变，就无法再改变了。状态的改变是通过 `resolve()`和 `reject()`函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态。Promise 的原型上定义了一个 `then()` 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。

推荐阅读：

[Promise 对象](https://es6.ruanyifeng.com/#docs/promise)

[Promise 不会？看这里！！！史上最通俗易懂的 Promise！！！](https://juejin.cn/post/6844903607968481287)

[100 行代码实现 Promises/A+规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)

参考链接

[连八股文都不懂还指望在前端混下去么](https://juejin.cn/post/7016593221815910408)

[做了一份前端面试复习计划，保熟~](https://juejin.cn/post/7061588533214969892)
