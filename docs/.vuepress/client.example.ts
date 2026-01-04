// ============================================
// VuePress 客户端增强脚本 - 示例配置
// ============================================
// 
// 使用说明：
// 1. 复制此文件内容到 docs/.vuepress/client.ts
// 2. 根据需要启用或禁用功能
// 3. 自定义配置参数
// 
// ============================================

import { defineClientConfig } from '@vuepress/client';
import { onMounted, onUnmounted } from 'vue';

// ============================================
// 配置选项
// ============================================
const CONFIG = {
  // 功能开关
  features: {
    pageAnimations: true,        // 页面加载动画
    navbarScroll: true,          // 导航栏滚动效果
    scrollReveal: true,          // 滚动触发动画
    codeBlockEnhancements: true, // 代码块增强
    searchFunctionality: true,   // 搜索功能
    themeToggle: true,           // 主题切换
    backToTop: true,             // 回到顶部
    toCAutoHighlight: true,      // 目录自动高亮
    imageZoom: true,             // 图片放大
    keyboardShortcuts: true,     // 键盘快捷键
    readingProgress: true,       // 阅读进度
  },
  
  // 动画配置
  animations: {
    pageElementDelay: 50,        // 页面元素动画延迟（毫秒）
    scrollRevealThreshold: 0.1,  // 滚动触发阈值（0-1）
    smoothScrollDuration: 300,   // 平滑滚动时长（毫秒）
  },
  
  // 搜索配置
  search: {
    debounceDelay: 300,          // 搜索防抖延迟（毫秒）
    minQueryLength: 2,           // 最小搜索长度
    maxResults: 10,              // 最大结果数量
  },
  
  // 回到顶部配置
  backToTop: {
    showThreshold: 500,          // 显示阈值（像素）
  },
  
  // 图片配置
  images: {
    lazyLoad: true,              // 懒加载
    zoomOnHover: true,           // 悬停放大
    modalOnClick: true,          // 点击预览
  },
  
  // 调试模式
  debug: false,
};

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

function debugLog(message: string, data?: any) {
  if (CONFIG.debug) {
    console.log(`[InteractiveFeatures] ${message}`, data);
  }
}

// ============================================
// VuePress 客户端配置
// ============================================
export default defineClientConfig({
  setup() {
    onMounted(() => {
      debugLog('初始化交互功能');
      
      // 根据配置初始化功能
      if (CONFIG.features.pageAnimations) {
        initPageAnimations();
      }
      
      if (CONFIG.features.navbarScroll) {
        initNavbarScroll();
      }
      
      if (CONFIG.features.scrollReveal) {
        initScrollReveal();
      }
      
      if (CONFIG.features.codeBlockEnhancements) {
        initCodeBlockEnhancements();
      }
      
      if (CONFIG.features.searchFunctionality) {
        initSearchFunctionality();
      }
      
      if (CONFIG.features.themeToggle) {
        initThemeToggle();
      }
      
      if (CONFIG.features.backToTop) {
        initBackToTop();
      }
      
      if (CONFIG.features.toCAutoHighlight) {
        initTOCAutoHighlight();
      }
      
      if (CONFIG.features.imageZoom) {
        initImageZoom();
      }
      
      if (CONFIG.features.keyboardShortcuts) {
        initKeyboardShortcuts();
      }
      
      if (CONFIG.features.readingProgress) {
        initReadingProgress();
      }
      
      debugLog('所有交互功能初始化完成');
    });

    onUnmounted(() => {
      debugLog('清理事件监听器');
      cleanupEventListeners();
    });
  },
});

// ============================================
// 1. 页面加载动画
// ============================================
function initPageAnimations() {
  debugLog('初始化页面加载动画');
  
  const elements = document.querySelectorAll('.theme-default-content > *');
  elements.forEach((el, index) => {
    (el as HTMLElement).style.opacity = '0';
    (el as HTMLElement).style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      (el as HTMLElement).style.transition = 'all 0.4s ease';
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    }, 100 + index * CONFIG.animations.pageElementDelay);
  });
}

// ============================================
// 2. 导航栏滚动效果
// ============================================
function initNavbarScroll() {
  debugLog('初始化导航栏滚动效果');
  
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
  handleScroll();
}

// ============================================
// 3. 滚动触发动画
// ============================================
function initScrollReveal() {
  debugLog('初始化滚动触发动画');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: CONFIG.animations.scrollRevealThreshold,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(
    '.article-card, .card, .feature, h2, h3, .code-block-wrapper, blockquote, table'
  );
  
  revealElements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });

  eventListeners.push(() => observer.disconnect());
  debugLog(`观察 ${revealElements.length} 个元素`);
}

// ============================================
// 4. 代码块增强
// ============================================
function initCodeBlockEnhancements() {
  debugLog('初始化代码块增强');
  
  const codeBlocks = document.querySelectorAll('pre[class*="language-"]');
  debugLog(`找到 ${codeBlocks.length} 个代码块`);
  
  codeBlocks.forEach((block, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    const header = document.createElement('div');
    header.className = 'code-header';
    
    const language = block.className.match(/language-(\w+)/)?.[1] || 'CODE';
    const langSpan = document.createElement('span');
    langSpan.className = 'code-language';
    langSpan.textContent = language;
    
    const actions = document.createElement('div');
    actions.className = 'code-actions';
    
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
    
    block.parentNode?.insertBefore(wrapper, block);
    wrapper.appendChild(header);
    wrapper.appendChild(block);
    
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
    debugLog('代码已复制');
  }).catch(err => {
    debugLog('复制失败', err);
  });
}

function showCopyTooltip() {
  const existingTooltip = document.querySelector('.copy-tooltip');
  if (existingTooltip) existingTooltip.remove();
  
  const tooltip = document.createElement('div');
  tooltip.className = 'copy-tooltip';
  tooltip.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    代码已复制到剪贴板
  `;
  
  document.body.appendChild(tooltip);
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
  debugLog('初始化搜索功能');
  
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
  
  const navbar = document.querySelector('.navbar .navbar-items-wrapper');
  if (navbar) {
    navbar.appendChild(searchContainer);
  }
  
  const input = searchContainer.querySelector('.search-input') as HTMLInputElement;
  const resultsContainer = searchContainer.querySelector('.search-results') as HTMLElement;
  
  input.addEventListener('input', debounce(() => {
    const query = input.value.trim();
    if (query.length >= CONFIG.search.minQueryLength) {
      performSearch(query, resultsContainer);
    } else {
      resultsContainer.classList.remove('visible');
    }
  }, CONFIG.search.debounceDelay));
  
  addEventListenerWithCleanup(document, 'keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
    }
  });
  
  addEventListenerWithCleanup(document, 'click', (e) => {
    if (!searchContainer.contains(e.target as Node)) {
      resultsContainer.classList.remove('visible');
    }
  });
}

async function performSearch(query: string, container: HTMLElement) {
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
  
  if (results.length > 0) {
    container.innerHTML = results.slice(0, CONFIG.search.maxResults).map(result => `
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
  
  debugLog(`搜索 "${query}" 找到 ${results.length} 个结果`);
}

function highlightText(text: string, query: string): string {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ============================================
// 6. 主题切换
// ============================================
function initThemeToggle() {
  debugLog('初始化主题切换');
  
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = `
    <span class="theme-icon sun">☀️</span>
    <span class="theme-icon moon">🌙</span>
  `;
  
  const navbar = document.querySelector('.navbar .navbar-items-wrapper');
  if (navbar) {
    navbar.appendChild(themeToggle);
  }
  
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    themeToggle.classList.add('dark');
  }
  
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    themeToggle.classList.toggle('dark');
    
    const isDarkMode = html.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    debugLog(`切换到 ${isDarkMode ? '深色' : '浅色'}模式`);
  });
  
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
  debugLog('初始化回到顶部按钮');
  
  const backToTop = document.createElement('div');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = `
    <span class="arrow-icon">↑</span>
  `;
  
  document.body.appendChild(backToTop);
  
  const handleScroll = () => {
    if (window.scrollY > CONFIG.backToTop.showThreshold) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };
  
  addEventListenerWithCleanup(window, 'scroll', handleScroll, { passive: true });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    debugLog('回到顶部');
  });
}

// ============================================
// 8. 文章目录（TOC）自动定位
// ============================================
function initTOCAutoHighlight() {
  debugLog('初始化目录自动高亮');
  
  const headings = document.querySelectorAll('.theme-default-content h2, .theme-default-content h3, .theme-default-content h4');
  if (headings.length === 0) return;
  
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
  
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.appendChild(toc);
  }
  
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
  debugLog(`生成目录，包含 ${headings.length} 个标题`);
}

// ============================================
// 9. 图片放大
// ============================================
function initImageZoom() {
  debugLog('初始化图片放大功能');
  
  const images = document.querySelectorAll('.theme-default-content img');
  debugLog(`找到 ${images.length} 张图片`);
  
  images.forEach(img => {
    if (CONFIG.images.lazyLoad) {
      img.classList.add('lazy-image');
      
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
      }
    }
    
    if (CONFIG.images.zoomOnHover) {
      img.classList.add('image-zoom');
    }
    
    if (CONFIG.images.modalOnClick) {
      img.addEventListener('click', () => openImageModal(img.src));
    }
  });
  
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = `
    <button class="modal-close">×</button>
    <img class="modal-image" src="" alt="">
  `;
  
  document.body.appendChild(modal);
  
  const modalImg = modal.querySelector('.modal-image') as HTMLImageElement;
  const closeBtn = modal.querySelector('.modal-close') as HTMLElement;
  
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
  debugLog('打开图片预览');
}

// ============================================
// 10. 键盘快捷键
// ============================================
function initKeyboardShortcuts() {
  debugLog('初始化键盘快捷键');
  
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
  
  addEventListenerWithCleanup(document, 'keydown', (e) => {
    if (e.key === '?' && e.target === document.body) {
      shortcuts.style.opacity = shortcuts.style.opacity === '1' ? '0' : '1';
      shortcuts.style.transform = shortcuts.style.opacity === '1' ? 'translateY(0)' : 'translateY(20px)';
    }
  });
  
  setTimeout(() => {
    shortcuts.style.opacity = '0';
    shortcuts.style.transform = 'translateY(20px)';
  }, 3000);
}

// ============================================
// 11. 阅读进度指示器
// ============================================
function initReadingProgress() {
  debugLog('初始化阅读进度指示器');
  
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