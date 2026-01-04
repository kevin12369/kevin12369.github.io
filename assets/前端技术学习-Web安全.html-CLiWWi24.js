import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as s,o as a}from"./app-ry7nqkQQ.js";const d={};function r(t,e){return a(),n("div",null,[...e[0]||(e[0]=[s(`<h1 id="前端技术学习-web-安全-2025版" tabindex="-1"><a class="header-anchor" href="#前端技术学习-web-安全-2025版" aria-hidden="true">#</a> 前端技术学习 - Web 安全（2025版）</h1><h2 id="常见-web-安全威胁" tabindex="-1"><a class="header-anchor" href="#常见-web-安全威胁" aria-hidden="true">#</a> 常见 Web 安全威胁</h2><h3 id="_1-xss-跨站脚本攻击" tabindex="-1"><a class="header-anchor" href="#_1-xss-跨站脚本攻击" aria-hidden="true">#</a> 1. XSS（跨站脚本攻击）</h3><p><strong>原理</strong>：攻击者在网页中注入恶意脚本，当用户访问时，脚本在用户浏览器中执行。</p><p><strong>类型</strong>：</p><ul><li>存储型 XSS：恶意脚本存储在服务器</li><li>反射型 XSS：恶意脚本通过 URL 参数反射</li><li>DOM 型 XSS：恶意脚本通过 DOM 操作执行</li></ul><p><strong>示例</strong>：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 恶意代码 --&gt;
&lt;div&gt;
  &lt;script&gt;
    alert(document.cookie);
  &lt;/script&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>防护</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 对用户输入进行转义
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&amp;/g, &quot;&amp;amp;&quot;)
    .replace(/&lt;/g, &quot;&amp;lt;&quot;)
    .replace(/&gt;/g, &quot;&amp;gt;&quot;)
    .replace(/&quot;/g, &quot;&amp;quot;&quot;)
    .replace(/&#39;/g, &quot;&amp;#039;&quot;);
}

// 使用 CSP
// &lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-csrf-跨站请求伪造" tabindex="-1"><a class="header-anchor" href="#_2-csrf-跨站请求伪造" aria-hidden="true">#</a> 2. CSRF（跨站请求伪造）</h3><p><strong>原理</strong>：攻击者诱导用户在已登录的网站上执行非预期的操作。</p><p><strong>示例</strong>：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 恶意页面 --&gt;
&lt;img src=&quot;http://bank.com/transfer?to=attacker&amp;amount=1000&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>防护</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 1. 使用 CSRF Token
const csrfToken = document.querySelector(&#39;meta[name=&quot;csrf-token&quot;]&#39;).content;

fetch(&#39;http://bank.com/transfer&#39;, {
  method: &#39;POST&#39;,
  headers: {
    &#39;X-CSRF-Token&#39;: csrfToken
  },
  body: JSON.stringify({ to: &#39;user&#39;, amount: 100 })
});

// 2. 验证 Referer
app.post(&#39;/transfer&#39;, (req, res) =&gt; {
  const referer = req.headers.referer;
  if (!referer.startsWith(&#39;http://bank.com&#39;)) {
    return res.status(403).json({ error: &#39;Forbidden&#39; });
  }
  // 处理请求
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-sql-注入" tabindex="-1"><a class="header-anchor" href="#_3-sql-注入" aria-hidden="true">#</a> 3. SQL 注入</h3><p><strong>原理</strong>：攻击者在用户输入中注入 SQL 语句，破坏数据库查询。</p><p><strong>示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 不安全的查询
const query = \`SELECT * FROM users WHERE name = &#39;\${name}&#39;\`;
// name = &quot;admin&#39; OR &#39;1&#39;=&#39;1&quot;
// 最终查询：SELECT * FROM users WHERE name = &#39;admin&#39; OR &#39;1&#39;=&#39;1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>防护</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用参数化查询
const query = &#39;SELECT * FROM users WHERE name = ?&#39;;
db.query(query, [name], (err, results) =&gt; {
  // 处理结果
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-点击劫持" tabindex="-1"><a class="header-anchor" href="#_4-点击劫持" aria-hidden="true">#</a> 4. 点击劫持</h3><p><strong>原理</strong>：攻击者使用透明的 iframe 覆盖页面，诱导用户点击。</p><p><strong>防护</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用 X-Frame-Options 响应头
app.use((req, res, next) =&gt; {
  res.setHeader(&#39;X-Frame-Options&#39;, &#39;DENY&#39;);
  next();
});

// 使用 CSP frame-ancestors
// &lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;frame-ancestors &#39;none&#39;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全最佳实践" tabindex="-1"><a class="header-anchor" href="#安全最佳实践" aria-hidden="true">#</a> 安全最佳实践</h2><h3 id="_1-输入验证" tabindex="-1"><a class="header-anchor" href="#_1-输入验证" aria-hidden="true">#</a> 1. 输入验证</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 验证用户输入
function validateInput(input) {
  // 移除危险字符
  const sanitized = input.replace(/[&lt;&gt;]/g, &#39;&#39;);
  
  // 限制长度
  if (sanitized.length &gt; 100) {
    throw new Error(&#39;Input too long&#39;);
  }
  
  return sanitized;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-输出编码" tabindex="-1"><a class="header-anchor" href="#_2-输出编码" aria-hidden="true">#</a> 2. 输出编码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 对输出进行编码
function encodeOutput(output) {
  return output
    .replace(/&amp;/g, &quot;&amp;amp;&quot;)
    .replace(/&lt;/g, &quot;&amp;lt;&quot;)
    .replace(/&gt;/g, &quot;&amp;gt;&quot;)
    .replace(/&quot;/g, &quot;&amp;quot;&quot;)
    .replace(/&#39;/g, &quot;&amp;#039;&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-使用-https" tabindex="-1"><a class="header-anchor" href="#_3-使用-https" aria-hidden="true">#</a> 3. 使用 HTTPS</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 强制使用 HTTPS
if (location.protocol !== &#39;https:&#39;) {
  location.replace(\`https:\${location.href.substring(location.protocol.length)}\`);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-设置安全响应头" tabindex="-1"><a class="header-anchor" href="#_4-设置安全响应头" aria-hidden="true">#</a> 4. 设置安全响应头</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app.use((req, res, next) =&gt; {
  // 防止点击劫持
  res.setHeader(&#39;X-Frame-Options&#39;, &#39;DENY&#39;);
  
  // 防止 MIME 类型嗅探
  res.setHeader(&#39;X-Content-Type-Options&#39;, &#39;nosniff&#39;);
  
  // 启用 XSS 保护
  res.setHeader(&#39;X-XSS-Protection&#39;, &#39;1; mode=block&#39;);
  
  // 强制 HTTPS
  res.setHeader(&#39;Strict-Transport-Security&#39;, &#39;max-age=31536000; includeSubDomains&#39;);
  
  next();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-使用-csp" tabindex="-1"><a class="header-anchor" href="#_5-使用-csp" aria-hidden="true">#</a> 5. 使用 CSP</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;
  default-src &#39;self&#39;;
  script-src &#39;self&#39; &#39;unsafe-inline&#39; https://cdn.example.com;
  style-src &#39;self&#39; &#39;unsafe-inline&#39;;
  img-src &#39;self&#39; data: https:;
  connect-src &#39;self&#39; https://api.example.com;
  font-src &#39;self&#39; https://fonts.googleapis.com;
&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="content-security-policy" tabindex="-1"><a class="header-anchor" href="#content-security-policy" aria-hidden="true">#</a> Content Security Policy</h2><h3 id="csp-指令" tabindex="-1"><a class="header-anchor" href="#csp-指令" aria-hidden="true">#</a> CSP 指令</h3><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td><code>default-src</code></td><td>默认资源策略</td></tr><tr><td><code>script-src</code></td><td>脚本资源策略</td></tr><tr><td><code>style-src</code></td><td>样式资源策略</td></tr><tr><td><code>img-src</code></td><td>图片资源策略</td></tr><tr><td><code>connect-src</code></td><td>连接资源策略</td></tr><tr><td><code>font-src</code></td><td>字体资源策略</td></tr><tr><td><code>frame-src</code></td><td>框架资源策略</td></tr><tr><td><code>object-src</code></td><td>插件资源策略</td></tr></tbody></table><h3 id="csp-示例" tabindex="-1"><a class="header-anchor" href="#csp-示例" aria-hidden="true">#</a> CSP 示例</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 基础 CSP --&gt;
&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;&quot;&gt;

&lt;!-- 允许内联脚本 --&gt;
&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;script-src &#39;self&#39; &#39;unsafe-inline&#39;&quot;&gt;

&lt;!-- 允许外部脚本 --&gt;
&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;script-src &#39;self&#39; https://cdn.example.com&quot;&gt;

&lt;!-- 报告模式 --&gt;
&lt;meta http-equiv=&quot;Content-Security-Policy-Report-Only&quot; content=&quot;default-src &#39;self&#39;; report-uri /csp-violation-report-endpoint/&quot;&gt;

&lt;!-- 启用报告 --&gt;
&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;
  default-src &#39;self&#39;;
  report-uri /csp-violation-report-endpoint/
&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025-年安全趋势" tabindex="-1"><a class="header-anchor" href="#_2025-年安全趋势" aria-hidden="true">#</a> 2025 年安全趋势</h2><h3 id="_1-同源cookie" tabindex="-1"><a class="header-anchor" href="#_1-同源cookie" aria-hidden="true">#</a> 1. 同源cookie</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 设置 SameSite 属性
res.cookie(&#39;session&#39;, &#39;value&#39;, {
  httpOnly: true,
  secure: true,
  sameSite: &#39;strict&#39;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-子资源完整性-sri" tabindex="-1"><a class="header-anchor" href="#_2-子资源完整性-sri" aria-hidden="true">#</a> 2. 子资源完整性（SRI）</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 使用 SRI --&gt;
&lt;script src=&quot;https://cdn.example.com/script.js&quot;
        integrity=&quot;sha384-...&quot;
        crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-权限策略" tabindex="-1"><a class="header-anchor" href="#_3-权限策略" aria-hidden="true">#</a> 3. 权限策略</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;!-- 使用 Permissions-Policy --&gt;
&lt;meta http-equiv=&quot;Permissions-Policy&quot; content=&quot;geolocation=(self &#39;https://example.com&#39;), camera=()&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-安全框架" tabindex="-1"><a class="header-anchor" href="#_4-安全框架" aria-hidden="true">#</a> 4. 安全框架</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用 Helmet.js（Express）
const helmet = require(&#39;helmet&#39;);

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: [&quot;&#39;self&#39;&quot;],
    scriptSrc: [&quot;&#39;self&#39;&quot;, &quot;https://cdn.example.com&quot;],
    styleSrc: [&quot;&#39;self&#39;&quot;, &quot;&#39;unsafe-inline&#39;&quot;]
  }
}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全工具" tabindex="-1"><a class="header-anchor" href="#安全工具" aria-hidden="true">#</a> 安全工具</h2><h3 id="_1-eslint-安全插件" tabindex="-1"><a class="header-anchor" href="#_1-eslint-安全插件" aria-hidden="true">#</a> 1. ESLint 安全插件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// .eslintrc.js
module.exports = {
  plugins: [&#39;security&#39;],
  rules: {
    &#39;security/detect-eval-with-expression&#39;: &#39;error&#39;,
    &#39;security/detect-no-csrf-before-method-override&#39;: &#39;error&#39;
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-依赖检查" tabindex="-1"><a class="header-anchor" href="#_2-依赖检查" aria-hidden="true">#</a> 2. 依赖检查</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 检查依赖漏洞
npm audit

# 自动修复
npm audit fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-安全测试" tabindex="-1"><a class="header-anchor" href="#_3-安全测试" aria-hidden="true">#</a> 3. 安全测试</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用 OWASP ZAP
// 使用 Burp Suite
// 使用 SQLMap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Web 安全是前端开发中不可忽视的重要方面：</p><ol><li><strong>XSS 防护</strong>：对用户输入进行转义</li><li><strong>CSRF 防护</strong>：使用 CSRF Token</li><li><strong>SQL 注入防护</strong>：使用参数化查询</li><li><strong>HTTPS</strong>：使用 HTTPS 加密通信</li><li><strong>CSP</strong>：使用 内容安全策略</li></ol><p><strong>最佳实践</strong>：</p><ol><li>对所有用户输入进行验证和转义</li><li>使用参数化查询</li><li>设置安全响应头</li><li>使用 CSP</li><li>定期进行安全审计</li></ol><h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源" aria-hidden="true">#</a> 参考资源</h2><ul><li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer">OWASP Top 10</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Security" target="_blank" rel="noopener noreferrer">MDN - Web 安全</a></li><li><a href="https://www.w3.org/TR/CSP3/" target="_blank" rel="noopener noreferrer">CSP Level 3</a></li></ul>`,65)])])}const u=i(d,[["render",r],["__file","前端技术学习-Web安全.html.vue"]]);export{u as default};
