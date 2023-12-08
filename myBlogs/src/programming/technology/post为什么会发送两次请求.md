---
icon: edit
date: 2023-12-08
category:
  - Programing
tag:
  - POST
  - 前端技术
  - HTTP
---

# post为什么会发送两次请求？

## post为什么会发送两次请求？

[参考自掘金《京东一面：post为什么会发送两次请求？🤪🤪🤪》](https://juejin.cn/post/7269952188927017015)

在前段时间的一次面试中，被问到了一个如标题这样的问题。要想好好地去回答这个问题，这里牵扯到的知识点也是比较多的。

那么接下来这篇文章我们就一点一点开始引出这个问题。

## 同源策略

来浏览器中，内容是很开放的，任何资源都可以接入其中，如JavaScript文件、图片、音频、视频等资源，甚至可以下载其他站点的可执行文件。

但也不是说浏览器就是完全自有的，如果不加以空值，就会出现一些不可控的局面，例如会出现一些安全问题，如：

- 跨站脚本攻击（XSS）。
- SQL注入攻击。
- OS命令注入攻击。
- HTTP首部注入攻击。
- 跨站点请求伪造（CSRF）。
- 等等......。

如果这些都没有限制的话，对于我们用户而言，是相对危险的，因此需要一些安全策略来保障我们的隐私和数据安全。

这就引出了最基础、最核心的安全策略：同源策略。

### 什么是同源策略

同源策略是一个重要的安全策略，它用于限制一个源的文档或者它加载的脚本如何与另一个源的资源进行交互。

如果两个URL的协议、主机和端口都相同，我们就称这两个URL同源。

-　协议：协议是定义了数据如何在计算机内和之间进行交换的规则的系统，例如HTTP、HTTPS。
-　主机：是已链接到一个计算机网络的一台电子计算机或者其他设备。网络主机可以想网络上的用户或者其他节点提供信息资源、服务和应用。使用TCP、IP协议族参与网络的计算机也可称为IP主机。
-　端口：主机是计算机到计算机之间的通信，那么端口就是进程到进程之间的通信。

如下表给出了与URL`http://store.company.com:80/dir/page.html`的源进行对比的示例：

|URL|结果|原因|
|---|---|---|
|`http://store.company.com:80/dir2/page.html`|同源|只有路径不同|
|`http://store.company.com:80/dir/inner/another.html`|同源|只有路径不同|
|`http://store.company.com:443/secure.html`|不同源|协议不同，HTTP和HTTPS|
|`http://store.company.com:81/dir/etc.html`|不同源|端口不同|
|`http://store.company.com:80/dir/other.html`|不同源|主机不同|

同源策略主要表现在以下三个反面：DOM、Web数据和网络。

- DOM访问限制：同源策略限制了网页脚本（如JavaScript）访问其他源的DOM。这意味着通过脚本无法直接访问跨源页面的DOM元素、属性或方法。这是为了防止恶意网站从其他网站窃取敏感信息。
- Web数据限制：同源策略也限制了从其他源加载的Web数据（例如XMLHttpRequest或Fetch API）。在同源策略下，XMLHttpRequest或Fetch请求只能发送到与当前网页具有相同源的目标。这有助于防止跨站点请求伪造（CSRF）等攻击。
- 网络通信限制：同源策略还限制了跨源的网络通信。浏览器会阻止从一个源发出的请求获取来自其他源的响应。这样做是为了确保只有受信任的源能够与服务器进行通信，以避免恶意行为。

## CORS

对于浏览器限制这个词，要着重解释一下：不一定是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了。

浏览器将不同域的内容隔离在不同的进程中，网络进程负责下载资源并将器送到渲染进程中，但由于跨域限制，某些资源可能被阻止加载到渲染进程。如果浏览器发现一个跨域响应包含了敏感数据，它可能会阻止脚本访问这些数据，即使网络进程已经获得了这些数据。CORB的目标是在渲染之前今早阻止恶意代码获取跨域数据。

> CORB是一种安全机制，用于防止跨域请求恶意访问跨域响应的数据。渲染进程会在CORB机制的约束下，选择性地将哪些资源送入渲染进程供页面使用。

例如，一个网页可能通过AJAX请求从另一个域的服务器获取数据。虽然某然情况下这样的请求可能会成功，但如果浏览器检查到请求返回的数据可能包含恶意代码与同源内测了冲突，浏览器可能会阻止网页访问访问的数据，以确保用户的安全。

跨源资源共享（Cross-Origin Resource Sharing，CORS）是一种机制；允许在受控的条件下，不同源的网页能够请求和共享资源。由于浏览器的同源策略限制了跨域请求，CORS提供了一种方式来解决在Web应用中进行跨域数据交换的问题。

CORS的基本思想是，服务器在响应中提供一个标头（HTTP头），指示哪些源被允许访问资源。浏览器在发起跨域请求时会先发送一个预检请求（**OPTIONS 请求**）到服务器，服务器通过设置适当的CORS表头来指定是否允许跨域请求，并指定允许的请求源、方法、表头等信息。

### 简单请求

不会触发CORS预检请求。这样的请求为`简单请求`。若请求满足所有下述条件，则该请求可视为`简单请求`：

1. HTTP方法限制：之恶能使用GET、FEAD、POST这三种HTTP方法之一。如果请求使用了其他HTTP方法，就不再视为简单请求。

2. 自定义标头限制：请求的HTTP标头只能是以下几种常见的标头：`Accept`、`Accept-Language`、`Content-Language`、`Last-Event-ID`、`Content-Type`（仅限于`application/x-www-form-urlencoded`、`multipart/from-data`、`text/plain`）。HTML头部header field字段：DRP、Download、Save-Data、Viewport-Width、Width。如果请求使用了其他标头，同样不再被视为简单请求。

3. 请求中没有使用ReadableStream对象。

4. 不使用自定义请求标头，请求不能包含用户自定义的标头。

5. 请求中的任意XMLHttpRequestUpload对象均没有注册任何事件监听器；XMLHttpRequestUpload对象可以使用XMLHttpRequest.upload属性访问。

### 预检请求

非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为`预检请求`。

需预检的请求要求必须首先使用OPTIONS方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。`预检请求`的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

例如我们再掘金上删除一条沸点：

```c
[
  { type: 'paren', value: '(' },
  { type: 'name', value: 'add' },
  { type: 'number', value: '2' },
  { type: 'paren', value: '(' },
  { type: 'name', value: 'subtract' },
  { type: 'number', value: '4' },
  { type: 'number', value: '2' },
  { type: 'paren', value: ')' },
  { type: 'paren', value: ')' },
]
```

像这样对中文语句进行了主谓宾的拆解得到了`tokens`，但这并不能帮助我们判断该条语句是否合法，还需要进行**语法解析**。

**语法解析**则是将`tokens`重新整理成语法相互关联的表达形式 ，这种表达形式一般被称为`中间层或者AST（抽象语法树）`。

还是拿语文题目（"_你是猪，_"）来照葫芦画瓢，`(add 2 (subtract 4 2))` 进行语法解析后得到的 AST：

```js
{
  type: 'Program',
  body: [{
    type: 'CallExpression',
    name: 'add',
    params:
      [{
        type: 'NumberLiteral',
        value: '2',
      },
      {
        type: 'CallExpression',
        name: 'subtract',
        params: [{
          type: 'NumberLiteral',
          value: '4',
        }, {
          type: 'NumberLiteral',
          value: '2',
        }]
      }]
  }]
}
```

#### Transfromer（转化）

这个过程主要是改写`AST（抽象语法树）`，`或者根据当前AST（抽象语法树）生成一个新的AST（抽象语法树）`，这个过程可以是相同语言，或者可以直接将 AST（抽象语法树）翻译为其他语言。

注意看上述生成的 AST（抽象语法树），有一些特殊的对象，都具有自己的类型描述，他们就是这个“树”上的节点，如下所示:

```js
// 数字片段节点
{
   type: 'NumberLiteral',
   value: '2',
}

// 调用语句节点
 {
   type: 'CallExpression',
   name: 'subtract',
   params: [{
     type: 'NumberLiteral', // 数字片段节点
     value: '4',
   }, {
     type: 'NumberLiteral', // 数字片段节点
     value: '2',
   }]
 }
```

在案例中我们是想将 lisp 语言转化为 C 语言，因此需要构建一个新的 AST（抽象语法树），这个创建的过程就需要遍历这个“树”的节点并读取其内容，由此引出 **Traversal(遍历)** 和 **Visitors (访问器)**。

**Traversal(遍历)**：顾名思义这个过程就是，遍历这个 AST（抽象语法树）的所有节点，这个过程使用 深度优先原则，大概执行顺序如下：

```js
const ast = {
  type: 'Program', // 进入Program - 最顶层开始
  body: [
    {
      // 进入 CallExpression (add)
      type: 'CallExpression',
      name: 'add',
      params: [
        {
          // 进入 NumberLiteral (2)
          type: 'NumberLiteral',
          value: '2',
        }, // 离开 NumberLiteral (2)
        {
          //进入 CallExpression (subtract)
          type: 'CallExpression',
          name: 'subtract',
          params: [
            {
              //进入 NumberLiteral (4)
              type: 'NumberLiteral',
              value: '4',
            }, //离开 NumberLiteral (4)
            {
              //进入 NumberLiteral (2)
              type: 'NumberLiteral',
              value: '2',
            }, //离开 NumberLiteral (2)
          ],
        }, //离开 CallExpression (subtract)
      ],
    }, //离开 CallExpression (add)
  ], //离开 Program
}
```

**Visitors (访问器)**：访问器最基本的思想是创建一个“访问器”对象，这个对象可以处理不同类型的节点函数,如下所示:

```js
const visitor = {
  NumberLiteral(node, parent) {}, // 处理数字类型节点
  CallExpression(node, parent) {}, // 处理调用语句类型节点
}
```

在遍历节点的时候，**当 enter (进入)到该节点，我们会调用访问器，然后会调用针对于这个节点的相关函数**，同时这个节点和其父节点作为参数传入。

同时在**exit（离开）的时候我们也希望能够调用访问器**，当 enter 一个节点的时候，最外层节点就相当于一个分支，他是一个节点，这个分支的内部依然存在若干节点，就像上边遍历的那样。

我们会按照`深度优先的原则`，依次遍历到这个分支的最内层，当达到最内层的时候，针对当前分支的访问就完成了，接着会依次 exit（退出）节点，这个过程是由内向外的。

为了能够处理到 enter 和 exit，访问器最终会做成这个样子

```js
const visitor = {
  NumberLiteral: {
    enter(node, parent) {},
    exit(node, parent) {},
  },
}``
```

#### Code Generation(生成代码)

最后就是代码生成阶段了，`其实就是将生成的新AST树再转回代码的过程`。大部分的代码生成器主要过程是，不断的访问 Transformation 生成的 AST(抽象语法树)或者再结合 tokens，按照指定的规则，将“树”上的节点打印拼接最终还原为新的 code，自此编译器的执行过程就结束了。

### 原理篇

接下来按照上述步骤，开始手写编译器。

#### 生成 Tokens

第一步: 将代码解析为 tokens。这个过程需要 tokenzier(分词器)函数，整体思路就是通过遍历字符串的方式，对每个字符按照一定的规则进行 switch case，最终生成 tokens 数组。

```js
function tokenizer(input) {
  let current = 0 //记录当前访问的位置
  let tokens = [] // 最终生成的tokens
  // 循环遍历input
  while (current < input.length) {
    let char = input[current]
    // 如果字符是开括号，我们把一个新的token放到tokens数组里，类型是`paren`
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      })
      current++
      continue
    }
    // 闭括号做同样的操作
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      })
      current++
      continue
    }
    //空格检查，我们关心空格在分隔字符上是否存在，但是在token中他是无意义的
    let WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      current++
      continue
    }
    //接下来检测数字，这里解释下 如果发现是数字我们如 add 22 33 这样
    //我们是不希望被解析为2、2、3、3这样的，我们要遇到数字后继续向后匹配直到匹配失败
    //这样我们就能截取到连续的数字了
    let NUMBERS = /[0-9]/
    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({ type: 'number', value })
      continue
    }

    // 接下来检测字符串,这里我们只检测双引号，和上述同理也是截取连续完整的字符串
    if (char === '"') {
      let value = ''
      char = input[++current]
      while (char !== '"') {
        value += char
        char = input[++current]
      }
      char = input[++current]
      tokens.push({ type: 'string', value })
      continue
    }
    // 最后一个检测的是name 如add这样，也是一串连续的字符，但是他是没有“”的
    let LETTERS = /[a-z]/i
    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({ type: 'name', value })
      continue
    }
    // 容错处理，如果我们什么都没有匹配到，说明这个token不在我们的解析范围内
    throw new TypeError('I dont know what this character is: ' + char)
  }
  return tokens
}
```

#### 生成 AST

第二步： 将生成好的`tokens`转化为`AST`。现在需要定义 parser 函数，接收上一步处理好的`tokens`：

```js
function parser(tokens) {
  let current = 0 //访问tokens的下标

  //walk函数辅助我们遍历整个tokens
  function walk() {
    let token = tokens[current]
    // 现在就是遍历出每一个token，根据其类型生成对应的节点
    if (token.type === 'number') {
      current++
      return {
        type: 'NumberLiteral',
        value: token.value,
      }
    }
    if (token.type === 'string') {
      current++
      return {
        type: 'StringLiteral',
        value: token.value,
      }
    }
    //这里处理调用语句
    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current]
      //这里以一个例子解释(add 2 3) 这样的代码 "(" 就是 paren token ，而接下来的node其实就是那个 name 类型的token "add"
      let node = {
        type: 'CallExpression',
        value: token.value,
        params: [],
      }
      //获取name后我们需要继续获取接下来调用语句中的参数，直到我们遇到了")",这里会存在嵌套的现象如下
      // (add 2 (subtract 4 2))
      /*
        [                                        
          { type: 'paren', value: '(' },       
          { type: 'name', value: 'add' },      
          { type: 'number', value: '2' },      
          { type: 'paren', value: '(' },       
          { type: 'name', value: 'subtract' }, 
          { type: 'number', value: '4' },      
          { type: 'number', value: '2' },      
          { type: 'paren', value: ')' },       
          { type: 'paren', value: ')' },       
        ]
      */
      token = tokens[++current]
      //这里我们通过递归调用不断的读取参数
      while (token.type !== 'paren' || (token.type === 'paren' && token.value !== ')')) {
        node.params.push(walk())
        token = tokens[current] //因为参数的if判断里会让 current++ 实际上就是持续向后遍历了tokens,然后将参数推入params
      }
      // 当while中断后就说明参数读取完了，现在下一个应该是")"，所以我们++越过
      current++
      return node // 最终将CallExpression节点返回了
    }
    //当然这里做了容错处理，如果没有匹配到预计的类型，就说明出现了，parse无法识别的token
    throw new TypeError(token.type)
  }
  // 现在我们创建AST，树的最根层就是Program
  let ast = {
    type: 'Program',
    body: [],
  }
  //然后我们通过调用walk遍历tokens将tokens内的对象，转化为AST的节点，完成AST的构建
  while (current < tokens.length) {
    ast.body.push(walk())
  }
  return ast
}
```

#### 遍历和访问生成好的 AST

现在已经有 AST 了，然后我们希望能够通过访问器访问不同的节点，当遇到不同的节点的时候，调用访问器的不同函数，大致设计成这样：

```js
//  traverse(ast,visitor) 迭代器(抽象语法树，访问器)
traverse(ast, {
  Program: {
    enter(node, parent) {
      // ...
    },
    exit(node, parent) {
      // ...
    },
  },
  CallExpression: {
    enter(node, parent) {
      // ...
    },
    exit(node, parent) {
      // ...
    },
  },
  NumberLiteral: {
    enter(node, parent) {
      // ...
    },
    exit(node, parent) {
      // ...
    },
  },
})
```

接下来实现`traverser`函数：

```js
function traverser(ast, visitor) {
  //遍历数组，在遍历数组的同时会调用traverseNode来遍历节点
  function traverseArray(array, parent) {
    array.forEach((child) => {
      traverseNode(child, parent)
    })
  }
  function traverseNode(node, parent) {
    // 判断访问器中是否有合适处理该节点的函数
    let methods = visitor[node.type]
    // 如果有就执行enter函数，因为此时已经进入这个节点了
    if (methods && methods.enter) {
      methods.enter(node, parent)
    }
    //接下来就根据node节点类型来处理了
    switch (node.type) {
      case 'Program':
        traverseArray(node.body, node) //如果你是ast的根部，就相当于树根，body中的每一项都是一个分支
        break
      case 'CallExpression':
        traverseArray(node.params, node) //这个和Program一样处理，但是这里是为了遍历params,上面是为了遍历分支
        break
      // 字符串和数字没有子节点需要访问直接跳过
      case 'NumberLiteral':
      case 'StringLiteral':
        break
      // 最后容错处理
      default:
        throw new TypeError(node.type)
    }
    // 当执行到这里时，说明该节点（分支）已经遍历到尽头了，执行exit
    if (methods && methods.exit) {
      methods.exit(node, parent)
    }
  }
  //我们从ast开始进行节点遍历，因为ast没有父节点所以传入null
  traverseNode(ast, null)
}
```

#### Transformer 转化

现在已经生成好 AST 了。在这一步需要使用到转换器，帮助我们将刚才生成的 AST 转化为新的 AST。`在转化之前，必须要明确转化后的AST长什么样`，记得之前的案例：

```md
LISP 代码 (add 2 (subtract 4 2))
C 代码 add(2, subtract(4, 2))
```

将原来的 AST 转化为目标 AST，数据结构如下：

```css
*   Original AST                     |   Transformed AST
* ----------------------------------------------------------------------------
*   {                                |   {
*     type: 'Program',               |     type: 'Program',
*     body: [{                       |     body: [{
*       type: 'CallExpression',      |       type: 'ExpressionStatement',
*       name: 'add',                 |       expression: {
*       params: [{                   |         type: 'CallExpression',
*         type: 'NumberLiteral',     |         callee: {
*         value: '2'                 |           type: 'Identifier',
*       }, {                         |           name: 'add'
*         type: 'CallExpression',    |         },
*         name: 'subtract',          |         arguments: [{
*         params: [{                 |           type: 'NumberLiteral',
*           type: 'NumberLiteral',   |           value: '2'
*           value: '4'               |         }, {
*         }, {                       |           type: 'CallExpression',
*           type: 'NumberLiteral',   |           callee: {
*           value: '2'               |             type: 'Identifier',
*         }]                         |             name: 'subtract'
*       }]                           |           },
*     }]                             |           arguments: [{
*   }                                |             type: 'NumberLiteral',
*                                    |             value: '4'
* ---------------------------------- |           }, {
*                                    |             type: 'NumberLiteral',
*                                    |             value: '2'
*                                    |           }]
*                                    |         }
*                                    |       }
*                                    |     }]
*                                    |   }
```

具体代码实现：

```js
function transformer(ast) {
  // 将要被返回的新的AST
  let newAst = {
    type: 'Program',
    body: [],
  }
  // 这里相当于将在旧的AST上创建一个_content,这个属性就是新AST的body，因为是引用，所以后面可以直接操作就的AST
  ast._context = newAst.body
  // 用之前创建的访问器来访问这个AST的所有节点
  traverser(ast, {
    // 针对于数字片段的处理
    NumberLiteral: {
      enter(node, parent) {
        // 创建一个新的节点，其实就是创建新AST的节点，这个新节点存在于父节点的body中
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        })
      },
    },

    // 针对于文字片段的处理
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        })
      },
    },

    // 对调用语句的处理
    CallExpression: {
      enter(node, parent) {
        // 在新的AST中如果是调用语句，type是`CallExpression`，同时他还有一个`Identifier`，来标识操作
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.value,
          },
          arguments: [],
        }
        // 在原来的节点上再创建一个新的属性，用于存放参数 这样当子节点修改_context时，会同步到expression.arguments中，这里用的是同一个内存地址
        node._context = expression.arguments
        // 这里需要判断父节点是否是调用语句，如果不是，那么就使用`ExpressionStatement`将`CallExpression`包裹，因为js中顶层的`CallExpression`是有效语句
        if (parent.type !== 'CallExpression') {
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          }
        }
        parent._context.push(expression)
      },
    },
  })
  return newAst
}
```

#### 新代码生成

最后一步： 新代码生成。`到这一步就是用新的AST，遍历其每一个节点，根据指定规则生成最终新的代码`。

```js
function codeGenerator(node) {
  // 我们以节点的种类拆解(语法树)
  switch (node.type) {
    // 如果是Progame,那么就是AST的最根部了，他的body中的每一项就是一个分支，我们需要将每一个分支都放入代码生成器中
    case 'Program':
      return node.body.map(codeGenerator).join('\n')
    // 如果是声明语句注意看新的AST结构，那么在声明语句中expression，就是声明的标示，我们以他为参数再次调用codeGenerator
    case 'ExpressionStatement':
      return codeGenerator(node.expression) + ';'
    // 如果是调用语句，我们需要打印出调用者的名字加括号，中间放置参数如生成这样"add(2,2)",
    case 'CallExpression':
      return codeGenerator(node.callee) + '(' + node.arguments.map(codeGenerator).join(', ') + ')'

    // 如果是识别就直接返回值 如： (add 2 2),在新AST中 add就是那个identifier节点
    case 'Identifier':
      return node.name
    // 如果是数字就直接返回值
    case 'NumberLiteral':
      return node.value
    // 如果是文本就给值加个双引号
    case 'StringLiteral':
      return '"' + node.value + '"'
    // 容错处理
    default:
      throw new TypeError(node.type)
  }
}
```

最终按照上面的步骤`实现compiler完成这个微型编译器`,注意这个过程的顺序。

```js
function compiler(input) {
  let tokens = tokenizer(input) //生成tokens
  let ast = parser(tokens) //生成ast
  let newAst = transformer(ast) //拿到新的ast
  let output = codeGenerator(newAst) //生成新代码
  return output
}
```

代码演示:

```js
const input = '(update 4 (ChatGPT 23 2 17 (English 12 25)))'
console.log(compiler(input))
```

运行结果:

```cmd
C:\Users\admin\Desktop\test>node ast.js
update(4, ChatGPT(23, 2, 17, English(12, 25)));
```

#### 小结

通过运行以上代码，我们可以充分了解到代码编译器从词法解析拆解源代码，到语法解析生成 AST 抽象语法树，再到 AST 抽象语法树校验分析代码，再转换成新的 AST，最终生成新的代码的过程，以及编译器原理的代码设计思想。

## AST 的广泛应用

在讲 AST 的广泛应用之前，我们先来了解一下 [Babel](https://babeljs.io/docs/ 'Babel') 是什么？以免一部分同学不熟悉，影响后面的学习。

`Babel` 其实就是一个最常用的 Javascript 编译器，它能够转译 `ECMAScript 2015+` 的代码，使它在旧的浏览器或者环境中也能够运行，工作过程分为三个部分（其实就跟我们上面手写的一样，相信大家现在肯定倍感亲切）：

- Parse(解析) 将源代码转换成抽象语法树，树上有很多的 `estree` 节点
- Transform(转换) 对抽象语法树进行转换
- Generate(代码生成) 将上一步经过转换过的抽象语法树生成新的代码

当然我们现在不用从零开始手写了，可以借助于 babel 插件：

@babel/parser 可以把源码转换成 AST
@babel/traverse 用于对 AST 的遍历，维护了整棵树的状态，并且负责替换、移除和添加节点
@babel/generate 可以把 AST 生成源码，同时生成 sourcemap
@babel/types 用于 AST 节点的 Lodash 式工具库, 它包含了构造、验证以及变换 AST 节点的方法，对编写处理 AST 逻辑非常有用
@babel/core Babel 的编译器，核心 API 都在这里面，比如常见的 transform、parse，并实现了插件功能
先安装：

```shell
# 里面就包含了@babel/parser、@babel/traverse、@babel/generate、@babel/types等
yarn add @babel/core -D

或者

npm install --save-dev @babel/core
```

### 小试牛刀：使用 Babel 修改函数名

上面铺垫了这么多，现在开始进入实战演习。

要求：借助 Babel 给函数重命名。

```js
//源代码
const hello = () => {}
//需要修改为：
const world = () => {}
```

根据前面学过的知识点，我们先来整理下思路：

先将源代码转化成 `AST`
遍历 `AST` 上的节点，找到 `hello` 函数名节点并修改
将转换过的 `AST` 再生成 `JS` 代码
将源代码拷贝到 [在线 ast 转换器](https://astexplorer.net/ '在线 ast 转换器') 中，查看 `hello` 函数名节点：

```js
Program  {
  type: "Program"
  start: 0
  end: 22
  body:  [
    VariableDeclaration  {
      type: "VariableDeclaration"
      start: 0
      end: 22
      declarations:  [
        VariableDeclarator  {
        type: "VariableDeclarator"
        start: 6
        end: 22
        id: Identifier  {
            type: "Identifier"
            start: 6
            end: 11
            name: "hello" // ←函数名称
        }
        init: ArrowFunctionExpression {type, start, end, id, expression, ... +4}
        }
      ]
      kind: "const"
    }
  ]
  sourceType: "module"
}
```

接下来再看看目标函数的 AST，和原函数的 AST 做个比较：

```js
Program  {
  type: "Program"
  start: 0
  end: 22
  body:  [
    VariableDeclaration  {
    type: "VariableDeclaration"
    start: 0
    end: 22
    declarations:  [
      VariableDeclarator  {
      type: "VariableDeclarator"
      start: 6
      end: 22
      id: Identifier  {
        type: "Identifier"
        start: 6
        end: 11
        name: "world" // ←函数名称
      }
      init: ArrowFunctionExpression {type, start, end, id, expression, ... +4}
      }
    ]
    kind: "const"
    }
  ]
  sourceType: "module"
}
```

现在我们已经有了思路：只需要将该节点的 name 字段修改即可。

该例子比较简单，直接上代码：

```js
const parser = require('@babel/parser')
const traverse = require('@babel/traverse')
const generator = require('@babel/generator')

// 源代码
const code = `
const hello = () => {};
`

// 1. 源代码解析成 ast
const ast = parser.parse(code)

// 2. 转换
const visitor = {
  // traverse 会遍历树节点，只要节点的 type 在 visitor 对象中出现，变化调用该方法
  Identifier(path) {
    const { node } = path //从path中解析出当前 AST 节点
    if (node.name === 'hello') {
      node.name = 'world' //找到hello的节点，替换成world
    }
  },
}
traverse.default(ast, visitor)

// 3. 生成
const result = generator.default(ast, {}, code)

console.log(result.code) //const world = () => {};
```
