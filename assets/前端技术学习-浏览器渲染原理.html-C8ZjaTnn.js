import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as l}from"./app-ry7nqkQQ.js";const d={};function s(r,e){return l(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="前端技术学习-浏览器渲染原理-2025版" tabindex="-1"><a class="header-anchor" href="#前端技术学习-浏览器渲染原理-2025版" aria-hidden="true">#</a> 前端技术学习 - 浏览器渲染原理（2025版）</h1><h2 id="浏览器架构" tabindex="-1"><a class="header-anchor" href="#浏览器架构" aria-hidden="true">#</a> 浏览器架构</h2><h3 id="多进程架构" tabindex="-1"><a class="header-anchor" href="#多进程架构" aria-hidden="true">#</a> 多进程架构</h3><p>现代浏览器采用多进程架构，主要包含以下进程：</p><ol><li><p><strong>浏览器进程（Browser Process）</strong></p><ul><li>负责浏览器的界面显示、用户交互</li><li>管理其他进程</li><li>存储网络缓存、Cookie 等</li></ul></li><li><p><strong>网络进程（Network Process）</strong></p><ul><li>负责网络请求</li><li>处理 HTTP/HTTPS 协议</li></ul></li><li><p><strong>渲染进程（Renderer Process）</strong></p><ul><li>负责页面渲染</li><li>执行 JavaScript</li><li>处理用户交互</li></ul></li><li><p><strong>GPU 进程（GPU Process）</strong></p><ul><li>负责图形渲染</li><li>处理 3D 绘制、CSS 动画</li></ul></li><li><p><strong>插件进程（Plugin Process）</strong></p><ul><li>负责运行浏览器插件</li></ul></li></ol><h3 id="进程间通信-ipc" tabindex="-1"><a class="header-anchor" href="#进程间通信-ipc" aria-hidden="true">#</a> 进程间通信（IPC）</h3><p>各进程之间通过 IPC（Inter-Process Communication）进行通信：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>浏览器进程 ←→ 网络进程
浏览器进程 ←→ 渲染进程
浏览器进程 ←→ GPU 进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器渲染流程" tabindex="-1"><a class="header-anchor" href="#浏览器渲染流程" aria-hidden="true">#</a> 浏览器渲染流程</h2><h3 id="完整流程图" tabindex="-1"><a class="header-anchor" href="#完整流程图" aria-hidden="true">#</a> 完整流程图</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入 URL
  ↓
网络进程（DNS 解析、TCP 连接、HTTP 请求）
  ↓
浏览器进程（接收响应数据）
  ↓
渲染进程（渲染页面）
  ↓
合成器（Compositor）
  ↓
GPU 进程（合成显示）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="详细步骤" tabindex="-1"><a class="header-anchor" href="#详细步骤" aria-hidden="true">#</a> 详细步骤</h3><h4 id="_1-url-输入" tabindex="-1"><a class="header-anchor" href="#_1-url-输入" aria-hidden="true">#</a> 1. URL 输入</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 用户输入 URL
https://example.com/page
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-网络请求" tabindex="-1"><a class="header-anchor" href="#_2-网络请求" aria-hidden="true">#</a> 2. 网络请求</h4><p><strong>DNS 解析</strong>：</p><ul><li>查询 DNS 服务器</li><li>获取 IP 地址</li></ul><p><strong>TCP 连接</strong>：</p><ul><li>三次握手建立连接</li><li>TLS 握手（HTTPS）</li></ul><p><strong>HTTP 请求</strong>：</p><ul><li>发送 HTTP 请求</li><li>接收 HTTP 响应</li></ul><h4 id="_3-浏览器进程处理" tabindex="-1"><a class="header-anchor" href="#_3-浏览器进程处理" aria-hidden="true">#</a> 3. 浏览器进程处理</h4><ul><li>检查响应头</li><li>决定是否需要渲染进程</li><li>转发数据给渲染进程</li></ul><h4 id="_4-渲染进程渲染" tabindex="-1"><a class="header-anchor" href="#_4-渲染进程渲染" aria-hidden="true">#</a> 4. 渲染进程渲染</h4><h2 id="渲染进程工作流程" tabindex="-1"><a class="header-anchor" href="#渲染进程工作流程" aria-hidden="true">#</a> 渲染进程工作流程</h2><h3 id="核心线程" tabindex="-1"><a class="header-anchor" href="#核心线程" aria-hidden="true">#</a> 核心线程</h3><p>渲染进程包含以下线程：</p><ol><li><p><strong>主线程（Main Thread）</strong></p><ul><li>执行 JavaScript</li><li>构建 DOM 和 CSSOM</li><li>执行布局和绘制</li></ul></li><li><p><strong>合成线程（Compositor Thread）</strong></p><ul><li>处理页面滚动</li><li>协调图层合成</li></ul></li><li><p><strong>光栅线程（Raster Thread）</strong></p><ul><li>将位图绘制到内存</li></ul></li></ol><h3 id="渲染流程" tabindex="-1"><a class="header-anchor" href="#渲染流程" aria-hidden="true">#</a> 渲染流程</h3><h4 id="_1-构建-dom-树" tabindex="-1"><a class="header-anchor" href="#_1-构建-dom-树" aria-hidden="true">#</a> 1. 构建 DOM 树</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;页面标题&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;
    &lt;h1&gt;标题&lt;/h1&gt;
    &lt;p&gt;段落&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DOM 树结构</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Document
├── html
│   ├── head
│   │   └── title
│   └── body
│       └── div
│           ├── h1
│           └── p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-构建-cssom-树" tabindex="-1"><a class="header-anchor" href="#_2-构建-cssom-树" aria-hidden="true">#</a> 2. 构建 CSSOM 树</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>body {
  color: #333;
  font-size: 16px;
}

div {
  margin: 10px;
}

h1 {
  color: #00f;
  font-size: 24px;
}

p {
  color: #666;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CSSOM 树结构</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CSSOM
├── body
│   ├── color: #333
│   └── font-size: 16px
└── div
    ├── margin: 10px
    └── h1
        ├── color: #00f
        └── font-size: 24px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-执行-javascript" tabindex="-1"><a class="header-anchor" href="#_3-执行-javascript" aria-hidden="true">#</a> 3. 执行 JavaScript</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// JavaScript 可能会修改 DOM
document.querySelector(&#39;h1&#39;).textContent = &#39;新标题&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：JavaScript 执行会阻塞 DOM 和 CSSOM 的构建。</p><h4 id="_4-构建渲染树" tabindex="-1"><a class="header-anchor" href="#_4-构建渲染树" aria-hidden="true">#</a> 4. 构建渲染树</h4><p>渲染树只包含需要显示的节点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Render Tree
├── body
└── div
    ├── h1
    └── p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-布局-layout" tabindex="-1"><a class="header-anchor" href="#_5-布局-layout" aria-hidden="true">#</a> 5. 布局（Layout）</h4><p>计算每个节点的位置和大小：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 布局计算
{
  x: 0,
  y: 0,
  width: 800,
  height: 600
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-绘制-paint" tabindex="-1"><a class="header-anchor" href="#_6-绘制-paint" aria-hidden="true">#</a> 6. 绘制（Paint）</h4><p>将渲染树转换为位图：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 绘制指令
[
  { type: &#39;fillRect&#39;, x: 0, y: 0, w: 800, h: 600, color: &#39;#fff&#39; },
  { type: &#39;fillText&#39;, x: 10, y: 30, text: &#39;标题&#39;, color: &#39;#00f&#39; },
  { type: &#39;fillText&#39;, x: 10, y: 60, text: &#39;段落&#39;, color: &#39;#666&#39; }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-合成-composite" tabindex="-1"><a class="header-anchor" href="#_7-合成-composite" aria-hidden="true">#</a> 7. 合成（Composite）</h4><p>将多个图层合成最终图像：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Layer 1: 背景
Layer 2: 文字
Layer 3: 图片

↓ 合成

最终图像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键渲染路径" tabindex="-1"><a class="header-anchor" href="#关键渲染路径" aria-hidden="true">#</a> 关键渲染路径</h2><h3 id="关键资源" tabindex="-1"><a class="header-anchor" href="#关键资源" aria-hidden="true">#</a> 关键资源</h3><p>影响首次渲染的资源：</p><ol><li><strong>HTML 文档</strong></li><li><strong>CSS 样式</strong></li><li><strong>JavaScript 脚本</strong></li></ol><h3 id="优化策略" tabindex="-1"><a class="header-anchor" href="#优化策略" aria-hidden="true">#</a> 优化策略</h3><h4 id="_1-减少-dom-大小" tabindex="-1"><a class="header-anchor" href="#_1-减少-dom-大小" aria-hidden="true">#</a> 1. 减少 DOM 大小</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 不好的做法 --&gt;
&lt;div&gt;
  &lt;div&gt;
    &lt;div&gt;
      &lt;span&gt;文本&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- 好的做法 --&gt;
&lt;div&gt;
  &lt;span&gt;文本&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-减少-css-复杂度" tabindex="-1"><a class="header-anchor" href="#_2-减少-css-复杂度" aria-hidden="true">#</a> 2. 减少 CSS 复杂度</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>/* 不好的做法 */
div ul li a span {
  color: #333;
}

/* 好的做法 */
.link {
  color: #333;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-优化-javascript" tabindex="-1"><a class="header-anchor" href="#_3-优化-javascript" aria-hidden="true">#</a> 3. 优化 JavaScript</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 不好的做法
document.querySelectorAll(&#39;div&#39;).forEach(el =&gt; {
  // ...
});

// 好的做法
const elements = document.querySelectorAll(&#39;div&#39;);
elements.forEach(el =&gt; {
  // ...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="渲染性能优化" tabindex="-1"><a class="header-anchor" href="#渲染性能优化" aria-hidden="true">#</a> 渲染性能优化</h3><h4 id="_1-减少重排-reflow" tabindex="-1"><a class="header-anchor" href="#_1-减少重排-reflow" aria-hidden="true">#</a> 1. 减少重排（Reflow）</h4><p><strong>重排触发条件</strong>：</p><ul><li>修改元素尺寸</li><li>修改元素位置</li><li>添加/删除元素</li><li>获取元素尺寸（offsetWidth、offsetHeight 等）</li></ul><p><strong>优化方法</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 不好的做法
element.style.width = &#39;100px&#39;;
element.style.height = &#39;100px&#39;;
element.style.margin = &#39;10px&#39;;

// 好的做法
element.style.cssText = &#39;width: 100px; height: 100px; margin: 10px;&#39;;

// 或使用 class
element.className = &#39;styled&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-减少重绘-repaint" tabindex="-1"><a class="header-anchor" href="#_2-减少重绘-repaint" aria-hidden="true">#</a> 2. 减少重绘（Repaint）</h4><p><strong>重绘触发条件</strong>：</p><ul><li>修改元素颜色</li><li>修改元素背景</li><li>修改元素可见性</li></ul><p><strong>优化方法</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用 transform 代替修改位置
element.style.transform = &#39;translateX(100px)&#39;;

// 使用 opacity 代替 visibility
element.style.opacity = &#39;0&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-使用-gpu-加速" tabindex="-1"><a class="header-anchor" href="#_3-使用-gpu-加速" aria-hidden="true">#</a> 3. 使用 GPU 加速</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>/* 使用 transform 和 opacity */
.element {
  transform: translateZ(0);
  opacity: 1;
  will-change: transform, opacity;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载性能优化" tabindex="-1"><a class="header-anchor" href="#加载性能优化" aria-hidden="true">#</a> 加载性能优化</h3><h4 id="_1-资源预加载" tabindex="-1"><a class="header-anchor" href="#_1-资源预加载" aria-hidden="true">#</a> 1. 资源预加载</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 预连接 --&gt;
&lt;link rel=&quot;preconnect&quot; href=&quot;https://cdn.example.com&quot;&gt;

&lt;!-- 预加载 --&gt;
&lt;link rel=&quot;preload&quot; href=&quot;style.css&quot; as=&quot;style&quot;&gt;
&lt;link rel=&quot;preload&quot; href=&quot;script.js&quot; as=&quot;script&quot;&gt;

&lt;!-- 预获取 --&gt;
&lt;link rel=&quot;prefetch&quot; href=&quot;next-page.js&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-代码分割" tabindex="-1"><a class="header-anchor" href="#_2-代码分割" aria-hidden="true">#</a> 2. 代码分割</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 动态导入
const LazyComponent = () =&gt; import(&#39;./LazyComponent.vue&#39;);

// 路由级别代码分割
const Home = () =&gt; import(&#39;./views/Home.vue&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-懒加载" tabindex="-1"><a class="header-anchor" href="#_3-懒加载" aria-hidden="true">#</a> 3. 懒加载</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 图片懒加载 --&gt;
&lt;img loading=&quot;lazy&quot; src=&quot;image.jpg&quot; alt=&quot;...&quot;&gt;

&lt;!-- 组件懒加载 --&gt;
&lt;lazy-component /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025-年新技术" tabindex="-1"><a class="header-anchor" href="#_2025-年新技术" aria-hidden="true">#</a> 2025 年新技术</h2><h3 id="_1-offscreencanvas" tabindex="-1"><a class="header-anchor" href="#_1-offscreencanvas" aria-hidden="true">#</a> 1. OffscreenCanvas</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 在 Worker 中绘制
const canvas = new OffscreenCanvas(800, 600);
const ctx = canvas.getContext(&#39;2d&#39;);

ctx.fillStyle = &#39;#f00&#39;;
ctx.fillRect(0, 0, 100, 100);

// 转换为 ImageBitmap
const bitmap = canvas.transferToImageBitmap();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-webgpu" tabindex="-1"><a class="header-anchor" href="#_2-webgpu" aria-hidden="true">#</a> 2. WebGPU</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// WebGPU API
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();

const context = canvas.getContext(&#39;webgpu&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-css-containment" tabindex="-1"><a class="header-anchor" href="#_3-css-containment" aria-hidden="true">#</a> 3. CSS Containment</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>/* 限制渲染范围 */
.container {
  contain: strict;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调试工具" tabindex="-1"><a class="header-anchor" href="#调试工具" aria-hidden="true">#</a> 调试工具</h2><h3 id="chrome-devtools" tabindex="-1"><a class="header-anchor" href="#chrome-devtools" aria-hidden="true">#</a> Chrome DevTools</h3><h4 id="_1-performance-面板" tabindex="-1"><a class="header-anchor" href="#_1-performance-面板" aria-hidden="true">#</a> 1. Performance 面板</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 记录性能
performance.mark(&#39;start&#39;);
// 执行代码
performance.mark(&#39;end&#39;);
performance.measure(&#39;execution&#39;, &#39;start&#39;, &#39;end&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-rendering-面板" tabindex="-1"><a class="header-anchor" href="#_2-rendering-面板" aria-hidden="true">#</a> 2. Rendering 面板</h4><ul><li>Layout Shifts</li><li>Frame Rate</li><li>Paint Profiling</li></ul><h4 id="_3-layers-面板" tabindex="-1"><a class="header-anchor" href="#_3-layers-面板" aria-hidden="true">#</a> 3. Layers 面板</h4><ul><li>查看图层结构</li><li>分析合成原因</li></ul><h3 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h3><h4 id="_1-fcp-first-contentful-paint" tabindex="-1"><a class="header-anchor" href="#_1-fcp-first-contentful-paint" aria-hidden="true">#</a> 1. FCP（First Contentful Paint）</h4><p>首次内容绘制时间，目标 &lt; 1.8s</p><h4 id="_2-lcp-largest-contentful-paint" tabindex="-1"><a class="header-anchor" href="#_2-lcp-largest-contentful-paint" aria-hidden="true">#</a> 2. LCP（Largest Contentful Paint）</h4><p>最大内容绘制时间，目标 &lt; 2.5s</p><h4 id="_3-fid-first-input-delay" tabindex="-1"><a class="header-anchor" href="#_3-fid-first-input-delay" aria-hidden="true">#</a> 3. FID（First Input Delay）</h4><p>首次输入延迟，目标 &lt; 100ms</p><h4 id="_4-cls-cumulative-layout-shift" tabindex="-1"><a class="header-anchor" href="#_4-cls-cumulative-layout-shift" aria-hidden="true">#</a> 4. CLS（Cumulative Layout Shift）</h4><p>累积布局偏移，目标 &lt; 0.1</p><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="_1-优化关键渲染路径" tabindex="-1"><a class="header-anchor" href="#_1-优化关键渲染路径" aria-hidden="true">#</a> 1. 优化关键渲染路径</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 内联关键 CSS --&gt;
&lt;style&gt;
  body { margin: 0; }
  .container { max-width: 1200px; }
&lt;/style&gt;

&lt;!-- 延迟加载非关键 JS --&gt;
&lt;script defer src=&quot;non-critical.js&quot;&gt;&lt;/script&gt;

&lt;!-- 异步加载 JS --&gt;
&lt;script async src=&quot;analytics.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用现代布局" tabindex="-1"><a class="header-anchor" href="#_2-使用现代布局" aria-hidden="true">#</a> 2. 使用现代布局</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>/* 使用 Flexbox */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 使用 Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-优化动画" tabindex="-1"><a class="header-anchor" href="#_3-优化动画" aria-hidden="true">#</a> 3. 优化动画</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>/* 使用 transform 和 opacity */
.animated {
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
}

.animated.active {
  transform: translateX(100px);
  opacity: 0.5;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>理解浏览器渲染原理对于前端开发者来说非常重要：</p><ol><li><strong>优化性能</strong>：减少重排重绘，提升渲染速度</li><li><strong>提升体验</strong>：优化关键渲染路径，改善用户体验</li><li><strong>调试问题</strong>：使用 DevTools 定位性能瓶颈</li><li><strong>技术选型</strong>：选择合适的技术和方案</li></ol><p><strong>关键要点</strong>：</p><ul><li>浏览器采用多进程架构</li><li>渲染流程包括 DOM、CSSOM、布局、绘制、合成</li><li>减少重排重绘可以显著提升性能</li><li>使用现代技术和工具优化渲染</li></ul><p><strong>学习建议</strong>：</p><ol><li>深入理解渲染流程</li><li>熟练使用 DevTools</li><li>关注性能指标</li><li>持续优化和改进</li></ol><h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源" aria-hidden="true">#</a> 参考资源</h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work" target="_blank" rel="noopener noreferrer">MDN - 浏览器渲染</a></li><li><a href="https://web.dev/rendering-performance/" target="_blank" rel="noopener noreferrer">Web.dev - 渲染性能</a></li><li><a href="https://developers.google.com/web/tools/chrome-devtools" target="_blank" rel="noopener noreferrer">Chrome DevTools</a></li><li><a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">Core Web Vitals</a></li></ul>`,124)])])}const v=i(d,[["render",s],["__file","前端技术学习-浏览器渲染原理.html.vue"]]);export{v as default};
