---
home: true
heroImage: /logo.svg
heroText: Kevin的技术博客
tagline: 一个在泥潭挣扎的工具人
heroAlt: Kevin的技术博客
features:
  - title: 📚 深度学习
    details: AI全栈开发、数据结构与算法、前端深度解析、游戏开发深度
  - title: 🛠️ 实战项目
    details: 游戏项目、物联网项目、前端项目、AI项目
  - title: 💡 面试准备
    details: 前端面试、算法刷题、系统设计、面试技巧
  - title: 📰 技术资讯
    details: AIGC资讯、行业报告、技术趋势、年度回顾
  - title: 📝 个人随笔
    details: 学习笔记、项目复盘、技术总结、生活随笔
  - title: 🏷️ 标签云
    details: 技术领域、内容类型、难度等级
---

## 🚀 技术栈

```bash
# 前端技术栈
$ npm install vue react typescript

# AI 技术栈
$ pip install langchain openai

# 游戏开发
$ godot --version
$ unity --version

# 开发工具
$ git init
$ docker build
```

## 📊 项目统计

| 指标 | 数量 |
|------|------|
| 📚 技术文章 | 88+ |
| 🛠️ 实战项目 | 5+ |
| 📝 学习笔记 | 20+ |
| ⚡ 代码行数 | 10W+ |

## 🌟 特色功能

### ✨ 赛博朋克风格
- 深色主题 + 霓虹发光效果
- 终端/代码风格设计
- 故障艺术（Glitch）动画
- 粒子背景和扫描线

### ⚡ 交互体验
- 12 种 CSS 动画效果
- 流畅的页面切换
- 智能搜索功能
- 代码块增强（复制、折叠、行号）

### 🎯 性能优化
- 首屏加载时间 < 2s
- 滚动 FPS 60+
- 响应式设计
- PWA 支持（可安装为应用）

## 📧 联系方式

- **GitHub**: [@kevin12369](https://github.com/kevin12369)
- **Email**: [491750329@qq.com](mailto:491750329@qq.com)

## 🔥 快速导航

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">

<div style="flex: 1; min-width: 200px; padding: 1.5rem; background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05)); border: 1px solid var(--cyber-cyan); border-radius: 12px; transition: all 0.3s; cursor: pointer;" onclick="window.location.href='/learning/'">
  <div style="font-size: 2rem; margin-bottom: 0.5rem;">📚</div>
  <div style="font-weight: 700; color: var(--cyber-cyan); margin-bottom: 0.5rem;">深度学习</div>
  <div style="color: var(--text-secondary); font-size: 0.9rem;">探索 AI 全栈、算法、前端深度内容</div>
</div>

<div style="flex: 1; min-width: 200px; padding: 1.5rem; background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(255, 0, 255, 0.05)); border: 1px solid var(--cyber-magenta); border-radius: 12px; transition: all 0.3s; cursor: pointer;" onclick="window.location.href='/projects/'">
  <div style="font-size: 2rem; margin-bottom: 0.5rem;">🛠️</div>
  <div style="font-weight: 700; color: var(--cyber-magenta); margin-bottom: 0.5rem;">实战项目</div>
  <div style="color: var(--text-secondary); font-size: 0.9rem;">查看游戏、物联网、AI 项目</div>
</div>

<div style="flex: 1; min-width: 200px; padding: 1.5rem; background: linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.05)); border: 1px solid var(--cyber-green); border-radius: 12px; transition: all 0.3s; cursor: pointer;" onclick="window.location.href='/interview/'">
  <div style="font-size: 2rem; margin-bottom: 0.5rem;">💡</div>
  <div style="font-weight: 700; color: var(--cyber-green); margin-bottom: 0.5rem;">面试准备</div>
  <div style="color: var(--text-secondary); font-size: 0.9rem;">前端、算法、系统设计面试题</div>
</div>

</div>

## 💻 代码片段示例

```typescript
// AI 全栈开发示例
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/models/chat/openai";

const llm = new ChatOpenAI({
  temperature: 0.7,
  streaming: true
});

const message = new HumanMessage("你好，我是 Kevin！");
const response = await llm.invoke([message]);
console.log(response.content);
```

## 🎮 游戏开发

```csharp
// Godot C# 示例
using Godot;

public partial class Player : CharacterBody2D
{
    [Export]
    public int Speed = 400;

    public override void _PhysicsProcess(double delta)
    {
        var velocity = Vector2.Zero;
        
        if (Input.IsActionPressed("ui_right"))
            velocity.x += 1;
        if (Input.IsActionPressed("ui_left"))
            velocity.x -= 1;
            
        Velocity = velocity * Speed;
        MoveAndSlide();
    }
}
```

## 📝 最新文章

- [AI增强型全栈开发者：2026年技术角色全景解析](/learning/ai-fullstack/01-AI增强型全栈开发者：2026年技术角色全景解析)
- [全栈开发的技术演进：从工具时代到智能体时代](/learning/ai-fullstack/02-全栈开发的技术演进：从工具时代到智能体时代)
- [打地鼠-Godot-CSharp完整教程](/projects/game/打地鼠-Godot-CSharp完整教程)
- [2025年大模型技术突破与趋势](/news/aigc/大语言模型/2025年大模型技术突破与趋势)

---

<div style="text-align: center; margin-top: 4rem; padding: 2rem; background: linear-gradient(90deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 255, 0.1)); border-radius: 12px; border: 1px solid var(--cyber-cyan);">

<div style="font-family: 'Fira Code', 'Courier New', monospace; font-size: 1.2rem; margin-bottom: 1rem; color: var(--cyber-cyan);">
  <span style="color: var(--cyber-green);">$</span> <span style="animation: typing 3s steps(40, end);">echo "欢迎来到 Kevin 的技术世界"</span><span style="animation: blink 1s infinite;">_</span>
</div>

<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">

[<span style="padding: 0.75rem 2rem; background: transparent; color: var(--cyber-cyan); border: 2px solid var(--cyber-cyan); border-radius: 8px; font-family: var(--font-mono); font-weight: 600; transition: all 0.3s; cursor: pointer;" onmouseover="this.style.background='var(--gradient-cyber)'; this.style.color='var(--bg-primary)'; this.style.boxShadow='0 0 20px rgba(0, 240, 255, 0.5)';" onmouseout="this.style.background='transparent'; this.style.color='var(--cyber-cyan)'; this.style.boxShadow='none';">开始阅读</span>](/learning/)

[<span style="padding: 0.75rem 2rem; background: transparent; color: var(--cyber-magenta); border: 2px solid var(--cyber-magenta); border-radius: 8px; font-family: var(--font-mono); font-weight: 600; transition: all 0.3s; cursor: pointer;" onmouseover="this.style.background='var(--gradient-fire)'; this.style.color='var(--bg-primary)'; this.style.boxShadow='0 0 20px rgba(255, 0, 255, 0.5)';" onmouseout="this.style.background='transparent'; this.style.color='var(--cyber-magenta)'; this.style.boxShadow='none';">查看项目</span>](/projects/)

[<span style="padding: 0.75rem 2rem; background: transparent; color: var(--cyber-green); border: 2px solid var(--cyber-green); border-radius: 8px; font-family: var(--font-mono); font-weight: 600; transition: all 0.3s; cursor: pointer;" onmouseover="this.style.background='var(--gradient-neon)'; this.style.color='var(--bg-primary)'; this.style.boxShadow='0 0 20px rgba(0, 255, 0, 0.5)';" onmouseout="this.style.background='transparent'; this.style.color='var(--cyber-green)'; this.style.boxShadow='none';">关于我</span>](/intro.html)

</div>

</div>

<style>
/* 打字机动画 */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  0%, 50% { opacity: 1 }
  51%, 100% { opacity: 0 }
}
</style>