<template><div><h1 id="vue-常见面试题总结" tabindex="-1"><a class="header-anchor" href="#vue-常见面试题总结" aria-hidden="true">#</a> Vue 常见面试题总结</h1>
<p><a href="https://juejin.cn/post/7191325434486161467" target="_blank" rel="noopener noreferrer">参考自掘金《2023前端面试系列-- Vue 篇》<ExternalLinkIcon/></a></p>
<h2 id="什么是mvvm模型" tabindex="-1"><a class="header-anchor" href="#什么是mvvm模型" aria-hidden="true">#</a> 什么是MVVM模型？</h2>
<ul>
<li><code v-pre>MVVM</code>，是<code v-pre>Model-View-ViewModel</code>的简写，其本质是<code v-pre>MVC</code>模型的升级版。</li>
<li>其中 <code v-pre>Model</code> 代表数据模型，<code v-pre>View</code> 代表看到的页面，<code v-pre>ViewModel</code> 是<code v-pre>View</code>和<code v-pre>Model</code>之间的桥梁，数据会绑定到<code v-pre>ViewModel</code>层并自动将数据渲染到页面中，视图变化的时候会通知<code v-pre>ViewModel</code>层更新数据。</li>
<li>以前是通过操作DOM来更新视图，现在是数据驱动视图。</li>
</ul>
<h2 id="vue的生命周期" tabindex="-1"><a class="header-anchor" href="#vue的生命周期" aria-hidden="true">#</a> Vue的生命周期</h2>
<ul>
<li>
<p>Vue 的生命周期可以分为8个阶段：<code v-pre>创建前后</code>、<code v-pre>挂载前后</code>、<code v-pre>更新前后</code>、销毁前后，以及一些特殊场景的生命周期。</p>
</li>
<li>
<p>Vue 3 中还新增了是3个用于调试和服务端渲染的场景。</p>
<table>
    <tr>
        <th>Vue 2中的生命周期钩子</th>
        <th>Vue 3选项式API的生命周期选项</th>
        <th>Vue 3组合API的生命周期钩子</th>
        <th>描述</th>
    </tr>
    <tr>
        <td >`beforeCreate`</td>
        <td>`beforeCreate`</td>
        <td>`setup`</td>
        <td>创建前，此时`data`和 `methods`的数据都还没有初始化</td>
    </tr>
    <tr>
        <td >`created`</td>
        <td>`created`</td>
        <td>`setup`</td>
        <td>创建后，`data`中有值，尚未挂载，可以进行一些`Ajax`请求</td>
    </tr>
    <tr>
        <td >`beforeMount`</td>
        <td>`beforeMount`</td>
        <td>`onBeforeMount`</td>
        <td>挂载前，会找到虚拟`DOM`，编译成`Render`</td>
    </tr>
    <tr>
        <td >`mounted`</td>
        <td>`mounted`</td>
        <td>`onMounted`</td>
        <td>挂载后，虚拟`DOM`已创建，可用于获取访问数据和`DOM`元素</td>
    </tr>
    <tr>
        <td >`beforeUpdate`</td>
        <td>`beforeUpdate`</td>
        <td>`onBeforeUpdate`</td>
        <td>更新前，可用于获取更新前的各种状态</td>
    </tr>
    <tr>
        <td >`updated`</td>
        <td>`updated`</td>
        <td>`onUpdated`</td>
        <td>更新后，所有的状态都已是最新的</td>
    </tr>
    <tr>
        <td >`beforeDestroy`</td>
        <td>`beforeUnmount`</td>
        <td>`onBeforeUnmount`</td>
        <td>销毁前，可用于一些定时器或者订阅的取消</td>
    </tr>
    <tr>
        <td >`destroyed`</td>
        <td>`unmounted`</td>
        <td>`onUnmounted`</td>
        <td>销毁后，可用于一些定时器或者订阅的取消</td>
    </tr>
    <tr>
        <td >`activated`</td>
        <td>`activated`</td>
        <td>`onActivated`</td>
        <td>`keep-alive`，缓存的组件激活时</td>
    </tr>
    <tr>
        <td >`deactivated`</td>
        <td>`deactivated`</td>
        <td>`onDeactivated`</td>
        <td>`keep-alive`，缓存的组件停用时</td>
    </tr>
    <tr>
        <td >`errorCaptured`</td>
        <td>`errorCaptured`</td>
        <td>`onErrorCaptured`</td>
        <td>捕获一个来自子孙组件的错误时调用</td>
    </tr>
    <tr>
        <td >——</td>
        <td>`renderTracked`</td>
        <td>`onRenderTracked`</td>
        <td>调试钩子，响应式依赖被收集时调用</td>
    </tr>
    <tr>
        <td >——</td>
        <td>`renderTriggered`</td>
        <td>`onRenderTriggered`</td>
        <td>调试钩子，响应式依赖被触发时调用</td>
    </tr>
    <tr>
        <td >——</td>
        <td>`serverPrefetch`</td>
        <td>`onServerPrefetch`</td>
        <td>组件实例在服务器上被渲染前调用</td>
    </tr>
</table>
</li>
</ul>
<p><strong>关于Vue 3中的生命周期建议阅读官方文档！！！</strong></p>
<p><a href="https://cn.vuejs.org/api/composition-api-lifecycle.html" target="_blank" rel="noopener noreferrer">组合式 API：生命周期钩子--官方文档<ExternalLinkIcon/></a></p>
<p><a href="https://cn.vuejs.org/api/options-lifecycle.html" target="_blank" rel="noopener noreferrer">选项式 API：生命周期选项--官方文档<ExternalLinkIcon/></a></p>
<h4 id="父子组件的生命周期" tabindex="-1"><a class="header-anchor" href="#父子组件的生命周期" aria-hidden="true">#</a> <strong>父子组件的生命周期</strong>：</h4>
<ul>
<li>加载渲染阶段：父 beforeCreate -&gt; 父 created -&gt; 父 beforeMount -&gt; 子 beforeCreate -&gt; 子 created -&gt; 子 beforeMount -&gt; 子 mounted -&gt; 父 mounted</li>
<li>更新阶段：父 beforeUpdate -&gt; 子 beforeUpdate -&gt; 子 updated -&gt; 父 updated</li>
<li>销毁阶段：父 beforeDestroy -&gt; 子 beforeDestroy -&gt; 子 destroyed -&gt; 父 destroyed</li>
</ul>
<h2 id="vue-nexttick" tabindex="-1"><a class="header-anchor" href="#vue-nexttick" aria-hidden="true">#</a> Vue.$nextTick</h2>
<p><strong>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM</strong></p>
<ul>
<li><code v-pre>nextTick</code> 是<code v-pre>Vue</code>提供的一个全局API，由于<code v-pre>Vue</code>的异步更新策略，导致我们对数据修改后不会直接体现在<code v-pre>DOM</code>上，此时如果想要立即获取更新后的<code v-pre>DOM</code>状态，就需要借助该方法。</li>
<li><code v-pre>Vue</code>在更新<code v-pre>DOM</code>时是异步执行的。当数据发生变化，<code v-pre>Vue</code>将开启一个异步更新队列，并缓冲在同一时间循环中发生的所有数据变更。</li>
<li>如果同一个<code v-pre>watcher</code>被多次触发，只会被推入队列一次。这个在缓冲时去除重复数据对于避免不必要的计算和<code v-pre>DOM</code>操作是非常重要的。</li>
<li><code v-pre>nextTick</code>方法会在队列中加入一个回调函数，确保该函数在前面的<code v-pre>DOM</code>操作完成后才调用。</li>
</ul>
<p>使用场景：</p>
<ol>
<li>如果想要在修改数据后立刻得到更新后的<code v-pre>DOM</code>结构，可以使用<code v-pre>Vue.$nextTick</code>。</li>
<li>在<code v-pre>created</code>生命周期中进行DOM操作。</li>
</ol>
<h2 id="vue-实例挂载过程中发生了什么" tabindex="-1"><a class="header-anchor" href="#vue-实例挂载过程中发生了什么" aria-hidden="true">#</a> Vue 实例挂载过程中发生了什么？</h2>
<ul>
<li>挂载过程指的是<code v-pre>app.mount()</code>过程，这是一个初始化过程，整体上做了两件事情：<code v-pre>初始化</code>和<code v-pre>建立更新机制</code>。</li>
<li>初始化会创建组件实例、初始化组件状态、创建各种响应式数据。</li>
<li>建立更新机制这一步会立即执行一次组件的更新函数，这会首次执行组件渲染函数并且执行<code v-pre>patch</code>将<code v-pre>vnote</code>转换为<code v-pre>dom</code>；</li>
<li>同时首次执行渲染函数会创建它内部响应式数据和组件更新函数之前的依赖关系，这使得以后数据发生变化时会执行对应的更新函数。</li>
</ul>
<h2 id="vue-的模版编译原理" tabindex="-1"><a class="header-anchor" href="#vue-的模版编译原理" aria-hidden="true">#</a> Vue 的模版编译原理</h2>
<ul>
<li><code v-pre>Vue</code>中有个独特的编译器模块，称为<code v-pre>compiler</code>，它主要作用是将用户编写的<code v-pre>template</code>编译为<code v-pre>js</code>中可执行的<code v-pre>render</code>函数。</li>
<li>在<code v-pre>Vue</code>中，编译器会先对<code v-pre>template</code>进行解析，这一步称为<code v-pre>parse</code>，结束之后得到一个<code v-pre>JS对象</code>，称之为<code v-pre>抽象语法树AST</code>；</li>
<li>然后是对<code v-pre>AST</code>进行<code v-pre>深加工</code>的转换过程，这一个称为<code v-pre>transform</code>，最后将前面得到的<code v-pre>AST</code>生成<code v-pre>JS代码</code>，也就是<code v-pre>render</code>函数。</li>
</ul>
<h2 id="vue-的响应式原理" tabindex="-1"><a class="header-anchor" href="#vue-的响应式原理" aria-hidden="true">#</a> Vue 的响应式原理</h2>
<ul>
<li>
<p>Vue 2：</p>
<ul>
<li><code v-pre>Vue 2</code>中的数据响应式会根据数据类型做不同的处理。</li>
<li>如果是对象，则通过<code v-pre>Object.defineProperty(obj,key,descriptor)</code>拦截对象属性访问，当数据被访问或改变时，感知并做出反应；</li>
<li>如果是数组，则通过覆盖数组原型的方法，拓展它的7个变更方法（<code v-pre>push</code>、<code v-pre>pop</code>、<code v-pre>shift</code>、<code v-pre>unshift</code>、<code v-pre>splice</code>、<code v-pre>sort</code>、<code v-pre>reverse</code>），使这些方法可以额外的做更新通知，从而做出响应。</li>
<li>缺点：
<ul>
<li>初始化时的递归遍历会造成能损失；</li>
<li>通知更新过程需要维护大量<code v-pre>dep</code>实例和<code v-pre>watcher</code>实例，额外占用内存较多；</li>
<li>新增或删除对象属性无法拦截，需要通过<code v-pre>Vue.set</code>及<code v-pre>delete</code>这样的<code v-pre>API</code>才能生效；</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Vue 3：</p>
<ul>
<li>Vue 3中利用ES6的Proxy机制代理需要响应化的数据。</li>
<li>可以同时支持对象和数组，动态属性增、删都可以拦截新增数据结构均支持，对象嵌套属性运行时递归，用到时才代理，也不需要维护特别多的依赖关系，性能取得很大进步。</li>
</ul>
</li>
</ul>
<h2 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom" aria-hidden="true">#</a> 虚拟DOM</h2>
<ul>
<li>
<p>概念：</p>
<ul>
<li><code v-pre>虚拟DOM</code>，顾名思义就是虚拟的<code v-pre>DOM对象</code>，它本身就是一个<code v-pre>JS对象</code>，只不过是通过<code v-pre>不同的属性</code>去<code v-pre>描述</code>一个<code v-pre>视图结构</code>。</li>
</ul>
</li>
<li>
<p>虚拟DOM的好处：</p>
<ul>
<li>
<p>性能提升：</p>
<ul>
<li>直接操作<code v-pre>DOM</code>是有限制的，一个真实元素上有很多属性，如果直接对其进行操作，同时会对很多额外的属性内容进行了操作，这是没有必要的。</li>
<li>如果将这些操作转移到<code v-pre>JS对象</code>上，就会简单很多。</li>
<li>另外，操作<code v-pre>DOM</code>的代价是比较昂贵的，频繁的操作<code v-pre>DOM</code>容易引起页面的重回和回流。</li>
<li>如果通过抽象<code v-pre>VNode</code>进行中间处理，可以有效减少直接操作<code v-pre>DOM</code>次数，从而减少页面的重回和回流。</li>
</ul>
</li>
<li>
<p>方便跨平台实现</p>
<ul>
<li>同一<code v-pre>VNode节点</code>可以渲染成不同平台上对应的内容，</li>
<li>比如：渲染在浏览器是DOM元素节点，渲染在Native（iOS、Android）变为对应的控件。</li>
<li>Vue 3中允许开发者基于<code v-pre>VNode</code>实现自定义渲染器（<code v-pre>renderer</code>），以便于针对不同平台进行渲染。</li>
</ul>
</li>
<li>
<p>结构：</p>
<ul>
<li>没有同一的标准，一般包括<code v-pre>tag</code>、<code v-pre>props</code>、<code v-pre>children</code>三项。</li>
<li><code v-pre>tag</code>：必选。就是标签，也可以是组件，或者函数。</li>
<li><code v-pre>props</code>：非必选。就是这个标签上的属性和方法。</li>
<li><code v-pre>children</code>：非必选。就是这个标签的内容或者子节点。
<ul>
<li>如果是文本节点就是字符串；如果有子节点就是数组。</li>
<li>换句话说，如果判断<code v-pre>children</code>是字符串的话，就表示一定是文本节点，且这个节点没有子元素。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="diff算法" tabindex="-1"><a class="header-anchor" href="#diff算法" aria-hidden="true">#</a> diff算法</h2>
<ul>
<li>
<p>概念：</p>
<ul>
<li><code v-pre>diff</code>算法是一种对比算法，通过对比<code v-pre>旧的虚拟DOM</code>和<code v-pre>新的虚拟DOM</code>，得出是哪个虚拟节点发生了改变，找出这个虚拟节点并只更新这个节点所对应的真实节点，而不用更新其他未发生改变的节点，实现<code v-pre>精准地更新真实DOM</code>，进而提高效率。</li>
</ul>
</li>
<li>
<p>对比方式：</p>
<ul>
<li><code v-pre>diff算法</code>的整体策略是：<code v-pre>深度优先</code>，<code v-pre>同层比较</code>。比较只会在同层级进行不会跨层级比较，比较过程中，循环从两边向中间收拢。</li>
<li>首先判断的是连个节点的tag是否相同，不同则删除该节点并重新创建节点进行替换。</li>
<li><code v-pre>tag</code>相同时，先替换属性，然后再对比子元素，并且分为一下几种情况：
<ul>
<li>新旧节点都有子元素时，采用双指针的方式进行比较，循环向中间靠拢，根据情况调用<code v-pre>patchVnode</code>进行<code v-pre>patch</code>重复流程，调用<code v-pre>createElem</code>创建一个新节点，从哈希表寻找<code v-pre>key</code>直到找到<code v-pre>VNode</code>节点再分情况操作。</li>
<li>新节点有子元素，旧节点没有子元素，则将子元素虚拟节点转化成真实节点插入即可。</li>
<li>新节点没有子元素，旧节点有子元素，则清空子元素，并设置为新节点的文本内容。</li>
<li>新旧节点都没有子元素时，即都为文本节点，则直接对比文本内容，不同则更新。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="vue-中key的作用" tabindex="-1"><a class="header-anchor" href="#vue-中key的作用" aria-hidden="true">#</a> Vue 中key的作用？</h2>
<ul>
<li>key的作用主要是为了更加搞笑的更新虚拟DOM。</li>
<li>Vue判断两个节点是否相同时，主要是判断两者的key和元素类型tag。</li>
<li>因此如果不设置key，他的值就是undefined，则可能永远认为这是两个相同的节点，智能去做更新操作，将会造成大量的DOM进行更新操作。</li>
</ul>
<h2 id="为什么组件中的data是一个函数" tabindex="-1"><a class="header-anchor" href="#为什么组件中的data是一个函数" aria-hidden="true">#</a> 为什么组件中的data是一个函数？</h2>
<ul>
<li>在<code v-pre>new Vue()</code>中，可以是函数，也可以是对象，因为根实例只会有一个，不会产生数据污染。</li>
<li>在组件中，<code v-pre>data</code>必须为函数，目的是为了房子多个组件实例对象之间共用一个<code v-pre>data</code>，产生数据污染；而采用函数的形式，在<code v-pre>initData</code>时会将其作为工厂函数都会返回全新的<code v-pre>data</code>对象。</li>
</ul>
<h2 id="vue中组件间的通信方式" tabindex="-1"><a class="header-anchor" href="#vue中组件间的通信方式" aria-hidden="true">#</a> Vue中组件间的通信方式？</h2>
<ol>
<li>父子组件通信：</li>
</ol>
<ul>
<li>父向子传递数据，是通过 <code v-pre>props</code>；子向父传递数据，是通过 <code v-pre>$emit</code> 触发事件；通过父链或子链也可以通信 ( <code v-pre>$parent </code>/ <code v-pre>$children</code> )； <code v-pre>ref</code> 也可以访问组件实例； <code v-pre>provide</code> / <code v-pre>inject</code> ； <code v-pre>$arrs</code> / <code v-pre>$listeners</code>。</li>
</ul>
<ol start="2">
<li>兄弟组件通信：</li>
</ol>
<ul>
<li>全局事件总线 <code v-pre>EventBus</code> 、 <code v-pre>Vuex</code>。</li>
</ul>
<ol start="3">
<li>跨层级组件通信：</li>
</ol>
<ul>
<li>全局事件总线 <code v-pre>EventBus</code> 、 <code v-pre>Vuex</code> 、 <code v-pre>provide</code> / <code v-pre>inject</code>。</li>
</ul>
<h2 id="v-show-和-v-if-的区别" tabindex="-1"><a class="header-anchor" href="#v-show-和-v-if-的区别" aria-hidden="true">#</a> v-show 和 v-if 的区别？</h2>
<ol>
<li>
<p>控制手段不同。<code v-pre>v-show</code>是通过给元素添加<code v-pre>CSS</code>属性<code v-pre>dieplay:none</code>，但元素仍然存在；而v-if控制元素显示或隐藏是将元素整个添加或删除。</p>
</li>
<li>
<p>编译过程不同。<code v-pre>v-if</code>切换有一个局部编译或者卸载的过程，切换过程中合适的小鬼和重建内部的事件监听和子组件；<code v-pre>v-show</code>只是简单的基于<code v-pre>CSS切换</code>。</p>
</li>
<li>
<p>编译条件不用。<code v-pre>v-if</code>是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建，渲染条件为假时，并不做操作，直到条件为真才渲染。</p>
</li>
<li>
<p>触发生命周期不同。<code v-pre>v-show</code>由false变为true的时候不会触发组件的生命周期；<code v-pre>v-if</code>由false变为true的时候，触发组件的<code v-pre>beforeCreate</code>、<code v-pre>created</code>、<code v-pre>beforeMount</code>、<code v-pre>mounted</code>钩子，由true变为false的时候触发组件的<code v-pre>beforeDestory</code>、<code v-pre>destoryed</code>钩子。</p>
</li>
<li>
<p>性能消耗不同。v-if有更高的切换消耗；v-show有更高的初始渲染消耗。</p>
</li>
</ol>
<p>使用场景：</p>
<ul>
<li>如果需要非常频繁地切换，则使用v-show较好，如：手风琴菜单，tab页标签等；</li>
<li>如果在运行时条件很少改变，则使用v-if较好，如用户登录之后，根据权限不容来显示不同的内容。</li>
</ul>
<h2 id="computed-和-watch-的区别" tabindex="-1"><a class="header-anchor" href="#computed-和-watch-的区别" aria-hidden="true">#</a> computed 和 watch 的区别？</h2>
<ul>
<li>
<p>computed计算属性，依赖其他计算值，内部任一依赖项的变化都会重新执行该函数，计算属性有缓存，多次重复使用计算属性时会从缓存中获取返回值，计算属性必须要有return关键词。</p>
</li>
<li>
<p>wathc侦听到某一数据的变化从而触发函数。当数据为对象类型时，对象中的属性值变化时需要使用深度侦听deep属性，也可在二面第一次加载时使用立即侦听immdiate属性。</p>
</li>
</ul>
<p>使用场景：</p>
<ul>
<li>计算属性一般用在模板渲染中，某个值是依赖其他响应对象甚至是计算属性而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。</li>
</ul>
<h2 id="v-if-和-v-for-为什么不建议放在一起使用" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-for-为什么不建议放在一起使用" aria-hidden="true">#</a> v-if 和 v-for 为什么不建议放在一起使用？</h2>
<ul>
<li>
<p>Vue 2中，<code v-pre>v-for</code>的优先级比<code v-pre>v-if</code>高，这意味着<code v-pre>v-if</code>将分别重复运行于每一个<code v-pre>v-for</code>循环中。如果便利的数组很大，且真正要展示的数据很少时，将造成很大的性能浪费。</p>
</li>
<li>
<p>Vue 3种，则完全相反，<code v-pre>v-if</code>的优先级高于<code v-pre>v-for</code>，所以<code v-pre>v-if</code>执行的时候，它所调用的变量还不存在，会导致异常。</p>
</li>
<li>
<p>通常有两种情况导致要这样做：</p>
<ul>
<li>
<p>为了过滤列表中的项目，比如：<code v-pre>v-for = &quot;user in users&quot; v-if = &quot;user.active&quot;</code>。这种情况可以定义一个计算属性，让其返回过滤后的列表即可。</p>
</li>
<li>
<p>为了避免渲染本该被隐藏的列表，比如：<code v-pre>v-for = &quot;user in users&quot; v-if = &quot;showUsersFlag&quot;</code>。这种情况，可以将v-if移动至容器元素上或者在外面包一层<code v-pre>template</code>即可。</p>
</li>
</ul>
</li>
</ul>
<h2 id="vue-2中的set方法怎么使用" tabindex="-1"><a class="header-anchor" href="#vue-2中的set方法怎么使用" aria-hidden="true">#</a> Vue 2中的set方法怎么使用？</h2>
<ul>
<li><a href="https://v2.cn.vuejs.org/v2/api/#Vue-set" target="_blank" rel="noopener noreferrer"><code v-pre>set</code>是Vue 2中的一个全局API。<ExternalLinkIcon/></a>可手动添加响应式数据，解决数据变化时，视图未更新问题。当在项目中直接设置数组的某一项的值，或者直接设置对象的某个属性值，会发现页面并没有更新。这是因为<code v-pre>Object.defineProperty()</code>的限制，监听不到数据变化，可通过<code v-pre>this.$set(数组或者对象，数组下标或者对象的属性名，更新后的值)</code>解决。</li>
</ul>
<h2 id="keep-alive-是什么" tabindex="-1"><a class="header-anchor" href="#keep-alive-是什么" aria-hidden="true">#</a> keep-alive 是什么？</h2>
<ul>
<li>
<p>作用：实现组件缓存，保持组件的状态，避免反复渲染导致的性能问题。</p>
</li>
<li>
<p>工作原理：<code v-pre>Vue.js</code>内部将DOM节点，抽象成了一个个的<code v-pre>VNode</code>节点，<code v-pre>keep-alive</code>组件的缓存也是基于VNode节点的。它将满足条件的组件在<code v-pre>cache</code>对象中缓存起来，等到重新渲染的时候在将<code v-pre>VNode</code>节点从<code v-pre>cache</code>对象中取出并渲染。</p>
</li>
<li>
<p>可以设置一下属性：</p>
<ul>
<li>
<p><code v-pre>include</code>：字符串或者正则，只有名字匹配的组件才会被缓存。</p>
</li>
<li>
<p><code v-pre>exclude</code>：字符串或者正则，任何名字匹配的组件都不会被缓存。</p>
</li>
<li>
<p><code v-pre>max</code>：数字，最多可以缓存多少组件实例。</p>
</li>
</ul>
<p>匹配首先检查组价的n<code v-pre>ame</code>选项，如果<code v-pre>name</code>选项不可用，则匹配它的局部注册名称（父组件<code v-pre>components</code>选项的键值），匿名组件不能被匹配。</p>
</li>
<li>
<p>设置了keep-alive缓存的组件会多出两个生命周期钩子：<code v-pre>actived</code>、<code v-pre>deactived</code>。</p>
</li>
<li>
<p>首次进入组件时：<code v-pre>beforeCreate → created → beforeMount → mounted → activated → beforeUpdate → updated → deactivated</code></p>
</li>
<li>
<p>再次进入组件时：<code v-pre>activated → beforeUpdate → updated → deactivated</code></p>
</li>
</ul>
<h2 id="mixin是什么" tabindex="-1"><a class="header-anchor" href="#mixin是什么" aria-hidden="true">#</a> mixin是什么？</h2>
<ul>
<li>
<p><code v-pre>mixin</code>（混入），它提供了一种非常灵活的方式来分发Vue组件中的可复用功能。</p>
</li>
<li>
<p>使用场景：不同组件中国你经常会用到一些相同或者相似的代码，这些代码的功能相对独立。可以通过<code v-pre>mixin</code>将相同或者相似的代码提取出来。</p>
</li>
<li>
<p>缺点：</p>
<ul>
<li>
<p>变量来源不明确。</p>
</li>
<li>
<p>多<code v-pre>mixin</code>可能会造成命名冲突（解决方式：Vue 3的组合API）。</p>
</li>
<li>
<p><code v-pre>mixin</code>和组件出现对多的关系，使项目复杂度变高。</p>
</li>
</ul>
</li>
</ul>
<h2 id="slot插槽是什么" tabindex="-1"><a class="header-anchor" href="#slot插槽是什么" aria-hidden="true">#</a> slot插槽是什么？</h2>
<ul>
<li>
<p><code v-pre>slot</code>插槽，一般在组件内部使用，封装组件时，在组件内部不确定带位置是以何种形式的元素展示时，可以通过<code v-pre>slot</code>占据这个位置，该位置的元素需要父组件以内容形式传递过来。</p>
</li>
<li>
<p><code v-pre>slot</code>分为：</p>
<ul>
<li>
<p><code v-pre>默认插槽</code>：
子组件用<code v-pre>&lt;slot&gt;</code>标签来确定渲染的位置，标签里面可以放<code v-pre>DOM</code>结构作为后备内容，当父组件在使用的时候，可以直接在子组件的标签内写入内容，该部分内容将插入子组件的<code v-pre>&lt;slot&gt;</code>标签位置。
如果父组件使用的时候没有往插槽传入内容，后备内容就会显示在页面。</p>
</li>
<li>
<p><code v-pre>具名插槽</code>：
子组件用<code v-pre>name</code>属性来表示插槽的名字，没有制定<code v-pre>name</code>的插槽，会有隐含的名称叫做<code v-pre>default</code>。
父组件在使用时，在默认插槽的基础上通过<code v-pre>v-slot</code>指令制定元素需要放在那个插槽中，<code v-pre>v-slot</code>值为子组件插槽<code v-pre>name</code>属性值。
使用<code v-pre>v-slot</code>指令制定元素放在哪个插槽中，必须配合<code v-pre>&lt;template&gt;</code>元素，且一个<code v-pre>&lt;template&gt;</code>元素只能对应一个预留的插槽,即不能多个<code v-pre>&lt;template&gt;</code>元素都使用<code v-pre>v-slot</code>指令制定相同的插槽。<code v-pre>v-slot</code>的简写是<code v-pre>#</code>，例如<code v-pre>v-slot:header</code>可以简写为<code v-pre>#header</code>。</p>
</li>
<li>
<p><code v-pre>作用域插槽</code>：</p>
</li>
</ul>
</li>
</ul>
</div></template>


