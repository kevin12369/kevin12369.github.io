# 交互功能快速开始指南

## 🚀 5分钟快速上手

### 1. 验证安装

确保以下文件已正确创建：

```
docs/.vuepress/
├── styles/
│   ├── index.scss          # ✅ 已更新（导入 interactions.scss）
│   ├── interactions.scss   # ✅ 新增（交互样式）
│   ├── palette.scss        # ✅ 已存在
│   └── config.scss         # ✅ 已存在
├── client.ts               # ✅ 新增（客户端脚本）
├── config.ts               # ✅ 已存在
└── theme.ts                # ✅ 已存在
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 测试功能

访问 `http://localhost:8080`，测试以下功能：

#### ✅ 基础功能测试
- [ ] 页面加载时元素逐个淡入
- [ ] 滚动页面，导航栏背景变化
- [ ] 滚动时元素触发进入动画
- [ ] 代码块显示复制和折叠按钮

#### ✅ 交互功能测试
- [ ] 点击代码块复制按钮，显示复制提示
- [ ] 点击代码块折叠按钮，代码折叠/展开
- [ ] 按 `⌘K` 或 `Ctrl+K` 打开搜索框
- [ ] 在搜索框输入关键词，查看搜索结果
- [ ] 点击主题切换按钮，深色/浅色模式切换
- [ ] 滚动超过 500px，回到顶部按钮出现
- [ ] 点击回到顶部按钮，平滑滚动到顶部
- [ ] 滚动页面，顶部进度条更新
- [ ] 查看右侧目录，滚动时自动高亮
- [ ] 点击目录项，平滑滚动到对应位置
- [ ] 悬停图片，图片放大
- [ ] 点击图片，打开大图预览
- [ ] 按 `?` 键，显示快捷键提示

---

## 🎨 自定义配置

### 修改主题颜色

编辑 `docs/.vuepress/styles/palette.scss`：

```scss
// 修改主题色
$theme-color: #4e9af1;  // 改为你喜欢的颜色
```

### 调整动画速度

编辑 `docs/.vuepress/styles/interactions.scss`：

```scss
:root {
  // 更快的动画
  --transition-fast: 0.1s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
}
```

### 修改滚动触发距离

编辑 `docs/.vuepress/client.ts`：

```typescript
// 回到顶部按钮显示距离
if (window.scrollY > 300) {  // 从 500 改为 300
  backToTop.classList.add('visible');
}
```

### 禁用特定功能

编辑 `docs/.vuepress/client.ts`，注释掉不需要的功能：

```typescript
export default defineClientConfig({
  setup() {
    onMounted(() => {
      initPageAnimations();        // ✅ 页面加载动画
      initNavbarScroll();          // ✅ 导航栏滚动
      initScrollReveal();          // ✅ 滚动触发动画
      initCodeBlockEnhancements(); // ✅ 代码块增强
      // initSearchFunctionality(); // ❌ 禁用搜索
      initThemeToggle();           // ✅ 主题切换
      initBackToTop();             // ✅ 回到顶部
      initTOCAutoHighlight();      // ✅ 目录高亮
      initImageZoom();             // ✅ 图片放大
      initKeyboardShortcuts();     // ✅ 键盘快捷键
      initReadingProgress();       // ✅ 阅读进度
    });
  },
});
```

---

## 🐛 常见问题

### Q1: 代码块复制功能不工作？

**A**: 检查以下内容：
1. 确保在 HTTPS 或 localhost 环境下运行
2. 检查浏览器是否支持 `navigator.clipboard` API
3. 查看浏览器控制台是否有错误信息

### Q2: 搜索功能找不到文章？

**A**: 搜索功能基于当前页面内容，如果需要全局搜索：
1. 考虑集成 Algolia 搜索
2. 或者修改 `performSearch` 函数，遍历所有页面

### Q3: 动画效果太卡？

**A**: 尝试以下优化：
1. 减少动画元素数量
2. 降低动画复杂度
3. 使用 `prefers-reduced-motion` 媒体查询

### Q4: 移动端显示异常？

**A**: 检查响应式样式：
1. 确保媒体查询正确
2. 测试不同屏幕尺寸
3. 调整移动端特定样式

### Q5: 主题切换后样式混乱？

**A**: 检查 CSS 变量：
1. 确保深色模式变量定义完整
2. 检查是否有内联样式冲突
3. 清除浏览器缓存重试

---

## 📱 移动端适配

### 响应式断点

```scss
// 平板
@media (max-width: 1024px) {
  // 平板样式
}

// 手机
@media (max-width: 768px) {
  // 手机样式
  .toc {
    display: none;  // 隐藏目录
  }
  
  .back-to-top {
    width: 45px;
    height: 45px;
  }
}
```

### 触摸优化

```scss
// 增大触摸区域
button {
  min-width: 44px;
  min-height: 44px;
}

// 移除悬停效果
@media (hover: none) {
  .hover-effect {
    display: none;
  }
}
```

---

## 🎯 性能优化建议

### 1. 图片优化

```markdown
<!-- 使用图片懒加载 -->
![图片描述](image.jpg){loading="lazy"}

<!-- 指定图片尺寸 -->
![图片描述](image.jpg){width="800" height="600"}
```

### 2. 代码块优化

```markdown
<!-- 只在需要时高亮 -->
```js{1,3-5}
// 只高亮第 1 行和 3-5 行
```
```

### 3. 减少动画元素

```typescript
// 只对重要元素添加动画
const revealElements = document.querySelectorAll(
  'h2, h3, .article-card'  // 减少选择器范围
);
```

---

## 🔧 调试技巧

### 启用调试模式

在 `client.ts` 中添加：

```typescript
const DEBUG = true;

function debugLog(message: string, data?: any) {
  if (DEBUG) {
    console.log(`[InteractiveFeatures] ${message}`, data);
  }
}

// 使用
debugLog('页面加载完成', { elements: elements.length });
```

### 检查事件监听器

```javascript
// 在浏览器控制台运行
getEventListeners(document);
```

### 性能分析

```javascript
// 使用 Performance API
performance.mark('feature-start');
// ... 功能代码
performance.mark('feature-end');
performance.measure('feature', 'feature-start', 'feature-end');
```

---

## 📊 监控和分析

### 添加性能监控

```typescript
// 在 client.ts 中添加
function trackPerformance() {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    console.log('页面加载时间:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
  }
}

onMounted(() => {
  trackPerformance();
});
```

### 用户行为追踪

```typescript
function trackUserAction(action: string) {
  console.log(`用户操作: ${action}`, {
    timestamp: Date.now(),
    url: window.location.pathname,
  });
}

// 使用
trackUserAction('点击复制按钮');
```

---

## 🎓 学习资源

### VuePress 相关
- [VuePress 官方文档](https://vuepress.vuejs.org/)
- [VuePress 插件开发](https://vuepress.vuejs.org/guide/advanced/plugin.html)

### CSS 动画
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)

### JavaScript API
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

---

## 💡 最佳实践

### 1. 代码组织
- 每个功能独立函数
- 清晰的命名规范
- 充分的注释说明

### 2. 性能优先
- 使用事件委托
- 避免频繁的 DOM 操作
- 合理使用防抖和节流

### 3. 用户体验
- 提供视觉反馈
- 支持键盘操作
- 考虑无障碍访问

### 4. 可维护性
- 模块化设计
- 统一的错误处理
- 完善的类型定义

---

## 🆘 获取帮助

如果遇到问题：

1. 查看 [INTERACTIVE_FEATURES.md](./INTERACTIVE_FEATURES.md) 详细文档
2. 检查浏览器控制台错误信息
3. 在 GitHub 上提 Issue
4. 联系开发者：491750329@qq.com

---

## 📝 更新日志

### v1.0.0 (2026-01-04)
- ✅ 初始版本发布
- ✅ 实现 11 个核心交互功能
- ✅ 完整的文档和示例
- ✅ 性能优化和最佳实践

---

**祝您使用愉快！** 🎉