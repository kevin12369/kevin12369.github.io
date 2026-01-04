# VuePress 博客性能优化建议

## 📊 性能优化目标

- **首屏加载时间**: < 2s
- **交互响应时间**: < 100ms
- **滚动帧率**: 60 FPS
- **内存占用**: < 100MB
- **Lighthouse 评分**: > 90

---

## 🚀 核心优化策略

### 1. 代码分割和懒加载

#### 动态导入交互功能

```typescript
// docs/.vuepress/client.ts
export default defineClientConfig({
  setup() {
    onMounted(() => {
      // 延迟加载非关键功能
      requestIdleCallback(() => {
        initSearchFunctionality();
        initImageZoom();
      });
      
      // 立即加载关键功能
      initPageAnimations();
      initNavbarScroll();
    });
  },
});
```

#### 按需加载插件

```typescript
// docs/.vuepress/theme.ts
plugins: {
  mdEnhance: {
    // 只启用需要的功能
    chartjs: false,  // 如果不需要图表，禁用
    echarts: false,  // 如果不需要图表，禁用
    mermaid: false,  // 如果不需要流程图，禁用
  },
}
```

### 2. 图片优化

#### 使用现代图片格式

```markdown
<!-- 使用 WebP 格式 -->
![图片](image.webp)

<!-- 提供降级方案 -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="图片描述">
</picture>
```

#### 图片懒加载

```markdown
<!-- VuePress 内置懒加载 -->
![图片](image.jpg){loading="lazy"}
```

#### 压缩图片

```bash
# 使用 squoosh-cli 压缩图片
npm install -g @squoosh/cli
squoosh-cli --source-dir ./images --output-dir ./optimized
```

#### 响应式图片

```markdown
<!-- 提供多种尺寸 -->
![图片](image-800.jpg){width="800"}
![图片](image-1200.jpg){width="1200"}
```

### 3. CSS 优化

#### 提取关键 CSS

```scss
// docs/.vuepress/styles/critical.scss
// 首屏关键样式
:root {
  --theme-primary: #4e9af1;
  --bg-primary: #ffffff;
}

.theme-default-content {
  padding: 2rem;
}
```

#### 使用 CSS 变量

```scss
// 避免重复的值
:root {
  --spacing-md: 1rem;
  --transition-base: 0.3s ease;
}

.card {
  padding: var(--spacing-md);
  transition: all var(--transition-base);
}
```

#### 移除未使用的 CSS

```bash
# 使用 PurgeCSS
npm install -D @fullhuman/postcss-purgecss
```

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./docs/**/*.md'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
```

### 4. JavaScript 优化

#### 防抖和节流

```typescript
// 搜索防抖
input.addEventListener('input', debounce(handleSearch, 300));

// 滚动节流
window.addEventListener('scroll', throttle(handleScroll, 100));
```

#### 使用 Web Worker

```typescript
// search.worker.ts
self.onmessage = (e) => {
  const query = e.data.query;
  const results = performSearch(query);
  self.postMessage(results);
};

// client.ts
const worker = new Worker('./search.worker.ts');
worker.postMessage({ query: 'test' });
worker.onmessage = (e) => {
  displayResults(e.data);
};
```

#### 事件委托

```typescript
// 代替为每个元素添加事件监听器
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.matches('.copy-button')) {
    handleCopy(target);
  }
});
```

### 5. 缓存策略

#### Service Worker 缓存

```typescript
// docs/.vuepress/public/sw.js
const CACHE_NAME = 'blog-v1';
const urlsToCache = [
  '/',
  '/styles/index.css',
  '/client.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

#### HTTP 缓存头

```nginx
# nginx 配置
location ~* \.(css|js|png|jpg|jpeg|gif|webp|svg)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

### 6. 预加载和预连接

```html
<!-- 在 docs/.vuepress/config.ts 中添加 -->
head: [
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
  ['link', { rel: 'preload', href: '/styles/index.css', as: 'style' }],
]
```

---

## 🔍 性能监控

### 1. Performance API

```typescript
// 监控页面加载性能
function measurePerformance() {
  const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  console.log('DNS 查询:', perfData.domainLookupEnd - perfData.domainLookupStart, 'ms');
  console.log('TCP 连接:', perfData.connectEnd - perfData.connectStart, 'ms');
  console.log('请求响应:', perfData.responseEnd - perfData.requestStart, 'ms');
  console.log('DOM 解析:', perfData.domComplete - perfData.domInteractive, 'ms');
  console.log('页面加载:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
}

onMounted(measurePerformance);
```

### 2. Web Vitals

```typescript
// 监控 Core Web Vitals
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

### 3. 自定义性能指标

```typescript
// 监控交互响应时间
let startTime: number;

function trackInteraction(action: string) {
  startTime = performance.now();
}

function trackInteractionEnd(action: string) {
  const duration = performance.now() - startTime;
  console.log(`${action} 耗时: ${duration.toFixed(2)}ms`);
  
  // 发送到分析服务
  if (duration > 100) {
    console.warn(`${action} 响应慢！超过 100ms`);
  }
}
```

---

## 🎯 具体优化建议

### 页面加载优化

#### 1. 减少首屏内容

```markdown
<!-- 首页只显示关键内容 -->
# 欢迎来到我的博客

<!-- 延迟加载的内容 -->
<details>
  <summary>查看更多</summary>
  <!-- 非关键内容 -->
</details>
```

#### 2. 优化字体加载

```html
<!-- 使用 font-display: swap -->
@font-face {
  font-family: 'Custom Font';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

#### 3. 减少重定向

```nginx
# 避免不必要的重定向
location / {
  try_files $uri $uri/ =404;
}
```

### 交互优化

#### 1. 使用 CSS transform

```scss
// ✅ 好的做法 - 使用 transform
.card {
  transform: translateY(-4px);
}

// ❌ 不好的做法 - 使用 top
.card {
  top: -4px;
}
```

#### 2. 避免强制同步布局

```typescript
// ❌ 不好的做法 - 强制同步布局
function badExample() {
  const element = document.getElementById('test');
  element.style.height = element.offsetHeight + 'px'; // 强制重排
}

// ✅ 好的做法 - 批量读取和写入
function goodExample() {
  const element = document.getElementById('test');
  const height = element.offsetHeight; // 读取
  element.style.height = height + 'px'; // 写入
}
```

#### 3. 使用 requestAnimationFrame

```typescript
// ✅ 使用 requestAnimationFrame
function animate() {
  updateElement();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

### 内存优化

#### 1. 清理事件监听器

```typescript
// ✅ 正确清理
const cleanup = () => {
  window.removeEventListener('scroll', handleScroll);
};

onUnmounted(cleanup);
```

#### 2. 避免内存泄漏

```typescript
// ❌ 可能导致内存泄漏
const cache = new Map();

function addToCache(key: string, value: any) {
  cache.set(key, value);
}

// ✅ 使用 WeakMap
const weakCache = new WeakMap();

function addToWeakCache(key: object, value: any) {
  weakCache.set(key, value);
}
```

#### 3. 及时释放资源

```typescript
// 释放大对象
function processLargeData(data: any[]) {
  // 处理数据
  const result = processData(data);
  
  // 及时释放
  data.length = 0;
  
  return result;
}
```

---

## 📈 性能测试工具

### 1. Lighthouse

```bash
# 安装 Lighthouse
npm install -g lighthouse

# 运行测试
lighthouse https://your-blog.com --view
```

### 2. WebPageTest

```bash
# 使用 WebPageTest API
curl "https://www.webpagetest.org/runtest.php?url=https://your-blog.com&k=YOUR_API_KEY"
```

### 3. Chrome DevTools

#### Performance 面板

1. 打开 DevTools (F12)
2. 切换到 Performance 面板
3. 点击 Record
4. 执行操作
5. 停止录制并分析

#### Coverage 面板

1. 打开 DevTools (F12)
2. 切换到 Coverage 面板
3. 点击 Record
4. 查看未使用的代码

### 4. Bundle Analyzer

```bash
# 安装 rollup-plugin-visualizer
npm install -D rollup-plugin-visualizer

# 在 vite.config.ts 中配置
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({ open: true }),
  ],
});
```

---

## 🎯 性能优化清单

### 优先级 P0（必须）

- [ ] 启用代码分割
- [ ] 图片懒加载
- [ ] 压缩图片
- [ ] 启用 Gzip/Brotli 压缩
- [ ] 使用 CDN 加速

### 优先级 P1（重要）

- [ ] 预加载关键资源
- [ ] 优化字体加载
- [ ] 减少重定向
- [ ] 使用 HTTP/2
- [ ] 实现缓存策略

### 优先级 P2（建议）

- [ ] 移除未使用的 CSS/JS
- [ ] 优化第三方脚本
- [ ] 使用 Web Worker
- [ ] 实现离线支持
- [ ] 性能监控

---

## 🔧 配置示例

### Vite 配置优化

```typescript
// docs/.vuepress/vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'theme': ['vuepress-theme-hope'],
        },
      },
    },
    // 压缩
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // 依赖预构建
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});
```

### Nginx 配置优化

```nginx
server {
  listen 443 ssl http2;
  
  # Gzip 压缩
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
  
  # Brotli 压缩
  brotli on;
  brotli_types text/plain text/css application/json application/javascript;
  
  # 缓存策略
  location ~* \.(css|js|png|jpg|jpeg|gif|webp|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
  
  # 安全头
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
}
```

---

## 📚 参考资料

### 官方文档
- [VuePress 性能优化](https://vuepress.vuejs.org/guide/performance.html)
- [Vite 性能优化](https://vitejs.dev/guide/performance.html)
- [Web Performance](https://web.dev/performance/)

### 工具和库
- [Lighthouse](https://github.com/GoogleChrome/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Web Vitals](https://github.com/GoogleChrome/web-vitals)
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

### 文章和教程
- [Web Performance Optimization](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Optimizing JavaScript Execution](https://web.dev/fast/)
- [Images](https://web.dev/fast/)

---

## 🎓 最佳实践

### 1. 测量优先
在优化之前，先测量当前性能，建立基准。

### 2. 逐步优化
一次只优化一个方面，避免同时进行多项优化。

### 3. 持续监控
性能优化是一个持续的过程，需要定期监控和调整。

### 4. 用户体验优先
不要为了追求极致性能而牺牲用户体验。

### 5. 移动优先
优先考虑移动端性能，因为移动设备性能较弱。

---

**记住：过早优化是万恶之源！先让功能正常工作，再优化性能。**