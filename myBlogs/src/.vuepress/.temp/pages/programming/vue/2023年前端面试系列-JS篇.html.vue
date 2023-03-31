<template><div><h1 id="javascript-常见面试题总结" tabindex="-1"><a class="header-anchor" href="#javascript-常见面试题总结" aria-hidden="true">#</a> JavaScript 常见面试题总结</h1>
<p><a href="https://juejin.cn/post/7176644710847479869" target="_blank" rel="noopener noreferrer">参考自掘金《2023 前端面试系列-- JS 篇》<ExternalLinkIcon/></a></p>
<h2 id="js-的数据类型有哪些" tabindex="-1"><a class="header-anchor" href="#js-的数据类型有哪些" aria-hidden="true">#</a> JS 的数据类型有哪些？</h2>
<ul>
<li>基本数据类型（值类型）：Number、String、Boolean、Null、Undefined、Symbol、BigInt。保存在栈内存中。</li>
<li>复杂数据类型（引用类型）：Object、Function、Array、RegExp、Date 基本包装类型及单体内置对象（Global、Math）等。</li>
</ul>
<p><strong>基本数据类型保存在栈里面，可以直接访问它的值；引用数据类型保存在堆里面，栈里面保存的时地址，通过栈里面的地址去访问堆里面的值。</strong></p>
<h2 id="null-和-undefined-的区别" tabindex="-1"><a class="header-anchor" href="#null-和-undefined-的区别" aria-hidden="true">#</a> null 和 undefined 的区别？</h2>
<ul>
<li><code v-pre>null</code>表示一个对象被定义了，值为“空值”。用法：
<ul>
<li>作为函数的参数，表示该函数的参数不是对象。</li>
<li>作为对象原型链的终点。</li>
</ul>
</li>
<li><code v-pre>undefined</code>表示不存在这个值。就是此处应该有一个值，但是还没有定义，当尝试读取时就会返回 undefined。用法：
<ul>
<li>函数没有返回值时，默认返回 undefined。</li>
<li>变量已声明，没有赋值时，为 undefined。</li>
<li>对象中没有赋值的属性，该属性的值为 undefined。</li>
<li>调用函数时，应该提供的参数没有提供，该参数等于 undefined。</li>
</ul>
</li>
</ul>
<p><strong>如何判断 JS 的数据类型？</strong></p>
<ol>
<li>typeof
<ul>
<li><code v-pre>typeof</code>可以区分除了<code v-pre>Null</code>类型以外的其他基本数据类型，以及从对象类型中识别出函数（function）。</li>
<li>其返回值有：<code v-pre>number</code>、<code v-pre>string</code>、<code v-pre>boolean</code>、<code v-pre>undefined</code>、<code v-pre>symbol</code>、<code v-pre>bigint</code>、<code v-pre>function</code>、<code v-pre>object</code>。</li>
<li>其中，<code v-pre>typeof null</code>返回<code v-pre>“object”</code></li>
<li>如果要识别<code v-pre>null</code>，可直接使用<code v-pre>===</code>全等运算符来判断。</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// 'number'</span>
<span class="token keyword">typeof</span> <span class="token string">'1'</span> <span class="token comment">// 'string'</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token comment">// 'boolean'</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token comment">// 'undefined'</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'symbol'</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// 'object'</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 'object'</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 'object'</span>
<span class="token keyword">typeof</span> console <span class="token comment">// 'object'</span>
<span class="token keyword">typeof</span> console<span class="token punctuation">.</span>log <span class="token comment">// 'function'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>instanceof
<ul>
<li><code v-pre>instanceof</code>一般时用来判断引用数据类型，但不能正确判断基本数据类型，根据在原型链中查找判断当前数据的原型对象是否存在返回布尔类型。</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token boolean">true</span> <span class="token keyword">instanceof</span> <span class="token class-name">Boolean</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token string">'str'</span> <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
date instance <span class="token keyword">of</span> Date<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Object.prototype.toString</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toSrting</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// "[object Object]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 结果同上，加上call也可以</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// "[object Numbar]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span> <span class="token comment">// "[object String]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// "[object Boolean]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// "[object Function]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// "[object Null]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// "[object Undefined]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token comment">// "[object RegExp]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// "[object Date]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// "[object Array]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment">// "[object HTMLDocument]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// "[object Window]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<p>Array.isArray</p>
<ul>
<li><code v-pre>Array.isArray(value)</code>可以判断 value 是否为数组</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="和-的区别" tabindex="-1"><a class="header-anchor" href="#和-的区别" aria-hidden="true">#</a> == 和 === 的区别？</h2>
<ul>
<li>
<p>==：两个等号称为等值符，当等号两边的值为相同类型时，比较值是否为相同，类型不同时会发生乐星的自动转换，转换为相同的类型后再做比较。</p>
</li>
<li>
<p>===：三个等号称为等同符，当等号两边的值为相同类型时，直接比较等号两边的值，值相同则返回 true；若等号两边值的类型不同时直接返回 false。也就是三个等号既要判断类型也要判断值是否相等。</p>
</li>
</ul>
<h2 id="如何遍历对象的属性" tabindex="-1"><a class="header-anchor" href="#如何遍历对象的属性" aria-hidden="true">#</a> 如何遍历对象的属性？</h2>
<ul>
<li>遍历自身 <strong>可枚举的属性（可枚举，非继承属性）</strong>：<code v-pre>Object.keys()</code>方法，该方法会返回一个由给定对象的自身可枚举属性组成的数组。</li>
<li>遍历自身的 <strong>所有属性（可枚举、不可枚举、非集成属性）</strong>：<code v-pre>Object.getOwnPropertyNames()</code>方法，该方法会返回一个由指定对象的所有自身属性组成的数组。</li>
<li>遍历 <strong>可枚举的自身属性和继承属性</strong>：<code v-pre>for ... in ...</code></li>
</ul>
<h2 id="如何判断两个对象是否相等" tabindex="-1"><a class="header-anchor" href="#如何判断两个对象是否相等" aria-hidden="true">#</a> 如何判断两个对象是否相等？</h2>
<ol>
<li>
<p>Object,is(obj1,obj2),判断两个对象都引用地址是否一致，true 则一致，false 则不一致。</p>
</li>
<li>
<p>判断两个对象内容是否一致，思路是遍历对象的所有键名和键值是否都一致</p>
<p>① 判断两个对象是都指向同一内存</p>
<p>② 使用<code v-pre>Object.getOwnPropertyNames</code>获取对象所有键名数组</p>
<p>③ 判断两个对象的键名数组是否相等</p>
<p>④ 遍历键名，判断键值是否都相等</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数实现</span>
<span class="token keyword">function</span> <span class="token function">isObjectValueEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断两个对象是否指向同一内存，若是则返回true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token comment">// 获取两个对象的键名数组</span>
  <span class="token keyword">let</span> aProps <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token keyword">let</span> bProps <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
  <span class="token comment">// 判断两个键名数组的长度是否一致，不一致则返回false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>aProps<span class="token punctuation">.</span>length <span class="token operator">!==</span> bProps<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 遍历对象的键值</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> prop <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 a 的键名，在 b 中是否存在，若不存在则返回false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 判断 a 的键值是否为对象，若是则需要递归</span>
      <span class="token comment">// 若不是，直接判断键值是否相等，若不等则返回false</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObjectValueEqual</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">!==</span> b<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制类型转换和隐式类型转换有哪些" tabindex="-1"><a class="header-anchor" href="#强制类型转换和隐式类型转换有哪些" aria-hidden="true">#</a> 强制类型转换和隐式类型转换有哪些？</h2>
<ul>
<li>
<p>强制：</p>
<p>转换成字符串：toString(),String()</p>
<p>转换成数字：Number(),parseInt(),parseFloat()</p>
<p>转换成布尔类型：Boolean()</p>
</li>
<li>
<p>隐式：</p>
<p>拼接字符串：let str = 1 + &quot;&quot;;</p>
</li>
</ul>
<h2 id="js-中的作用于和作用域链" tabindex="-1"><a class="header-anchor" href="#js-中的作用于和作用域链" aria-hidden="true">#</a> JS 中的作用于和作用域链？</h2>
<p><code v-pre>作用域</code>，即变量（变量作用域又称上下文）和函数生效（能被访问）的区域或集合。作用域决定了代码区块中变量和其他资源的可见性。一般分为：<code v-pre>全局作用域</code>、<code v-pre>局部作用域（函数作用域）</code>、<code v-pre>块级作用域</code>。</p>
<ul>
<li>全局作用域：任何不在函数中或者是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程的任意位置访问。</li>
<li>局部作用域：也叫做函数作用域，如果一个变量是在函数内部声明的，它就在一个函数作用域下面。这些变量只能在函数内部访问，不能再函数以外去访问。</li>
<li>块级作用域：凡是代码块就可以划分变量的作用域，这种作用域的规则就叫做块级作用域。</li>
</ul>
<p>作用域链：当在 JS 中使用一个变量时，JS 引擎会尝试在当前作用域下寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推，直至找到该变量或是查找至全局作用域，如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量（非严格模式下）或是直接报错。</p>
<p><strong>js 采用的是静态作用域，所以函数的作用域在函数定义时就确定了</strong></p>
<p>推荐阅读：<a href="https://github.com/mqyqingfeng/Blog/issues/3" target="_blank" rel="noopener noreferrer">JavaScript 深入之词法作用域和动态作用域<ExternalLinkIcon/></a></p>
<h2 id="js-的预解析" tabindex="-1"><a class="header-anchor" href="#js-的预解析" aria-hidden="true">#</a> JS 的预解析</h2>
<p>JS 代码的执行是由浏览器中的 JS 解析器来执行的，JS 解析器执行 JS 代码时，分为两个过程：<code v-pre>预解析过程</code>和<code v-pre>代码执行过程</code>。预解析分为<code v-pre>变量预解析（变量提升）</code>和<code v-pre>函数预解析（函数提升</code>）；代码执行是指按顺序从上至下执行：</p>
<ul>
<li>变量提升：把变量的声明提升到当前作用域的最前面，只提升声明，不提升赋值；</li>
<li>函数提升：把函数的声明提升到当前作用域的最前面，只提升声明，不提升调用；</li>
</ul>
<p><strong>函数表达式的写法不存在函数提升</strong></p>
<p><strong>函数提升优先级高于变量提升，即函数提升在变量提升之上，且不会被同名变量声明时覆盖，但是会被同名变量赋值后覆盖</strong></p>
<h2 id="array-from-和-array-of-的使用及区别" tabindex="-1"><a class="header-anchor" href="#array-from-和-array-of-的使用及区别" aria-hidden="true">#</a> Array.from()和 Array.of()的使用及区别？</h2>
<p><code v-pre>Array.from()</code>：将伪数组对象或可遍历对象转换为真数组。接受三个参数：input、map、context。input：待转换的伪数组对象或可遍历对象；map：类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组；context：绑定 map 中用到的 this。</p>
<p><code v-pre>Array.of()</code>：将一系列值转换成数组，会创建一个包含所有传入参数的数组，而不管参数的数量与类型，解决了 <code v-pre>new Array()</code>行为不统一的问题。</p>
</div></template>


