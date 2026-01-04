// ============================================
// VuePress 客户端增强脚本
// 实现丰富的交互功能
// ============================================

import { defineClientConfig } from '@vuepress/client';
import { onMounted, onUnmounted } from 'vue';

export default defineClientConfig({
  setup() {
    onMounted(() => {
      // 初始化所有交互功能
      initPageAnimations();
      initNavbarScroll();
      initScrollReveal();
      initCodeBlockEnhancements();
      initSearchFunctionality();
      initThemeToggle();
      initBackToTop();
      initTOCAutoHighlight();
      initImageZoom();
      initKeyboardShortcuts();
      initReadingProgress();
    });

    onUnmounted(() => {
      // 清理事件监听器
      cleanupEventListeners();
    });
  },
});

// ============================================
// 全局变量
// ============================================
const eventListeners: Array<() => void> = [];

function addEventListenerWithCleanup(
  target: EventTarget,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: AddEventListenerOptions
) {
  target.addEventListener(event, handler, options);
  eventListeners.push(() => target.removeEventListener(event, handler, options));
}

function cleanupEventListeners() {
  eventListeners.forEach(cleanup => cleanup());
  eventListeners.length = 0;
}

// ============================================
// 1. 页面加载动画
// ============================================
function initPageAnimations() {
  // 页面元素逐个淡入
  const elements = document.querySelectorAll('.theme-default-content > *');
  elements.forEach((el, index) => {
    (el as HTMLElement).style.opacity = '0';
    (el as HTMLElement).style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      (el as HTMLElement).style.transition = 'all 0.4s ease';
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    }, 100 + index * 50);
  });
}

// ============================================
// 2. 导航栏滚动效果
// ============================================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  addEventListenerWithCleanup(window, 'scroll', handleScroll, { passive: true });
  handleScroll(); // 初始检查
}

// ============================================
// 3. 滚动触发动画
// ============================================
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  const revealElements = document.querySelectorAll(
    '.article-card, .card, .feature, h2, h3, .code-block-wrapper, blockquote, table'
  );
  
  revealElements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });

  eventListeners.push(() => observer.disconnect());
}

// ============================================
// 4. 代码块增强
// ============================================
function initCodeBlockEnhancements() {
  const codeBlocks = document.querySelectorAll('pre[class*="language-"]');
  
  codeBlocks.forEach((block, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    // 创建代码头部
    const header = document.createElement('div');
    header.className = 'code-header';
    
    // 获取语言类型
    const language = block.className.match(/language-(\w+)/)?.[1] || 'CODE';
    const langSpan = document.createElement('span');
    langSpan.className = 'code-language';
    langSpan.textContent = language;
    
    // 创建操作按钮
    const actions = document.createElement('div');
    actions.className = 'code-actions';
    
    // 复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-action-btn';
    copyBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      复制
    `;
    copyBtn.addEventListener('click', () => copyCode(block));
    
    // 折叠按钮
    const collapseBtn = document.createElement('button');
    collapseBtn.className = 'code-action-btn';
    collapseBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
      折叠
    `;
    collapseBtn.addEventListener('click', () => toggleCode(block, collapseBtn));
    
    actions.appendChild(copyBtn);
    actions.appendChild(collapseBtn);
    header.appendChild(langSpan);
    header.appendChild(actions);
    
    // 包装代码块
    block.parentNode?.insertBefore(wrapper, block);
    wrapper.appendChild(header);
    wrapper.appendChild(block);
    
    // 添加行号
    addLineNumbers(block);
  });
}

function addLineNumbers(pre: Element) {
  const code = pre.querySelector('code');
  if (!code) return;
  
  const lines = code.innerHTML.split('\n');
  const numberedCode = lines.map((line, i) => 
    `<span class="line">${line}</span>`
  ).join('\n');
  
  code.innerHTML = numberedCode;
  pre.classList.add('line-numbers');
}

function copyCode(pre: Element) {
  const code = pre.querySelector('code')?.textContent;
  if (!code) return;
  
  navigator.clipboard.writeText(code).then(() => {
    showCopyTooltip();
  });
}

function showCopyTooltip() {
  // 移除现有的提示
  const existingTooltip = document.querySelector('.copy-tooltip');
  if (existingTooltip) existingTooltip.remove();
  
  // 创建新提示
  const tooltip = document.createElement('div');
  tooltip.className = 'copy-tooltip';
  tooltip.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    代码已复制到剪贴板
  `;
  
  document.body.appendChild(tooltip);
  
  // 2.5秒后自动移除
  setTimeout(() => tooltip.remove(), 2500);
}

function toggleCode(pre: Element, btn: HTMLButtonElement) {
  pre.classList.toggle('collapsed');
  const isCollapsed = pre.classList.contains('collapsed');
  
  btn.innerHTML = isCollapsed ? `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
    展开
  ` : `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
    折叠
  `;
}

// ============================================
// 5. 搜索功能
// ============================================
function initSearchFunctionality() {
  // 创建搜索框
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-box';
  searchContainer.innerHTML = `
    <input type="text" class="search-input" placeholder="搜索文章...">
    <span class="search-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </span>
    <span class="search-shortcut">⌘K</span>
    <div class="search-results"></div>
  `;
  
  // 插入到导航栏
  const navbar = document.querySelector('.navbar .navbar-items-wrapper');
  if (navbar) {
    navbar.appendChild(searchContainer);
  }
  
  const input = searchContainer.querySelector('.search-input') as HTMLInputElement;
  const resultsContainer = searchContainer.querySelector('.search-results') as HTMLElement;
  
  // 搜索输入事件
  input.addEventListener('input', debounce(() => {
    const query = input.value.trim();
    if (query.length >= 2) {
      performSearch(query, resultsContainer);
    } else {
      resultsContainer.classList.remove('visible');
    }
  }, 300));
  
  // 键盘快捷键
  addEventListenerWithCleanup(document, 'keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
    }
  });
  
  // 点击外部关闭搜索结果
  addEventListenerWithCleanup(document, 'click', (e) => {
    if (!searchContainer.contains(e.target as Node)) {
      resultsContainer.classList.remove('visible');
    }
  });
}

async function performSearch(query: string, container: HTMLElement) {
  // 这里应该调用实际的搜索 API
  // 由于是静态站点，我们使用简单的客户端搜索
  
  const allContent = document.querySelectorAll('.theme-default-content');
  const results: Array<{ title: string; excerpt: string; url: string }> = [];
  
  allContent.forEach(content => {
    const text = content.textContent?.toLowerCase() || '';
    if (text.includes(query.toLowerCase())) {
      const title = content.querySelector('h1')?.textContent || '未命名';
      const excerpt = text.substring(0, 150) + '...';
      const url = window.location.pathname;
      
      results.push({ title, excerpt, url });
    }
  });
  
  // 显示结果
  if (results.length > 0) {
    container.innerHTML = results.map(result => `
      <div class="search-result-item">
        <div class="result-title">${highlightText(result.title, query)}</div>
        <div class="result-excerpt">${highlightText(result.excerpt, query)}</div>
      </div>
    `).join('');
    container.classList.add('visible');
  } else {
    container.innerHTML = `
      <div class="search-result-item">
        <div class="result-title">未找到结果</div>
        <div class="result-excerpt">尝试使用不同的关键词</div>
      </div>
    `;
    container.classList.add('visible');
  }
}

function highlightText(text: string, query: string): string {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ============================================
// 6. 主题切换
// ============================================
function initThemeToggle() {
  // 创建主题切换按钮
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = `
    <span class="theme-icon sun">☀️</span>
    <span class="theme-icon moon">🌙</span>
  `;
  
  // 插入到导航栏
  const navbar = document.querySelector('.navbar .navbar-items-wrapper');
  if (navbar) {
    navbar.appendChild(themeToggle);
  }
  
  // 检查当前主题
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    themeToggle.classList.add('dark');
  }
  
  // 切换主题
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    themeToggle.classList.toggle('dark');
    
    // 保存到本地存储
    const isDarkMode = html.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
  
  // 从本地存储加载主题
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' && !document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
    themeToggle.classList.add('dark');
  }
}

// ============================================
// 7. 回到顶部按钮
// ============================================
function initBackToTop() {
  const backToTop = document.createElement('div');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = `
    <span class="arrow-icon">↑</span>
  `;
  
  document.body.appendChild(backToTop);
  
  // 滚动时显示/隐藏
  const handleScroll = () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };
  
  addEventListenerWithCleanup(window, 'scroll', handleScroll, { passive: true });
  
  // 点击回到顶部
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// ============================================
// 8. 文章目录（TOC）自动定位
// ============================================
function initTOCAutoHighlight() {
  const headings = document.querySelectorAll('.theme-default-content h2, .theme-default-content h3, .theme-default-content h4');
  if (headings.length === 0) return;
  
  // 创建目录
  const toc = document.createElement('div');
  toc.className = 'toc';
  toc.innerHTML = `
    <div class="toc-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
      目录
    </div>
    <ul class="toc-list"></ul>
  `;
  
  const tocList = toc.querySelector('.toc-list') as HTMLElement;
  
  // 生成目录项
  headings.forEach((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id;
    
    const level = parseInt(heading.tagName[1]);
    const item = document.createElement('li');
    item.className = `toc-item level-${level}`;
    
    const link = document.createElement('a');
    link.className = 'toc-link';
    link.href = `#${id}`;
    link.textContent = heading.textContent || '';
    link.addEventListener('click', (e) => {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    item.appendChild(link);
    tocList.appendChild(item);
  });
  
  // 插入到侧边栏或内容区域
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.appendChild(toc);
  }
  
  // 滚动时高亮当前章节
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const tocItems = toc.querySelectorAll('.toc-item');
        
        tocItems.forEach(item => {
          item.classList.remove('active');
          const link = item.querySelector('.toc-link');
          if (link?.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  headings.forEach(heading => observer.observe(heading));
  eventListeners.push(() => observer.disconnect());
}

// ============================================
// 9. 图片放大
// ============================================
function initImageZoom() {
  const images = document.querySelectorAll('.theme-default-content img');
  
  images.forEach(img => {
    // 添加懒加载
    img.classList.add('lazy-image');
    
    // 加载完成后显示
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
    
    // 添加放大功能
    img.classList.add('image-zoom');
    img.addEventListener('click', () => openImageModal(img.src));
  });
  
  // 创建图片模态框
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = `
    <button class="modal-close">×</button>
    <img class="modal-image" src="" alt="">
  `;
  
  document.body.appendChild(modal);
  
  const modalImg = modal.querySelector('.modal-image') as HTMLImageElement;
  const closeBtn = modal.querySelector('.modal-close') as HTMLElement;
  
  // 关闭模态框
  const closeModal = () => {
    modal.classList.remove('visible');
    setTimeout(() => {
      modalImg.src = '';
    }, 300);
  };
  
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  // ESC 键关闭
  addEventListenerWithCleanup(document, 'keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('visible')) {
      closeModal();
    }
  });
}

function openImageModal(src: string) {
  const modal = document.querySelector('.image-modal') as HTMLElement;
  const modalImg = modal.querySelector('.modal-image') as HTMLImageElement;
  
  modalImg.src = src;
  modal.classList.add('visible');
}

// ============================================
// 10. 键盘快捷键
// ============================================
function initKeyboardShortcuts() {
  // 创建快捷键提示
  const shortcuts = document.createElement('div');
  shortcuts.className = 'keyboard-shortcuts';
  shortcuts.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    background: var(--bg-primary);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-color);
    font-size: 0.875rem;
    z-index: 1000;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  `;
  
  shortcuts.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 0.5rem;">键盘快捷键</div>
    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
      <div><span class="keyboard-shortcut"><kbd>⌘</kbd> + <kbd>K</kbd></span> 搜索</div>
      <div><span class="keyboard-shortcut"><kbd>ESC</kbd></span> 关闭弹窗</div>
      <div><span class="keyboard-shortcut"><kbd>↑</kbd></span> 回到顶部</div>
    </div>
  `;
  
  document.body.appendChild(shortcuts);
  
  // 按下 ? 显示快捷键
  addEventListenerWithCleanup(document, 'keydown', (e) => {
    if (e.key === '?' && e.target === document.body) {
      shortcuts.style.opacity = shortcuts.style.opacity === '1' ? '0' : '1';
      shortcuts.style.transform = shortcuts.style.opacity === '1' ? 'translateY(0)' : 'translateY(20px)';
    }
  });
  
  // 3秒后自动隐藏
  setTimeout(() => {
    shortcuts.style.opacity = '0';
    shortcuts.style.transform = 'translateY(20px)';
  }, 3000);
}

// ============================================
// 11. 阅读进度指示器
// ============================================
function initReadingProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  document.body.appendChild(progressBar);
  
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  };
  
  addEventListenerWithCleanup(window, 'scroll', handleScroll, { passive: true });
}

// ============================================
// 工具函数
// ============================================
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
