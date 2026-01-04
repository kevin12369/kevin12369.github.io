import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as s,o as l}from"./app-BnzN889n.js";const a={};function d(r,e){return l(),n("div",null,[...e[0]||(e[0]=[s(`<h1 id="前端性能优化总结-2025版" tabindex="-1"><a class="header-anchor" href="#前端性能优化总结-2025版" aria-hidden="true">#</a> 前端性能优化总结（2025版）</h1><h2 id="_2025年前端性能优化趋势" tabindex="-1"><a class="header-anchor" href="#_2025年前端性能优化趋势" aria-hidden="true">#</a> 2025年前端性能优化趋势</h2><ul><li><strong>Core Web Vitals 成为核心指标</strong>：LCP、FID、CLS</li><li><strong>性能预算</strong>：建立性能监控和预算机制</li><li><strong>性能优化自动化</strong>：CI/CD 集成性能测试</li><li><strong>WebAssembly 应用</strong>：提高计算密集型任务性能</li><li><strong>边缘计算</strong>：CDN 边缘渲染</li></ul><h2 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h2><h3 id="_1-core-web-vitals" tabindex="-1"><a class="header-anchor" href="#_1-core-web-vitals" aria-hidden="true">#</a> 1. Core Web Vitals</h3><p><strong>LCP (Largest Contentful Paint)</strong>：最大内容绘制</p><ul><li>衡量主要内容加载速度</li><li>目标：&lt; 2.5s</li></ul><p><strong>FID (First Input Delay)</strong>：首次输入延迟</p><ul><li>衡量交互响应速度</li><li>目标：&lt; 100ms</li></ul><p><strong>CLS (Cumulative Layout Shift)</strong>：累积布局偏移</p><ul><li>衡量视觉稳定性</li><li>目标：&lt; 0.1</li></ul><h3 id="_2-其他重要指标" tabindex="-1"><a class="header-anchor" href="#_2-其他重要指标" aria-hidden="true">#</a> 2. 其他重要指标</h3><ul><li><strong>FCP (First Contentful Paint)</strong>：首次内容绘制</li><li><strong>TTI (Time to Interactive)</strong>：可交互时间</li><li><strong>TBT (Total Blocking Time)</strong>：总阻塞时间</li><li><strong>Speed Index</strong>：速度指数</li></ul><h2 id="加载性能优化" tabindex="-1"><a class="header-anchor" href="#加载性能优化" aria-hidden="true">#</a> 加载性能优化</h2><h3 id="_3-资源加载优化" tabindex="-1"><a class="header-anchor" href="#_3-资源加载优化" aria-hidden="true">#</a> 3. 资源加载优化</h3><p><strong>减少 HTTP 请求</strong>：</p><ul><li>合并 CSS、JS 文件</li><li>使用雪碧图或 Icon Font</li><li>使用 Data URI（小文件）</li></ul><p><strong>使用 CDN</strong>：</p><ul><li>静态资源托管到 CDN</li><li>就近访问，减少延迟</li></ul><p><strong>预加载和预连接</strong>：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 预连接 --&gt;
&lt;link rel=&quot;preconnect&quot; href=&quot;https://cdn.example.com&quot;&gt;
&lt;link rel=&quot;dns-prefetch&quot; href=&quot;https://cdn.example.com&quot;&gt;

&lt;!-- 预加载 --&gt;
&lt;link rel=&quot;preload&quot; href=&quot;style.css&quot; as=&quot;style&quot;&gt;
&lt;link rel=&quot;preload&quot; href=&quot;script.js&quot; as=&quot;script&quot;&gt;

&lt;!-- 预获取 --&gt;
&lt;link rel=&quot;prefetch&quot; href=&quot;next-page.js&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>懒加载</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 图片懒加载
&lt;img loading=&quot;lazy&quot; src=&quot;image.jpg&quot; alt=&quot;...&quot;&gt;

// 组件懒加载（React）
const LazyComponent = React.lazy(() =&gt; import(&#39;./LazyComponent&#39;));

// 路由懒加载（Vue）
const Home = () =&gt; import(&#39;./views/Home.vue&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-代码分割" tabindex="-1"><a class="header-anchor" href="#_4-代码分割" aria-hidden="true">#</a> 4. 代码分割</h3><p><strong>Webpack 代码分割</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 动态导入
import(&#39;./module&#39;).then(module =&gt; {
  // 使用模块
});

// 路由级别代码分割
const routes = [
  {
    path: &#39;/home&#39;,
    component: () =&gt; import(&#39;./views/Home.vue&#39;)
  }
];

// 提取公共代码
module.exports = {
  optimization: {
    splitChunks: {
      chunks: &#39;all&#39;,
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: &#39;vendors&#39;,
          chunks: &#39;all&#39;
        }
      }
    }
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Tree Shaking</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// ES6 模块支持 Tree Shaking
import { debounce } from &#39;lodash-es&#39;;

// 配置
module.exports = {
  mode: &#39;production&#39;,
  optimization: {
    usedExports: true,
    sideEffects: false
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-压缩和混淆" tabindex="-1"><a class="header-anchor" href="#_5-压缩和混淆" aria-hidden="true">#</a> 5. 压缩和混淆</h3><p><strong>代码压缩</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// Webpack
const TerserPlugin = require(&#39;terser-webpack-plugin&#39;);

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CSS 压缩</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const CssMinimizerPlugin = require(&#39;css-minimizer-webpack-plugin&#39;);

module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渲染性能优化" tabindex="-1"><a class="header-anchor" href="#渲染性能优化" aria-hidden="true">#</a> 渲染性能优化</h2><h3 id="_6-dom-操作优化" tabindex="-1"><a class="header-anchor" href="#_6-dom-操作优化" aria-hidden="true">#</a> 6. DOM 操作优化</h3><p><strong>减少 DOM 操作</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 不好的做法
for (let i = 0; i &lt; 1000; i++) {
  document.body.innerHTML += \`&lt;div&gt;Item \${i}&lt;/div&gt;\`;
}

// 好的做法
const fragment = document.createDocumentFragment();
for (let i = 0; i &lt; 1000; i++) {
  const div = document.createElement(&#39;div&#39;);
  div.textContent = \`Item \${i}\`;
  fragment.appendChild(div);
}
document.body.appendChild(fragment);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用虚拟 DOM</strong>：</p><ul><li>React、Vue 等框架自动优化</li><li>减少直接 DOM 操作</li></ul><h3 id="_7-css-优化" tabindex="-1"><a class="header-anchor" href="#_7-css-优化" aria-hidden="true">#</a> 7. CSS 优化</h3><p><strong>避免强制同步布局</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 不好的做法
function bad() {
  const width = element.offsetWidth; // 触发布局
  element.style.height = width + &#39;px&#39;; // 触发布局
  const height = element.offsetHeight; // 触发布局
}

// 好的做法
function good() {
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  element.style.height = width + &#39;px&#39;;
  element.style.width = height + &#39;px&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 transform 和 opacity</strong>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>/* 使用 transform 实现动画 */
.element {
  transform: translateX(100px);
  transition: transform 0.3s ease;
}

/* 使用 opacity 实现淡入淡出 */
.element {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GPU 加速</strong>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>.element {
  transform: translateZ(0);
  will-change: transform;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-javascript-优化" tabindex="-1"><a class="header-anchor" href="#_8-javascript-优化" aria-hidden="true">#</a> 8. JavaScript 优化</h3><p><strong>防抖和节流</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 防抖
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() =&gt; func.apply(this, args), wait);
  };
}

// 节流
function throttle(func, wait) {
  let timer;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() =&gt; {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 requestAnimationFrame</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function animate() {
  // 动画逻辑
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>避免内存泄漏</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 清除定时器
const timer = setInterval(() =&gt; {}, 1000);
clearInterval(timer);

// 移除事件监听
element.addEventListener(&#39;click&#39;, handler);
element.removeEventListener(&#39;click&#39;, handler);

// 清空引用
element = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络优化" tabindex="-1"><a class="header-anchor" href="#网络优化" aria-hidden="true">#</a> 网络优化</h2><h3 id="_9-http-缓存" tabindex="-1"><a class="header-anchor" href="#_9-http-缓存" aria-hidden="true">#</a> 9. HTTP 缓存</h3><p><strong>强缓存</strong>：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>Cache-Control: max-age=3600
Cache-Control: no-cache
Cache-Control: no-store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>协商缓存</strong>：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>ETag: &quot;33a64df551425fcc55e4d42a148795d9f25f89d4&quot;
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-http-2-和-http-3" tabindex="-1"><a class="header-anchor" href="#_10-http-2-和-http-3" aria-hidden="true">#</a> 10. HTTP/2 和 HTTP/3</h3><p><strong>HTTP/2 优势</strong>：</p><ul><li>多路复用</li><li>头部压缩</li><li>服务器推送</li></ul><p><strong>HTTP/3 优势</strong>：</p><ul><li>基于 UDP</li><li>更快的连接建立</li><li>更好的移动网络支持</li></ul><h3 id="_11-service-worker" tabindex="-1"><a class="header-anchor" href="#_11-service-worker" aria-hidden="true">#</a> 11. Service Worker</h3><p><strong>缓存策略</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 缓存优先
self.addEventListener(&#39;fetch&#39;, event =&gt; {
  event.respondWith(
    caches.match(event.request).then(response =&gt; {
      return response || fetch(event.request);
    })
  );
});

// 网络优先
self.addEventListener(&#39;fetch&#39;, event =&gt; {
  event.respondWith(
    fetch(event.request).then(response =&gt; {
      return caches.open(&#39;cache-v1&#39;).then(cache =&gt; {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch(() =&gt; caches.match(event.request))
  );
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片优化" tabindex="-1"><a class="header-anchor" href="#图片优化" aria-hidden="true">#</a> 图片优化</h2><h3 id="_12-图片格式选择" tabindex="-1"><a class="header-anchor" href="#_12-图片格式选择" aria-hidden="true">#</a> 12. 图片格式选择</h3><p><strong>WebP</strong>：</p><ul><li>比 JPEG 小 25-35%</li><li>比 PNG 小 26-45%</li><li>支持透明和动画</li></ul><p><strong>AVIF</strong>：</p><ul><li>比 WebP 小 20-50%</li><li>更好的压缩率</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;picture&gt;
  &lt;source srcset=&quot;image.avif&quot; type=&quot;image/avif&quot;&gt;
  &lt;source srcset=&quot;image.webp&quot; type=&quot;image/webp&quot;&gt;
  &lt;img src=&quot;image.jpg&quot; alt=&quot;...&quot;&gt;
&lt;/picture&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-图片懒加载" tabindex="-1"><a class="header-anchor" href="#_13-图片懒加载" aria-hidden="true">#</a> 13. 图片懒加载</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;img loading=&quot;lazy&quot; src=&quot;image.jpg&quot; alt=&quot;...&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_14-响应式图片" tabindex="-1"><a class="header-anchor" href="#_14-响应式图片" aria-hidden="true">#</a> 14. 响应式图片</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;img
  srcset=&quot;image-320w.jpg 320w,
          image-640w.jpg 640w,
          image-1280w.jpg 1280w&quot;
  sizes=&quot;(max-width: 600px) 320px,
         (max-width: 1200px) 640px,
         1280px&quot;
  src=&quot;image-1280w.jpg&quot;
  alt=&quot;...&quot;
&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字体优化" tabindex="-1"><a class="header-anchor" href="#字体优化" aria-hidden="true">#</a> 字体优化</h2><h3 id="_15-字体加载优化" tabindex="-1"><a class="header-anchor" href="#_15-字体加载优化" aria-hidden="true">#</a> 15. 字体加载优化</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 预加载字体 --&gt;
&lt;link rel=&quot;preload&quot; href=&quot;font.woff2&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossorigin&gt;

&lt;!-- 字体显示策略 --&gt;
&lt;style&gt;
  @font-face {
    font-family: &#39;MyFont&#39;;
    src: url(&#39;font.woff2&#39;) format(&#39;woff2&#39;);
    font-display: swap;
  }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>font-display 选项</strong>：</p><ul><li><code>auto</code>：默认行为</li><li><code>block</code>：短暂阻塞</li><li><code>swap</code>：立即显示后备字体</li><li><code>fallback</code>：短暂阻塞，超时后切换</li><li><code>optional</code>：快速显示后备字体</li></ul><h2 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控" aria-hidden="true">#</a> 性能监控</h2><h3 id="_16-性能监控工具" tabindex="-1"><a class="header-anchor" href="#_16-性能监控工具" aria-hidden="true">#</a> 16. 性能监控工具</h3><p><strong>Lighthouse</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm install -g lighthouse
lighthouse https://example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Web Vitals 库</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>import { getCLS, getFID, getLCP } from &#39;web-vitals&#39;;

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Performance API</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 页面加载时间
window.addEventListener(&#39;load&#39;, () =&gt; {
  const perfData = performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log(&#39;Page load time:&#39;, pageLoadTime);
});

// 资源加载时间
performance.getEntriesByType(&#39;resource&#39;).forEach(resource =&gt; {
  console.log(\`\${resource.name}: \${resource.duration}ms\`);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年新技术" tabindex="-1"><a class="header-anchor" href="#_2025年新技术" aria-hidden="true">#</a> 2025年新技术</h2><h3 id="_17-webassembly" tabindex="-1"><a class="header-anchor" href="#_17-webassembly" aria-hidden="true">#</a> 17. WebAssembly</h3><p><strong>应用场景</strong>：</p><ul><li>图像/视频处理</li><li>加密解密</li><li>科学计算</li><li>游戏引擎</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 加载 WASM 模块
WebAssembly.instantiateStreaming(fetch(&#39;module.wasm&#39;))
  .then(results =&gt; {
    const { add } = results.instance.exports;
    console.log(add(1, 2)); // 3
  });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-边缘计算" tabindex="-1"><a class="header-anchor" href="#_18-边缘计算" aria-hidden="true">#</a> 18. 边缘计算</h3><p><strong>边缘渲染</strong>：</p><ul><li>Cloudflare Workers</li><li>Vercel Edge Functions</li><li>Netlify Edge Functions</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// Cloudflare Worker
export default {
  async fetch(request) {
    const response = await fetch(request);
    return new Response(response.body, response);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="_19-性能优化清单" tabindex="-1"><a class="header-anchor" href="#_19-性能优化清单" aria-hidden="true">#</a> 19. 性能优化清单</h3><p><strong>加载阶段</strong>：</p><ul><li>[ ] 使用 CDN</li><li>[ ] 启用压缩</li><li>[ ] 代码分割</li><li>[ ] 懒加载</li><li>[ ] 预加载关键资源</li></ul><p><strong>渲染阶段</strong>：</p><ul><li>[ ] 减少 DOM 操作</li><li>[ ] 使用 CSS 动画</li><li>[ ] 避免强制同步布局</li><li>[ ] 使用虚拟列表</li></ul><p><strong>网络阶段</strong>：</p><ul><li>[ ] 启用缓存</li><li>[ ] 使用 HTTP/2</li><li>[ ] 优化图片</li><li>[ ] 减少请求大小</li></ul><p><strong>监控阶段</strong>：</p><ul><li>[ ] 设置性能预算</li><li>[ ] 监控 Core Web Vitals</li><li>[ ] 定期性能审计</li><li>[ ] 持续优化</li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="_20-如何诊断性能问题" tabindex="-1"><a class="header-anchor" href="#_20-如何诊断性能问题" aria-hidden="true">#</a> 20. 如何诊断性能问题？</h3><ol><li><p><strong>使用 Chrome DevTools</strong>：</p><ul><li>Performance 面板</li><li>Network 面板</li><li>Lighthouse</li></ul></li><li><p><strong>分析瀑布图</strong>：</p><ul><li>识别阻塞资源</li><li>优化加载顺序</li></ul></li><li><p><strong>检查 Core Web Vitals</strong>：</p><ul><li>LCP、FID、CLS</li></ul></li><li><p><strong>使用性能监控工具</strong>：</p><ul><li>Lighthouse</li><li>WebPageTest</li><li>GTmetrix</li></ul></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>前端性能优化是一个持续的过程，需要从加载、渲染、网络等多个维度进行优化。建立性能监控机制，定期审计和优化，才能确保应用始终保持良好的性能。</p><p><strong>优化原则</strong>：</p><ol><li><strong>测量优先</strong>：先测量，再优化</li><li><strong>影响最大优先</strong>：优先解决影响最大的问题</li><li><strong>持续优化</strong>：性能优化是持续的过程</li><li><strong>用户体验优先</strong>：以用户体验为中心</li></ol><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2><p><a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">Web.dev - Core Web Vitals</a><a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance" target="_blank" rel="noopener noreferrer">MDN - Performance API</a><a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer">Lighthouse</a></p>`,119)])])}const c=i(a,[["render",d],["__file","前端面试系列-性能优化篇.html.vue"]]);export{c as default};
