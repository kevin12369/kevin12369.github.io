---
title: '前端技术学习 - Vue+Axios全局接口防抖节流封装（2025版）'
description: '在实际开发中，我们经常会遇到以下场景：'
pubDate: 2025-01-02
updatedDate: 2025-01-02
category: '未分类'
tags: []
draft: false
---


# 前端技术学习 - Vue+Axios全局接口防抖节流封装（2025版）

## 为什么需要防抖和节流？

在实际开发中，我们经常会遇到以下场景：

1. **搜索框输入**：用户输入时触发搜索请求
2. **按钮点击**：用户快速点击提交按钮
3. **滚动加载**：页面滚动时触发加载更多
4. **窗口调整**：窗口大小改变时触发布局计算

如果不进行处理，可能会导致：
- 大量重复请求，浪费服务器资源
- 页面卡顿，影响用户体验
- 数据不一致，产生错误结果

**防抖**和**节流**是解决这类问题的有效方案。

## 防抖和节流的区别

### 防抖（Debounce）

**定义**：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

**特点**：
- 多次触发，只执行最后一次
- 适合搜索框输入、窗口调整等场景

```javascript
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// 使用
const search = debounce((keyword) => {
  console.log('搜索:', keyword);
}, 500);

search('a');  // 不执行
search('ab');  // 不执行
search('abc'); // 500ms 后执行
```

### 节流（Throttle）

**定义**：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

**特点**：
- 在指定时间内只执行一次
- 适合滚动加载、按钮点击等场景

```javascript
// 节流函数
function throttle(func, wait) {
  let timeout;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
}

// 使用
const loadMore = throttle(() => {
  console.log('加载更多');
}, 1000);

loadMore(); // 执行
loadMore(); // 不执行
loadMore(); // 不执行
// 1000ms 后可以再次执行
```

## Axios 拦截器

### 请求拦截器

```javascript
import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
```

### 响应拦截器

```javascript
// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

## 全局防抖节流封装

### 1. 创建请求管理器

```javascript
// src/utils/requestManager.js

class RequestManager {
  constructor() {
    this.pendingRequests = new Map();
    this.debounceTimers = new Map();
    this.throttleTimers = new Map();
  }

  // 生成请求的唯一标识
  generateKey(config) {
    const { method, url, params, data } = config;
    return `${method}-${url}-${JSON.stringify(params)}-${JSON.stringify(data)}`;
  }

  // 添加防抖请求
  addDebounceRequest(config, wait = 500) {
    const key = this.generateKey(config);

    // 清除之前的定时器
    if (this.debounceTimers.has(key)) {
      clearTimeout(this.debounceTimers.get(key));
    }

    // 创建新的定时器
    return new Promise((resolve, reject) => {
      const timer = setTimeout(async () => {
        try {
          const response = await axios(config);
          this.debounceTimers.delete(key);
          resolve(response);
        } catch (error) {
          this.debounceTimers.delete(key);
          reject(error);
        }
      }, wait);

      this.debounceTimers.set(key, timer);
    });
  }

  // 添加节流请求
  addThrottleRequest(config, wait = 1000) {
    const key = this.generateKey(config);

    // 如果已有节流定时器，返回相同的 Promise
    if (this.throttleTimers.has(key)) {
      return this.throttleTimers.get(key).promise;
    }

    // 创建新的节流请求
    const promise = new Promise((resolve, reject) => {
      const timer = setTimeout(async () => {
        try {
          const response = await axios(config);
          this.throttleTimers.delete(key);
          resolve(response);
        } catch (error) {
          this.throttleTimers.delete(key);
          reject(error);
        }
      }, wait);

      this.throttleTimers.set(key, { timer, promise });
    });

    return promise;
  }

  // 取消所有请求
  cancelAll() {
    // 清除防抖定时器
    this.debounceTimers.forEach(timer => clearTimeout(timer));
    this.debounceTimers.clear();

    // 清除节流定时器
    this.throttleTimers.forEach(({ timer }) => clearTimeout(timer));
    this.throttleTimers.clear();
  }
}

export default new RequestManager();
```

### 2. 创建 Axios 实例

```javascript
// src/utils/request.js

import axios from 'axios';
import requestManager from './requestManager';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 检查是否需要防抖
    if (config.debounce) {
      return requestManager.addDebounceRequest(config, config.debounceWait || 500);
    }

    // 检查是否需要节流
    if (config.throttle) {
      return requestManager.addThrottleRequest(config, config.throttleWait || 1000);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
```

### 3. Vue 3 封装

```javascript
// src/composables/useRequest.js

import { ref } from 'vue';
import request from '@/utils/request';

export function useRequest() {
  const loading = ref(false);
  const error = ref(null);

  const get = (url, config = {}) => {
    loading.value = true;
    return request.get(url, config)
      .finally(() => {
        loading.value = false;
      });
  };

  const post = (url, data, config = {}) => {
    loading.value = true;
    return request.post(url, data, config)
      .finally(() => {
        loading.value = false;
      });
  };

  const put = (url, data, config = {}) => {
    loading.value = true;
    return request.put(url, data, config)
      .finally(() => {
        loading.value = false;
      });
  };

  const del = (url, config = {}) => {
    loading.value = true;
    return request.delete(url, config)
      .finally(() => {
        loading.value = false;
      });
  };

  return {
    loading,
    error,
    get,
    post,
    put,
    del
  };
}
```

## 实际应用场景

### 1. 搜索框防抖

```vue
<template>
  <div>
    <input
      v-model="keyword"
      @input="handleSearch"
      placeholder="搜索..."
    />
    <div v-if="loading">搜索中...</div>
    <ul v-if="results.length">
      <li v-for="item in results" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import request from '@/utils/request';

const keyword = ref('');
const loading = ref(false);
const results = ref([]);

const handleSearch = () => {
  if (!keyword.value) {
    results.value = [];
    return;
  }

  loading.value = true;

  // 使用防抖配置
  request.get('/api/search', {
    params: { keyword: keyword.value },
    debounce: true,
    debounceWait: 500
  }).then(data => {
    results.value = data.results;
  }).catch(err => {
    console.error('搜索失败:', err);
  }).finally(() => {
    loading.value = false;
  });
};
</script>
```

### 2. 按钮点击节流

```vue
<template>
  <div>
    <button @click="handleSubmit" :disabled="loading">
      {{ loading ? '提交中...' : '提交' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import request from '@/utils/request';

const loading = ref(false);

const handleSubmit = () => {
  loading.value = true;

  // 使用节流配置
  request.post('/api/submit', formData, {
    throttle: true,
    throttleWait: 2000
  }).then(data => {
    console.log('提交成功:', data);
  }).catch(err => {
    console.error('提交失败:', err);
  }).finally(() => {
    loading.value = false;
  });
};
</script>
```

### 3. 滚动加载节流

```vue
<template>
  <div>
    <div class="list">
      <div v-for="item in items" :key="item.id" class="item">
        {{ item.name }}
      </div>
    </div>
    <div v-if="loading" class="loading">加载中...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import request from '@/utils/request';

const items = ref([]);
const loading = ref(false);
const page = ref(1);

const loadMore = () => {
  if (loading.value) return;

  loading.value = true;

  // 使用节流配置
  request.get('/api/list', {
    params: { page: page.value },
    throttle: true,
    throttleWait: 1000
  }).then(data => {
    items.value = [...items.value, ...data.items];
    page.value++;
  }).catch(err => {
    console.error('加载失败:', err);
  }).finally(() => {
    loading.value = false;
  });
};

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMore();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  loadMore();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
```

## 2025 年最佳实践

### 1. 使用 Composition API

```javascript
// src/composables/useDebounce.js
import { ref, onUnmounted } from 'vue';

export function useDebounce(fn, delay = 500) {
  let timer = null;

  const debouncedFn = (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  onUnmounted(() => {
    if (timer) clearTimeout(timer);
  });

  return debouncedFn;
}

// 使用
import { useDebounce } from '@/composables/useDebounce';

const search = useDebounce((keyword) => {
  console.log('搜索:', keyword);
}, 500);
```

### 2. 使用 TypeScript

```typescript
// src/types/request.ts

interface RequestConfig {
  debounce?: boolean;
  debounceWait?: number;
  throttle?: boolean;
  throttleWait?: number;
}

interface AxiosConfig extends RequestConfig {
  method?: string;
  url?: string;
  params?: any;
  data?: any;
}

// src/utils/requestManager.ts

class RequestManager {
  private pendingRequests: Map<string, Promise<any>>;
  private debounceTimers: Map<string, NodeJS.Timeout>;
  private throttleTimers: Map<string, { timer: NodeJS.Timeout; promise: Promise<any> }>;

  constructor() {
    this.pendingRequests = new Map();
    this.debounceTimers = new Map();
    this.throttleTimers = new Map();
  }

  generateKey(config: AxiosConfig): string {
    const { method = 'GET', url = '', params = {}, data = {} } = config;
    return `${method}-${url}-${JSON.stringify(params)}-${JSON.stringify(data)}`;
  }

  addDebounceRequest(config: AxiosConfig, wait: number = 500): Promise<any> {
    const key = this.generateKey(config);

    if (this.debounceTimers.has(key)) {
      clearTimeout(this.debounceTimers.get(key)!);
    }

    return new Promise((resolve, reject) => {
      const timer = setTimeout(async () => {
        try {
          const response = await axios(config);
          this.debounceTimers.delete(key);
          resolve(response);
        } catch (error) {
          this.debounceTimers.delete(key);
          reject(error);
        }
      }, wait);

      this.debounceTimers.set(key, timer);
    });
  }
}
```

### 3. 性能优化

```javascript
// 使用 WeakMap 避免内存泄漏
const requestManager = new WeakMap();

// 使用 CancelToken 取消请求
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/api/data', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
});

// 取消请求
cancel();
```

## 常见问题

### 1. 防抖和节流不生效

**原因**：
- 配置参数错误
- 请求拦截器未正确处理
- 多次创建 Axios 实例

**解决方案**：
```javascript
// 确保使用同一个 Axios 实例
import request from '@/utils/request';

// 正确配置
request.get('/api/data', {
  debounce: true,
  debounceWait: 500
});
```

### 2. 内存泄漏

**原因**：
- 定时器未清除
- 组件卸载时未取消请求

**解决方案**：
```javascript
// 在组件卸载时清除定时器
onUnmounted(() => {
  requestManager.cancelAll();
});
```

### 3. 并发请求问题

**原因**：
- 多个相同请求同时发送
- 节流机制未正确实现

**解决方案**：
```javascript
// 使用请求缓存
const cache = new Map();

async function cachedRequest(config) {
  const key = JSON.stringify(config);

  if (cache.has(key)) {
    return cache.get(key);
  }

  const promise = request(config);
  cache.set(key, promise);

  return promise;
}
```

## 总结

通过全局封装防抖和节流，我们可以：

1. **减少重复请求**：避免不必要的网络请求
2. **提升用户体验**：减少页面卡顿和等待时间
3. **优化性能**：降低服务器压力和客户端资源消耗
4. **代码复用**：统一管理请求逻辑

**最佳实践**：
1. 使用 Axios 拦截器统一处理
2. 使用 Composition API 封装 Hooks
3. 使用 TypeScript 提供类型安全
4. 在组件卸载时清理资源
5. 合理设置防抖和节流时间

**应用场景**：
- 搜索框输入：防抖
- 按钮点击：节流
- 滚动加载：节流
- 窗口调整：防抖
- 表单验证：防抖

## 参考资源

- [Axios 官方文档](https://axios-http.com/docs/intro)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [JavaScript 防抖和节流](https://lodash.com/docs/#debounce)