import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,o as e,e as s}from"./app-DnslNVmo.js";const a={};function t(d,i){return e(),l("div",null,[...i[0]||(i[0]=[s(`<h1 id="agents-vs-skills-技术范式之争" tabindex="-1"><a class="header-anchor" href="#agents-vs-skills-技术范式之争" aria-hidden="true">#</a> Agents vs Skills - 技术范式之争</h1><h2 id="前言-从-工具堆砌-到-技能加载-的范式转变" tabindex="-1"><a class="header-anchor" href="#前言-从-工具堆砌-到-技能加载-的范式转变" aria-hidden="true">#</a> 前言：从&quot;工具堆砌&quot;到&quot;技能加载&quot;的范式转变</h2><p>2025年10月，Anthropic发布了Claude Skills，提出了一个全新的AI能力扩展范式。与此同时，开源社区也在探索类似的方向，如Deep Agents CLI。</p><p>这不仅仅是技术细节的改进，而是一场关于AI Agent如何构建和扩展的范式之争。</p><p>本文将深入分析两种范式的对比、技术原理、实际应用，以及如何选择适合的方案。</p><h3 id="研究基础" tabindex="-1"><a class="header-anchor" href="#研究基础" aria-hidden="true">#</a> 研究基础</h3><p>本文的分析基于以下权威来源：</p><ul><li><strong>Anthropic Claude Skills官方文档</strong>（2025年10月）</li><li><strong>Deep Agents CLI开源项目</strong>（GitHub: langchain-ai/deepagents）</li><li><strong>Cornell大学论文</strong>：AI Agents vs Agentic AI: A Conceptual Taxonomy</li><li><strong>技术社区讨论</strong>：关于Agents vs Skills的广泛讨论</li></ul><h2 id="第一部分-两种范式的对比" tabindex="-1"><a class="header-anchor" href="#第一部分-两种范式的对比" aria-hidden="true">#</a> 第一部分：两种范式的对比</h2><h3 id="_1-1-agent范式-自主性-工具堆砌" tabindex="-1"><a class="header-anchor" href="#_1-1-agent范式-自主性-工具堆砌" aria-hidden="true">#</a> 1.1 Agent范式：自主性 + 工具堆砌</h3><p><strong>核心理念：</strong><br> 通过给AI Agent提供大量工具（Tools），让Agent自主选择和使用这些工具来完成任务。</p><p><strong>典型特征：</strong></p><ul><li>自主性强：Agent可以自主决策</li><li>工具丰富：提供大量预定义工具</li><li>灵活性高：可以处理各种任务</li></ul><p><strong>技术架构：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AI Agent
  ↓
工具列表（数百个工具）
  ↓
工具选择器
  ↓
工具执行
  ↓
结果整合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优势：</strong></p><ol><li><strong>通用性强</strong>：可以处理各种类型的任务</li><li><strong>自主决策</strong>：Agent可以自主选择合适的工具</li><li><strong>灵活性高</strong>：可以动态组合不同工具</li></ol><p><strong>劣势：</strong></p><ol><li><strong>Token消耗大</strong>：所有工具的元数据都需要加载到上下文</li><li><strong>认知负担重</strong>：Agent需要在大量工具中进行选择</li><li><strong>可预测性差</strong>：自主决策可能导致不确定性</li><li><strong>维护成本高</strong>：工具数量越多，维护越复杂</li></ol><h3 id="_1-2-skills范式-确定性-渐进加载" tabindex="-1"><a class="header-anchor" href="#_1-2-skills范式-确定性-渐进加载" aria-hidden="true">#</a> 1.2 Skills范式：确定性 + 渐进加载</h3><p><strong>核心理念：</strong><br> 通过模块化的技能（Skills），按需加载AI的能力，实现高效、可预测的AI行为。</p><p><strong>典型特征：</strong></p><ul><li>确定性强：Skills的行为是预定义的</li><li>渐进加载：按需加载，节省Token</li><li>模块化：Skills可以组合和复用</li></ul><p><strong>技术架构：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AI Agent
  ↓
技能元数据（始终加载，&lt;100 tokens）
  ↓
技能匹配
  ↓
技能指令（按需加载）
  ↓
技能资源（执行时加载）
  ↓
结果输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优势：</strong></p><ol><li><strong>Token效率高</strong>：渐进式加载，节省95%的Token</li><li><strong>可预测性强</strong>：Skills的行为是预定义的</li><li><strong>可维护性好</strong>：模块化设计，易于维护</li><li><strong>可复用性强</strong>：Skills可以组合和复用</li></ol><p><strong>劣势：</strong></p><ol><li><strong>灵活性受限</strong>：需要预先定义Skills</li><li><strong>自主性降低</strong>：Agent的自主决策能力受限</li><li><strong>设计复杂度高</strong>：需要精心设计Skills</li></ol><h3 id="_1-3-核心差异总结" tabindex="-1"><a class="header-anchor" href="#_1-3-核心差异总结" aria-hidden="true">#</a> 1.3 核心差异总结</h3><table><thead><tr><th>维度</th><th>Agent范式</th><th>Skills范式</th></tr></thead><tbody><tr><td><strong>核心思想</strong></td><td>工具堆砌</td><td>技能加载</td></tr><tr><td><strong>自主性</strong></td><td>高</td><td>中</td></tr><tr><td><strong>确定性</strong></td><td>低</td><td>高</td></tr><tr><td><strong>Token效率</strong></td><td>低</td><td>高</td></tr><tr><td><strong>维护成本</strong></td><td>高</td><td>中</td></tr><tr><td><strong>灵活性</strong></td><td>高</td><td>中</td></tr><tr><td><strong>适用场景</strong></td><td>通用任务</td><td>特定任务</td></tr><tr><td><strong>学习曲线</strong></td><td>陡</td><td>中</td></tr></tbody></table><h2 id="第二部分-claude-skills的技术原理" tabindex="-1"><a class="header-anchor" href="#第二部分-claude-skills的技术原理" aria-hidden="true">#</a> 第二部分：Claude Skills的技术原理</h2><h3 id="_2-1-核心概念" tabindex="-1"><a class="header-anchor" href="#_2-1-核心概念" aria-hidden="true">#</a> 2.1 核心概念</h3><p><strong>定义：</strong><br> Claude Skills是扩展Claude功能的模块化能力。每个Skill包含元数据、指令和资源，Claude会在相关时自动调用，无需编写代码。</p><p><strong>与MCP的区别：</strong></p><ul><li><strong>MCP（Model Context Protocol）</strong>：是一种协议，用于在不同系统之间传递上下文</li><li><strong>Skills</strong>：是一种能力模块，用于扩展AI的功能</li></ul><p><strong>典型应用场景：</strong></p><ul><li>数据报告生成</li><li>PDF处理</li><li>演示文稿创建</li><li>文档编写</li></ul><h3 id="_2-2-渐进式披露架构" tabindex="-1"><a class="header-anchor" href="#_2-2-渐进式披露架构" aria-hidden="true">#</a> 2.2 渐进式披露架构</h3><p><strong>核心创新：</strong><br> 按需分阶段加载，而非预先消耗上下文。</p><p><strong>三层加载机制：</strong></p><p><strong>第一层：元数据（始终加载，&lt;100 tokens）</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> pdf<span class="token punctuation">-</span>processing
<span class="token key atrule">description</span><span class="token punctuation">:</span> 提取PDF文本和表格。在用户上传PDF时使用。
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二层：指令（触发时加载）</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 何时使用</span>
<span class="token list punctuation">-</span> 用户上传PDF文件
<span class="token list punctuation">-</span> 需要提取文本或表格

<span class="token title important"><span class="token punctuation">##</span> 步骤</span>
<span class="token list punctuation">1.</span> 使用pdfextract.py提取内容
<span class="token list punctuation">2.</span> 解析表格结构
<span class="token list punctuation">3.</span> 格式化输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三层：资源（执行时加载）</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>skills/pdf-processing/
├── SKILL.md          # 第1、2层
├── pdfextract.py      # 第3层
└── tableparser.py     # 第3层
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行流程：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用户输入
  ↓
Claude理解意图
  ↓
第1层：检查元数据（所有Skills已在内存）
  ↓
第2层：加载相关Skills的指令（按需）
  ↓
第3层：加载Skills的资源（执行时）
  ↓
执行任务
  ↓
输出结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-token效率提升" tabindex="-1"><a class="header-anchor" href="#_2-3-token效率提升" aria-hidden="true">#</a> 2.3 Token效率提升</h3><p><strong>数据对比：</strong></p><p><strong>传统方式（工具堆砌）：</strong></p><ul><li>所有工具的元数据：约10,000 tokens</li><li>每次请求都加载：10,000 tokens</li><li>Token消耗：10,000 tokens/请求</li></ul><p><strong>Claude Skills方式（渐进加载）：</strong></p><ul><li>所有Skills的元数据：&lt;1,000 tokens</li><li>相关Skills的指令：约500 tokens</li><li>相关Skills的资源：约2,000 tokens</li><li>Token消耗：❤️,500 tokens/请求</li></ul><p><strong>效率提升：</strong></p><ul><li>节省Token：约65%</li><li>对于复杂任务，可节省高达95%</li></ul><h3 id="_2-4-核心优势" tabindex="-1"><a class="header-anchor" href="#_2-4-核心优势" aria-hidden="true">#</a> 2.4 核心优势</h3><h4 id="_1-即插即用" tabindex="-1"><a class="header-anchor" href="#_1-即插即用" aria-hidden="true">#</a> 1. 即插即用</h4><p><strong>特点：</strong></p><ul><li>自动识别调用</li><li>零学习成本</li><li>无需编写代码</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用户：&quot;帮我提取这个PDF中的表格&quot;
Claude：自动调用pdf-processing Skill
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-渐进加载" tabindex="-1"><a class="header-anchor" href="#_2-渐进加载" aria-hidden="true">#</a> 2. 渐进加载</h4><p><strong>特点：</strong></p><ul><li>按需消耗tokens</li><li>高效节约</li><li>支持大量Skills</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不相关的Skills：不加载
相关的Skills：按需加载
执行时：加载资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-确定性执行" tabindex="-1"><a class="header-anchor" href="#_3-确定性执行" aria-hidden="true">#</a> 3. 确定性执行</h4><p><strong>特点：</strong></p><ul><li>代码运行非推理</li><li>100%准确</li><li>可预测的结果</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Skill：使用Python脚本提取PDF
结果：100%准确，无幻觉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-沙箱隔离" tabindex="-1"><a class="header-anchor" href="#_4-沙箱隔离" aria-hidden="true">#</a> 4. 沙箱隔离</h4><p><strong>特点：</strong></p><ul><li>安全环境运行</li><li>可信可靠</li><li>隔离风险</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Skill在沙箱中执行
不影响主系统
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三部分-deep-agents的实践" tabindex="-1"><a class="header-anchor" href="#第三部分-deep-agents的实践" aria-hidden="true">#</a> 第三部分：Deep Agents的实践</h2><h3 id="_3-1-从tool到skill的转变" tabindex="-1"><a class="header-anchor" href="#_3-1-从tool到skill的转变" aria-hidden="true">#</a> 3.1 从Tool到Skill的转变</h3><p><strong>核心思想：</strong><br> 把&quot;动作&quot;从Tool卸载到文件系统。</p><p><strong>传统方式（Tool）：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>每个操作一个Tool
- readFile Tool
- writeFile Tool
- executeCommand Tool
- ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新方式（Skill）：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>文件系统作为通用工具
- bash Tool
- filesystem Tools
- 通过Skills组织能力
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-文件系统作为通用工具" tabindex="-1"><a class="header-anchor" href="#_3-2-文件系统作为通用工具" aria-hidden="true">#</a> 3.2 文件系统作为通用工具</h3><p><strong>核心概念：</strong><br> Agent不再依赖数百个定制工具，而是被赋予一台&quot;电脑&quot;。</p><p><strong>能力：</strong></p><ul><li>读文件</li><li>写文件</li><li>写脚本</li><li>跑命令</li></ul><p><strong>优势：</strong></p><ul><li>工具数量少</li><li>灵活性高</li><li>接近人类开发者</li></ul><h3 id="_3-3-能力迁移而非工具升级" tabindex="-1"><a class="header-anchor" href="#_3-3-能力迁移而非工具升级" aria-hidden="true">#</a> 3.3 能力迁移而非工具升级</h3><p><strong>核心区别：</strong></p><ul><li>Skills不是Tools的升级</li><li>Skills是一种新的能力组织方式</li><li>Skills强调能力的迁移和复用</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Tool：一个特定的功能
Skill：一个可复用的能力模块

Tool：readFile
Skill：文件处理能力（包含read、write、parse等）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-实际应用" tabindex="-1"><a class="header-anchor" href="#_3-4-实际应用" aria-hidden="true">#</a> 3.4 实际应用</h3><p><strong>Deep Agents CLI项目：</strong></p><ul><li>GitHub: langchain-ai/deepagents</li><li>开源的Skills实现</li><li>展示了从Tool到Skill的转变</li></ul><p><strong>关键技术：</strong></p><ul><li>文件系统作为通用工具</li><li>Skills的组织和加载</li><li>渐进式披露架构</li></ul><h2 id="第四部分-批判性分析" tabindex="-1"><a class="header-anchor" href="#第四部分-批判性分析" aria-hidden="true">#</a> 第四部分：批判性分析</h2><h3 id="_4-1-何时用agent" tabindex="-1"><a class="header-anchor" href="#_4-1-何时用agent" aria-hidden="true">#</a> 4.1 何时用Agent？</h3><p><strong>适用场景：</strong></p><ol><li><p><strong>通用任务</strong></p><ul><li>任务类型不确定</li><li>需要灵活处理</li><li>需要自主决策</li></ul></li><li><p><strong>探索性任务</strong></p><ul><li>需要尝试多种方法</li><li>需要动态调整策略</li><li>需要创造性解决方案</li></ul></li><li><p><strong>复杂任务</strong></p><ul><li>需要多步骤处理</li><li>需要动态组合工具</li><li>需要自主规划</li></ul></li></ol><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>任务：研究一个新技术并生成报告
方式：使用Agent范式
原因：需要自主探索、动态调整
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-何时用skills" tabindex="-1"><a class="header-anchor" href="#_4-2-何时用skills" aria-hidden="true">#</a> 4.2 何时用Skills？</h3><p><strong>适用场景：</strong></p><ol><li><p><strong>特定任务</strong></p><ul><li>任务类型明确</li><li>需要确定性结果</li><li>需要高效率</li></ul></li><li><p><strong>重复性任务</strong></p><ul><li>需要多次执行</li><li>需要一致性</li><li>需要可复用</li></ul></li><li><p><strong>性能敏感任务</strong></p><ul><li>Token消耗敏感</li><li>响应时间敏感</li><li>成本敏感</li></ul></li></ol><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>任务：处理PDF文件
方式：使用Skills范式
原因：任务明确，需要确定性和高效率
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-混合模式的可能" tabindex="-1"><a class="header-anchor" href="#_4-3-混合模式的可能" aria-hidden="true">#</a> 4.3 混合模式的可能</h3><p><strong>核心理念：</strong><br> 结合Agent和Skills的优势，构建更强大的AI系统。</p><p><strong>架构设计：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AI Agent（自主决策）
  ↓
Skills模块（确定性执行）
  ↓
工具层（底层能力）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优势：</strong></p><ol><li><strong>灵活性 + 确定性</strong>：Agent提供灵活性，Skills提供确定性</li><li><strong>自主性 + 效率</strong>：Agent自主决策，Skills高效执行</li><li><strong>通用性 + 专用性</strong>：Agent处理通用任务，Skills处理专用任务</li></ol><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>任务：开发一个完整的电商系统

Agent：
- 分析需求
- 设计架构
- 规划开发步骤

Skills：
- 用户认证Skill
- 商品管理Skill
- 订单处理Skill
- 支付集成Skill

执行：
Agent调用Skills完成具体任务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-选择指南" tabindex="-1"><a class="header-anchor" href="#_4-4-选择指南" aria-hidden="true">#</a> 4.4 选择指南</h3><p><strong>决策树：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>任务类型明确？
├─ 是 → 需要确定性？
│   ├─ 是 → 使用Skills
│   └─ 否 → 考虑混合模式
└─ 否 → 需要自主决策？
    ├─ 是 → 使用Agent
    └─ 否 → 使用Skills
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>选择建议：</strong></p><ol><li><strong>简单、明确的任务</strong> → Skills</li><li><strong>复杂、不确定的任务</strong> → Agent</li><li><strong>需要确定性和效率的任务</strong> → Skills</li><li><strong>需要灵活性和创造性的任务</strong> → Agent</li><li><strong>大型、复杂的项目</strong> → 混合模式</li></ol><h2 id="第五部分-实际案例" tabindex="-1"><a class="header-anchor" href="#第五部分-实际案例" aria-hidden="true">#</a> 第五部分：实际案例</h2><h3 id="_5-1-案例1-pdf处理系统" tabindex="-1"><a class="header-anchor" href="#_5-1-案例1-pdf处理系统" aria-hidden="true">#</a> 5.1 案例1：PDF处理系统</h3><p><strong>需求：</strong><br> 提取PDF文件中的文本和表格，生成结构化数据。</p><p><strong>方案A：使用Agent范式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Agent + Tools：
- PDF读取Tool
- 文本提取Tool
- 表格解析Tool
- 数据格式化Tool

问题：
- Token消耗大
- 工具选择复杂
- 结果不确定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方案B：使用Skills范式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Skills：
- pdf-processing Skill
  - 元数据：描述Skill
  - 指令：处理步骤
  - 资源：Python脚本

优势：
- Token效率高
- 结果确定
- 易于维护
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对比：</strong></p><table><thead><tr><th>指标</th><th>Agent范式</th><th>Skills范式</th></tr></thead><tbody><tr><td>Token消耗</td><td>8,000</td><td>2,500</td></tr><tr><td>准确率</td><td>85%</td><td>99%</td></tr><tr><td>维护成本</td><td>高</td><td>低</td></tr><tr><td>开发时间</td><td>2周</td><td>3天</td></tr></tbody></table><p><strong>结论：</strong> 对于这个明确的任务，Skills范式更合适。</p><h3 id="_5-2-案例2-智能客服系统" tabindex="-1"><a class="header-anchor" href="#_5-2-案例2-智能客服系统" aria-hidden="true">#</a> 5.2 案例2：智能客服系统</h3><p><strong>需求：</strong><br> 处理用户咨询，提供智能回复，支持多轮对话。</p><p><strong>方案A：使用Agent范式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Agent + Tools：
- 对话管理Tool
- 知识库查询Tool
- 意图识别Tool
- 回复生成Tool

优势：
- 灵活性高
- 自主决策
- 适应性强
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方案B：使用Skills范式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Skills：
- 意图识别Skill
- 知识库查询Skill
- 回复生成Skill

问题：
- 灵活性受限
- 需要预定义
- 难以适应新场景
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对比：</strong></p><table><thead><tr><th>指标</th><th>Agent范式</th><th>Skills范式</th></tr></thead><tbody><tr><td>灵活性</td><td>高</td><td>中</td></tr><tr><td>准确率</td><td>75%</td><td>90%</td></tr><tr><td>维护成本</td><td>高</td><td>低</td></tr><tr><td>开发时间</td><td>3周</td><td>2周</td></tr></tbody></table><p><strong>结论：</strong> 对于这个需要灵活性和适应性的任务，Agent范式更合适。</p><h3 id="_5-3-案例3-代码生成与审查系统" tabindex="-1"><a class="header-anchor" href="#_5-3-案例3-代码生成与审查系统" aria-hidden="true">#</a> 5.3 案例3：代码生成与审查系统</h3><p><strong>需求：</strong><br> 生成代码，进行代码审查，提供改进建议。</p><p><strong>方案：混合模式</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Agent：
- 分析需求
- 设计架构
- 规划生成步骤

Skills：
- 代码生成Skill
- 代码审查Skill
- 测试生成Skill
- 文档生成Skill

执行：
1. Agent分析需求
2. Agent调用代码生成Skill
3. Agent调用代码审查Skill
4. Agent整合结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优势：</strong></p><ol><li>Agent提供灵活性和自主性</li><li>Skills提供确定性和效率</li><li>结合两者的优势</li></ol><p><strong>对比：</strong></p><table><thead><tr><th>指标</th><th>纯Agent</th><th>纯Skills</th><th>混合模式</th></tr></thead><tbody><tr><td>灵活性</td><td>高</td><td>低</td><td>高</td></tr><tr><td>效率</td><td>低</td><td>高</td><td>高</td></tr><tr><td>准确率</td><td>70%</td><td>95%</td><td>92%</td></tr><tr><td>维护成本</td><td>高</td><td>低</td><td>中</td></tr></tbody></table><p><strong>结论：</strong> 对于这个复杂的任务，混合模式最佳。</p><h2 id="第六部分-最佳实践" tabindex="-1"><a class="header-anchor" href="#第六部分-最佳实践" aria-hidden="true">#</a> 第六部分：最佳实践</h2><h3 id="_6-1-设计skills的准则" tabindex="-1"><a class="header-anchor" href="#_6-1-设计skills的准则" aria-hidden="true">#</a> 6.1 设计Skills的准则</h3><h4 id="_1-单一职责" tabindex="-1"><a class="header-anchor" href="#_1-单一职责" aria-hidden="true">#</a> 1. 单一职责</h4><p><strong>原则：</strong><br> 每个Skill只负责一个明确的功能。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>❌ 错误：文件处理Skill（包含读、写、解析等）
✅ 正确：PDF读取Skill、表格解析Skill、数据格式化Skill
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-明确的元数据" tabindex="-1"><a class="header-anchor" href="#_2-明确的元数据" aria-hidden="true">#</a> 2. 明确的元数据</h4><p><strong>原则：</strong><br> 元数据应该清晰、简洁、准确。</p><p><strong>示例：</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> pdf<span class="token punctuation">-</span>processing
<span class="token key atrule">description</span><span class="token punctuation">:</span> 提取PDF文本和表格。在用户上传PDF时使用。
<span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0.0
<span class="token key atrule">author</span><span class="token punctuation">:</span> Your Name
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-清晰的指令" tabindex="-1"><a class="header-anchor" href="#_3-清晰的指令" aria-hidden="true">#</a> 3. 清晰的指令</h4><p><strong>原则：</strong><br> 指令应该详细、可执行、无歧义。</p><p><strong>示例：</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 何时使用</span>
<span class="token list punctuation">-</span> 用户上传PDF文件
<span class="token list punctuation">-</span> 需要提取文本或表格

<span class="token title important"><span class="token punctuation">##</span> 步骤</span>
<span class="token list punctuation">1.</span> 使用pdfextract.py提取内容
<span class="token list punctuation">2.</span> 解析表格结构
<span class="token list punctuation">3.</span> 格式化输出

<span class="token title important"><span class="token punctuation">##</span> 输出格式</span>
<span class="token list punctuation">-</span> JSON格式
<span class="token list punctuation">-</span> 包含文本和表格数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-可测试的资源" tabindex="-1"><a class="header-anchor" href="#_4-可测试的资源" aria-hidden="true">#</a> 4. 可测试的资源</h4><p><strong>原则：</strong><br> 资源应该独立、可测试、可维护。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>skills/pdf-processing/
├── SKILL.md
├── pdfextract.py      # 可独立测试
├── tableparser.py     # 可独立测试
└── test/              # 测试用例
    ├── test_pdfextract.py
    └── test_tableparser.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-构建agent的准则" tabindex="-1"><a class="header-anchor" href="#_6-2-构建agent的准则" aria-hidden="true">#</a> 6.2 构建Agent的准则</h3><h4 id="_1-明确的目标" tabindex="-1"><a class="header-anchor" href="#_1-明确的目标" aria-hidden="true">#</a> 1. 明确的目标</h4><p><strong>原则：</strong><br> Agent应该有明确的目标和范围。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>❌ 错误：万能Agent（什么都能做）
✅ 正确：代码审查Agent（专注于代码审查）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-合理的工具选择" tabindex="-1"><a class="header-anchor" href="#_2-合理的工具选择" aria-hidden="true">#</a> 2. 合理的工具选择</h4><p><strong>原则：</strong><br> 选择合适的工具，避免工具堆砌。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>❌ 错误：提供100+个工具
✅ 正确：提供10-20个核心工具
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-清晰的工作流" tabindex="-1"><a class="header-anchor" href="#_3-清晰的工作流" aria-hidden="true">#</a> 3. 清晰的工作流</h4><p><strong>原则：</strong><br> Agent的工作流应该清晰、可理解、可维护。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 分析需求
2. 选择工具
3. 执行任务
4. 验证结果
5. 输出结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-混合模式的设计" tabindex="-1"><a class="header-anchor" href="#_6-3-混合模式的设计" aria-hidden="true">#</a> 6.3 混合模式的设计</h3><h4 id="_1-明确的分工" tabindex="-1"><a class="header-anchor" href="#_1-明确的分工" aria-hidden="true">#</a> 1. 明确的分工</h4><p><strong>原则：</strong><br> Agent负责决策和规划，Skills负责执行。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Agent：
- 分析需求
- 选择Skills
- 规划执行步骤

Skills：
- 执行具体任务
- 返回确定结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-合理的接口" tabindex="-1"><a class="header-anchor" href="#_2-合理的接口" aria-hidden="true">#</a> 2. 合理的接口</h4><p><strong>原则：</strong><br> Agent和Skills之间的接口应该清晰、简单、稳定。</p><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Agent调用Skill</span>
result <span class="token operator">=</span> agent<span class="token punctuation">.</span>call_skill<span class="token punctuation">(</span>
    skill_name<span class="token operator">=</span><span class="token string">&quot;pdf-processing&quot;</span><span class="token punctuation">,</span>
    <span class="token builtin">input</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;document.pdf&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-错误处理" tabindex="-1"><a class="header-anchor" href="#_3-错误处理" aria-hidden="true">#</a> 3. 错误处理</h4><p><strong>原则：</strong><br> 应该有完善的错误处理机制。</p><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. Agent捕获Skill错误
2. 分析错误原因
3. 尝试恢复或回退
4. 记录错误信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第七部分-未来展望" tabindex="-1"><a class="header-anchor" href="#第七部分-未来展望" aria-hidden="true">#</a> 第七部分：未来展望</h2><h3 id="_7-1-技术发展趋势" tabindex="-1"><a class="header-anchor" href="#_7-1-技术发展趋势" aria-hidden="true">#</a> 7.1 技术发展趋势</h3><h4 id="_1-skills生态成熟" tabindex="-1"><a class="header-anchor" href="#_1-skills生态成熟" aria-hidden="true">#</a> 1. Skills生态成熟</h4><p><strong>趋势：</strong></p><ul><li>Skills平台化</li><li>Skills市场化</li><li>Skills标准化</li></ul><p><strong>影响：</strong></p><ul><li>Skills将成为AI应用的基本构建块</li><li>Skills市场将繁荣</li><li>Skills标准将建立</li></ul><h4 id="_2-agent智能化" tabindex="-1"><a class="header-anchor" href="#_2-agent智能化" aria-hidden="true">#</a> 2. Agent智能化</h4><p><strong>趋势：</strong></p><ul><li>Agent自主性增强</li><li>Agent学习能力提升</li><li>Agent协作能力提升</li></ul><p><strong>影响：</strong></p><ul><li>Agent将更智能</li><li>Agent将更自主</li><li>Agent将更协作</li></ul><h4 id="_3-混合模式普及" tabindex="-1"><a class="header-anchor" href="#_3-混合模式普及" aria-hidden="true">#</a> 3. 混合模式普及</h4><p><strong>趋势：</strong></p><ul><li>Agent + Skills成为主流</li><li>平台支持混合模式</li><li>最佳实践建立</li></ul><p><strong>影响：</strong></p><ul><li>AI系统将更强大</li><li>AI应用将更高效</li><li>AI开发将更简单</li></ul><h3 id="_7-2-面临的挑战" tabindex="-1"><a class="header-anchor" href="#_7-2-面临的挑战" aria-hidden="true">#</a> 7.2 面临的挑战</h3><h4 id="_1-技术挑战" tabindex="-1"><a class="header-anchor" href="#_1-技术挑战" aria-hidden="true">#</a> 1. 技术挑战</h4><p><strong>Skills挑战：</strong></p><ul><li>Skills设计复杂度高</li><li>Skills互操作性问题</li><li>Skills标准化困难</li></ul><p><strong>Agent挑战：</strong></p><ul><li>Agent可控性问题</li><li>Agent可预测性问题</li><li>Agent安全性问题</li></ul><h4 id="_2-工程挑战" tabindex="-1"><a class="header-anchor" href="#_2-工程挑战" aria-hidden="true">#</a> 2. 工程挑战</h4><p><strong>Skills挑战：</strong></p><ul><li>Skills测试困难</li><li>Skills维护成本高</li><li>Skills版本管理复杂</li></ul><p><strong>Agent挑战：</strong></p><ul><li>Agent调试困难</li><li>Agent监控复杂</li><li>Agent优化困难</li></ul><h4 id="_3-生态挑战" tabindex="-1"><a class="header-anchor" href="#_3-生态挑战" aria-hidden="true">#</a> 3. 生态挑战</h4><p><strong>Skills挑战：</strong></p><ul><li>Skills生态不成熟</li><li>Skills市场不完善</li><li>Skills社区不活跃</li></ul><p><strong>Agent挑战：</strong></p><ul><li>Agent标准不统一</li><li>Agent平台碎片化</li><li>Agent工具不完善</li></ul><h3 id="_7-3-发展建议" tabindex="-1"><a class="header-anchor" href="#_7-3-发展建议" aria-hidden="true">#</a> 7.3 发展建议</h3><h4 id="_1-对于开发者" tabindex="-1"><a class="header-anchor" href="#_1-对于开发者" aria-hidden="true">#</a> 1. 对于开发者</h4><p><strong>Skills：</strong></p><ul><li>学习Skills设计</li><li>掌握Skills最佳实践</li><li>参与Skills社区</li></ul><p><strong>Agent：</strong></p><ul><li>学习Agent开发</li><li>掌握Agent工作流</li><li>参与Agent开源项目</li></ul><p><strong>混合模式：</strong></p><ul><li>理解混合模式</li><li>掌握混合设计</li><li>实践混合应用</li></ul><h4 id="_2-对于企业" tabindex="-1"><a class="header-anchor" href="#_2-对于企业" aria-hidden="true">#</a> 2. 对于企业</h4><p><strong>Skills：</strong></p><ul><li>建立Skills库</li><li>制定Skills标准</li><li>培养Skills团队</li></ul><p><strong>Agent：</strong></p><ul><li>建立Agent平台</li><li>制定Agent规范</li><li>培养Agent团队</li></ul><p><strong>混合模式：</strong></p><ul><li>建立混合架构</li><li>制定混合规范</li><li>培养混合团队</li></ul><h4 id="_3-对于社区" tabindex="-1"><a class="header-anchor" href="#_3-对于社区" aria-hidden="true">#</a> 3. 对于社区</h4><p><strong>Skills：</strong></p><ul><li>建立Skills市场</li><li>制定Skills标准</li><li>促进Skills共享</li></ul><p><strong>Agent：</strong></p><ul><li>建立Agent社区</li><li>制定Agent规范</li><li>促进Agent协作</li></ul><p><strong>混合模式：</strong></p><ul><li>建立混合生态</li><li>制定混合标准</li><li>促进混合创新</li></ul><h2 id="总结-范式之争的启示" tabindex="-1"><a class="header-anchor" href="#总结-范式之争的启示" aria-hidden="true">#</a> 总结：范式之争的启示</h2><p>Agents vs Skills不是简单的技术选择，而是两种不同的AI构建范式。</p><p><strong>核心观点：</strong></p><ol><li><p><strong>没有绝对的优劣</strong></p><ul><li>Agent适合灵活、不确定的任务</li><li>Skills适合明确、确定的任务</li><li>混合模式结合两者优势</li></ul></li><li><p><strong>选择取决于场景</strong></p><ul><li>任务类型</li><li>性能要求</li><li>维护成本</li><li>开发时间</li></ul></li><li><p><strong>未来是混合的</strong></p><ul><li>Agent提供灵活性和自主性</li><li>Skills提供确定性和效率</li><li>混合模式将成为主流</li></ul></li></ol><p><strong>实践建议：</strong></p><ol><li><p><strong>理解两种范式</strong></p><ul><li>学习Agent开发</li><li>学习Skills设计</li><li>理解混合模式</li></ul></li><li><p><strong>根据场景选择</strong></p><ul><li>简单任务用Skills</li><li>复杂任务用Agent</li><li>大型项目用混合</li></ul></li><li><p><strong>持续学习和优化</strong></p><ul><li>关注技术发展</li><li>学习最佳实践</li><li>优化设计方案</li></ul></li></ol><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ol><li>Anthropic - Claude Skills Official Documentation (2025)</li><li>Deep Agents CLI - GitHub: langchain-ai/deepagents</li><li>Cornell University - &quot;AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applications and Challenges&quot;</li><li>技术社区讨论 - Agents vs Skills</li><li>开源项目案例</li></ol><hr><p><strong>系列文章导航：</strong></p><ol><li>AI增强型全栈开发者的技术定位与能力模型</li><li>全栈开发的技术演进：从工具时代到智能体时代</li><li>AI编程效率的实证研究：从神话到现实</li><li>Agents vs Skills - 技术范式之争（本文）</li><li>Vibe Coding的批判性分析</li><li>Claude Skills深度解析</li><li>AI工具链的工程化实践</li><li>企业级AI应用的最佳实践</li><li>AI时代的系统设计思维</li><li>Prompt Engineering的工程化方法</li><li>AI Agent的记忆与上下文管理</li><li>2026-2030技术趋势大胆预测与多方向展望</li></ol>`,263)])])}const u=n(a,[["render",t],["__file","04-Agents vs Skills - 技术范式之争.html.vue"]]);export{u as default};
