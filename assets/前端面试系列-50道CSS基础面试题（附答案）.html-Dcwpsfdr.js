import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c,o,a as s,e as l,b as a,d as t}from"./app-ktihEobb.js";const u={},d={href:"https://segmentfault.com/a/1190000013325778",target:"_blank",rel:"noopener noreferrer"},r={href:"https://segmentfault.com/a/1190000013325778",target:"_blank",rel:"noopener noreferrer"};function k(v,n){const e=i("ExternalLinkIcon");return o(),c("div",null,[n[2]||(n[2]=s("h1",{id:"_50道css基础面试题-2025版",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_50道css基础面试题-2025版","aria-hidden":"true"},"#"),a(" 50道CSS基础面试题（2025版）")],-1)),s("p",null,[s("a",d,[n[0]||(n[0]=a("50道CSS基础面试题（附答案） - 个人文章 - SegmentFault 思否",-1)),t(e)])]),n[3]||(n[3]=l(`<h2 id="_2025年css面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年css面试趋势" aria-hidden="true">#</a> 2025年CSS面试趋势</h2><ul><li><strong>现代布局深入</strong>：Flexbox、Grid、容器查询的深入应用</li><li><strong>CSS工程化</strong>：CSS Modules、Tailwind CSS、CSS-in-JS</li><li><strong>性能优化</strong>：渲染性能、CSS加载优化</li><li><strong>可访问性</strong>：ARIA、语义化、键盘导航</li><li><strong>CSS Houdini</strong>：自定义CSS特性</li></ul><h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h2><h3 id="_1-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的" tabindex="-1"><a class="header-anchor" href="#_1-介绍一下标准的css的盒子模型-与低版本ie的盒子模型有什么不同的" aria-hidden="true">#</a> 1. 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？</h3><ul><li><p><strong>标准盒子模型（content-box）</strong>：</p><ul><li>宽度 = 内容宽度（content）+ border + padding + margin</li><li>设置的 <code>width</code> 只包含 content</li></ul></li><li><p><strong>低版本IE盒子模型（border-box）</strong>：</p><ul><li>宽度 = 内容宽度（content + border + padding）+ margin</li><li>设置的 <code>width</code> 包含 content、padding 和 border</li></ul></li></ul><h3 id="_2-box-sizing属性" tabindex="-1"><a class="header-anchor" href="#_2-box-sizing属性" aria-hidden="true">#</a> 2. box-sizing属性</h3><ul><li>用来控制元素的盒子模型的解析模式，默认为 <code>content-box</code></li><li><code>content-box</code>：W3C的标准盒子模型，设置元素的 <code>height/width</code> 属性指的是 content 部分的高/宽</li><li><code>border-box</code>：IE传统盒子模型。设置元素的 <code>height/width</code> 属性指的是 border + padding + content 部分高/宽</li></ul><p><strong>推荐</strong>：在全局设置 <code>box-sizing: border-box</code>，这样更符合直觉。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*, *::before, *::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-css选择器有哪些-哪些属性可以继承" tabindex="-1"><a class="header-anchor" href="#_3-css选择器有哪些-哪些属性可以继承" aria-hidden="true">#</a> 3. CSS选择器有哪些？哪些属性可以继承？</h3><ul><li><p><strong>CSS选择符</strong>：</p><ul><li>id选择器（<code>#myid</code>）</li><li>类选择器（<code>.myclassname</code>）</li><li>标签选择器（<code>div</code>, <code>h1</code>, <code>p</code>）</li><li>相邻选择器（<code>h1 + p</code>）</li><li>子选择器（<code>ul &gt; li</code>）</li><li>后代选择器（<code>li a</code>）</li><li>通配符选择器（<code>*</code>）</li><li>属性选择器（<code>a[rel=&quot;external&quot;]</code>）</li><li>伪类选择器（<code>a:hover</code>, <code>li:nth-child</code>）</li></ul></li><li><p><strong>可继承的属性</strong>：</p><ul><li><code>font-size</code>、<code>font-family</code>、<code>color</code></li><li><code>line-height</code>、<code>text-align</code></li><li><code>visibility</code>、<code>cursor</code></li></ul></li><li><p><strong>不可继承的样式</strong>：</p><ul><li><code>border</code>、<code>padding</code>、<code>margin</code></li><li><code>width</code>、<code>height</code></li><li><code>display</code>、<code>position</code></li></ul></li></ul><h3 id="_4-css优先级算法如何计算" tabindex="-1"><a class="header-anchor" href="#_4-css优先级算法如何计算" aria-hidden="true">#</a> 4. CSS优先级算法如何计算？</h3><ul><li>元素选择符：1</li><li>class选择符：10</li><li>伪类选择符：10</li><li>属性选择符：10</li><li>id选择符：100</li><li>内联样式：1000</li><li><code>!important</code>：∞</li></ul><p><strong>规则</strong>：</p><ol><li><code>!important</code> 声明的样式优先级最高</li><li>如果优先级相同，则选择最后出现的样式</li><li>继承得到的样式的优先级最低</li></ol><h3 id="_5-css新增伪类有哪些" tabindex="-1"><a class="header-anchor" href="#_5-css新增伪类有哪些" aria-hidden="true">#</a> 5. CSS新增伪类有哪些？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">p</span><span class="token punctuation">:</span>first-of-type <span class="token comment">/* 选择属于其父元素的首个元素 */</span>
<span class="token property">p</span><span class="token punctuation">:</span>last-of-type <span class="token comment">/* 选择属于其父元素的最后一个元素 */</span>
<span class="token property">p</span><span class="token punctuation">:</span>only-of-type <span class="token comment">/* 选择属于其父元素唯一的元素 */</span>
<span class="token property">p</span><span class="token punctuation">:</span>only-child <span class="token comment">/* 选择属于其父元素唯一子元素 */</span>
<span class="token property">p</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> <span class="token comment">/* 选择属于其父元素的第二个子元素 */</span>
<span class="token property">p</span><span class="token punctuation">:</span><span class="token function">nth-of-type</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> <span class="token comment">/* 选择属于其父元素中第二个p元素 */</span>
<span class="token punctuation">:</span>enabled <span class="token comment">/* 表单控件的启用状态 */</span>
<span class="token punctuation">:</span>disabled <span class="token comment">/* 表单控件的禁用状态 */</span>
<span class="token punctuation">:</span>checked <span class="token comment">/* 单选框或复选框被选中 */</span>
<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token comment">/* 否定伪类 */</span>
<span class="token punctuation">:</span><span class="token function">is</span><span class="token punctuation">(</span>selector1<span class="token punctuation">,</span> selector2<span class="token punctuation">)</span> <span class="token comment">/* 匹配任意一个选择器 */</span>
<span class="token punctuation">:</span><span class="token function">where</span><span class="token punctuation">(</span>selector1<span class="token punctuation">,</span> selector2<span class="token punctuation">)</span> <span class="token comment">/* 类似于:is，但不增加优先级 */</span>
<span class="token punctuation">:</span><span class="token function">has</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token comment">/* CSS父选择器（2025年新增） */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><h3 id="_6-如何居中div-如何居中一个浮动元素-如何让绝对定位的div居中" tabindex="-1"><a class="header-anchor" href="#_6-如何居中div-如何居中一个浮动元素-如何让绝对定位的div居中" aria-hidden="true">#</a> 6. 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？</h3><ul><li><strong>普通div居中</strong>：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Flexbox居中（推荐）</strong>：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Grid居中（推荐）</strong>：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>绝对定位居中</strong>：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>绝对定位 + margin居中</strong>：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-display有哪些值-说明他们的作用" tabindex="-1"><a class="header-anchor" href="#_7-display有哪些值-说明他们的作用" aria-hidden="true">#</a> 7. display有哪些值？说明他们的作用？</h3><ul><li><code>inline</code>（默认）：内联元素</li><li><code>block</code>：块级元素</li><li><code>inline-block</code>：内联块级元素</li><li><code>none</code>：隐藏元素</li><li><code>flex</code>：弹性容器</li><li><code>grid</code>：网格容器</li><li><code>table</code>：表格显示</li><li><code>table-cell</code>：表格单元格</li><li><code>list-item</code>：项目列表</li><li><code>contents</code>：使元素本身不显示，但子元素正常显示</li></ul><h3 id="_8-position的值" tabindex="-1"><a class="header-anchor" href="#_8-position的值" aria-hidden="true">#</a> 8. position的值？</h3><ul><li><code>static</code>（默认）：按照正常文档流进行排列</li><li><code>relative</code>（相对定位）：不脱离文档流，参考自身静态位置通过 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code> 定位</li><li><code>absolute</code>（绝对定位）：脱离文档流，参考距其最近一个不为 <code>static</code> 的父级元素通过 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code> 定位</li><li><code>fixed</code>（固定定位）：脱离文档流，所固定的参照对象是可视窗口</li><li><code>sticky</code>（粘性定位）：基于用户的滚动位置来定位</li></ul><h3 id="_9-请解释一下css3的flexbox-弹性盒布局模型-以及适用场景" tabindex="-1"><a class="header-anchor" href="#_9-请解释一下css3的flexbox-弹性盒布局模型-以及适用场景" aria-hidden="true">#</a> 9. 请解释一下CSS3的flexbox（弹性盒布局模型），以及适用场景？</h3><p><strong>Flexbox</strong> 是一种一维布局模型，用于在容器中对齐和分布空间。</p><p><strong>容器属性</strong>：</p><ul><li><code>display: flex</code>：定义弹性容器</li><li><code>flex-direction</code>：主轴方向（<code>row</code>、<code>row-reverse</code>、<code>column</code>、<code>column-reverse</code>）</li><li><code>flex-wrap</code>：换行（<code>nowrap</code>、<code>wrap</code>、<code>wrap-reverse</code>）</li><li><code>justify-content</code>：主轴对齐（<code>flex-start</code>、<code>flex-end</code>、<code>center</code>、<code>space-between</code>、<code>space-around</code>、<code>space-evenly</code>）</li><li><code>align-items</code>：交叉轴对齐（<code>stretch</code>、<code>flex-start</code>、<code>flex-end</code>、<code>center</code>、<code>baseline</code>）</li><li><code>align-content</code>：多行交叉轴对齐</li></ul><p><strong>项目属性</strong>：</p><ul><li><code>flex-grow</code>：放大比例</li><li><code>flex-shrink</code>：缩小比例</li><li><code>flex-basis</code>：初始大小</li><li><code>flex</code>：前三者的简写（<code>flex: 1</code> 等价于 <code>flex: 1 1 0%</code>）</li><li><code>align-self</code>：单独对齐</li></ul><p><strong>适用场景</strong>：</p><ul><li>水平垂直居中</li><li>等高布局</li><li>两栏/三栏布局</li><li>导航栏</li><li>卡片列表</li></ul><h3 id="_10-css-grid是什么-如何使用" tabindex="-1"><a class="header-anchor" href="#_10-css-grid是什么-如何使用" aria-hidden="true">#</a> 10. CSS Grid是什么？如何使用？</h3><p><strong>Grid</strong> 是一种二维布局模型，可以同时处理行和列。</p><p><strong>容器属性</strong>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr 1fr<span class="token punctuation">;</span> <span class="token comment">/* 定义列 */</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span> <span class="token comment">/* 定义行 */</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 间距 */</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 水平对齐 */</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 垂直对齐 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>项目属性</strong>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span> <span class="token comment">/* 跨列 */</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span> <span class="token comment">/* 跨行 */</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span> <span class="token comment">/* 区域 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>适用场景</strong>：</p><ul><li>复杂的页面布局</li><li>仪表盘</li><li>图片库</li><li>响应式布局</li></ul><h2 id="css3新特性" tabindex="-1"><a class="header-anchor" href="#css3新特性" aria-hidden="true">#</a> CSS3新特性</h2><h3 id="_11-css3有哪些新特性" tabindex="-1"><a class="header-anchor" href="#_11-css3有哪些新特性" aria-hidden="true">#</a> 11. CSS3有哪些新特性？</h3><ol><li><p><strong>选择器</strong>：</p><ul><li>属性选择器：<code>[attr^=&quot;value&quot;]</code>、<code>[attr$=&quot;value&quot;]</code>、<code>[attr*=&quot;value&quot;]</code></li><li>结构伪类：<code>:nth-child(n)</code>、<code>:nth-of-type(n)</code></li><li>否定伪类：<code>:not(selector)</code></li></ul></li><li><p><strong>布局</strong>：</p><ul><li>Flexbox（弹性盒子）</li><li>Grid（网格布局）</li></ul></li><li><p><strong>视觉效果</strong>：</p><ul><li>圆角：<code>border-radius</code></li><li>阴影：<code>box-shadow</code>、<code>text-shadow</code></li><li>渐变：<code>linear-gradient</code>、<code>radial-gradient</code></li><li>透明度：<code>opacity</code>、<code>rgba</code>、<code>hsla</code></li><li>变换：<code>transform</code>（旋转、缩放、平移、倾斜）</li><li>过渡：<code>transition</code></li><li>动画：<code>animation</code></li></ul></li><li><p><strong>背景</strong>：</p><ul><li><code>background-size</code>、<code>background-origin</code>、<code>background-clip</code></li><li>多背景：<code>background-image: url1, url2</code></li></ul></li><li><p><strong>文字</strong>：</p><ul><li><code>text-shadow</code></li><li><code>word-wrap</code>、<code>word-break</code></li><li><code>text-overflow</code></li></ul></li><li><p><strong>其他</strong>：</p><ul><li>媒体查询：<code>@media</code></li><li>字体：<code>@font-face</code></li><li>滤镜：<code>filter</code></li><li>混合模式：<code>mix-blend-mode</code></li><li>对象适配：<code>object-fit</code>、<code>object-position</code></li></ul></li></ol><h3 id="_12-如何实现一个三角形" tabindex="-1"><a class="header-anchor" href="#_12-如何实现一个三角形" aria-hidden="true">#</a> 12. 如何实现一个三角形？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 向上三角形 */</span>
<span class="token selector">.triangle</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 100px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 向右三角形 */</span>
<span class="token selector">.triangle</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 100px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原理</strong>：利用边框的透明特性，通过设置不同的边框宽度和颜色来实现三角形。</p><h3 id="_13-如何实现一个自适应的正方形" tabindex="-1"><a class="header-anchor" href="#_13-如何实现一个自适应的正方形" aria-hidden="true">#</a> 13. 如何实现一个自适应的正方形？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 方案1：padding-bottom */</span>
<span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 宽高比 1:1 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案2：aspect-ratio（现代浏览器） */</span>
<span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1 / 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案3：Grid */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-如何实现一个毛玻璃效果" tabindex="-1"><a class="header-anchor" href="#_14-如何实现一个毛玻璃效果" aria-hidden="true">#</a> 14. 如何实现一个毛玻璃效果？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.glass</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-如何实现一个打字机效果" tabindex="-1"><a class="header-anchor" href="#_15-如何实现一个打字机效果" aria-hidden="true">#</a> 15. 如何实现一个打字机效果？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.typing</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 3px solid<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> typing 3s <span class="token function">steps</span><span class="token punctuation">(</span>30<span class="token punctuation">)</span> forwards<span class="token punctuation">,</span> blink 0.7s infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> typing</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> blink</span> <span class="token punctuation">{</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span> <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-如何实现一个骨架屏" tabindex="-1"><a class="header-anchor" href="#_16-如何实现一个骨架屏" aria-hidden="true">#</a> 16. 如何实现一个骨架屏？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.skeleton</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> #f0f0f0 25%<span class="token punctuation">,</span> #e0e0e0 50%<span class="token punctuation">,</span> #f0f0f0 75%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 200% 100%<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> skeleton-loading 1.5s infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> skeleton-loading</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span> <span class="token property">background-position</span><span class="token punctuation">:</span> 200% 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">background-position</span><span class="token punctuation">:</span> -200% 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-如何实现一个固定在底部的按钮-但不要遮挡内容" tabindex="-1"><a class="header-anchor" href="#_17-如何实现一个固定在底部的按钮-但不要遮挡内容" aria-hidden="true">#</a> 17. 如何实现一个固定在底部的按钮，但不要遮挡内容？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span> <span class="token comment">/* 按钮高度 + 间距 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2><h3 id="_18-什么是bfc-如何触发bfc" tabindex="-1"><a class="header-anchor" href="#_18-什么是bfc-如何触发bfc" aria-hidden="true">#</a> 18. 什么是BFC？如何触发BFC？</h3><p><strong>BFC（Block Formatting Context）</strong> 是 Web 页面中一个独立的渲染区域，区域内部的元素的渲染不会影响外界。</p><p><strong>触发BFC的方式</strong>：</p><ul><li><code>html</code> 根元素</li><li><code>float</code> 的值不为 <code>none</code></li><li><code>position</code> 的值为 <code>absolute</code> 或 <code>fixed</code></li><li><code>overflow</code> 的值不为 <code>visible</code></li><li><code>display</code> 的值为 <code>inline-block</code>、<code>table-cell</code>、<code>table-caption</code></li><li><code>display</code> 的值为 <code>flex</code> 或 <code>grid</code> 项</li></ul><p><strong>BFC的应用场景</strong>：</p><ul><li>解决外边距塌陷</li><li>清除浮动</li><li>实现自适应两栏布局</li><li>防止元素被浮动元素覆盖</li></ul><h3 id="_19-如何清除浮动" tabindex="-1"><a class="header-anchor" href="#_19-如何清除浮动" aria-hidden="true">#</a> 19. 如何清除浮动？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 方案1：使用clear */</span>
<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案2：使用overflow */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案3：使用BFC */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flow-root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案4：使用伪元素（推荐） */</span>
<span class="token selector">.clearfix::before,
.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计" aria-hidden="true">#</a> 响应式设计</h2><h3 id="_20-什么是响应式设计" tabindex="-1"><a class="header-anchor" href="#_20-什么是响应式设计" aria-hidden="true">#</a> 20. 什么是响应式设计？</h3><p>响应式设计是一种网页设计方法，使网页能够根据不同的设备屏幕尺寸自动调整布局和显示效果。</p><p><strong>核心技术</strong>：</p><ul><li>媒体查询（<code>@media</code>）</li><li>弹性布局（Flexbox、Grid）</li><li>弹性单位（<code>rem</code>、<code>vw</code>、<code>vh</code>、<code>%</code>）</li><li>弹性图片（<code>max-width: 100%</code>）</li></ul><h3 id="_21-rem、em、px、vw、vh的区别" tabindex="-1"><a class="header-anchor" href="#_21-rem、em、px、vw、vh的区别" aria-hidden="true">#</a> 21. rem、em、px、vw、vh的区别？</h3><ul><li><code>px</code>：绝对单位，像素</li><li><code>em</code>：相对于父元素的字体大小</li><li><code>rem</code>：相对于根元素（<code>html</code>）的字体大小</li><li><code>vw</code>：视口宽度的1%</li><li><code>vh</code>：视口高度的1%</li><li><code>%</code>：相对于父元素的百分比</li></ul><p><strong>推荐</strong>：使用 <code>rem</code> 作为主要单位，配合媒体查询调整根元素字体大小。</p><h3 id="_22-如何实现响应式布局" tabindex="-1"><a class="header-anchor" href="#_22-如何实现响应式布局" aria-hidden="true">#</a> 22. 如何实现响应式布局？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 媒体查询 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 容器查询（2025年新增） */</span>
<span class="token atrule"><span class="token rule">@container</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.card</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css变量" tabindex="-1"><a class="header-anchor" href="#css变量" aria-hidden="true">#</a> CSS变量</h2><h3 id="_23-什么是css变量-如何使用" tabindex="-1"><a class="header-anchor" href="#_23-什么是css变量-如何使用" aria-hidden="true">#</a> 23. 什么是CSS变量？如何使用？</h3><p>**CSS变量（自定义属性）**是一种在CSS中定义可重用值的方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--primary-color</span><span class="token punctuation">:</span> #007bff<span class="token punctuation">;</span>
  <span class="token property">--font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">--spacing</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li>作用域：定义在选择器内，子元素可访问</li><li>继承：可继承</li><li>默认值：<code>var(--name, default-value)</code></li><li>动态修改：通过 JS 修改</li></ul><p><strong>应用场景</strong>：</p><ul><li>主题切换</li><li>响应式设计</li><li>设计系统</li></ul><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2><h3 id="_24-css动画有哪些" tabindex="-1"><a class="header-anchor" href="#_24-css动画有哪些" aria-hidden="true">#</a> 24. CSS动画有哪些？</h3><ul><li><strong>过渡（transition）</strong>： <ul><li>用于简单的状态变化</li><li>只能定义开始和结束状态</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>动画（animation）</strong>： <ul><li>用于复杂的动画效果</li><li>可以定义多个关键帧</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> slideIn</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> slideIn 0.5s ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-如何优化css动画性能" tabindex="-1"><a class="header-anchor" href="#_25-如何优化css动画性能" aria-hidden="true">#</a> 25. 如何优化CSS动画性能？</h3><ul><li>使用 <code>transform</code> 和 <code>opacity</code> 实现动画（触发GPU加速）</li><li>避免使用 <code>left</code>、<code>top</code>、<code>width</code>、<code>height</code> 等属性</li><li>使用 <code>will-change</code> 提示浏览器优化</li><li>避免强制同步布局</li><li>使用 <code>requestAnimationFrame</code></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 触发GPU加速 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css工程化" tabindex="-1"><a class="header-anchor" href="#css工程化" aria-hidden="true">#</a> CSS工程化</h2><h3 id="_26-什么是css-modules" tabindex="-1"><a class="header-anchor" href="#_26-什么是css-modules" aria-hidden="true">#</a> 26. 什么是CSS Modules？</h3><p><strong>CSS Modules</strong> 是一种CSS模块化方案，通过构建工具将CSS类名转换为唯一的标识符，避免样式冲突。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Button.module.css */</span>
<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./Button.module.css&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>button<span class="token punctuation">}</span><span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-什么是tailwind-css" tabindex="-1"><a class="header-anchor" href="#_27-什么是tailwind-css" aria-hidden="true">#</a> 27. 什么是Tailwind CSS？</h3><p><strong>Tailwind CSS</strong> 是一个原子类CSS框架，提供了一系列实用类，可以直接在HTML中使用。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Click me
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优势</strong>：</p><ul><li>快速开发</li><li>一致性</li><li>响应式设计</li><li>无需离开HTML</li></ul><h3 id="_28-什么是css-in-js" tabindex="-1"><a class="header-anchor" href="#_28-什么是css-in-js" aria-hidden="true">#</a> 28. 什么是CSS-in-JS？</h3><p><strong>CSS-in-JS</strong> 是一种在JavaScript中编写CSS的技术方案。</p><p><strong>常见库</strong>：</p><ul><li>styled-components</li><li>emotion</li><li>jss</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  background-color: blue;
  color: white;
  padding: 10px 20px;
  &amp;:hover {
    background-color: darkblue;
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="_29-如何优化css性能" tabindex="-1"><a class="header-anchor" href="#_29-如何优化css性能" aria-hidden="true">#</a> 29. 如何优化CSS性能？</h3><ol><li><strong>减少选择器嵌套层级</strong></li><li><strong>避免使用通配符选择器</strong></li><li><strong>避免使用 <code>@import</code></strong></li><li><strong>压缩CSS</strong></li><li><strong>关键CSS内联</strong></li><li><strong>使用CSS Sprites或Icon Font</strong></li><li><strong>使用 <code>will-change</code> 提示浏览器优化</strong></li><li><strong>避免强制同步布局</strong></li></ol><h3 id="_30-什么是关键css" tabindex="-1"><a class="header-anchor" href="#_30-什么是关键css" aria-hidden="true">#</a> 30. 什么是关键CSS？</h3><p><strong>关键CSS</strong>是首屏渲染所需的CSS，可以内联到HTML中，加快首屏渲染速度。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* 关键CSS */</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">.header</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token keyword">this</span><span class="token punctuation">.</span>onload<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span><span class="token keyword">this</span><span class="token punctuation">.</span>rel<span class="token operator">=</span><span class="token string">&#39;stylesheet&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可访问性" tabindex="-1"><a class="header-anchor" href="#可访问性" aria-hidden="true">#</a> 可访问性</h2><h3 id="_31-如何提高css的可访问性" tabindex="-1"><a class="header-anchor" href="#_31-如何提高css的可访问性" aria-hidden="true">#</a> 31. 如何提高CSS的可访问性？</h3><ul><li>使用语义化标签</li><li>提供足够的颜色对比度</li><li>使用 <code>:focus</code> 状态</li><li>避免使用 <code>display: none</code> 隐藏内容（使用 <code>visually-hidden</code>）</li><li>使用相对单位（<code>rem</code>、<code>em</code>）</li><li>支持键盘导航</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.visually-hidden</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="_32-如何实现一个固定宽高比的容器" tabindex="-1"><a class="header-anchor" href="#_32-如何实现一个固定宽高比的容器" aria-hidden="true">#</a> 32. 如何实现一个固定宽高比的容器？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 方案1：padding-bottom */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 56.25%<span class="token punctuation">;</span> <span class="token comment">/* 16:9 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案2：aspect-ratio */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 16 / 9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_33-如何实现一个多行文本省略" tabindex="-1"><a class="header-anchor" href="#_33-如何实现一个多行文本省略" aria-hidden="true">#</a> 33. 如何实现一个多行文本省略？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 单行省略 */</span>
<span class="token selector">.ellipsis</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 多行省略 */</span>
<span class="token selector">.ellipsis-multiline</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_34-如何实现一个水平垂直居中的弹窗" tabindex="-1"><a class="header-anchor" href="#_34-如何实现一个水平垂直居中的弹窗" aria-hidden="true">#</a> 34. 如何实现一个水平垂直居中的弹窗？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 方案1：Flexbox */</span>
<span class="token selector">.modal</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案2：Grid */</span>
<span class="token selector">.modal</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方案3：绝对定位 */</span>
<span class="token selector">.modal</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_35-如何实现一个粘性头部" tabindex="-1"><a class="header-anchor" href="#_35-如何实现一个粘性头部" aria-hidden="true">#</a> 35. 如何实现一个粘性头部？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_36-如何实现一个全屏背景图片" tabindex="-1"><a class="header-anchor" href="#_36-如何实现一个全屏背景图片" aria-hidden="true">#</a> 36. 如何实现一个全屏背景图片？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.background</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;image.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_37-如何实现一个渐变边框" tabindex="-1"><a class="header-anchor" href="#_37-如何实现一个渐变边框" aria-hidden="true">#</a> 37. 如何实现一个渐变边框？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.gradient-border</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.gradient-border::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">inset</span><span class="token punctuation">:</span> -3px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> green<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_38-如何实现一个阴影边框" tabindex="-1"><a class="header-anchor" href="#_38-如何实现一个阴影边框" aria-hidden="true">#</a> 38. 如何实现一个阴影边框？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.shadow-border</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_39-如何实现一个圆形图片" tabindex="-1"><a class="header-anchor" href="#_39-如何实现一个圆形图片" aria-hidden="true">#</a> 39. 如何实现一个圆形图片？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.circle-image</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.circle-image img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_40-如何实现一个卡片悬停效果" tabindex="-1"><a class="header-anchor" href="#_40-如何实现一个卡片悬停效果" aria-hidden="true">#</a> 40. 如何实现一个卡片悬停效果？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.card</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s ease<span class="token punctuation">,</span> box-shadow 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.card:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 10px 20px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_41-如何实现一个加载动画" tabindex="-1"><a class="header-anchor" href="#_41-如何实现一个加载动画" aria-hidden="true">#</a> 41. 如何实现一个加载动画？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.spinner</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #f3f3f3<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 5px solid #3498db<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> spin 1s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> spin</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_42-如何实现一个进度条" tabindex="-1"><a class="header-anchor" href="#_42-如何实现一个进度条" aria-hidden="true">#</a> 42. 如何实现一个进度条？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.progress-bar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.progress</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_43-如何实现一个标签页" tabindex="-1"><a class="header-anchor" href="#_43-如何实现一个标签页" aria-hidden="true">#</a> 43. 如何实现一个标签页？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.tabs</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab.active</span> <span class="token punctuation">{</span>
  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_44-如何实现一个面包屑导航" tabindex="-1"><a class="header-anchor" href="#_44-如何实现一个面包屑导航" aria-hidden="true">#</a> 44. 如何实现一个面包屑导航？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.breadcrumb</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.breadcrumb li::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.breadcrumb li:last-child::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_45-如何实现一个分页器" tabindex="-1"><a class="header-anchor" href="#_45-如何实现一个分页器" aria-hidden="true">#</a> 45. 如何实现一个分页器？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.pagination</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pagination button</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pagination button.active</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_46-如何实现一个下拉菜单" tabindex="-1"><a class="header-anchor" href="#_46-如何实现一个下拉菜单" aria-hidden="true">#</a> 46. 如何实现一个下拉菜单？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.dropdown</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.dropdown-menu</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.dropdown:hover .dropdown-menu</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_47-如何实现一个工具提示" tabindex="-1"><a class="header-anchor" href="#_47-如何实现一个工具提示" aria-hidden="true">#</a> 47. 如何实现一个工具提示？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.tooltip</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tooltip::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-tooltip<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tooltip:hover::after</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_48-如何实现一个模态框" tabindex="-1"><a class="header-anchor" href="#_48-如何实现一个模态框" aria-hidden="true">#</a> 48. 如何实现一个模态框？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.modal-overlay</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.modal</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_49-如何实现一个固定侧边栏" tabindex="-1"><a class="header-anchor" href="#_49-如何实现一个固定侧边栏" aria-hidden="true">#</a> 49. 如何实现一个固定侧边栏？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-content</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_50-如何实现一个响应式导航栏" tabindex="-1"><a class="header-anchor" href="#_50-如何实现一个响应式导航栏" aria-hidden="true">#</a> 50. 如何实现一个响应式导航栏？</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.navbar</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.navbar</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.navbar-menu</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.navbar-menu.active</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年高频考点" tabindex="-1"><a class="header-anchor" href="#_2025年高频考点" aria-hidden="true">#</a> 2025年高频考点</h2><ol><li><strong>容器查询（Container Queries）</strong></li><li><strong>CSS Houdini</strong></li><li><strong>CSS Nesting（嵌套）</strong></li><li><strong>CSS Scroll Snap</strong></li><li><strong>CSS Subgrid</strong></li><li><strong>CSS Masonry（瀑布流）</strong></li><li><strong>CSS Anchor Positioning</strong></li><li><strong>CSS View Transitions API</strong></li></ol><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,168)),s("p",null,[s("a",r,[n[1]||(n[1]=a("50道CSS基础面试题（附答案） - 个人文章 - SegmentFault 思否",-1)),t(e)])])])}const h=p(u,[["render",k],["__file","前端面试系列-50道CSS基础面试题（附答案）.html.vue"]]);export{h as default};
