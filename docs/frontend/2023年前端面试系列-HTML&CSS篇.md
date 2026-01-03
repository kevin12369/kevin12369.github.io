---
icon: edit
date: 2025-01-02
category:
  - 前端面试
tag:
  - HTML&CSS面试题
sticky: false
lastUpdated: true
footer: HTML&CSS 常见面试题总结
---

# HTML&CSS 常见面试题总结（2025版）

[参考自掘金《2023 前端面试系列--HTML & CSS 篇》](https://juejin.cn/post/7175048315111735352)
[参考自掘金《做了一份前端面试复习计划，保熟～》](https://juejin.cn/post/7061588533214969892)
[参考自掘金《连八股文都不懂还指望在前端混下去么》](https://juejin.cn/post/7016593221815910408)
[参考自 CSDN《[前端基础] HTML5 篇》](https://blog.csdn.net/by6671715/article/details/127599870)

## 2025年HTML&CSS面试趋势

- **性能优化成为重点**：从简单的CSS选择器优化到渲染性能分析
- **响应式设计深入**：不再局限于媒体查询，还包括容器查询、视口单位等
- **现代CSS特性**：Grid、Flexbox、CSS变量、CSS Houdini等新特性应用
- **可访问性（a11y）**：ARIA标签、语义化、键盘导航等
- **CSS工程化**：CSS Modules、Tailwind CSS、CSS-in-JS等方案对比

## HTML

### 语义化标签

1. **什么是语义化？**
   - 语义化指对文本内容的结构化（内容语义化），选择合乎语义的标签（代码语义化）。
   - 核心思想：用正确的标签做正确的事情

2. **常用语义化标签：**
   - `header`：页面或区块的头部
   - `nav`：导航链接区域
   - `main`：页面主要内容
   - `article`：独立的文章内容
   - `section`：文档中的独立章节
   - `aside`：侧边栏或相关内容
   - `footer`：页面或区块的底部
   - `figure`、`figcaption`：图片及其说明
   - `time`、`mark`、`details`、`summary`等

3. **语义化的优点：**
   - 代码结构清晰，易于阅读，有利于维护
   - 方便其他设备解析（如：屏幕阅读器），提升可访问性
   - 有利于搜索引擎优化（SEO），搜索引擎爬虫会根据不同的标签来赋予不同的权重
   - 提升团队协作效率，降低沟通成本

4. **2025年面试高频题：**
   - 如何选择合适的语义化标签？
   - 语义化对SEO的具体影响是什么？
   - 如何在项目中推广语义化？

建议阅读文章：[百度 IFE 的 H5 语义化文章](https://rainylog.com/post/ife-note-1/)

### script 标签中属性 async 和 defer 的区别？

1. **script（默认）**：
   - 会阻碍 HTML 解析，只有下载好并执行完脚本才会继续解析 HTML
   - 执行顺序：按文档顺序执行

2. **async script**：
   - 解析 HTML 的过程中会进行脚本的异步下载
   - 下载成功后立马执行，可能会阻断 HTML 的解析
   - 多个脚本的执行顺序无法保证（谁先下载完谁先执行）
   - 适用于：独立的脚本，不依赖其他脚本也不被其他脚本依赖

3. **defer script**：
   - 也是异步下载脚本
   - 加载完成后，如果 HTML 还没有解析完，浏览器不会暂停解析去执行 JS 代码
   - 等待 HTML 解析完毕再执行 JS 代码（DOMContentLoaded 之前）
   - 多个 `defer script` 会按照在 HTML 中出现的顺序执行
   - 适用于：需要依赖 DOM 的脚本，或者有依赖关系的脚本

4. **2025年新增考点：**
   - `type="module"`：ES6 模块脚本，默认具有 defer 行为
   - `integrity`：SRI（子资源完整性）校验，防止 CDN 被篡改
   - `crossorigin`：跨域资源共享配置

建议阅读文章：[图解 script 标签中的 async 和 defer 属性](https://juejin.cn/post/6894629999215640583)

### DOCTYPE 的作用是什么？

`<!DOCTYPE>` 声明一般位于文档的第一行，它的作用主要是告诉浏览器以什么样的模式来解析文档。

- **标准模式（Standards Mode）**：
  - 指定了 DOCTYPE 后，浏览器会以"标准模式"进行文档解析
  - 按照最新的标准进行解析，行为一致且可预测

- **兼容模式（Quirks Mode）**：
  - 如果没有 DOCTYPE，浏览器会以"兼容模式"进行解析
  - 模拟老式浏览器的行为，保证一些老的网站能正常访问
  - 不同浏览器的兼容模式行为可能不一致

- **准标准模式（Almost Standards Mode）**：
  - 介于标准模式和兼容模式之间
  - 主要区别在于表格单元格的垂直对齐方式

### SGML、HTML、XML 和 XHTML 的区别？

- **SGML**（Standard Generalized Markup Language）：
  - 标准通用标记语言
  - 是所有电子文档标记语言的起源
  - 定义了文档结构和内容的描述标准

- **HTML**（HyperText Markup Language）：
  - 超文本标记语言
  - 主要用于规定怎样显示网页
  - 标签固定，数量有限

- **XML**（Extensible Markup Language）：
  - 可扩展标记语言
  - 标签可以自定义，数量无限
  - XML 和 HTML 的最大区别在于标签的可扩展性
  - 未来网页语言的发展方向

- **XHTML**（Extensible HyperText Markup Language）：
  - 可扩展超文本标记语言
  - HTML 和 XML 的结合体
  - 比 HTML 更严格：
    - 标签必须小写
    - 标签必须有闭合标签
    - 属性值必须用引号
    - 属性必须有值
  - 目前基本被 HTML5 取代

### HTML5 有哪些新特性、移除了哪些元素？

HTML5 现在已经不是 SGML 的子集，主要是关于图像、位置存储、多任务等功能的增加。

**新增特性：**

1. **语义化标签**：
   - `header`、`nav`、`main`、`article`、`section`、`aside`、`footer` 等

2. **多媒体**：
   - `<video>`：视频播放
   - `<audio>`：音频播放
   - `<canvas>`：2D 绘图
   - `<svg>`：矢量图形

3. **本地存储**：
   - `localStorage`：永久存储（除非手动清除）
   - `sessionStorage`：会话存储（关闭标签页即清除）
   - `IndexedDB`：更强大的数据库存储

4. **表单增强**：
   - 新的 input 类型：`date`、`time`、`email`、`url`、`search`、`number`、`range`、`color` 等
   - 新的属性：`placeholder`、`required`、`pattern`、`min`、`max`、`step` 等
   - 表单验证 API

5. **新技术**：
   - `Web Worker`：多线程处理
   - `WebSocket`：双向通信
   - `WebRTC`：实时音视频通信
   - `Service Worker`：离线缓存、推送通知
   - `WebAssembly`：高性能计算

6. **新的 API**：
   - `Geolocation`：地理位置
   - `Drag and Drop`：拖放 API
   - `History API`：历史记录管理
   - `requestAnimationFrame`：动画帧
   - `Intersection Observer`：元素可见性观察
   - `Resize Observer`：元素尺寸变化观察

7. **文档属性**：
   - `document.visibilityState`：页面可见性
   - `document.hidden`：页面是否隐藏

**移除的元素：**

1. **纯表现的元素**（建议使用 CSS 替代）：
   - `basefont`、`big`、`center`、`s`、`tt`、`u`

2. **对可用性产生负面影响的元素**：
   - `frame`、`frameset`、`noframes`

### 对浏览器内核的理解？

主要分为两个部分：**渲染引擎**和 **JS 引擎**

1. **渲染引擎**：
   - 职责：渲染，即在浏览器窗口中显示所请求的内容
   - 默认能力：显示 HTML、XML 文档及图片
   - 扩展能力：通过插件显示其他类型数据（如 PDF）
   - 常见渲染引擎：
     - WebKit（Safari、旧版 Chrome）
     - Blink（Chrome、Edge、Opera）
     - Gecko（Firefox）
     - Trident（IE）

2. **JS 引擎**：
   - 职责：解析和执行 JavaScript 来实现网页的动态效果
   - 常见 JS 引擎：
     - V8（Chrome、Node.js）
     - SpiderMonkey（Firefox）
     - JavaScriptCore（Safari）
     - Chakra（IE、Edge）

3. **2025年高频考点：**
   - 渲染流程：解析 HTML → 构建 DOM 树 → 构建 CSSOM → 合成渲染树 → 布局 → 绘制 → 合成
   - 重排（Reflow）和重绘（Repaint）的区别和优化
   - 浏览器的渲染进程和线程模型

## CSS

### BFC（块级格式化上下文）

1. **什么是 BFC？**
   - BFC（Block Formatting Context）是 Web 页面中一个独立的渲染区域
   - 区域内部的元素的渲染不会影响外界
   - BFC 就像一个容器，容器里面的元素不会影响到外面的元素

2. **如何触发 BFC？**
   - `html` 根元素
   - `float` 的值不为 `none`
   - `position` 的值为 `absolute` 或 `fixed`
   - `overflow` 的值不为 `visible`
   - `display` 的值为 `inline-block`、`table-cell`、`table-caption`
   - `display` 的值为 `flex` 或 `grid` 项

3. **BFC 的应用场景：**
   - 解决外边距塌陷（margin collapsing）
   - 清除浮动
   - 实现自适应两栏布局
   - 防止元素被浮动元素覆盖

4. **2025年高频考点：**
   - BFC 的实现原理
   - BFC 与 IFC（行内格式化上下文）的区别
   - 实际项目中的 BFC 应用案例

### 盒模型

1. **标准盒模型（content-box）**：
   - `width` 只包含内容区域的宽度
   - 盒子总宽度 = `width` + `padding` + `border` + `margin`

2. **IE 盒模型（border-box）**：
   - `width` 包含内容区域、内边距和边框的宽度
   - 盒子总宽度 = `width` + `margin`

3. **如何设置盒模型？**
   ```css
   /* 标准 IE 盒模型 */
   box-sizing: content-box;

   /* 推荐：IE 盒模型 */
   box-sizing: border-box;

   /* 全局设置 */
   *, *::before, *::after {
     box-sizing: border-box;
   }
   ```

4. **2025年高频考点：**
   - 两种盒模型的区别和应用场景
   - 为什么推荐使用 `border-box`？

### 选择器优先级

1. **优先级计算规则（从高到低）：**
   - `!important`（最高）
   - 内联样式（`style="..."`）
   - ID 选择器（`#id`）
   - 类选择器、属性选择器、伪类选择器（`.class`、`[attr]`、`:hover`）
   - 元素选择器、伪元素选择器（`div`、`::before`）
   - 通配符选择器（`*`）

2. **优先级权重：**
   - `!important`：∞
   - 内联样式：1000
   - ID 选择器：100
   - 类选择器、属性选择器、伪类选择器：10
   - 元素选择器、伪元素选择器：1
   - 通配符选择器：0

3. **2025年高频考点：**
   - 如何计算复杂选择器的优先级？
   - `:is()`、`:not()` 等伪类对优先级的影响
   - CSS 变量的优先级

### CSS3 新特性

1. **选择器：**
   - 属性选择器：`[attr^="value"]`、`[attr$="value"]`、`[attr*="value"]`
   - 结构伪类：`:nth-child(n)`、`:nth-of-type(n)`、`:first-child`、`:last-child`
   - 否定伪类：`:not(selector)`
   - 目标伪类：`:target`
   - UI 伪类：`:checked`、`:disabled`、`:enabled`

2. **布局：**
   - Flexbox（弹性盒子）
   - Grid（网格布局）
   - 多列布局（`column-count`、`column-gap`）

3. **视觉效果：**
   - 圆角（`border-radius`）
   - 阴影（`box-shadow`、`text-shadow`）
   - 渐变（`linear-gradient`、`radial-gradient`）
   - 透明度（`opacity`、`rgba`、`hsla`）
   - 变换（`transform`）：旋转、缩放、平移、倾斜
   - 过渡（`transition`）
   - 动画（`animation`）

4. **其他：**
   - 媒体查询（`@media`）
   - 字体（`@font-face`）
   - 背景（`background-size`、`background-origin`、`background-clip`）
   - 边框图片（`border-image`）
   - 滤镜（`filter`）
   - 混合模式（`mix-blend-mode`）
   - 对象适配（`object-fit`、`object-position`）

### Flexbox 布局

1. **容器属性：**
   - `display: flex`：定义弹性容器
   - `flex-direction`：主轴方向（`row`、`row-reverse`、`column`、`column-reverse`）
   - `flex-wrap`：换行（`nowrap`、`wrap`、`wrap-reverse`）
   - `flex-flow`：`flex-direction` 和 `flex-wrap` 的简写
   - `justify-content`：主轴对齐（`flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`space-evenly`）
   - `align-items`：交叉轴对齐（`stretch`、`flex-start`、`flex-end`、`center`、`baseline`）
   - `align-content`：多行交叉轴对齐

2. **项目属性：**
   - `flex-grow`：放大比例（默认 0）
   - `flex-shrink`：缩小比例（默认 1）
   - `flex-basis`：初始大小
   - `flex`：前三者的简写（`flex: 1` 等价于 `flex: 1 1 0%`）
   - `align-self`：单独对齐

3. **2025年高频考点：**
   - Flexbox 的常见布局实现（水平垂直居中、圣杯布局、等高布局）
   - `flex: 1` 的具体含义
   - Flexbox 与 Grid 的选择

### Grid 布局

1. **容器属性：**
   - `display: grid`：定义网格容器
   - `grid-template-columns`：定义列
   - `grid-template-rows`：定义行
   - `grid-template-areas`：定义区域
   - `grid-template`：前三者的简写
   - `grid-gap` / `gap`：网格间距
   - `justify-items`：水平对齐
   - `align-items`：垂直对齐
   - `justify-content`：整体水平对齐
   - `align-content`：整体垂直对齐

2. **项目属性：**
   - `grid-column`：列位置
   - `grid-row`：行位置
   - `grid-area`：区域位置
   - `justify-self`：单独水平对齐
   - `align-self`：单独垂直对齐

3. **2025年高频考点：**
   - Grid 的常见布局实现
   - Grid 与 Flexbox 的区别和选择
   - Grid 的 fr 单位和 auto-fill/auto-fit

### CSS 变量（自定义属性）

1. **定义和使用：**
   ```css
   :root {
     --primary-color: #007bff;
     --font-size: 16px;
   }

   .button {
     color: var(--primary-color);
     font-size: var(--font-size);
   }
   ```

2. **特点：**
   - 作用域：定义在选择器内，子元素可访问
   - 继承：可继承
   - 默认值：`var(--name, default-value)`
   - 动态修改：通过 JS 修改

3. **2025年高频考点：**
   - CSS 变量的应用场景（主题切换、响应式设计）
   - CSS 变量的性能
   - CSS 变量与预处理器变量的区别

### 响应式设计

1. **媒体查询：**
   ```css
   @media screen and (max-width: 768px) {
     /* 移动端样式 */
   }
   ```

2. **常用单位：**
   - `rem`：相对于根元素字体大小
   - `em`：相对于父元素字体大小
   - `vw`、`vh`：视口宽度和高度
   - `%`：相对于父元素

3. **2025年新增考点：**
   - **容器查询（Container Queries）**：
     ```css
     @container (min-width: 300px) {
       .card {
         display: grid;
       }
     }
     ```
   - **视口单位增强**：
     - `svh`、`lvh`、`dvh`：处理移动端地址栏问题
   - **CSS Houdini**：自定义 CSS 特性

### 常见布局问题

1. **水平垂直居中：**
   ```css
   /* Flexbox */
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
   }

   /* Grid */
   .container {
     display: grid;
     place-items: center;
   }

   /* 绝对定位 + transform */
   .element {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
   ```

2. **两栏布局（左侧固定，右侧自适应）：**
   ```css
   /* Flexbox */
   .container {
     display: flex;
   }
   .left {
     width: 200px;
   }
   .right {
     flex: 1;
   }

   /* Grid */
   .container {
     display: grid;
     grid-template-columns: 200px 1fr;
   }
   ```

3. **三栏布局（圣杯布局）：**
   ```css
   /* Flexbox */
   .container {
     display: flex;
   }
   .left {
     width: 200px;
   }
   .right {
     width: 200px;
   }
   .center {
     flex: 1;
   }
   ```

### 性能优化

1. **CSS 优化：**
   - 避免使用 `@import`
   - 减少选择器嵌套层级
   - 避免通配符选择器
   - 使用 CSS Sprites 或 Icon Font
   - 使用 CSS 压缩工具
   - 关键 CSS 内联

2. **渲染性能优化：**
   - 避免强制同步布局
   - 使用 `transform` 和 `opacity` 实现动画（触发 GPU 加速）
   - 避免频繁操作样式（使用 class 切换）
   - 使用 `will-change` 提示浏览器优化

3. **2025年高频考点：**
   - CSS 加载优化（`<style>`、`<link>`、`preload`、`prefetch`）
   - CSS-in-JS 的性能问题
   - Tailwind CSS 的性能优化

## 2025年高频面试题

1. **如何实现一个自适应的正方形？**
   ```css
   /* 方案1：padding-bottom */
   .square {
     width: 100%;
     padding-bottom: 100%; /* 宽高比 1:1 */
     height: 0;
   }

   /* 方案2：aspect-ratio（现代浏览器） */
   .square {
     aspect-ratio: 1 / 1;
   }
   ```

2. **如何实现一个固定在底部的按钮，但不要遮挡内容？**
   ```css
   body {
     padding-bottom: 80px; /* 按钮高度 + 间距 */
   }

   .button {
     position: fixed;
     bottom: 20px;
     left: 50%;
     transform: translateX(-50%);
   }
   ```

3. **如何实现一个毛玻璃效果？**
   ```css
   .glass {
     background: rgba(255, 255, 255, 0.2);
     backdrop-filter: blur(10px);
     -webkit-backdrop-filter: blur(10px);
   }
   ```

4. **如何实现一个打字机效果？**
   ```css
   .typing {
     overflow: hidden;
     white-space: nowrap;
     border-right: 3px solid;
     animation: typing 3s steps(30) forwards, blink 0.7s infinite;
   }

   @keyframes typing {
     from { width: 0; }
     to { width: 100%; }
   }

   @keyframes blink {
     50% { border-color: transparent; }
   }
   ```

5. **如何实现一个骨架屏？**
   ```css
   .skeleton {
     background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
     background-size: 200% 100%;
     animation: skeleton-loading 1.5s infinite;
   }

   @keyframes skeleton-loading {
     0% { background-position: 200% 0; }
     100% { background-position: -200% 0; }
   }
   ```

## 参考链接

[连八股文都不懂还指望在前端混下去么](https://juejin.cn/post/7016593221815910408)
[做了一份前端面试复习计划，保熟~](https://juejin.cn/post/7061588533214969892)