---
title: '50道CSS基础面试题（2025版）'
description: '[50道CSS基础面试题（附答案） - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000013325778)'
pubDate: 2024-01-01

category: '未分类'
tags: []
draft: false
---


# 50道CSS基础面试题（2025版）

[50道CSS基础面试题（附答案） - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000013325778)

## 2025年CSS面试趋势

- **现代布局深入**：Flexbox、Grid、容器查询的深入应用
- **CSS工程化**：CSS Modules、Tailwind CSS、CSS-in-JS
- **性能优化**：渲染性能、CSS加载优化
- **可访问性**：ARIA、语义化、键盘导航
- **CSS Houdini**：自定义CSS特性

## 基础概念

### 1. 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？

- **标准盒子模型（content-box）**：
  - 宽度 = 内容宽度（content）+ border + padding + margin
  - 设置的 `width` 只包含 content

- **低版本IE盒子模型（border-box）**：
  - 宽度 = 内容宽度（content + border + padding）+ margin
  - 设置的 `width` 包含 content、padding 和 border

### 2. box-sizing属性

- 用来控制元素的盒子模型的解析模式，默认为 `content-box`
- `content-box`：W3C的标准盒子模型，设置元素的 `height/width` 属性指的是 content 部分的高/宽
- `border-box`：IE传统盒子模型。设置元素的 `height/width` 属性指的是 border + padding + content 部分高/宽

**推荐**：在全局设置 `box-sizing: border-box`，这样更符合直觉。

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

### 3. CSS选择器有哪些？哪些属性可以继承？

- **CSS选择符**：
  - id选择器（`#myid`）
  - 类选择器（`.myclassname`）
  - 标签选择器（`div`, `h1`, `p`）
  - 相邻选择器（`h1 + p`）
  - 子选择器（`ul > li`）
  - 后代选择器（`li a`）
  - 通配符选择器（`*`）
  - 属性选择器（`a[rel="external"]`）
  - 伪类选择器（`a:hover`, `li:nth-child`）

- **可继承的属性**：
  - `font-size`、`font-family`、`color`
  - `line-height`、`text-align`
  - `visibility`、`cursor`

- **不可继承的样式**：
  - `border`、`padding`、`margin`
  - `width`、`height`
  - `display`、`position`

### 4. CSS优先级算法如何计算？

- 元素选择符：1
- class选择符：10
- 伪类选择符：10
- 属性选择符：10
- id选择符：100
- 内联样式：1000
- `!important`：∞

**规则**：
1. `!important` 声明的样式优先级最高
2. 如果优先级相同，则选择最后出现的样式
3. 继承得到的样式的优先级最低

### 5. CSS新增伪类有哪些？

```css
p:first-of-type /* 选择属于其父元素的首个元素 */
p:last-of-type /* 选择属于其父元素的最后一个元素 */
p:only-of-type /* 选择属于其父元素唯一的元素 */
p:only-child /* 选择属于其父元素唯一子元素 */
p:nth-child(2) /* 选择属于其父元素的第二个子元素 */
p:nth-of-type(2) /* 选择属于其父元素中第二个p元素 */
:enabled /* 表单控件的启用状态 */
:disabled /* 表单控件的禁用状态 */
:checked /* 单选框或复选框被选中 */
:not(selector) /* 否定伪类 */
:is(selector1, selector2) /* 匹配任意一个选择器 */
:where(selector1, selector2) /* 类似于:is，但不增加优先级 */
:has(selector) /* CSS父选择器（2025年新增） */
```

## 布局

### 6. 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？

- **普通div居中**：
```css
div {
  border: 1px solid red;
  margin: 0 auto;
  height: 50px;
  width: 80px;
}
```

- **Flexbox居中（推荐）**：
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- **Grid居中（推荐）**：
```css
.container {
  display: grid;
  place-items: center;
}
```

- **绝对定位居中**：
```css
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- **绝对定位 + margin居中**：
```css
.element {
  position: absolute;
  width: 200px;
  height: 100px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
```

### 7. display有哪些值？说明他们的作用？

- `inline`（默认）：内联元素
- `block`：块级元素
- `inline-block`：内联块级元素
- `none`：隐藏元素
- `flex`：弹性容器
- `grid`：网格容器
- `table`：表格显示
- `table-cell`：表格单元格
- `list-item`：项目列表
- `contents`：使元素本身不显示，但子元素正常显示

### 8. position的值？

- `static`（默认）：按照正常文档流进行排列
- `relative`（相对定位）：不脱离文档流，参考自身静态位置通过 `top`、`bottom`、`left`、`right` 定位
- `absolute`（绝对定位）：脱离文档流，参考距其最近一个不为 `static` 的父级元素通过 `top`、`bottom`、`left`、`right` 定位
- `fixed`（固定定位）：脱离文档流，所固定的参照对象是可视窗口
- `sticky`（粘性定位）：基于用户的滚动位置来定位

### 9. 请解释一下CSS3的flexbox（弹性盒布局模型），以及适用场景？

**Flexbox** 是一种一维布局模型，用于在容器中对齐和分布空间。

**容器属性**：
- `display: flex`：定义弹性容器
- `flex-direction`：主轴方向（`row`、`row-reverse`、`column`、`column-reverse`）
- `flex-wrap`：换行（`nowrap`、`wrap`、`wrap-reverse`）
- `justify-content`：主轴对齐（`flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`space-evenly`）
- `align-items`：交叉轴对齐（`stretch`、`flex-start`、`flex-end`、`center`、`baseline`）
- `align-content`：多行交叉轴对齐

**项目属性**：
- `flex-grow`：放大比例
- `flex-shrink`：缩小比例
- `flex-basis`：初始大小
- `flex`：前三者的简写（`flex: 1` 等价于 `flex: 1 1 0%`）
- `align-self`：单独对齐

**适用场景**：
- 水平垂直居中
- 等高布局
- 两栏/三栏布局
- 导航栏
- 卡片列表

### 10. CSS Grid是什么？如何使用？

**Grid** 是一种二维布局模型，可以同时处理行和列。

**容器属性**：
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 定义列 */
  grid-template-rows: 100px auto; /* 定义行 */
  gap: 20px; /* 间距 */
  justify-items: center; /* 水平对齐 */
  align-items: center; /* 垂直对齐 */
}
```

**项目属性**：
```css
.item {
  grid-column: 1 / 3; /* 跨列 */
  grid-row: 1 / 2; /* 跨行 */
  grid-area: header; /* 区域 */
}
```

**适用场景**：
- 复杂的页面布局
- 仪表盘
- 图片库
- 响应式布局

## CSS3新特性

### 11. CSS3有哪些新特性？

1. **选择器**：
   - 属性选择器：`[attr^="value"]`、`[attr$="value"]`、`[attr*="value"]`
   - 结构伪类：`:nth-child(n)`、`:nth-of-type(n)`
   - 否定伪类：`:not(selector)`

2. **布局**：
   - Flexbox（弹性盒子）
   - Grid（网格布局）

3. **视觉效果**：
   - 圆角：`border-radius`
   - 阴影：`box-shadow`、`text-shadow`
   - 渐变：`linear-gradient`、`radial-gradient`
   - 透明度：`opacity`、`rgba`、`hsla`
   - 变换：`transform`（旋转、缩放、平移、倾斜）
   - 过渡：`transition`
   - 动画：`animation`

4. **背景**：
   - `background-size`、`background-origin`、`background-clip`
   - 多背景：`background-image: url1, url2`

5. **文字**：
   - `text-shadow`
   - `word-wrap`、`word-break`
   - `text-overflow`

6. **其他**：
   - 媒体查询：`@media`
   - 字体：`@font-face`
   - 滤镜：`filter`
   - 混合模式：`mix-blend-mode`
   - 对象适配：`object-fit`、`object-position`

### 12. 如何实现一个三角形？

```css
/* 向上三角形 */
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}

/* 向右三角形 */
.triangle {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 100px solid red;
}
```

**原理**：利用边框的透明特性，通过设置不同的边框宽度和颜色来实现三角形。

### 13. 如何实现一个自适应的正方形？

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

/* 方案3：Grid */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

### 14. 如何实现一个毛玻璃效果？

```css
.glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### 15. 如何实现一个打字机效果？

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

### 16. 如何实现一个骨架屏？

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

### 17. 如何实现一个固定在底部的按钮，但不要遮挡内容？

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

## BFC

### 18. 什么是BFC？如何触发BFC？

**BFC（Block Formatting Context）** 是 Web 页面中一个独立的渲染区域，区域内部的元素的渲染不会影响外界。

**触发BFC的方式**：
- `html` 根元素
- `float` 的值不为 `none`
- `position` 的值为 `absolute` 或 `fixed`
- `overflow` 的值不为 `visible`
- `display` 的值为 `inline-block`、`table-cell`、`table-caption`
- `display` 的值为 `flex` 或 `grid` 项

**BFC的应用场景**：
- 解决外边距塌陷
- 清除浮动
- 实现自适应两栏布局
- 防止元素被浮动元素覆盖

### 19. 如何清除浮动？

```css
/* 方案1：使用clear */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

/* 方案2：使用overflow */
.container {
  overflow: hidden;
}

/* 方案3：使用BFC */
.container {
  display: flow-root;
}

/* 方案4：使用伪元素（推荐） */
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
```

## 响应式设计

### 20. 什么是响应式设计？

响应式设计是一种网页设计方法，使网页能够根据不同的设备屏幕尺寸自动调整布局和显示效果。

**核心技术**：
- 媒体查询（`@media`）
- 弹性布局（Flexbox、Grid）
- 弹性单位（`rem`、`vw`、`vh`、`%`）
- 弹性图片（`max-width: 100%`）

### 21. rem、em、px、vw、vh的区别？

- `px`：绝对单位，像素
- `em`：相对于父元素的字体大小
- `rem`：相对于根元素（`html`）的字体大小
- `vw`：视口宽度的1%
- `vh`：视口高度的1%
- `%`：相对于父元素的百分比

**推荐**：使用 `rem` 作为主要单位，配合媒体查询调整根元素字体大小。

### 22. 如何实现响应式布局？

```css
/* 媒体查询 */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

/* 容器查询（2025年新增） */
@container (min-width: 300px) {
  .card {
    display: grid;
  }
}
```

## CSS变量

### 23. 什么是CSS变量？如何使用？

**CSS变量（自定义属性）**是一种在CSS中定义可重用值的方式。

```css
:root {
  --primary-color: #007bff;
  --font-size: 16px;
  --spacing: 1rem;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size);
  padding: var(--spacing);
}
```

**特点**：
- 作用域：定义在选择器内，子元素可访问
- 继承：可继承
- 默认值：`var(--name, default-value)`
- 动态修改：通过 JS 修改

**应用场景**：
- 主题切换
- 响应式设计
- 设计系统

## 动画

### 24. CSS动画有哪些？

- **过渡（transition）**：
  - 用于简单的状态变化
  - 只能定义开始和结束状态

```css
.button {
  transition: all 0.3s ease;
}
.button:hover {
  transform: scale(1.1);
}
```

- **动画（animation）**：
  - 用于复杂的动画效果
  - 可以定义多个关键帧

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}
```

### 25. 如何优化CSS动画性能？

- 使用 `transform` 和 `opacity` 实现动画（触发GPU加速）
- 避免使用 `left`、`top`、`width`、`height` 等属性
- 使用 `will-change` 提示浏览器优化
- 避免强制同步布局
- 使用 `requestAnimationFrame`

```css
.element {
  will-change: transform;
  transform: translateZ(0); /* 触发GPU加速 */
}
```

## CSS工程化

### 26. 什么是CSS Modules？

**CSS Modules** 是一种CSS模块化方案，通过构建工具将CSS类名转换为唯一的标识符，避免样式冲突。

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
}
```

```javascript
import styles from './Button.module.css';

<button className={styles.button}>Click me</button>
```

### 27. 什么是Tailwind CSS？

**Tailwind CSS** 是一个原子类CSS框架，提供了一系列实用类，可以直接在HTML中使用。

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Click me
</button>
```

**优势**：
- 快速开发
- 一致性
- 响应式设计
- 无需离开HTML

### 28. 什么是CSS-in-JS？

**CSS-in-JS** 是一种在JavaScript中编写CSS的技术方案。

**常见库**：
- styled-components
- emotion
- jss

```javascript
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  &:hover {
    background-color: darkblue;
  }
`;
```

## 性能优化

### 29. 如何优化CSS性能？

1. **减少选择器嵌套层级**
2. **避免使用通配符选择器**
3. **避免使用 `@import`**
4. **压缩CSS**
5. **关键CSS内联**
6. **使用CSS Sprites或Icon Font**
7. **使用 `will-change` 提示浏览器优化**
8. **避免强制同步布局**

### 30. 什么是关键CSS？

**关键CSS**是首屏渲染所需的CSS，可以内联到HTML中，加快首屏渲染速度。

```html
<style>
  /* 关键CSS */
  body { margin: 0; }
  .header { background: blue; }
</style>
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## 可访问性

### 31. 如何提高CSS的可访问性？

- 使用语义化标签
- 提供足够的颜色对比度
- 使用 `:focus` 状态
- 避免使用 `display: none` 隐藏内容（使用 `visually-hidden`）
- 使用相对单位（`rem`、`em`）
- 支持键盘导航

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 其他

### 32. 如何实现一个固定宽高比的容器？

```css
/* 方案1：padding-bottom */
.container {
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  position: relative;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 方案2：aspect-ratio */
.container {
  aspect-ratio: 16 / 9;
}
```

### 33. 如何实现一个多行文本省略？

```css
/* 单行省略 */
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 多行省略 */
.ellipsis-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 34. 如何实现一个水平垂直居中的弹窗？

```css
/* 方案1：Flexbox */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 方案2：Grid */
.modal {
  display: grid;
  place-items: center;
}

/* 方案3：绝对定位 */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 35. 如何实现一个粘性头部？

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
}
```

### 36. 如何实现一个全屏背景图片？

```css
.background {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
```

### 37. 如何实现一个渐变边框？

```css
.gradient-border {
  position: relative;
  background: white;
  border-radius: 10px;
}

.gradient-border::before {
  content: "";
  position: absolute;
  inset: -3px;
  background: linear-gradient(45deg, red, blue, green, yellow);
  border-radius: inherit;
  z-index: -1;
}
```

### 38. 如何实现一个阴影边框？

```css
.shadow-border {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}
```

### 39. 如何实现一个圆形图片？

```css
.circle-image {
  border-radius: 50%;
  overflow: hidden;
}

.circle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 40. 如何实现一个卡片悬停效果？

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
```

### 41. 如何实现一个加载动画？

```css
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### 42. 如何实现一个进度条？

```css
.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #3498db;
  transition: width 0.3s ease;
}
```

### 43. 如何实现一个标签页？

```css
.tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.tab.active {
  border-bottom-color: #3498db;
}
```

### 44. 如何实现一个面包屑导航？

```css
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb li::after {
  content: "/";
  margin: 0 10px;
}

.breadcrumb li:last-child::after {
  content: "";
}
```

### 45. 如何实现一个分页器？

```css
.pagination {
  display: flex;
  gap: 5px;
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.pagination button.active {
  background: #3498db;
  color: white;
  border-color: #3498db;
}
```

### 46. 如何实现一个下拉菜单？

```css
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background: white;
  border: 1px solid #ddd;
  min-width: 150px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
```

### 47. 如何实现一个工具提示？

```css
.tooltip {
  position: relative;
}

.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background: #333;
  color: white;
  font-size: 12px;
  border-radius: 3px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.tooltip:hover::after {
  opacity: 1;
  visibility: visible;
}
```

### 48. 如何实现一个模态框？

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 90%;
}
```

### 49. 如何实现一个固定侧边栏？

```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #333;
  color: white;
  overflow-y: auto;
}

.main-content {
  margin-left: 250px;
}
```

### 50. 如何实现一个响应式导航栏？

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #333;
  color: white;
}

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-menu {
    display: none;
  }

  .navbar-menu.active {
    display: block;
  }
}
```

## 2025年高频考点

1. **容器查询（Container Queries）**
2. **CSS Houdini**
3. **CSS Nesting（嵌套）**
4. **CSS Scroll Snap**
5. **CSS Subgrid**
6. **CSS Masonry（瀑布流）**
7. **CSS Anchor Positioning**
8. **CSS View Transitions API**

## 参考链接

[50道CSS基础面试题（附答案） - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000013325778)