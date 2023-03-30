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
</div></template>


