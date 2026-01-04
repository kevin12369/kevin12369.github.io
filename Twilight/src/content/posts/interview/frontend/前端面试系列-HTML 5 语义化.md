---
title: 'HTML 5 语义化（2025版）'
description: '[IFE-NOTE：页面结构语义化 | 雨落 (rainylog.com)](https://rainylog.com/post/ife-note-1/)'
published: 2024-01-01

category: '未分类'
tags: []
draft: false
---


# HTML 5 语义化（2025版）

[IFE-NOTE：页面结构语义化 | 雨落 (rainylog.com)](https://rainylog.com/post/ife-note-1/)

## 什么是语义化？

语义化是指使用恰当的HTML标签来描述内容的含义和结构，而不仅仅是外观。语义化的核心思想是：**用正确的标签做正确的事情**。

**语义化包括两个层面**：
1. **内容语义化**：使用恰当的标签来描述内容的含义
2. **代码语义化**：编写清晰、易于理解的代码结构

## 为什么需要语义化？

1. **可访问性（Accessibility）**：
   - 屏幕阅读器能够更好地解析页面结构
   - 键盘导航更加友好
   - 帮助视障用户理解页面内容

2. **SEO优化**：
   - 搜索引擎能够更好地理解页面内容
   - 提高页面在搜索结果中的排名
   - 更好的结构化数据支持

3. **代码可维护性**：
   - 代码结构清晰，易于阅读
   - 降低团队协作成本
   - 便于后期维护和修改

4. **面向未来**：
   - 浏览器在未来可能提供更丰富的支持
   - 更好的API集成
   - 更智能的内容处理

## HTML5语义化标签

### 页面结构标签

#### `<header>`

**用途**：表示页面或区块的头部

**特点**：
- 可以包含标题、logo、导航等
- 一个页面可以包含多个 `<header>` 元素
- 通常包含 `<h1>` 到 `<h6>` 标题

**示例**：
```html
<header>
  <h1>网站标题</h1>
  <nav>...</nav>
</header>

<article>
  <header>
    <h2>文章标题</h2>
    <p>发布时间：2025-01-02</p>
  </header>
</article>
```

#### `<nav>`

**用途**：表示导航链接区域

**特点**：
- 用于主要导航或文章导航
- 一个页面可以包含多个 `<nav>` 元素
- 通常包含 `<ul>` 列表

**示例**：
```html
<nav>
  <ul>
    <li><a href="/">首页</a></li>
    <li><a href="/about">关于</a></li>
    <li><a href="/contact">联系</a></li>
  </ul>
</nav>
```

#### `<main>`

**用途**：表示页面的主要内容

**特点**：
- 每个页面只能有一个 `<main>` 元素
- 不应包含在 `<article>`、`<aside>`、`<footer>`、`<header>` 或 `<nav>` 中
- 帮助屏幕阅读器快速定位主要内容

**示例**：
```html
<body>
  <header>...</header>
  <main>
    <article>...</article>
    <article>...</article>
  </main>
  <footer>...</footer>
</body>
```

#### `<article>`

**用途**：表示一个独立的、完整的内容块

**特点**：
- 可以独立分发或重用
- 应包含完整的标题、作者、发布时间、正文
- 可以嵌套使用（如评论）

**示例**：
```html
<article>
  <header>
    <h1>文章标题</h1>
    <p>作者：张三 | 发布时间：2025-01-02</p>
  </header>
  <p>文章内容...</p>
  <footer>
    <p>版权所有 © 2025</p>
  </footer>
</article>
```

#### `<section>`

**用途**：表示文档中的一个独立章节

**特点**：
- 通常包含标题
- 用于对内容进行分组
- 可以嵌套使用

**示例**：
```html
<section>
  <h2>章节标题</h2>
  <p>章节内容...</p>
</section>
```

#### `<aside>`

**用途**：表示与页面主要内容相关但独立的内容

**特点**：
- 可以用于侧边栏
- 也可以用于文章中的注释、广告等
- 表示与周围内容没有密切关系的内容

**示例**：
```html
<aside>
  <h3>相关文章</h3>
  <ul>
    <li><a href="#">文章1</a></li>
    <li><a href="#">文章2</a></li>
  </ul>
</aside>
```

#### `<footer>`

**用途**：表示页面或区块的页脚

**特点**：
- 包含版权、联系方式、法律信息等
- 一个页面可以包含多个 `<footer>` 元素
- 不应包含主要内容

**示例**：
```html
<footer>
  <p>版权所有 © 2025</p>
  <p>联系方式：contact@example.com</p>
</footer>
```

### 文本内容标签

#### `<figure>` 和 `<figcaption>`

**用途**：表示图片、图表、代码等及其说明

**特点**：
- `<figure>` 表示独立的内容
- `<figcaption>` 表示内容的说明
- 可以包含图片、视频、代码等

**示例**：
```html
<figure>
  <img src="image.jpg" alt="示例图片">
  <figcaption>这是一个示例图片</figcaption>
</figure>
```

#### `<time>`

**用途**：表示日期和时间

**特点**：
- 提供机器可读的时间格式
- 支持日期、时间、日期时间等

**示例**：
```html
<p>发布时间：<time datetime="2025-01-02">2025年1月2日</time></p>
<p>活动时间：<time datetime="2025-01-02T14:30">2025年1月2日 14:30</time></p>
```

#### `<mark>`

**用途**：表示高亮或标记的文本

**特点**：
- 用于突出显示重要内容
- 不同于 `<strong>`（重要性）和 `<em>`（强调）

**示例**：
```html
<p>请注意<mark>重要提示</mark>：...</p>
```

#### `<details>` 和 `<summary>`

**用途**：表示可展开/折叠的内容

**特点**：
- `<summary>` 定义可见的标题
- `<details>` 包含可折叠的内容
- 无需JavaScript即可实现交互

**示例**：
```html
<details>
  <summary>点击展开更多内容</summary>
  <p>这里是详细内容...</p>
</details>
```

#### `<dialog>`

**用途**：表示对话框或模态框

**特点**：
- 原生支持模态框
- 提供API控制显示/隐藏
- 支持无障碍访问

**示例**：
```html
<dialog id="myDialog">
  <p>这是一个对话框</p>
  <button id="closeDialog">关闭</button>
</dialog>

<button id="openDialog">打开对话框</button>

<script>
  const dialog = document.getElementById('myDialog');
  document.getElementById('openDialog').onclick = () => dialog.showModal();
  document.getElementById('closeDialog').onclick = () => dialog.close();
</script>
```

### 其他语义化标签

#### `<address>`

**用途**：表示联系信息

**特点**：
- 用于作者或文档的联系信息
- 通常包含在 `<footer>` 中

**示例**：
```html
<address>
  <p>作者：张三</p>
  <p>邮箱：zhangsan@example.com</p>
  <p>地址：北京市朝阳区</p>
</address>
```

#### `<abbr>`

**用途**：表示缩写或首字母缩略词

**特点**：
- 提供完整形式的说明
- 帮助屏幕阅读器理解

**示例**：
```html
<p><abbr title="HyperText Markup Language">HTML</abbr> 是网页的标记语言。</p>
```

#### `<cite>`

**用途**：表示作品的标题

**特点**：
- 用于书籍、电影、音乐等作品标题
- 不应包含人名

**示例**：
```html
<p>我最近读了<cite>百年孤独</cite>这本书。</p>
```

#### `<data>`

**用途**：表示机器可读的数据

**特点**：
- `value` 属性提供机器可读的值
- 内容提供人类可读的值

**示例**：
```html
<p>价格：<data value="99.99">¥99.99</data></p>
```

## 语义化最佳实践

### 1. 正确使用标题层级

```html
<!-- 推荐 -->
<h1>网站标题</h1>
<article>
  <h2>文章标题</h2>
  <section>
    <h3>小节标题</h3>
  </section>
</article>

<!-- 不推荐 -->
<h1>网站标题</h1>
<h3>文章标题</h3> <!-- 跳过了h2 -->
```

### 2. 使用列表组织导航

```html
<!-- 推荐 -->
<nav>
  <ul>
    <li><a href="/">首页</a></li>
    <li><a href="/about">关于</a></li>
  </ul>
</nav>

<!-- 不推荐 -->
<nav>
  <a href="/">首页</a>
  <a href="/about">关于</a>
</nav>
```

### 3. 使用表单语义化标签

```html
<!-- 推荐 -->
<form>
  <label for="name">姓名：</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">提交</button>
</form>

<!-- 不推荐 -->
<div>
  <span>姓名：</span>
  <input type="text">
  <div>提交</div>
</div>
```

### 4. 使用表格语义化标签

```html
<!-- 推荐 -->
<table>
  <caption>员工信息表</caption>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>职位</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>25</td>
      <td>工程师</td>
    </tr>
  </tbody>
</table>

<!-- 不推荐 -->
<table>
  <tr>
    <td>姓名</td>
    <td>年龄</td>
    <td>职位</td>
  </tr>
  <tr>
    <td>张三</td>
    <td>25</td>
    <td>工程师</td>
  </tr>
</table>
```

### 5. 使用引用语义化标签

```html
<!-- 推荐 -->
<blockquote>
  <p>这里是引用的内容</p>
  <footer>—— <cite>作者名</cite></footer>
</blockquote>

<!-- 不推荐 -->
<p>“这里是引用的内容” —— 作者名</p>
```

## 2025年新增语义化特性

### 1. 搜索元素 `<search>`

```html
<search>
  <label for="search-input">搜索：</label>
  <input type="search" id="search-input" name="q">
  <button type="submit">搜索</button>
</search>
```

### 2. 结构化数据

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "文章标题",
  "author": {
    "@type": "Person",
    "name": "张三"
  },
  "datePublished": "2025-01-02"
}
</script>
```

### 3. 无障碍增强

```html
<!-- ARIA标签 -->
<nav aria-label="主导航">
  <ul>
    <li><a href="/" aria-current="page">首页</a></li>
    <li><a href="/about">关于</a></li>
  </ul>
</nav>

<!-- 跳过导航链接 -->
<a href="#main-content" class="skip-link">跳到主要内容</a>
<main id="main-content">
  <!-- 主要内容 -->
</main>
```

## 语义化检查工具

1. **W3C Markup Validation Service**
   - 官方的HTML验证工具
   - 检查HTML语法和语义

2. **HTML5 Outliner**
   - 生成页面大纲
   - 检查标题层级

3. **axe DevTools**
   - 检查可访问性问题
   - 提供修复建议

4. **Lighthouse**
   - Google的网站审计工具
   - 包含可访问性检查

## 常见错误

### 1. 过度使用 `<div>`

```html
<!-- 不推荐 -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="content">...</div>
<div class="footer">...</div>

<!-- 推荐 -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

### 2. 忽略标题层级

```html
<!-- 不推荐 -->
<h1>网站标题</h1>
<h4>文章标题</h4> <!-- 跳过了h2和h3 -->

<!-- 推荐 -->
<h1>网站标题</h1>
<article>
  <h2>文章标题</h2>
</article>
```

### 3. 滥用 `<section>`

```html
<!-- 不推荐 -->
<section class="header">...</section>
<section class="footer">...</section>

<!-- 推荐 -->
<header>...</header>
<footer>...</footer>
```

### 4. 忽略表单标签

```html
<!-- 不推荐 -->
<input type="text" placeholder="姓名">
<button>提交</button>

<!-- 推荐 -->
<label for="name">姓名：</label>
<input type="text" id="name" name="name" required>
<button type="submit">提交</button>
```

## 总结

语义化是HTML开发的重要原则，它不仅能够提高代码的可读性和可维护性，还能提升网站的可访问性和SEO效果。在实际开发中，我们应该：

1. **选择合适的标签**：根据内容的含义选择恰当的标签
2. **保持结构清晰**：合理使用标题层级和嵌套关系
3. **关注可访问性**：使用ARIA标签和语义化属性
4. **持续学习**：关注HTML5的新特性和最佳实践

记住：**语义化不是为了浏览器，而是为了人和机器更好地理解你的内容**。

## 参考链接

[IFE-NOTE：页面结构语义化 | 雨落 (rainylog.com)](https://rainylog.com/post/ife-note-1/)
[MDN Web Docs - HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
[W3C HTML5 Specification](https://www.w3.org/TR/html5/)