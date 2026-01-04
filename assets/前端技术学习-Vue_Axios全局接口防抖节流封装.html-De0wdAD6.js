import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as s,o as l}from"./app-BnzN889n.js";const d={};function r(a,e){return l(),n("div",null,[...e[0]||(e[0]=[s(`<h1 id="前端技术学习-vue-axios全局接口防抖节流封装-2025版" tabindex="-1"><a class="header-anchor" href="#前端技术学习-vue-axios全局接口防抖节流封装-2025版" aria-hidden="true">#</a> 前端技术学习 - Vue+Axios全局接口防抖节流封装（2025版）</h1><h2 id="为什么需要防抖和节流" tabindex="-1"><a class="header-anchor" href="#为什么需要防抖和节流" aria-hidden="true">#</a> 为什么需要防抖和节流？</h2><p>在实际开发中，我们经常会遇到以下场景：</p><ol><li><strong>搜索框输入</strong>：用户输入时触发搜索请求</li><li><strong>按钮点击</strong>：用户快速点击提交按钮</li><li><strong>滚动加载</strong>：页面滚动时触发加载更多</li><li><strong>窗口调整</strong>：窗口大小改变时触发布局计算</li></ol><p>如果不进行处理，可能会导致：</p><ul><li>大量重复请求，浪费服务器资源</li><li>页面卡顿，影响用户体验</li><li>数据不一致，产生错误结果</li></ul><p><strong>防抖</strong>和<strong>节流</strong>是解决这类问题的有效方案。</p><h2 id="防抖和节流的区别" tabindex="-1"><a class="header-anchor" href="#防抖和节流的区别" aria-hidden="true">#</a> 防抖和节流的区别</h2><h3 id="防抖-debounce" tabindex="-1"><a class="header-anchor" href="#防抖-debounce" aria-hidden="true">#</a> 防抖（Debounce）</h3><p><strong>定义</strong>：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。</p><p><strong>特点</strong>：</p><ul><li>多次触发，只执行最后一次</li><li>适合搜索框输入、窗口调整等场景</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() =&gt; {
      func.apply(this, args);
    }, wait);
  };
}

// 使用
const search = debounce((keyword) =&gt; {
  console.log(&#39;搜索:&#39;, keyword);
}, 500);

search(&#39;a&#39;);  // 不执行
search(&#39;ab&#39;);  // 不执行
search(&#39;abc&#39;); // 500ms 后执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="节流-throttle" tabindex="-1"><a class="header-anchor" href="#节流-throttle" aria-hidden="true">#</a> 节流（Throttle）</h3><p><strong>定义</strong>：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。</p><p><strong>特点</strong>：</p><ul><li>在指定时间内只执行一次</li><li>适合滚动加载、按钮点击等场景</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 节流函数
function throttle(func, wait) {
  let timeout;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() =&gt; {
        func.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
}

// 使用
const loadMore = throttle(() =&gt; {
  console.log(&#39;加载更多&#39;);
}, 1000);

loadMore(); // 执行
loadMore(); // 不执行
loadMore(); // 不执行
// 1000ms 后可以再次执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-拦截器" tabindex="-1"><a class="header-anchor" href="#axios-拦截器" aria-hidden="true">#</a> Axios 拦截器</h2><h3 id="请求拦截器" tabindex="-1"><a class="header-anchor" href="#请求拦截器" aria-hidden="true">#</a> 请求拦截器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>import axios from &#39;axios&#39;;

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  config =&gt; {
    // 在发送请求之前做些什么
    return config;
  },
  error =&gt; {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应拦截器" tabindex="-1"><a class="header-anchor" href="#响应拦截器" aria-hidden="true">#</a> 响应拦截器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 响应拦截器
service.interceptors.response.use(
  response =&gt; {
    // 对响应数据做点什么
    return response.data;
  },
  error =&gt; {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局防抖节流封装" tabindex="-1"><a class="header-anchor" href="#全局防抖节流封装" aria-hidden="true">#</a> 全局防抖节流封装</h2><h3 id="_1-创建请求管理器" tabindex="-1"><a class="header-anchor" href="#_1-创建请求管理器" aria-hidden="true">#</a> 1. 创建请求管理器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// src/utils/requestManager.js

class RequestManager {
  constructor() {
    this.pendingRequests = new Map();
    this.debounceTimers = new Map();
    this.throttleTimers = new Map();
  }

  // 生成请求的唯一标识
  generateKey(config) {
    const { method, url, params, data } = config;
    return \`\${method}-\${url}-\${JSON.stringify(params)}-\${JSON.stringify(data)}\`;
  }

  // 添加防抖请求
  addDebounceRequest(config, wait = 500) {
    const key = this.generateKey(config);

    // 清除之前的定时器
    if (this.debounceTimers.has(key)) {
      clearTimeout(this.debounceTimers.get(key));
    }

    // 创建新的定时器
    return new Promise((resolve, reject) =&gt; {
      const timer = setTimeout(async () =&gt; {
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
    const promise = new Promise((resolve, reject) =&gt; {
      const timer = setTimeout(async () =&gt; {
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
    this.debounceTimers.forEach(timer =&gt; clearTimeout(timer));
    this.debounceTimers.clear();

    // 清除节流定时器
    this.throttleTimers.forEach(({ timer }) =&gt; clearTimeout(timer));
    this.throttleTimers.clear();
  }
}

export default new RequestManager();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建-axios-实例" tabindex="-1"><a class="header-anchor" href="#_2-创建-axios-实例" aria-hidden="true">#</a> 2. 创建 Axios 实例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// src/utils/request.js

import axios from &#39;axios&#39;;
import requestManager from &#39;./requestManager&#39;;

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  config =&gt; {
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
  error =&gt; {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response =&gt; {
    return response.data;
  },
  error =&gt; {
    return Promise.reject(error);
  }
);

export default service;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-vue-3-封装" tabindex="-1"><a class="header-anchor" href="#_3-vue-3-封装" aria-hidden="true">#</a> 3. Vue 3 封装</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// src/composables/useRequest.js

import { ref } from &#39;vue&#39;;
import request from &#39;@/utils/request&#39;;

export function useRequest() {
  const loading = ref(false);
  const error = ref(null);

  const get = (url, config = {}) =&gt; {
    loading.value = true;
    return request.get(url, config)
      .finally(() =&gt; {
        loading.value = false;
      });
  };

  const post = (url, data, config = {}) =&gt; {
    loading.value = true;
    return request.post(url, data, config)
      .finally(() =&gt; {
        loading.value = false;
      });
  };

  const put = (url, data, config = {}) =&gt; {
    loading.value = true;
    return request.put(url, data, config)
      .finally(() =&gt; {
        loading.value = false;
      });
  };

  const del = (url, config = {}) =&gt; {
    loading.value = true;
    return request.delete(url, config)
      .finally(() =&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实际应用场景" tabindex="-1"><a class="header-anchor" href="#实际应用场景" aria-hidden="true">#</a> 实际应用场景</h2><h3 id="_1-搜索框防抖" tabindex="-1"><a class="header-anchor" href="#_1-搜索框防抖" aria-hidden="true">#</a> 1. 搜索框防抖</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;input
      v-model=&quot;keyword&quot;
      @input=&quot;handleSearch&quot;
      placeholder=&quot;搜索...&quot;
    /&gt;
    &lt;div v-if=&quot;loading&quot;&gt;搜索中...&lt;/div&gt;
    &lt;ul v-if=&quot;results.length&quot;&gt;
      &lt;li v-for=&quot;item in results&quot; :key=&quot;item.id&quot;&gt;{{ item.name }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
import request from &#39;@/utils/request&#39;;

const keyword = ref(&#39;&#39;);
const loading = ref(false);
const results = ref([]);

const handleSearch = () =&gt; {
  if (!keyword.value) {
    results.value = [];
    return;
  }

  loading.value = true;

  // 使用防抖配置
  request.get(&#39;/api/search&#39;, {
    params: { keyword: keyword.value },
    debounce: true,
    debounceWait: 500
  }).then(data =&gt; {
    results.value = data.results;
  }).catch(err =&gt; {
    console.error(&#39;搜索失败:&#39;, err);
  }).finally(() =&gt; {
    loading.value = false;
  });
};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-按钮点击节流" tabindex="-1"><a class="header-anchor" href="#_2-按钮点击节流" aria-hidden="true">#</a> 2. 按钮点击节流</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;handleSubmit&quot; :disabled=&quot;loading&quot;&gt;
      {{ loading ? &#39;提交中...&#39; : &#39;提交&#39; }}
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;
import request from &#39;@/utils/request&#39;;

const loading = ref(false);

const handleSubmit = () =&gt; {
  loading.value = true;

  // 使用节流配置
  request.post(&#39;/api/submit&#39;, formData, {
    throttle: true,
    throttleWait: 2000
  }).then(data =&gt; {
    console.log(&#39;提交成功:&#39;, data);
  }).catch(err =&gt; {
    console.error(&#39;提交失败:&#39;, err);
  }).finally(() =&gt; {
    loading.value = false;
  });
};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-滚动加载节流" tabindex="-1"><a class="header-anchor" href="#_3-滚动加载节流" aria-hidden="true">#</a> 3. 滚动加载节流</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;list&quot;&gt;
      &lt;div v-for=&quot;item in items&quot; :key=&quot;item.id&quot; class=&quot;item&quot;&gt;
        {{ item.name }}
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div v-if=&quot;loading&quot; class=&quot;loading&quot;&gt;加载中...&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted, onUnmounted } from &#39;vue&#39;;
import request from &#39;@/utils/request&#39;;

const items = ref([]);
const loading = ref(false);
const page = ref(1);

const loadMore = () =&gt; {
  if (loading.value) return;

  loading.value = true;

  // 使用节流配置
  request.get(&#39;/api/list&#39;, {
    params: { page: page.value },
    throttle: true,
    throttleWait: 1000
  }).then(data =&gt; {
    items.value = [...items.value, ...data.items];
    page.value++;
  }).catch(err =&gt; {
    console.error(&#39;加载失败:&#39;, err);
  }).finally(() =&gt; {
    loading.value = false;
  });
};

const handleScroll = () =&gt; {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight &gt;= scrollHeight - 100) {
    loadMore();
  }
};

onMounted(() =&gt; {
  window.addEventListener(&#39;scroll&#39;, handleScroll);
  loadMore();
});

onUnmounted(() =&gt; {
  window.removeEventListener(&#39;scroll&#39;, handleScroll);
});
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025-年最佳实践" tabindex="-1"><a class="header-anchor" href="#_2025-年最佳实践" aria-hidden="true">#</a> 2025 年最佳实践</h2><h3 id="_1-使用-composition-api" tabindex="-1"><a class="header-anchor" href="#_1-使用-composition-api" aria-hidden="true">#</a> 1. 使用 Composition API</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// src/composables/useDebounce.js
import { ref, onUnmounted } from &#39;vue&#39;;

export function useDebounce(fn, delay = 500) {
  let timer = null;

  const debouncedFn = (...args) =&gt; {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() =&gt; {
      fn(...args);
    }, delay);
  };

  onUnmounted(() =&gt; {
    if (timer) clearTimeout(timer);
  });

  return debouncedFn;
}

// 使用
import { useDebounce } from &#39;@/composables/useDebounce&#39;;

const search = useDebounce((keyword) =&gt; {
  console.log(&#39;搜索:&#39;, keyword);
}, 500);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用-typescript" tabindex="-1"><a class="header-anchor" href="#_2-使用-typescript" aria-hidden="true">#</a> 2. 使用 TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// src/types/request.ts

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
  private pendingRequests: Map&lt;string, Promise&lt;any&gt;&gt;;
  private debounceTimers: Map&lt;string, NodeJS.Timeout&gt;;
  private throttleTimers: Map&lt;string, { timer: NodeJS.Timeout; promise: Promise&lt;any&gt; }&gt;;

  constructor() {
    this.pendingRequests = new Map();
    this.debounceTimers = new Map();
    this.throttleTimers = new Map();
  }

  generateKey(config: AxiosConfig): string {
    const { method = &#39;GET&#39;, url = &#39;&#39;, params = {}, data = {} } = config;
    return \`\${method}-\${url}-\${JSON.stringify(params)}-\${JSON.stringify(data)}\`;
  }

  addDebounceRequest(config: AxiosConfig, wait: number = 500): Promise&lt;any&gt; {
    const key = this.generateKey(config);

    if (this.debounceTimers.has(key)) {
      clearTimeout(this.debounceTimers.get(key)!);
    }

    return new Promise((resolve, reject) =&gt; {
      const timer = setTimeout(async () =&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-性能优化" tabindex="-1"><a class="header-anchor" href="#_3-性能优化" aria-hidden="true">#</a> 3. 性能优化</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用 WeakMap 避免内存泄漏
const requestManager = new WeakMap();

// 使用 CancelToken 取消请求
const CancelToken = axios.CancelToken;
let cancel;

axios.get(&#39;/api/data&#39;, {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
});

// 取消请求
cancel();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="_1-防抖和节流不生效" tabindex="-1"><a class="header-anchor" href="#_1-防抖和节流不生效" aria-hidden="true">#</a> 1. 防抖和节流不生效</h3><p><strong>原因</strong>：</p><ul><li>配置参数错误</li><li>请求拦截器未正确处理</li><li>多次创建 Axios 实例</li></ul><p><strong>解决方案</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 确保使用同一个 Axios 实例
import request from &#39;@/utils/request&#39;;

// 正确配置
request.get(&#39;/api/data&#39;, {
  debounce: true,
  debounceWait: 500
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-内存泄漏" tabindex="-1"><a class="header-anchor" href="#_2-内存泄漏" aria-hidden="true">#</a> 2. 内存泄漏</h3><p><strong>原因</strong>：</p><ul><li>定时器未清除</li><li>组件卸载时未取消请求</li></ul><p><strong>解决方案</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 在组件卸载时清除定时器
onUnmounted(() =&gt; {
  requestManager.cancelAll();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-并发请求问题" tabindex="-1"><a class="header-anchor" href="#_3-并发请求问题" aria-hidden="true">#</a> 3. 并发请求问题</h3><p><strong>原因</strong>：</p><ul><li>多个相同请求同时发送</li><li>节流机制未正确实现</li></ul><p><strong>解决方案</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用请求缓存
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过全局封装防抖和节流，我们可以：</p><ol><li><strong>减少重复请求</strong>：避免不必要的网络请求</li><li><strong>提升用户体验</strong>：减少页面卡顿和等待时间</li><li><strong>优化性能</strong>：降低服务器压力和客户端资源消耗</li><li><strong>代码复用</strong>：统一管理请求逻辑</li></ol><p><strong>最佳实践</strong>：</p><ol><li>使用 Axios 拦截器统一处理</li><li>使用 Composition API 封装 Hooks</li><li>使用 TypeScript 提供类型安全</li><li>在组件卸载时清理资源</li><li>合理设置防抖和节流时间</li></ol><p><strong>应用场景</strong>：</p><ul><li>搜索框输入：防抖</li><li>按钮点击：节流</li><li>滚动加载：节流</li><li>窗口调整：防抖</li><li>表单验证：防抖</li></ul><h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源" aria-hidden="true">#</a> 参考资源</h2><ul><li><a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer">Axios 官方文档</a></li><li><a href="https://vuejs.org/guide/extras/composition-api-faq.html" target="_blank" rel="noopener noreferrer">Vue 3 Composition API</a></li><li><a href="https://lodash.com/docs/#debounce" target="_blank" rel="noopener noreferrer">JavaScript 防抖和节流</a></li></ul>`,69)])])}const u=i(d,[["render",r],["__file","前端技术学习-Vue_Axios全局接口防抖节流封装.html.vue"]]);export{u as default};
