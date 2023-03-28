---
icon: edit
date: 2022-01-01
category:
  - Programing
tag:
  - AST
  - 抽象语法树
  - JavaScript
---

# 跟着大佬学前端之 AST（抽象语法树）

## 前端工程化基石 -- AST（抽象语法树）以及 AST 的广泛应用

[参考自掘金《前端工程化基石 -- AST（抽象语法树）以及 AST 的广泛应用》](https://juejin.cn/post/7155151377013047304)

在本文中我们将会深挖 AST（抽象语法树）以及基于 AST 衍生出来的一系列实际应用。
读完本章你会收获什么：

- AST（抽象语法树） 到底是什么？
- AST 基础：从零到一手撸一个功能完备的编译器
- AST 基础：Babel 的设计理念
- AST 的应用：手写 console 插件，再也不怕打开控制台满屏的 console 了 😭😭😭
- AST 的应用： ES6 是如何转成 ES5 的？
- AST 的应用：30 行代码依靠 AST 实现代码压缩
- AST 的应用：40 行代码知晓 ESLint 的工作原理
- AST 的应用：手写 按需加载插件 ，同事看了都说 666
- AST 的应用：手写 Typescript 代码检测插件（fork-ts-checker-webpack-plugin），原来 TS 语法检测如此简单
- 其他延伸：结合 AST 手写监控系统中的日志上传插件
- 其他延伸：教你玩转 AST，最佳实践

## AST（抽象语法树） 到底是什么？

抽象语法树（Abstract Syntax Tree，AST）是源代码语法结构的一种抽象表示，它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。在代码语法的检查、代码风格的检查、代码的格式化、代码的高亮、代码错误提示、代码自动补全等等场景均有广泛的应用。

以前我们在做小学语文题时，经常会做到的一种题型就是在一句话中找出不恰当的部分，比如："你是猪，"

解题方法通常是：

- 第一步：找出语句中的主语、谓语、宾语。
- 第二步：找出语句中的形容词、动词、标点符号等进行分析。

如果将其程序化，我们按照上面的方法可以先将其进行拆分成这样：

```c
[
  { type: '主语', value: '你' },
  { type: '谓语', value: '是' },
  { type: '宾语', value: '猪' },
  { type: '标点符号', value: '，' },
]
```

在这一步骤中可以很快的发现第一个错误：在句末使用的是一个逗号 ❌，实际应该使用句号。

接着再对主语、谓语、宾语中的词语进行依次分析，将数据结构整理成这样：

```js
 {
  type: "语句",
  body: {
    type: "肯定陈述句",
    declarations: [
      {
        type: "声明",
        person: {
          type: "Identifier",
          name: "你",
        },
        name: {
          type: "animal",
          value: "猪",
        },
      },
    ],
  },
};
```

在这个结构中我们发现：在一个肯定陈述句中，将一个人比作一个猪 🐷，显然不合适...❌，因此找出第二个错误。

在上面这个简单的例子中，其实和 AST 的生成和应用就颇为相似，`AST是源代码的抽象语法结构的树状表现形式，简单点就是一个深度嵌套对象，这个对象能够描述我们书写代码的所有信息`。

为了帮大家加深理解，接下来我将手牵手带大家撸一个小型的编译器。

## 手写编译器

该小节分为两个部分：设计篇和原理篇。

设计篇侧重整体设计，原理篇则是手撕代码，侧重编码实现，在阅读过程中建议将重心放在设计篇，学习思想最重要。

### 设计篇

#### 整体流程

一个完整的编译器整体执行过程可以分为三个步骤：

1. Parsing(解析过程)：这个过程要经词法分析、语法分析、构建 AST（抽象语法树）一系列操作；

2. Transformation（转化过程）：这个过程就是将上一步解析后的内容，按照编译器指定的规则进行处理，形成一个新的表现形式；

3. Code Generation（代码生成）：将上一步处理好的内容转化为新的代码；

如图所示，不喜欢看字的就看图：

!['编译器原理'](./images/AST抽象语法树-编译器原理.png '编译器原理')

接下来，我们先看一个小 Demo，将 lisp 的函数调用编译成类似 C 的函数，如果你不熟悉也没关系，看完下面的代码相信大家能够快速的理解：

```md
LISP 代码： (add 2 (subtract 4 2))
C 代码： add(2, subtract(4, 2))
代码 释义： 2 + （ 4 - 2 ）
```

#### Parsing（解析）

解析过程分为 2 个步骤：`词法分析`、`语法分析`。

**词法分析** 是使用`tokenizer(分词器)`或者`lexer(词法分析器)`，将源码拆分成`tokens`，tokens 是一个放置对象的数组，其中的每一个对象都可以看做是一个单元（数字，标签，标点，操作符...）的描述信息。

结合最开始做的语文题目（_"你是猪，"_），我们照葫芦画瓢，对`(add 2 (subtract 4 2))` 进行词法分析后得到：

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
