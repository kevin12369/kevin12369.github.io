---
title: '前端技术学习 - Web 安全（2025版）'
description: '**原理**：攻击者在网页中注入恶意脚本，当用户访问时，脚本在用户浏览器中执行。'
pubDate: 2025-01-02
updatedDate: 2025-01-02
category: '深度学习'
tags: []
draft: false
---


# 前端技术学习 - Web 安全（2025版）

## 常见 Web 安全威胁

### 1. XSS（跨站脚本攻击）

**原理**：攻击者在网页中注入恶意脚本，当用户访问时，脚本在用户浏览器中执行。

**类型**：
- 存储型 XSS：恶意脚本存储在服务器
- 反射型 XSS：恶意脚本通过 URL 参数反射
- DOM 型 XSS：恶意脚本通过 DOM 操作执行

**示例**：
```html
<!-- 恶意代码 -->
<div>
  <script>
    alert(document.cookie);
  </script>
</div>
```

**防护**：
```javascript
// 对用户输入进行转义
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 使用 CSP
// <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

### 2. CSRF（跨站请求伪造）

**原理**：攻击者诱导用户在已登录的网站上执行非预期的操作。

**示例**：
```html
<!-- 恶意页面 -->
<img src="http://bank.com/transfer?to=attacker&amount=1000">
```

**防护**：
```javascript
// 1. 使用 CSRF Token
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

fetch('http://bank.com/transfer', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': csrfToken
  },
  body: JSON.stringify({ to: 'user', amount: 100 })
});

// 2. 验证 Referer
app.post('/transfer', (req, res) => {
  const referer = req.headers.referer;
  if (!referer.startsWith('http://bank.com')) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  // 处理请求
});
```

### 3. SQL 注入

**原理**：攻击者在用户输入中注入 SQL 语句，破坏数据库查询。

**示例**：
```javascript
// 不安全的查询
const query = `SELECT * FROM users WHERE name = '${name}'`;
// name = "admin' OR '1'='1"
// 最终查询：SELECT * FROM users WHERE name = 'admin' OR '1'='1'
```

**防护**：
```javascript
// 使用参数化查询
const query = 'SELECT * FROM users WHERE name = ?';
db.query(query, [name], (err, results) => {
  // 处理结果
});
```

### 4. 点击劫持

**原理**：攻击者使用透明的 iframe 覆盖页面，诱导用户点击。

**防护**：
```javascript
// 使用 X-Frame-Options 响应头
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

// 使用 CSP frame-ancestors
// <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none'">
```

## 安全最佳实践

### 1. 输入验证

```javascript
// 验证用户输入
function validateInput(input) {
  // 移除危险字符
  const sanitized = input.replace(/[<>]/g, '');
  
  // 限制长度
  if (sanitized.length > 100) {
    throw new Error('Input too long');
  }
  
  return sanitized;
}
```

### 2. 输出编码

```javascript
// 对输出进行编码
function encodeOutput(output) {
  return output
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

### 3. 使用 HTTPS

```javascript
// 强制使用 HTTPS
if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

### 4. 设置安全响应头

```javascript
app.use((req, res, next) => {
  // 防止点击劫持
  res.setHeader('X-Frame-Options', 'DENY');
  
  // 防止 MIME 类型嗅探
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // 启用 XSS 保护
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // 强制 HTTPS
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
  next();
});
```

### 5. 使用 CSP

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  font-src 'self' https://fonts.googleapis.com;
">
```

## Content Security Policy

### CSP 指令

| 指令 | 说明 |
|------|------|
| `default-src` | 默认资源策略 |
| `script-src` | 脚本资源策略 |
| `style-src` | 样式资源策略 |
| `img-src` | 图片资源策略 |
| `connect-src` | 连接资源策略 |
| `font-src` | 字体资源策略 |
| `frame-src` | 框架资源策略 |
| `object-src` | 插件资源策略 |

### CSP 示例

```html
<!-- 基础 CSP -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">

<!-- 允许内联脚本 -->
<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline'">

<!-- 允许外部脚本 -->
<meta http-equiv="Content-Security-Policy" content="script-src 'self' https://cdn.example.com">

<!-- 报告模式 -->
<meta http-equiv="Content-Security-Policy-Report-Only" content="default-src 'self'; report-uri /csp-violation-report-endpoint/">

<!-- 启用报告 -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  report-uri /csp-violation-report-endpoint/
">
```

## 2025 年安全趋势

### 1. 同源cookie

```javascript
// 设置 SameSite 属性
res.cookie('session', 'value', {
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
});
```

### 2. 子资源完整性（SRI）

```html
<!-- 使用 SRI -->
<script src="https://cdn.example.com/script.js"
        integrity="sha384-..."
        crossorigin="anonymous"></script>
```

### 3. 权限策略

```html
<!-- 使用 Permissions-Policy -->
<meta http-equiv="Permissions-Policy" content="geolocation=(self 'https://example.com'), camera=()">
```

### 4. 安全框架

```javascript
// 使用 Helmet.js（Express）
const helmet = require('helmet');

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://cdn.example.com"],
    styleSrc: ["'self'", "'unsafe-inline'"]
  }
}));
```

## 安全工具

### 1. ESLint 安全插件

```javascript
// .eslintrc.js
module.exports = {
  plugins: ['security'],
  rules: {
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error'
  }
};
```

### 2. 依赖检查

```bash
# 检查依赖漏洞
npm audit

# 自动修复
npm audit fix
```

### 3. 安全测试

```javascript
// 使用 OWASP ZAP
// 使用 Burp Suite
// 使用 SQLMap
```

## 总结

Web 安全是前端开发中不可忽视的重要方面：

1. **XSS 防护**：对用户输入进行转义
2. **CSRF 防护**：使用 CSRF Token
3. **SQL 注入防护**：使用参数化查询
4. **HTTPS**：使用 HTTPS 加密通信
5. **CSP**：使用 内容安全策略

**最佳实践**：
1. 对所有用户输入进行验证和转义
2. 使用参数化查询
3. 设置安全响应头
4. 使用 CSP
5. 定期进行安全审计

## 参考资源

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN - Web 安全](https://developer.mozilla.org/zh-CN/docs/Web/Security)
- [CSP Level 3](https://www.w3.org/TR/CSP3/)