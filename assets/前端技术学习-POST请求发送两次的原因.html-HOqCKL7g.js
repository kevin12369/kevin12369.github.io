import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as d}from"./app-ry7nqkQQ.js";const s={};function l(r,e){return d(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="前端技术学习-post请求发送两次的原因-2025版" tabindex="-1"><a class="header-anchor" href="#前端技术学习-post请求发送两次的原因-2025版" aria-hidden="true">#</a> 前端技术学习 - POST请求发送两次的原因（2025版）</h1><h2 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景" aria-hidden="true">#</a> 问题背景</h2><p>在开发过程中，你可能会发现某些 POST 请求在浏览器中发送了两次：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>OPTIONS /api/data
POST /api/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个非常经典的前端面试题，也是实际开发中经常遇到的问题。要理解这个问题，我们需要深入了解浏览器的同源策略和 CORS（跨域资源共享）机制。</p><h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h2><h3 id="什么是同源策略" tabindex="-1"><a class="header-anchor" href="#什么是同源策略" aria-hidden="true">#</a> 什么是同源策略？</h3><p>同源策略（Same-Origin Policy）是浏览器最核心的安全策略之一，它限制了从一个源加载的文档或脚本如何与另一个源的资源进行交互。</p><p><strong>同源的定义</strong>：如果两个 URL 的协议、域名和端口都相同，则它们同源。</p><table><thead><tr><th>URL</th><th>结果</th><th>原因</th></tr></thead><tbody><tr><td><code>http://example.com:80/page1</code></td><td>同源</td><td>相同的协议、域名、端口</td></tr><tr><td><code>http://example.com:80/page2</code></td><td>同源</td><td>只有路径不同</td></tr><tr><td><code>https://example.com:80/page1</code></td><td>不同源</td><td>协议不同（HTTP vs HTTPS）</td></tr><tr><td><code>http://example.com:8080/page1</code></td><td>不同源</td><td>端口不同（80 vs 8080）</td></tr><tr><td><code>http://other.com:80/page1</code></td><td>不同源</td><td>域名不同</td></tr></tbody></table><h3 id="同源策略的限制" tabindex="-1"><a class="header-anchor" href="#同源策略的限制" aria-hidden="true">#</a> 同源策略的限制</h3><p>同源策略主要限制三个方面：</p><ol><li><strong>DOM 访问限制</strong>：脚本不能访问跨源页面的 DOM</li><li><strong>Cookie 和本地存储限制</strong>：不能访问跨源的 Cookie、LocalStorage 等</li><li><strong>网络请求限制</strong>：XMLHttpRequest 和 Fetch API 默认不能跨域请求</li></ol><h2 id="cors-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#cors-跨域资源共享" aria-hidden="true">#</a> CORS（跨域资源共享）</h2><h3 id="什么是-cors" tabindex="-1"><a class="header-anchor" href="#什么是-cors" aria-hidden="true">#</a> 什么是 CORS？</h3><p>CORS（Cross-Origin Resource Sharing）是一种机制，允许在受控的条件下，不同源的网页能够请求和共享资源。它通过 HTTP 头部来告知浏览器哪些跨域请求是被允许的。</p><h3 id="cors-的两种请求类型" tabindex="-1"><a class="header-anchor" href="#cors-的两种请求类型" aria-hidden="true">#</a> CORS 的两种请求类型</h3><h4 id="_1-简单请求-simple-request" tabindex="-1"><a class="header-anchor" href="#_1-简单请求-simple-request" aria-hidden="true">#</a> 1. 简单请求（Simple Request）</h4><p>不会触发预检请求的 CORS 请求称为简单请求。满足以下所有条件的请求才是简单请求：</p><p><strong>HTTP 方法限制</strong>：</p><ul><li>GET</li><li>HEAD</li><li>POST</li></ul><p><strong>HTTP 头部限制</strong>： 只能使用以下标准字段：</p><ul><li><code>Accept</code></li><li><code>Accept-Language</code></li><li><code>Content-Language</code></li><li><code>Content-Type</code>（仅限三个值）</li><li><code>Last-Event-ID</code></li><li><code>DPR</code></li><li><code>Downlink</code></li><li><code>Save-Data</code></li><li><code>Viewport-Width</code></li><li><code>Width</code></li></ul><p><strong>Content-Type 的限制</strong>：</p><ul><li><code>application/x-www-form-urlencoded</code></li><li><code>multipart/form-data</code></li><li><code>text/plain</code></li></ul><p><strong>示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 简单请求示例
fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;
  },
  body: &#39;name=value&#39;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-预检请求-preflight-request" tabindex="-1"><a class="header-anchor" href="#_2-预检请求-preflight-request" aria-hidden="true">#</a> 2. 预检请求（Preflight Request）</h4><p>不满足简单请求条件的 CORS 请求会先发送一个预检请求（OPTIONS 方法），询问服务器是否允许实际的跨域请求。</p><p><strong>触发预检请求的情况</strong>：</p><ul><li>使用了 PUT、DELETE 等非简单请求方法</li><li>自定义了请求头（如 <code>X-Custom-Header</code>）</li><li>Content-Type 不是上述三个值之一（如 <code>application/json</code>）</li></ul><h2 id="为什么会发送两次请求" tabindex="-1"><a class="header-anchor" href="#为什么会发送两次请求" aria-hidden="true">#</a> 为什么会发送两次请求？</h2><h3 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析" aria-hidden="true">#</a> 原因分析</h3><p>当你的 POST 请求满足以下条件之一时，浏览器会自动发送预检请求：</p><ol><li><strong>Content-Type 为 <code>application/json</code></strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;Content-Type&#39;: &#39;application/json&#39;  // 触发预检
  },
  body: JSON.stringify({ name: &#39;value&#39; })
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>使用自定义请求头</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;Content-Type&#39;: &#39;application/json&#39;,
    &#39;Authorization&#39;: &#39;Bearer token&#39;,  // 自定义头部
    &#39;X-Custom-Header&#39;: &#39;custom&#39;       // 自定义头部
  },
  body: JSON.stringify({ name: &#39;value&#39; })
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>使用非简单请求方法</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;PUT&#39;,  // PUT 不是简单请求方法
  headers: {
    &#39;Content-Type&#39;: &#39;application/json&#39;
  },
  body: JSON.stringify({ name: &#39;value&#39; })
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两次请求的详细过程" tabindex="-1"><a class="header-anchor" href="#两次请求的详细过程" aria-hidden="true">#</a> 两次请求的详细过程</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 客户端代码
fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;Content-Type&#39;: &#39;application/json&#39;
  },
  body: JSON.stringify({ name: &#39;value&#39; })
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第一次请求：OPTIONS 预检请求</strong></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>OPTIONS /api/data HTTP/1.1
Host: api.example.com
Origin: http://example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务器响应（允许跨域）</strong></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二次请求：实际的 POST 请求</strong></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /api/data HTTP/1.1
Host: api.example.com
Origin: http://example.com
Content-Type: application/json

{&quot;name&quot;:&quot;value&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务器响应</strong></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com
Content-Type: application/json

{&quot;success&quot;: true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预检请求的缓存" tabindex="-1"><a class="header-anchor" href="#预检请求的缓存" aria-hidden="true">#</a> 预检请求的缓存</h2><h3 id="access-control-max-age" tabindex="-1"><a class="header-anchor" href="#access-control-max-age" aria-hidden="true">#</a> Access-Control-Max-Age</h3><p>服务器可以通过 <code>Access-Control-Max-Age</code> 响应头来指定预检请求的缓存时间（单位：秒）。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>Access-Control-Max-Age: 86400  // 缓存 24 小时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在缓存有效期内，浏览器不会再次发送预检请求，直接发送实际请求。</p><h3 id="缓存示例" tabindex="-1"><a class="header-anchor" href="#缓存示例" aria-hidden="true">#</a> 缓存示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 第一次请求：发送预检请求
fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: { &#39;Content-Type&#39;: &#39;application/json&#39; },
  body: JSON.stringify({ name: &#39;value&#39; })
});

// 第二次请求（24小时内）：不会发送预检请求
fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: { &#39;Content-Type&#39;: &#39;application/json&#39; },
  body: JSON.stringify({ name: &#39;value2&#39; })
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何避免预检请求" tabindex="-1"><a class="header-anchor" href="#如何避免预检请求" aria-hidden="true">#</a> 如何避免预检请求？</h2><h3 id="_1-使用简单请求" tabindex="-1"><a class="header-anchor" href="#_1-使用简单请求" aria-hidden="true">#</a> 1. 使用简单请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 不触发预检
fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;
  },
  body: &#39;name=value&#39;
});

// 或
fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;Content-Type&#39;: &#39;text/plain&#39;
  },
  body: &#39;name=value&#39;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-同源部署" tabindex="-1"><a class="header-anchor" href="#_2-同源部署" aria-hidden="true">#</a> 2. 同源部署</h3><p>将前端和后端部署在同一域名下，避免跨域：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前端：http://example.com
后端：http://example.com/api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-使用代理-开发环境" tabindex="-1"><a class="header-anchor" href="#_3-使用代理-开发环境" aria-hidden="true">#</a> 3. 使用代理（开发环境）</h3><p><strong>Webpack Dev Server 代理配置</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      &#39;/api&#39;: {
        target: &#39;http://api.example.com&#39;,
        changeOrigin: true,
        pathRewrite: {
          &#39;^/api&#39;: &#39;&#39;
        }
      }
    }
  }
};

// 使用
fetch(&#39;/api/data&#39;, {
  method: &#39;POST&#39;,
  headers: { &#39;Content-Type&#39;: &#39;application/json&#39; },
  body: JSON.stringify({ name: &#39;value&#39; })
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Vite 代理配置</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// vite.config.js
export default {
  server: {
    proxy: {
      &#39;/api&#39;: {
        target: &#39;http://api.example.com&#39;,
        changeOrigin: true,
        rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)
      }
    }
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-服务端配置-cors" tabindex="-1"><a class="header-anchor" href="#_4-服务端配置-cors" aria-hidden="true">#</a> 4. 服务端配置 CORS</h3><p>如果必须发送预检请求，确保服务器正确配置 CORS 响应头。</p><p><strong>Node.js（Express）示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const express = require(&#39;express&#39;);
const cors = require(&#39;cors&#39;);
const app = express();

// 基本配置
app.use(cors());

// 或详细配置
app.use(cors({
  origin: &#39;http://example.com&#39;,  // 允许的源
  methods: [&#39;GET&#39;, &#39;POST&#39;, &#39;PUT&#39;, &#39;DELETE&#39;],
  allowedHeaders: [&#39;Content-Type&#39;, &#39;Authorization&#39;],
  credentials: true,
  maxAge: 86400  // 预检请求缓存时间
}));

app.post(&#39;/data&#39;, (req, res) =&gt; {
  res.json({ success: true });
});

app.listen(3000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Nginx 配置示例</strong>：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>server {
    listen 80;
    server_name api.example.com;

    location / {
        # 允许的源
        add_header Access-Control-Allow-Origin http://example.com;

        # 允许的方法
        add_header Access-Control-Allow-Methods &#39;GET, POST, PUT, DELETE, OPTIONS&#39;;

        # 允许的头部
        add_header Access-Control-Allow-Headers &#39;Content-Type, Authorization&#39;;

        # 允许携带凭证
        add_header Access-Control-Allow-Credentials true;

        # 预检请求缓存时间
        add_header Access-Control-Max-Age 86400;

        # 处理 OPTIONS 预检请求
        if ($request_method = &#39;OPTIONS&#39;) {
            return 204;
        }

        # 其他请求
        proxy_pass http://backend;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="携带凭证的请求" tabindex="-1"><a class="header-anchor" href="#携带凭证的请求" aria-hidden="true">#</a> 携带凭证的请求</h2><h3 id="配置凭证" tabindex="-1"><a class="header-anchor" href="#配置凭证" aria-hidden="true">#</a> 配置凭证</h3><p><strong>客户端</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  credentials: &#39;include&#39;,  // 包含 Cookie
  headers: {
    &#39;Content-Type&#39;: &#39;application/json&#39;
  },
  body: JSON.stringify({ name: &#39;value&#39; })
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务端</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app.use(cors({
  origin: &#39;http://example.com&#39;,  // 不能是 *
  credentials: true
}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：当请求携带凭证时，<code>Access-Control-Allow-Origin</code> 不能设置为 <code>*</code>，必须指定具体的源。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="_1-预检请求失败" tabindex="-1"><a class="header-anchor" href="#_1-预检请求失败" aria-hidden="true">#</a> 1. 预检请求失败</h3><p><strong>错误信息</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Access to XMLHttpRequest at &#39;http://api.example.com/data&#39; from origin &#39;http://example.com&#39; has been blocked by CORS policy: Response to preflight request doesn&#39;t pass access control check: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方案</strong>：确保服务器正确配置 CORS 响应头。</p><h3 id="_2-预检请求缓存不生效" tabindex="-1"><a class="header-anchor" href="#_2-预检请求缓存不生效" aria-hidden="true">#</a> 2. 预检请求缓存不生效</h3><p><strong>原因</strong>：</p><ul><li>浏览器缓存被清除</li><li><code>Access-Control-Max-Age</code> 未设置或设置过小</li><li>请求参数发生变化</li></ul><p><strong>解决方案</strong>：合理设置 <code>Access-Control-Max-Age</code> 值。</p><h3 id="_3-开发环境跨域问题" tabindex="-1"><a class="header-anchor" href="#_3-开发环境跨域问题" aria-hidden="true">#</a> 3. 开发环境跨域问题</h3><p><strong>解决方案</strong>：使用 Webpack 或 Vite 的代理功能。</p><h2 id="_2025-年最佳实践" tabindex="-1"><a class="header-anchor" href="#_2025-年最佳实践" aria-hidden="true">#</a> 2025 年最佳实践</h2><h3 id="_1-优先使用同源部署" tabindex="-1"><a class="header-anchor" href="#_1-优先使用同源部署" aria-hidden="true">#</a> 1. 优先使用同源部署</h3><ul><li>前端和后端部署在同一域名下</li><li>使用路径区分不同服务</li></ul><h3 id="_2-合理配置-cors" tabindex="-1"><a class="header-anchor" href="#_2-合理配置-cors" aria-hidden="true">#</a> 2. 合理配置 CORS</h3><ul><li>明确指定允许的源（避免使用 <code>*</code>）</li><li>设置合理的预检请求缓存时间</li><li>只允许必要的请求方法和头部</li></ul><h3 id="_3-开发环境使用代理" tabindex="-1"><a class="header-anchor" href="#_3-开发环境使用代理" aria-hidden="true">#</a> 3. 开发环境使用代理</h3><ul><li>Webpack Dev Server 代理</li><li>Vite 代理</li><li>Nginx 反向代理</li></ul><h3 id="_4-生产环境使用-cdn" tabindex="-1"><a class="header-anchor" href="#_4-生产环境使用-cdn" aria-hidden="true">#</a> 4. 生产环境使用 CDN</h3><ul><li>静态资源托管到 CDN</li><li>API 使用同源或正确配置 CORS</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>POST 请求发送两次的原因是触发了 CORS 预检请求机制：</p><ol><li><strong>第一次请求</strong>：OPTIONS 预检请求，询问服务器是否允许跨域</li><li><strong>第二次请求</strong>：实际的 POST 请求，发送数据</li></ol><p><strong>触发条件</strong>：</p><ul><li>Content-Type 不是简单请求的三个值之一</li><li>使用自定义请求头</li><li>使用非简单请求方法（PUT、DELETE 等）</li></ul><p><strong>解决方案</strong>：</p><ul><li>使用简单请求（避免预检）</li><li>同源部署（避免跨域）</li><li>开发环境使用代理</li><li>生产环境正确配置 CORS</li></ul><p>理解 CORS 机制对于前端开发者来说非常重要，它不仅关系到跨域请求的实现，还关系到应用的安全性和性能。</p><h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源" aria-hidden="true">#</a> 参考资源</h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer">MDN - CORS</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy" target="_blank" rel="noopener noreferrer">MDN - 同源策略</a></li><li><a href="https://fetch.spec.whatwg.org/#cors-protocol" target="_blank" rel="noopener noreferrer">Fetch API - CORS</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer">HTTP 访问控制（CORS）</a></li></ul>`,111)])])}const v=i(s,[["render",l],["__file","前端技术学习-POST请求发送两次的原因.html.vue"]]);export{v as default};
