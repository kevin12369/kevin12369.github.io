---
icon: edit
date: 2025-01-02
category:
  - 前端技术
tag:
  - HTTP
  - CORS
  - 跨域
sticky: false
lastUpdated: true
footer: POST 请求发送两次的原因解析
---

# 前端技术学习 - POST请求发送两次的原因（2025版）

## 问题背景

在开发过程中，你可能会发现某些 POST 请求在浏览器中发送了两次：

```
OPTIONS /api/data
POST /api/data
```

这是一个非常经典的前端面试题，也是实际开发中经常遇到的问题。要理解这个问题，我们需要深入了解浏览器的同源策略和 CORS（跨域资源共享）机制。

## 同源策略

### 什么是同源策略？

同源策略（Same-Origin Policy）是浏览器最核心的安全策略之一，它限制了从一个源加载的文档或脚本如何与另一个源的资源进行交互。

**同源的定义**：如果两个 URL 的协议、域名和端口都相同，则它们同源。

| URL | 结果 | 原因 |
|-----|------|------|
| `http://example.com:80/page1` | 同源 | 相同的协议、域名、端口 |
| `http://example.com:80/page2` | 同源 | 只有路径不同 |
| `https://example.com:80/page1` | 不同源 | 协议不同（HTTP vs HTTPS） |
| `http://example.com:8080/page1` | 不同源 | 端口不同（80 vs 8080） |
| `http://other.com:80/page1` | 不同源 | 域名不同 |

### 同源策略的限制

同源策略主要限制三个方面：

1. **DOM 访问限制**：脚本不能访问跨源页面的 DOM
2. **Cookie 和本地存储限制**：不能访问跨源的 Cookie、LocalStorage 等
3. **网络请求限制**：XMLHttpRequest 和 Fetch API 默认不能跨域请求

## CORS（跨域资源共享）

### 什么是 CORS？

CORS（Cross-Origin Resource Sharing）是一种机制，允许在受控的条件下，不同源的网页能够请求和共享资源。它通过 HTTP 头部来告知浏览器哪些跨域请求是被允许的。

### CORS 的两种请求类型

#### 1. 简单请求（Simple Request）

不会触发预检请求的 CORS 请求称为简单请求。满足以下所有条件的请求才是简单请求：

**HTTP 方法限制**：
- GET
- HEAD
- POST

**HTTP 头部限制**：
只能使用以下标准字段：
- `Accept`
- `Accept-Language`
- `Content-Language`
- `Content-Type`（仅限三个值）
- `Last-Event-ID`
- `DPR`
- `Downlink`
- `Save-Data`
- `Viewport-Width`
- `Width`

**Content-Type 的限制**：
- `application/x-www-form-urlencoded`
- `multipart/form-data`
- `text/plain`

**示例**：
```javascript
// 简单请求示例
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'name=value'
});
```

#### 2. 预检请求（Preflight Request）

不满足简单请求条件的 CORS 请求会先发送一个预检请求（OPTIONS 方法），询问服务器是否允许实际的跨域请求。

**触发预检请求的情况**：
- 使用了 PUT、DELETE 等非简单请求方法
- 自定义了请求头（如 `X-Custom-Header`）
- Content-Type 不是上述三个值之一（如 `application/json`）

## 为什么会发送两次请求？

### 原因分析

当你的 POST 请求满足以下条件之一时，浏览器会自动发送预检请求：

1. **Content-Type 为 `application/json`**
```javascript
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  // 触发预检
  },
  body: JSON.stringify({ name: 'value' })
});
```

2. **使用自定义请求头**
```javascript
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token',  // 自定义头部
    'X-Custom-Header': 'custom'       // 自定义头部
  },
  body: JSON.stringify({ name: 'value' })
});
```

3. **使用非简单请求方法**
```javascript
fetch('http://api.example.com/data', {
  method: 'PUT',  // PUT 不是简单请求方法
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'value' })
});
```

### 两次请求的详细过程

```javascript
// 客户端代码
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'value' })
});
```

**第一次请求：OPTIONS 预检请求**

```http
OPTIONS /api/data HTTP/1.1
Host: api.example.com
Origin: http://example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

**服务器响应（允许跨域）**

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400
```

**第二次请求：实际的 POST 请求**

```http
POST /api/data HTTP/1.1
Host: api.example.com
Origin: http://example.com
Content-Type: application/json

{"name":"value"}
```

**服务器响应**

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com
Content-Type: application/json

{"success": true}
```

## 预检请求的缓存

### Access-Control-Max-Age

服务器可以通过 `Access-Control-Max-Age` 响应头来指定预检请求的缓存时间（单位：秒）。

```http
Access-Control-Max-Age: 86400  // 缓存 24 小时
```

在缓存有效期内，浏览器不会再次发送预检请求，直接发送实际请求。

### 缓存示例

```javascript
// 第一次请求：发送预检请求
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'value' })
});

// 第二次请求（24小时内）：不会发送预检请求
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'value2' })
});
```

## 如何避免预检请求？

### 1. 使用简单请求

```javascript
// 不触发预检
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'name=value'
});

// 或
fetch('http://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: 'name=value'
});
```

### 2. 同源部署

将前端和后端部署在同一域名下，避免跨域：

```
前端：http://example.com
后端：http://example.com/api
```

### 3. 使用代理（开发环境）

**Webpack Dev Server 代理配置**：

```javascript
// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};

// 使用
fetch('/api/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'value' })
});
```

**Vite 代理配置**：

```javascript
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
};
```

### 4. 服务端配置 CORS

如果必须发送预检请求，确保服务器正确配置 CORS 响应头。

**Node.js（Express）示例**：

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// 基本配置
app.use(cors());

// 或详细配置
app.use(cors({
  origin: 'http://example.com',  // 允许的源
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400  // 预检请求缓存时间
}));

app.post('/data', (req, res) => {
  res.json({ success: true });
});

app.listen(3000);
```

**Nginx 配置示例**：

```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        # 允许的源
        add_header Access-Control-Allow-Origin http://example.com;

        # 允许的方法
        add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, OPTIONS';

        # 允许的头部
        add_header Access-Control-Allow-Headers 'Content-Type, Authorization';

        # 允许携带凭证
        add_header Access-Control-Allow-Credentials true;

        # 预检请求缓存时间
        add_header Access-Control-Max-Age 86400;

        # 处理 OPTIONS 预检请求
        if ($request_method = 'OPTIONS') {
            return 204;
        }

        # 其他请求
        proxy_pass http://backend;
    }
}
```

## 携带凭证的请求

### 配置凭证

**客户端**：

```javascript
fetch('http://api.example.com/data', {
  method: 'POST',
  credentials: 'include',  // 包含 Cookie
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'value' })
});
```

**服务端**：

```javascript
app.use(cors({
  origin: 'http://example.com',  // 不能是 *
  credentials: true
}));
```

**注意**：当请求携带凭证时，`Access-Control-Allow-Origin` 不能设置为 `*`，必须指定具体的源。

## 常见问题

### 1. 预检请求失败

**错误信息**：
```
Access to XMLHttpRequest at 'http://api.example.com/data' from origin 'http://example.com' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

**解决方案**：确保服务器正确配置 CORS 响应头。

### 2. 预检请求缓存不生效

**原因**：
- 浏览器缓存被清除
- `Access-Control-Max-Age` 未设置或设置过小
- 请求参数发生变化

**解决方案**：合理设置 `Access-Control-Max-Age` 值。

### 3. 开发环境跨域问题

**解决方案**：使用 Webpack 或 Vite 的代理功能。

## 2025 年最佳实践

### 1. 优先使用同源部署

- 前端和后端部署在同一域名下
- 使用路径区分不同服务

### 2. 合理配置 CORS

- 明确指定允许的源（避免使用 `*`）
- 设置合理的预检请求缓存时间
- 只允许必要的请求方法和头部

### 3. 开发环境使用代理

- Webpack Dev Server 代理
- Vite 代理
- Nginx 反向代理

### 4. 生产环境使用 CDN

- 静态资源托管到 CDN
- API 使用同源或正确配置 CORS

## 总结

POST 请求发送两次的原因是触发了 CORS 预检请求机制：

1. **第一次请求**：OPTIONS 预检请求，询问服务器是否允许跨域
2. **第二次请求**：实际的 POST 请求，发送数据

**触发条件**：
- Content-Type 不是简单请求的三个值之一
- 使用自定义请求头
- 使用非简单请求方法（PUT、DELETE 等）

**解决方案**：
- 使用简单请求（避免预检）
- 同源部署（避免跨域）
- 开发环境使用代理
- 生产环境正确配置 CORS

理解 CORS 机制对于前端开发者来说非常重要，它不仅关系到跨域请求的实现，还关系到应用的安全性和性能。

## 参考资源

- [MDN - CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
- [MDN - 同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)
- [Fetch API - CORS](https://fetch.spec.whatwg.org/#cors-protocol)
- [HTTP 访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)