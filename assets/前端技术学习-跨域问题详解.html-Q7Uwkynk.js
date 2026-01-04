import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as a,o as s}from"./app-ry7nqkQQ.js";const d={};function r(l,e){return s(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="前端技术学习-跨域问题详解-2025版" tabindex="-1"><a class="header-anchor" href="#前端技术学习-跨域问题详解-2025版" aria-hidden="true">#</a> 前端技术学习 - 跨域问题详解（2025版）</h1><h2 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域" aria-hidden="true">#</a> 什么是跨域？</h2><h3 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h3><p><strong>同源定义</strong>：协议、域名、端口都相同</p><table><thead><tr><th>URL</th><th>与 <code>http://example.com:80</code> 比较</th><th>结果</th></tr></thead><tbody><tr><td><code>http://example.com:80/page1</code></td><td>协议、域名、端口相同</td><td>✅ 同源</td></tr><tr><td><code>https://example.com:80/page1</code></td><td>协议不同</td><td>❌ 跨域</td></tr><tr><td><code>http://example.com:8080/page1</code></td><td>端口不同</td><td>❌ 跨域</td></tr><tr><td><code>http://other.com:80/page1</code></td><td>域名不同</td><td>❌ 跨域</td></tr></tbody></table><h3 id="跨域场景" tabindex="-1"><a class="header-anchor" href="#跨域场景" aria-hidden="true">#</a> 跨域场景</h3><ol><li><strong>AJAX 请求</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 跨域请求
fetch(&#39;http://api.example.com/data&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>WebSocket</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 跨域连接
const ws = new WebSocket(&#39;ws://example.com&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>Canvas</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 跨域图片污染 Canvas
ctx.drawImage(img, 0, 0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cors-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#cors-跨域资源共享" aria-hidden="true">#</a> CORS（跨域资源共享）</h2><h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>客户端                    服务器
  |                         |
  |--- OPTIONS /api/data --&gt;|
  |                         |
  |&lt;-- 204 No Content ------|
  |                         |
  |--- POST /api/data -----&gt;|
  |                         |
  |&lt;-- 200 OK --------------|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器配置" tabindex="-1"><a class="header-anchor" href="#服务器配置" aria-hidden="true">#</a> 服务器配置</h3><h4 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const express = require(&#39;express&#39;);
const cors = require(&#39;cors&#39;);

const app = express();

// 基本配置
app.use(cors());

// 详细配置
app.use(cors({
  origin: &#39;http://localhost:3000&#39;,
  methods: [&#39;GET&#39;, &#39;POST&#39;, &#39;PUT&#39;, &#39;DELETE&#39;],
  allowedHeaders: [&#39;Content-Type&#39;, &#39;Authorization&#39;],
  credentials: true
}));

app.listen(3000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>server {
    listen 80;
    server_name api.example.com;

    location / {
        add_header Access-Control-Allow-Origin http://localhost:3000;
        add_header Access-Control-Allow-Methods &#39;GET, POST, PUT, DELETE, OPTIONS&#39;;
        add_header Access-Control-Allow-Headers &#39;Content-Type, Authorization&#39;;
        add_header Access-Control-Allow-Credentials true;
        
        if ($request_method = &#39;OPTIONS&#39;) {
            return 204;
        }
        
        proxy_pass http://backend;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fetch(&#39;http://api.example.com/data&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;Content-Type&#39;: &#39;application/json&#39;
  },
  credentials: &#39;include&#39;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsonp-已废弃" tabindex="-1"><a class="header-anchor" href="#jsonp-已废弃" aria-hidden="true">#</a> JSONP（已废弃）</h2><h3 id="工作原理-1" tabindex="-1"><a class="header-anchor" href="#工作原理-1" aria-hidden="true">#</a> 工作原理</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 客户端
function handleResponse(data) {
  console.log(data);
}

const script = document.createElement(&#39;script&#39;);
script.src = &#39;http://api.example.com/data?callback=handleResponse&#39;;
document.body.appendChild(script);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器端" tabindex="-1"><a class="header-anchor" href="#服务器端" aria-hidden="true">#</a> 服务器端</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app.get(&#39;/data&#39;, (req, res) =&gt; {
  const callback = req.query.callback;
  const data = { name: &#39;John&#39; };
  res.send(\`\${callback}(\${JSON.stringify(data)})\`);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：JSONP 只支持 GET 请求，且存在安全风险，已被废弃。</p><h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h2><h3 id="开发环境代理" tabindex="-1"><a class="header-anchor" href="#开发环境代理" aria-hidden="true">#</a> 开发环境代理</h3><h4 id="webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server" aria-hidden="true">#</a> Webpack Dev Server</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// webpack.config.js
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// vite.config.js
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-反向代理" tabindex="-1"><a class="header-anchor" href="#nginx-反向代理" aria-hidden="true">#</a> Nginx 反向代理</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>server {
    listen 80;
    server_name frontend.example.com;

    location /api/ {
        proxy_pass http://api.example.com/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="websocket-跨域" tabindex="-1"><a class="header-anchor" href="#websocket-跨域" aria-hidden="true">#</a> WebSocket 跨域</h2><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 客户端
const ws = new WebSocket(&#39;ws://example.com&#39;);

ws.onopen = () =&gt; {
  console.log(&#39;连接成功&#39;);
};

ws.onmessage = (event) =&gt; {
  console.log(&#39;收到消息:&#39;, event.data);
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器配置-1" tabindex="-1"><a class="header-anchor" href="#服务器配置-1" aria-hidden="true">#</a> 服务器配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const WebSocket = require(&#39;ws&#39;);

const wss = new WebSocket.Server({
  port: 8080,
  origin: &#39;http://localhost:3000&#39;
});

wss.on(&#39;connection&#39;, (ws) =&gt; {
  ws.send(&#39;欢迎连接&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="postmessage-跨域" tabindex="-1"><a class="header-anchor" href="#postmessage-跨域" aria-hidden="true">#</a> postMessage 跨域</h2><h3 id="跨窗口通信" tabindex="-1"><a class="header-anchor" href="#跨窗口通信" aria-hidden="true">#</a> 跨窗口通信</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 窗口 A
const popup = window.open(&#39;http://other.com&#39;, &#39;popup&#39;);

popup.postMessage(&#39;Hello&#39;, &#39;http://other.com&#39;);

window.addEventListener(&#39;message&#39;, (event) =&gt; {
  console.log(&#39;收到消息:&#39;, event.data);
});

// 窗口 B
window.addEventListener(&#39;message&#39;, (event) =&gt; {
  if (event.origin === &#39;http://example.com&#39;) {
    console.log(&#39;收到消息:&#39;, event.data);
    event.source.postMessage(&#39;Hi&#39;, event.origin);
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iframe-通信" tabindex="-1"><a class="header-anchor" href="#iframe-通信" aria-hidden="true">#</a> iframe 通信</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 父页面
const iframe = document.querySelector(&#39;iframe&#39;);

iframe.contentWindow.postMessage(&#39;Hello&#39;, &#39;http://other.com&#39;);

// iframe 子页面
window.addEventListener(&#39;message&#39;, (event) =&gt; {
  if (event.origin === &#39;http://example.com&#39;) {
    console.log(&#39;收到消息:&#39;, event.data);
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025-年最佳实践" tabindex="-1"><a class="header-anchor" href="#_2025-年最佳实践" aria-hidden="true">#</a> 2025 年最佳实践</h2><h3 id="_1-优先使用-cors" tabindex="-1"><a class="header-anchor" href="#_1-优先使用-cors" aria-hidden="true">#</a> 1. 优先使用 CORS</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 推荐：使用 CORS
fetch(&#39;http://api.example.com/data&#39;, {
  headers: {
    &#39;Content-Type&#39;: &#39;application/json&#39;
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-开发环境使用代理" tabindex="-1"><a class="header-anchor" href="#_2-开发环境使用代理" aria-hidden="true">#</a> 2. 开发环境使用代理</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 开发环境
const API_URL = &#39;/api&#39;;

// 生产环境
const API_URL = &#39;http://api.example.com&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-使用环境变量" tabindex="-1"><a class="header-anchor" href="#_3-使用环境变量" aria-hidden="true">#</a> 3. 使用环境变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

fetch(\`\${API_BASE_URL}/data\`);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-配置正确的-cors" tabindex="-1"><a class="header-anchor" href="#_4-配置正确的-cors" aria-hidden="true">#</a> 4. 配置正确的 CORS</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 服务器端
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS.split(&#39;,&#39;),
  credentials: true
}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="_1-预检请求失败" tabindex="-1"><a class="header-anchor" href="#_1-预检请求失败" aria-hidden="true">#</a> 1. 预检请求失败</h3><p><strong>问题</strong>：OPTIONS 请求返回 404 或 403</p><p><strong>解决</strong>：确保服务器正确处理 OPTIONS 请求</p><h3 id="_2-cookie-不发送" tabindex="-1"><a class="header-anchor" href="#_2-cookie-不发送" aria-hidden="true">#</a> 2. Cookie 不发送</h3><p><strong>问题</strong>：请求没有携带 Cookie</p><p><strong>解决</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fetch(&#39;http://api.example.com/data&#39;, {
  credentials: &#39;include&#39;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-access-control-allow-origin-为" tabindex="-1"><a class="header-anchor" href="#_3-access-control-allow-origin-为" aria-hidden="true">#</a> 3. Access-Control-Allow-Origin 为 *</h3><p><strong>问题</strong>：携带凭证时不能使用通配符</p><p><strong>解决</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app.use(cors({
  origin: &#39;http://localhost:3000&#39;,
  credentials: true
}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>跨域是前端开发中的常见问题，有多种解决方案：</p><ol><li><strong>CORS</strong>：现代标准的跨域解决方案</li><li><strong>代理</strong>：开发环境的解决方案</li><li><strong>WebSocket</strong>：支持跨域</li><li><strong>postMessage</strong>：跨窗口通信</li></ol><p><strong>最佳实践</strong>：</p><ol><li>生产环境使用 CORS</li><li>开发环境使用代理</li><li>避免使用 JSONP</li><li>注意安全性</li></ol><h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源" aria-hidden="true">#</a> 参考资源</h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer">MDN - CORS</a></li><li><a href="https://web.dev/cross-origin-resource-sharing/" target="_blank" rel="noopener noreferrer">Web.dev - CORS</a></li><li><a href="https://enable-cors.org/server_nginx.html" target="_blank" rel="noopener noreferrer">Nginx CORS</a></li></ul>`,74)])])}const t=i(d,[["render",r],["__file","前端技术学习-跨域问题详解.html.vue"]]);export{t as default};
