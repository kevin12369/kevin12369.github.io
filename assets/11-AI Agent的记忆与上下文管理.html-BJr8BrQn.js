import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,e}from"./app-1HDetocO.js";const p={};function o(i,n){return t(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="ai-agent的记忆与上下文管理" tabindex="-1"><a class="header-anchor" href="#ai-agent的记忆与上下文管理" aria-hidden="true">#</a> AI Agent的记忆与上下文管理</h1><h2 id="前言-记忆是智能的基础" tabindex="-1"><a class="header-anchor" href="#前言-记忆是智能的基础" aria-hidden="true">#</a> 前言：记忆是智能的基础</h2><p>AI Agent的记忆和上下文管理能力是其智能水平的关键指标。一个优秀的AI Agent不仅需要能够处理当前任务，还需要能够记住历史信息、理解上下文、并在需要时检索相关信息。</p><p>本文将深入分析AI Agent的记忆和上下文管理，包括记忆类型、记忆架构、上下文管理、记忆检索和优化策略。</p><h3 id="研究基础" tabindex="-1"><a class="header-anchor" href="#研究基础" aria-hidden="true">#</a> 研究基础</h3><p>本文的分析基于以下来源：</p><ul><li><strong>认知科学研究</strong></li><li><strong>AI Agent框架文档</strong></li><li><strong>向量数据库最佳实践</strong></li><li><strong>企业级应用案例</strong></li></ul><h2 id="第一部分-记忆类型" tabindex="-1"><a class="header-anchor" href="#第一部分-记忆类型" aria-hidden="true">#</a> 第一部分：记忆类型</h2><h3 id="_1-1-短期记忆" tabindex="-1"><a class="header-anchor" href="#_1-1-短期记忆" aria-hidden="true">#</a> 1.1 短期记忆</h3><p><strong>定义：</strong><br> 临时存储当前对话和工作状态的记忆，容量有限，持续时间短。</p><p><strong>特点：</strong></p><ul><li>容量小（通常几千到几万个Token）</li><li>持续时间短（会话结束即消失）</li><li>访问速度快</li><li>适合存储当前对话上下文</li></ul><p><strong>应用场景：</strong></p><ul><li>对话历史</li><li>当前任务状态</li><li>临时变量</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># short_term_memory.py</span>
<span class="token keyword">from</span> collections <span class="token keyword">import</span> deque

<span class="token keyword">class</span> <span class="token class-name">ShortTermMemory</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;短期记忆&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> max_size<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>memory <span class="token operator">=</span> deque<span class="token punctuation">(</span>maxlen<span class="token operator">=</span>max_size<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加记忆&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>memory<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> item<span class="token punctuation">,</span>
            <span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">:</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_recent</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取最近的记忆&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> <span class="token builtin">list</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>memory<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span>n<span class="token punctuation">:</span><span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">clear</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;清空记忆&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>memory<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-长期记忆" tabindex="-1"><a class="header-anchor" href="#_1-2-长期记忆" aria-hidden="true">#</a> 1.2 长期记忆</h3><p><strong>定义：</strong><br> 持久化存储重要信息和知识的记忆，容量大，持续时间长。</p><p><strong>特点：</strong></p><ul><li>容量大（几乎无限）</li><li>持续时间长（永久存储）</li><li>访问速度相对慢</li><li>适合存储重要信息和知识</li></ul><p><strong>应用场景：</strong></p><ul><li>用户偏好</li><li>历史对话</li><li>知识库</li><li>经验总结</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># long_term_memory.py</span>
<span class="token keyword">import</span> chromadb
<span class="token keyword">from</span> chromadb<span class="token punctuation">.</span>config <span class="token keyword">import</span> Settings

<span class="token keyword">class</span> <span class="token class-name">LongTermMemory</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;长期记忆&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> collection_name<span class="token operator">=</span><span class="token string">&quot;agent_memory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>client <span class="token operator">=</span> chromadb<span class="token punctuation">.</span>Client<span class="token punctuation">(</span>Settings<span class="token punctuation">(</span>
            chroma_db_impl<span class="token operator">=</span><span class="token string">&quot;duckdb+parquet&quot;</span><span class="token punctuation">,</span>
            persist_directory<span class="token operator">=</span><span class="token string">&quot;./chroma_db&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>collection <span class="token operator">=</span> self<span class="token punctuation">.</span>client<span class="token punctuation">.</span>get_or_create_collection<span class="token punctuation">(</span>
            name<span class="token operator">=</span>collection_name
        <span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> content<span class="token punctuation">,</span> metadata<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加记忆&quot;&quot;&quot;</span>
        <span class="token keyword">import</span> uuid
        memory_id <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>uuid<span class="token punctuation">.</span>uuid4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        
        self<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>add<span class="token punctuation">(</span>
            documents<span class="token operator">=</span><span class="token punctuation">[</span>content<span class="token punctuation">]</span><span class="token punctuation">,</span>
            metadatas<span class="token operator">=</span><span class="token punctuation">[</span>metadata <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            ids<span class="token operator">=</span><span class="token punctuation">[</span>memory_id<span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> memory_id
    
    <span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">,</span> n_results<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;搜索记忆&quot;&quot;&quot;</span>
        results <span class="token operator">=</span> self<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>query<span class="token punctuation">(</span>
            query_texts<span class="token operator">=</span><span class="token punctuation">[</span>query<span class="token punctuation">]</span><span class="token punctuation">,</span>
            n_results<span class="token operator">=</span>n_results
        <span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> results
    
    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memory_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;删除记忆&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>delete<span class="token punctuation">(</span>ids<span class="token operator">=</span><span class="token punctuation">[</span>memory_id<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-工作记忆" tabindex="-1"><a class="header-anchor" href="#_1-3-工作记忆" aria-hidden="true">#</a> 1.3 工作记忆</h3><p><strong>定义：</strong><br> 用于处理当前任务和推理过程的记忆，容量有限，但访问速度快。</p><p><strong>特点：</strong></p><ul><li>容量小（通常几十到几百个Token）</li><li>持续时间短（任务完成即释放）</li><li>访问速度最快</li><li>适合存储推理过程中的中间结果</li></ul><p><strong>应用场景：</strong></p><ul><li>推理过程</li><li>中间计算结果</li><li>临时状态</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># working_memory.py</span>
<span class="token keyword">class</span> <span class="token class-name">WorkingMemory</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;工作记忆&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> max_size<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>max_size <span class="token operator">=</span> max_size
    
    <span class="token keyword">def</span> <span class="token function">set</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;设置记忆&quot;&quot;&quot;</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>memory<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>max_size<span class="token punctuation">:</span>
            <span class="token comment"># 删除最旧的记录</span>
            oldest_key <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>memory<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">del</span> self<span class="token punctuation">.</span>memory<span class="token punctuation">[</span>oldest_key<span class="token punctuation">]</span>
        
        self<span class="token punctuation">.</span>memory<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> value<span class="token punctuation">,</span>
            <span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">:</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取记忆&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>memory<span class="token punctuation">.</span>get<span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">clear</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;清空记忆&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>memory<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二部分-记忆架构" tabindex="-1"><a class="header-anchor" href="#第二部分-记忆架构" aria-hidden="true">#</a> 第二部分：记忆架构</h2><h3 id="_2-1-三层记忆架构" tabindex="-1"><a class="header-anchor" href="#_2-1-三层记忆架构" aria-hidden="true">#</a> 2.1 三层记忆架构</h3><p><strong>架构图：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌─────────────────────────────────────────────────┐
│              Working Memory                      │
│  (推理过程、中间结果、临时状态)                  │
│  容量：~100 tokens                              │
│  持续时间：任务期间                              │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              Short-term Memory                   │
│  (对话历史、当前任务状态)                        │
│  容量：~10,000 tokens                           │
│  持续时间：会话期间                              │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              Long-term Memory                   │
│  (用户偏好、历史对话、知识库)                    │
│  容量：无限                                     │
│  持续时间：永久                                  │
└─────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数据流：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入 → Working Memory → Short-term Memory → Long-term Memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># memory_architecture.py</span>
<span class="token keyword">class</span> <span class="token class-name">MemoryArchitecture</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;记忆架构&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>working_memory <span class="token operator">=</span> WorkingMemory<span class="token punctuation">(</span>max_size<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>short_term_memory <span class="token operator">=</span> ShortTermMemory<span class="token punctuation">(</span>max_size<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>long_term_memory <span class="token operator">=</span> LongTermMemory<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">add_input</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> input_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加输入&quot;&quot;&quot;</span>
        <span class="token comment"># 添加到工作记忆</span>
        self<span class="token punctuation">.</span>working_memory<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;current_input&#39;</span><span class="token punctuation">,</span> input_data<span class="token punctuation">)</span>
        
        <span class="token comment"># 添加到短期记忆</span>
        self<span class="token punctuation">.</span>short_term_memory<span class="token punctuation">.</span>add<span class="token punctuation">(</span>input_data<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">process_task</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> task<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;处理任务&quot;&quot;&quot;</span>
        <span class="token comment"># 从工作记忆获取当前输入</span>
        current_input <span class="token operator">=</span> self<span class="token punctuation">.</span>working_memory<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;current_input&#39;</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 处理任务</span>
        result <span class="token operator">=</span> self<span class="token punctuation">.</span>_process<span class="token punctuation">(</span>task<span class="token punctuation">,</span> current_input<span class="token punctuation">)</span>
        
        <span class="token comment"># 存储中间结果到工作记忆</span>
        self<span class="token punctuation">.</span>working_memory<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;task_result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> result
    
    <span class="token keyword">def</span> <span class="token function">consolidate_memory</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;整合记忆&quot;&quot;&quot;</span>
        <span class="token comment"># 从短期记忆获取重要信息</span>
        recent_memories <span class="token operator">=</span> self<span class="token punctuation">.</span>short_term_memory<span class="token punctuation">.</span>get_recent<span class="token punctuation">(</span>n<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 评估重要性</span>
        important_memories <span class="token operator">=</span> self<span class="token punctuation">.</span>_evaluate_importance<span class="token punctuation">(</span>recent_memories<span class="token punctuation">)</span>
        
        <span class="token comment"># 存储到长期记忆</span>
        <span class="token keyword">for</span> memory <span class="token keyword">in</span> important_memories<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>long_term_memory<span class="token punctuation">.</span>add<span class="token punctuation">(</span>
                content<span class="token operator">=</span>memory<span class="token punctuation">[</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                metadata<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">:</span> memory<span class="token punctuation">[</span><span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-分层记忆架构" tabindex="-1"><a class="header-anchor" href="#_2-2-分层记忆架构" aria-hidden="true">#</a> 2.2 分层记忆架构</h3><p><strong>架构图：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌─────────────────────────────────────────────────┐
│              L1: Working Memory                  │
│  (推理过程、中间结果)                            │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              L2: Session Memory                  │
│  (对话历史、任务状态)                            │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              L3: User Memory                     │
│  (用户偏好、历史对话)                            │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              L4: Knowledge Memory                │
│  (知识库、领域知识)                              │
└─────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点：</strong></p><ul><li>分层存储</li><li>逐层抽象</li><li>优化检索</li></ul><h2 id="第三部分-上下文管理" tabindex="-1"><a class="header-anchor" href="#第三部分-上下文管理" aria-hidden="true">#</a> 第三部分：上下文管理</h2><h3 id="_3-1-上下文窗口" tabindex="-1"><a class="header-anchor" href="#_3-1-上下文窗口" aria-hidden="true">#</a> 3.1 上下文窗口</h3><p><strong>问题：</strong><br> LLM的上下文窗口有限，无法无限存储对话历史。</p><p><strong>解决方案：</strong></p><p><strong>方案1：滑动窗口</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># sliding_window.py</span>
<span class="token keyword">from</span> collections <span class="token keyword">import</span> deque

<span class="token keyword">class</span> <span class="token class-name">SlidingWindowManager</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;滑动窗口管理器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> window_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>window <span class="token operator">=</span> deque<span class="token punctuation">(</span>maxlen<span class="token operator">=</span>window_size<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">add_message</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> role<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加消息&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>window<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> role<span class="token punctuation">,</span>
            <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> content
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_context</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取上下文&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> <span class="token builtin">list</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>window<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方案2：重要性采样</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># importance_sampling.py</span>
<span class="token keyword">class</span> <span class="token class-name">ImportanceSamplingManager</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;重要性采样管理器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> max_tokens<span class="token operator">=</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>max_tokens <span class="token operator">=</span> max_tokens
    
    <span class="token keyword">def</span> <span class="token function">add_message</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> role<span class="token punctuation">,</span> content<span class="token punctuation">,</span> importance<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加消息&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> role<span class="token punctuation">,</span>
            <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> content<span class="token punctuation">,</span>
            <span class="token string">&#39;importance&#39;</span><span class="token punctuation">:</span> importance<span class="token punctuation">,</span>
            <span class="token string">&#39;tokens&#39;</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_context</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取上下文（基于重要性）&quot;&quot;&quot;</span>
        <span class="token comment"># 按重要性排序</span>
        sorted_messages <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>
            self<span class="token punctuation">.</span>messages<span class="token punctuation">,</span>
            key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">[</span><span class="token string">&#39;importance&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            reverse<span class="token operator">=</span><span class="token boolean">True</span>
        <span class="token punctuation">)</span>
        
        <span class="token comment"># 选择最重要的消息</span>
        selected_messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        total_tokens <span class="token operator">=</span> <span class="token number">0</span>
        
        <span class="token keyword">for</span> message <span class="token keyword">in</span> sorted_messages<span class="token punctuation">:</span>
            <span class="token keyword">if</span> total_tokens <span class="token operator">+</span> message<span class="token punctuation">[</span><span class="token string">&#39;tokens&#39;</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> self<span class="token punctuation">.</span>max_tokens<span class="token punctuation">:</span>
                selected_messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span>message<span class="token punctuation">)</span>
                total_tokens <span class="token operator">+=</span> message<span class="token punctuation">[</span><span class="token string">&#39;tokens&#39;</span><span class="token punctuation">]</span>
        
        <span class="token comment"># 按时间顺序排序</span>
        selected_messages<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> self<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>index<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> selected_messages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方案3：摘要压缩</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># summary_compression.py</span>
<span class="token keyword">class</span> <span class="token class-name">SummaryCompressionManager</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;摘要压缩管理器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> max_tokens<span class="token operator">=</span><span class="token number">4000</span><span class="token punctuation">,</span> summary_ratio<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>max_tokens <span class="token operator">=</span> max_tokens
        self<span class="token punctuation">.</span>summary_ratio <span class="token operator">=</span> summary_ratio
    
    <span class="token keyword">def</span> <span class="token function">add_message</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> role<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加消息&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> role<span class="token punctuation">,</span>
            <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> content<span class="token punctuation">,</span>
            <span class="token string">&#39;tokens&#39;</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_context</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取上下文（带摘要压缩）&quot;&quot;&quot;</span>
        <span class="token comment"># 计算总Token数</span>
        total_tokens <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">&#39;tokens&#39;</span><span class="token punctuation">]</span> <span class="token keyword">for</span> m <span class="token keyword">in</span> self<span class="token punctuation">.</span>messages<span class="token punctuation">)</span>
        
        <span class="token keyword">if</span> total_tokens <span class="token operator">&lt;=</span> self<span class="token punctuation">.</span>max_tokens<span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>messages
        
        <span class="token comment"># 压缩旧消息</span>
        summary_tokens <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>max_tokens <span class="token operator">*</span> self<span class="token punctuation">.</span>summary_ratio<span class="token punctuation">)</span>
        context_tokens <span class="token operator">=</span> self<span class="token punctuation">.</span>max_tokens <span class="token operator">-</span> summary_tokens
        
        <span class="token comment"># 选择最近的上下文</span>
        recent_messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        accumulated_tokens <span class="token operator">=</span> <span class="token number">0</span>
        
        <span class="token keyword">for</span> message <span class="token keyword">in</span> <span class="token builtin">reversed</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>messages<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> accumulated_tokens <span class="token operator">+</span> message<span class="token punctuation">[</span><span class="token string">&#39;tokens&#39;</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> context_tokens<span class="token punctuation">:</span>
                recent_messages<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
                accumulated_tokens <span class="token operator">+=</span> message<span class="token punctuation">[</span><span class="token string">&#39;tokens&#39;</span><span class="token punctuation">]</span>
        
        <span class="token comment"># 生成旧消息的摘要</span>
        old_messages <span class="token operator">=</span> self<span class="token punctuation">.</span>messages<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token builtin">len</span><span class="token punctuation">(</span>recent_messages<span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> old_messages<span class="token punctuation">:</span>
            summary <span class="token operator">=</span> self<span class="token punctuation">.</span>_generate_summary<span class="token punctuation">(</span>old_messages<span class="token punctuation">)</span>
            recent_messages<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;system&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;Previous conversation summary: </span><span class="token interpolation"><span class="token punctuation">{</span>summary<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
                <span class="token string">&#39;tokens&#39;</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>summary<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> recent_messages
    
    <span class="token keyword">def</span> <span class="token function">_generate_summary</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> messages<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;生成摘要&quot;&quot;&quot;</span>
        <span class="token comment"># 使用LLM生成摘要</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Summary of previous conversation...&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-上下文增强" tabindex="-1"><a class="header-anchor" href="#_3-2-上下文增强" aria-hidden="true">#</a> 3.2 上下文增强</h3><p><strong>方法1：检索增强（RAG）</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># rag_context.py</span>
<span class="token keyword">class</span> <span class="token class-name">RAGContextManager</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;检索增强上下文管理器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> knowledge_base<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>knowledge_base <span class="token operator">=</span> knowledge_base
        self<span class="token punctuation">.</span>context_window <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">add_message</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> role<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加消息&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>context_window<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> role<span class="token punctuation">,</span>
            <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> content
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_context</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">,</span> n_retrievals<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取增强的上下文&quot;&quot;&quot;</span>
        <span class="token comment"># 检索相关知识</span>
        retrieved_docs <span class="token operator">=</span> self<span class="token punctuation">.</span>knowledge_base<span class="token punctuation">.</span>search<span class="token punctuation">(</span>query<span class="token punctuation">,</span> n_results<span class="token operator">=</span>n_retrievals<span class="token punctuation">)</span>
        
        <span class="token comment"># 构建增强的上下文</span>
        context <span class="token operator">=</span> self<span class="token punctuation">.</span>context_window<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 在上下文中插入检索到的知识</span>
        <span class="token keyword">if</span> retrieved_docs<span class="token punctuation">:</span>
            context<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;system&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;Relevant knowledge: </span><span class="token interpolation"><span class="token punctuation">{</span>retrieved_docs<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> context
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法2：知识图谱增强</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># knowledge_graph_context.py</span>
<span class="token keyword">class</span> <span class="token class-name">KnowledgeGraphContextManager</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;知识图谱上下文管理器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> knowledge_graph<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>knowledge_graph <span class="token operator">=</span> knowledge_graph
        self<span class="token punctuation">.</span>context_window <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">add_message</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> role<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加消息&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>context_window<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> role<span class="token punctuation">,</span>
            <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> content
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_context</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取增强的上下文&quot;&quot;&quot;</span>
        <span class="token comment"># 从知识图谱中提取相关实体和关系</span>
        entities <span class="token operator">=</span> self<span class="token punctuation">.</span>knowledge_graph<span class="token punctuation">.</span>extract_entities<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
        relations <span class="token operator">=</span> self<span class="token punctuation">.</span>knowledge_graph<span class="token punctuation">.</span>get_relations<span class="token punctuation">(</span>entities<span class="token punctuation">)</span>
        
        <span class="token comment"># 构建增强的上下文</span>
        context <span class="token operator">=</span> self<span class="token punctuation">.</span>context_window<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token keyword">if</span> relations<span class="token punctuation">:</span>
            context<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;role&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;system&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> <span class="token string-interpolation"><span class="token string">f&quot;Related entities and relations: </span><span class="token interpolation"><span class="token punctuation">{</span>relations<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> context
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第四部分-记忆检索" tabindex="-1"><a class="header-anchor" href="#第四部分-记忆检索" aria-hidden="true">#</a> 第四部分：记忆检索</h2><h3 id="_4-1-向量检索" tabindex="-1"><a class="header-anchor" href="#_4-1-向量检索" aria-hidden="true">#</a> 4.1 向量检索</h3><p><strong>原理：</strong><br> 将文本转换为向量，使用向量相似度进行检索。</p><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># vector_retrieval.py</span>
<span class="token keyword">import</span> chromadb
<span class="token keyword">from</span> chromadb<span class="token punctuation">.</span>config <span class="token keyword">import</span> Settings

<span class="token keyword">class</span> <span class="token class-name">VectorRetriever</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;向量检索器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> collection_name<span class="token operator">=</span><span class="token string">&quot;memory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>client <span class="token operator">=</span> chromadb<span class="token punctuation">.</span>Client<span class="token punctuation">(</span>Settings<span class="token punctuation">(</span>
            chroma_db_impl<span class="token operator">=</span><span class="token string">&quot;duckdb+parquet&quot;</span><span class="token punctuation">,</span>
            persist_directory<span class="token operator">=</span><span class="token string">&quot;./chroma_db&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>collection <span class="token operator">=</span> self<span class="token punctuation">.</span>client<span class="token punctuation">.</span>get_or_create_collection<span class="token punctuation">(</span>
            name<span class="token operator">=</span>collection_name
        <span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> content<span class="token punctuation">,</span> metadata<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;添加文档&quot;&quot;&quot;</span>
        <span class="token keyword">import</span> uuid
        doc_id <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>uuid<span class="token punctuation">.</span>uuid4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        
        self<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>add<span class="token punctuation">(</span>
            documents<span class="token operator">=</span><span class="token punctuation">[</span>content<span class="token punctuation">]</span><span class="token punctuation">,</span>
            metadatas<span class="token operator">=</span><span class="token punctuation">[</span>metadata <span class="token keyword">or</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            ids<span class="token operator">=</span><span class="token punctuation">[</span>doc_id<span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> doc_id
    
    <span class="token keyword">def</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">,</span> n_results<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> metadata_filter<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;检索文档&quot;&quot;&quot;</span>
        results <span class="token operator">=</span> self<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>query<span class="token punctuation">(</span>
            query_texts<span class="token operator">=</span><span class="token punctuation">[</span>query<span class="token punctuation">]</span><span class="token punctuation">,</span>
            n_results<span class="token operator">=</span>n_results<span class="token punctuation">,</span>
            where<span class="token operator">=</span>metadata_filter
        <span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> results
    
    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> doc_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;删除文档&quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>delete<span class="token punctuation">(</span>ids<span class="token operator">=</span><span class="token punctuation">[</span>doc_id<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-混合检索" tabindex="-1"><a class="header-anchor" href="#_4-2-混合检索" aria-hidden="true">#</a> 4.2 混合检索</h3><p><strong>原理：</strong><br> 结合向量检索和关键词检索，提升检索准确性。</p><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># hybrid_retrieval.py</span>
<span class="token keyword">from</span> vector_retrieval <span class="token keyword">import</span> VectorRetriever
<span class="token keyword">from</span> keyword_retrieval <span class="token keyword">import</span> KeywordRetriever

<span class="token keyword">class</span> <span class="token class-name">HybridRetriever</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;混合检索器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>vector_retriever <span class="token operator">=</span> VectorRetriever<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>keyword_retriever <span class="token operator">=</span> KeywordRetriever<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">,</span> n_results<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;混合检索&quot;&quot;&quot;</span>
        <span class="token comment"># 向量检索</span>
        vector_results <span class="token operator">=</span> self<span class="token punctuation">.</span>vector_retriever<span class="token punctuation">.</span>retrieve<span class="token punctuation">(</span>query<span class="token punctuation">,</span> n_results<span class="token operator">=</span>n_results<span class="token punctuation">)</span>
        
        <span class="token comment"># 关键词检索</span>
        keyword_results <span class="token operator">=</span> self<span class="token punctuation">.</span>keyword_retrieval<span class="token punctuation">.</span>retrieve<span class="token punctuation">(</span>query<span class="token punctuation">,</span> n_results<span class="token operator">=</span>n_results<span class="token punctuation">)</span>
        
        <span class="token comment"># 合并结果</span>
        hybrid_results <span class="token operator">=</span> self<span class="token punctuation">.</span>_merge_results<span class="token punctuation">(</span>vector_results<span class="token punctuation">,</span> keyword_results<span class="token punctuation">)</span>
        
        <span class="token comment"># 返回前n_results个结果</span>
        <span class="token keyword">return</span> hybrid_results<span class="token punctuation">[</span><span class="token punctuation">:</span>n_results<span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">_merge_results</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> vector_results<span class="token punctuation">,</span> keyword_results<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;合并结果&quot;&quot;&quot;</span>
        <span class="token comment"># 简单的合并策略</span>
        merged <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        <span class="token comment"># 添加向量检索结果</span>
        <span class="token keyword">for</span> result <span class="token keyword">in</span> vector_results<span class="token punctuation">:</span>
            <span class="token keyword">if</span> result <span class="token keyword">not</span> <span class="token keyword">in</span> merged<span class="token punctuation">:</span>
                merged<span class="token punctuation">.</span>append<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        
        <span class="token comment"># 添加关键词检索结果</span>
        <span class="token keyword">for</span> result <span class="token keyword">in</span> keyword_results<span class="token punctuation">:</span>
            <span class="token keyword">if</span> result <span class="token keyword">not</span> <span class="token keyword">in</span> merged<span class="token punctuation">:</span>
                merged<span class="token punctuation">.</span>append<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> merged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-重排序检索" tabindex="-1"><a class="header-anchor" href="#_4-3-重排序检索" aria-hidden="true">#</a> 4.3 重排序检索</h3><p><strong>原理：</strong><br> 先使用快速检索获取候选结果，再使用重排序模型进行精排。</p><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># reranking_retrieval.py</span>
<span class="token keyword">from</span> vector_retrieval <span class="token keyword">import</span> VectorRetriever
<span class="token keyword">from</span> reranker <span class="token keyword">import</span> Reranker

<span class="token keyword">class</span> <span class="token class-name">RerankingRetriever</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;重排序检索器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>vector_retriever <span class="token operator">=</span> VectorRetriever<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>reranker <span class="token operator">=</span> Reranker<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">,</span> n_candidates<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> n_results<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;重排序检索&quot;&quot;&quot;</span>
        <span class="token comment"># 第一阶段：快速检索</span>
        candidates <span class="token operator">=</span> self<span class="token punctuation">.</span>vector_retriever<span class="token punctuation">.</span>retrieve<span class="token punctuation">(</span>query<span class="token punctuation">,</span> n_results<span class="token operator">=</span>n_candidates<span class="token punctuation">)</span>
        
        <span class="token comment"># 第二阶段：重排序</span>
        reranked_results <span class="token operator">=</span> self<span class="token punctuation">.</span>reranker<span class="token punctuation">.</span>rerank<span class="token punctuation">(</span>query<span class="token punctuation">,</span> candidates<span class="token punctuation">)</span>
        
        <span class="token comment"># 返回前n_results个结果</span>
        <span class="token keyword">return</span> reranked_results<span class="token punctuation">[</span><span class="token punctuation">:</span>n_results<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第五部分-记忆优化" tabindex="-1"><a class="header-anchor" href="#第五部分-记忆优化" aria-hidden="true">#</a> 第五部分：记忆优化</h2><h3 id="_5-1-记忆压缩" tabindex="-1"><a class="header-anchor" href="#_5-1-记忆压缩" aria-hidden="true">#</a> 5.1 记忆压缩</h3><p><strong>方法1：摘要压缩</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># memory_compression.py</span>
<span class="token keyword">class</span> <span class="token class-name">MemoryCompressor</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;记忆压缩器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">compress</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;压缩记忆&quot;&quot;&quot;</span>
        <span class="token comment"># 按时间分组</span>
        grouped <span class="token operator">=</span> self<span class="token punctuation">.</span>_group_by_time<span class="token punctuation">(</span>memories<span class="token punctuation">,</span> group_size<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 为每组生成摘要</span>
        compressed <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> group <span class="token keyword">in</span> grouped<span class="token punctuation">:</span>
            summary <span class="token operator">=</span> self<span class="token punctuation">.</span>_generate_summary<span class="token punctuation">(</span>group<span class="token punctuation">)</span>
            compressed<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token string">&#39;type&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;summary&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> summary<span class="token punctuation">,</span>
                <span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">:</span> group<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> compressed
    
    <span class="token keyword">def</span> <span class="token function">_group_by_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">,</span> group_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;按时间分组&quot;&quot;&quot;</span>
        groups <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        current_group <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        <span class="token keyword">for</span> memory <span class="token keyword">in</span> memories<span class="token punctuation">:</span>
            current_group<span class="token punctuation">.</span>append<span class="token punctuation">(</span>memory<span class="token punctuation">)</span>
            
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>current_group<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> group_size<span class="token punctuation">:</span>
                groups<span class="token punctuation">.</span>append<span class="token punctuation">(</span>current_group<span class="token punctuation">)</span>
                current_group <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        <span class="token keyword">if</span> current_group<span class="token punctuation">:</span>
            groups<span class="token punctuation">.</span>append<span class="token punctuation">(</span>current_group<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> groups
    
    <span class="token keyword">def</span> <span class="token function">_generate_summary</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;生成摘要&quot;&quot;&quot;</span>
        <span class="token comment"># 使用LLM生成摘要</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Summary of memories...&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法2：分层压缩</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># hierarchical_compression.py</span>
<span class="token keyword">class</span> <span class="token class-name">HierarchicalCompressor</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;分层压缩器&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">compress</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;分层压缩&quot;&quot;&quot;</span>
        <span class="token comment"># 第一层：摘要压缩</span>
        level1 <span class="token operator">=</span> self<span class="token punctuation">.</span>_compress_level1<span class="token punctuation">(</span>memories<span class="token punctuation">)</span>
        
        <span class="token comment"># 第二层：主题聚类</span>
        level2 <span class="token operator">=</span> self<span class="token punctuation">.</span>_compress_level2<span class="token punctuation">(</span>level1<span class="token punctuation">)</span>
        
        <span class="token comment"># 第三层：高层摘要</span>
        level3 <span class="token operator">=</span> self<span class="token punctuation">.</span>_compress_level3<span class="token punctuation">(</span>level2<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> level3
    
    <span class="token keyword">def</span> <span class="token function">_compress_level1</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;第一层压缩：摘要&quot;&quot;&quot;</span>
        <span class="token comment"># 将相似的记忆合并为摘要</span>
        <span class="token keyword">return</span> memories
    
    <span class="token keyword">def</span> <span class="token function">_compress_level2</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;第二层压缩：主题聚类&quot;&quot;&quot;</span>
        <span class="token comment"># 按主题聚类记忆</span>
        <span class="token keyword">return</span> memories
    
    <span class="token keyword">def</span> <span class="token function">_compress_level3</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;第三层压缩：高层摘要&quot;&quot;&quot;</span>
        <span class="token comment"># 生成高层摘要</span>
        <span class="token keyword">return</span> memories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-记忆清理" tabindex="-1"><a class="header-anchor" href="#_5-2-记忆清理" aria-hidden="true">#</a> 5.2 记忆清理</h3><p><strong>清理策略：</strong></p><p><strong>策略1：基于时间的清理</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># time_based_cleanup.py</span>
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">TimeBasedCleanup</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;基于时间的清理&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> max_age<span class="token operator">=</span><span class="token number">30</span><span class="token operator">*</span><span class="token number">24</span><span class="token operator">*</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 30天</span>
        self<span class="token punctuation">.</span>max_age <span class="token operator">=</span> max_age
    
    <span class="token keyword">def</span> <span class="token function">cleanup</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;清理过期记忆&quot;&quot;&quot;</span>
        current_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        cleaned <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> memory <span class="token keyword">in</span> memories<span class="token punctuation">:</span>
            age <span class="token operator">=</span> current_time <span class="token operator">-</span> memory<span class="token punctuation">[</span><span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">]</span>
            
            <span class="token keyword">if</span> age <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>max_age<span class="token punctuation">:</span>
                cleaned<span class="token punctuation">.</span>append<span class="token punctuation">(</span>memory<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> cleaned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>策略2：基于重要性的清理</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># importance_based_cleanup.py</span>
<span class="token keyword">class</span> <span class="token class-name">ImportanceBasedCleanup</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;基于重要性的清理&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> min_importance<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>min_importance <span class="token operator">=</span> min_importance
    
    <span class="token keyword">def</span> <span class="token function">cleanup</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;清理不重要的记忆&quot;&quot;&quot;</span>
        cleaned <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        <span class="token keyword">for</span> memory <span class="token keyword">in</span> memories<span class="token punctuation">:</span>
            importance <span class="token operator">=</span> memory<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;importance&#39;</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
            
            <span class="token keyword">if</span> importance <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>min_importance<span class="token punctuation">:</span>
                cleaned<span class="token punctuation">.</span>append<span class="token punctuation">(</span>memory<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> cleaned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>策略3：基于访问频率的清理</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># frequency_based_cleanup.py</span>
<span class="token keyword">class</span> <span class="token class-name">FrequencyBasedCleanup</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;基于访问频率的清理&quot;&quot;&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> min_access_count<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>min_access_count <span class="token operator">=</span> min_access_count
    
    <span class="token keyword">def</span> <span class="token function">cleanup</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> memories<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;清理不常访问的记忆&quot;&quot;&quot;</span>
        cleaned <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        
        <span class="token keyword">for</span> memory <span class="token keyword">in</span> memories<span class="token punctuation">:</span>
            access_count <span class="token operator">=</span> memory<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;access_count&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
            
            <span class="token keyword">if</span> access_count <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>min_access_count<span class="token punctuation">:</span>
                cleaned<span class="token punctuation">.</span>append<span class="token punctuation">(</span>memory<span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> cleaned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第六部分-最佳实践" tabindex="-1"><a class="header-anchor" href="#第六部分-最佳实践" aria-hidden="true">#</a> 第六部分：最佳实践</h2><h3 id="_6-1-记忆设计原则" tabindex="-1"><a class="header-anchor" href="#_6-1-记忆设计原则" aria-hidden="true">#</a> 6.1 记忆设计原则</h3><p><strong>原则1：分层设计</strong></p><ul><li>工作记忆：处理当前任务</li><li>短期记忆：存储会话信息</li><li>长期记忆：存储重要信息</li></ul><p><strong>原则2：容量优化</strong></p><ul><li>使用滑动窗口</li><li>使用摘要压缩</li><li>使用重要性采样</li></ul><p><strong>原则3：检索优化</strong></p><ul><li>使用向量检索</li><li>使用混合检索</li><li>使用重排序</li></ul><p><strong>原则4：持续优化</strong></p><ul><li>定期清理</li><li>定期压缩</li><li>定期评估</li></ul><h3 id="_6-2-上下文管理最佳实践" tabindex="-1"><a class="header-anchor" href="#_6-2-上下文管理最佳实践" aria-hidden="true">#</a> 6.2 上下文管理最佳实践</h3><p><strong>实践1：合理设置窗口大小</strong></p><ul><li>根据任务复杂度设置</li><li>根据模型上下文窗口设置</li><li>根据成本考虑设置</li></ul><p><strong>实践2：使用上下文增强</strong></p><ul><li>检索相关知识</li><li>使用知识图谱</li><li>使用预训练知识</li></ul><p><strong>实践3：优化上下文质量</strong></p><ul><li>过滤无关信息</li><li>优先重要信息</li><li>使用摘要压缩</li></ul><p><strong>实践4：监控上下文使用</strong></p><ul><li>监控Token消耗</li><li>监控上下文质量</li><li>监控检索效果</li></ul><h2 id="第七部分-未来展望" tabindex="-1"><a class="header-anchor" href="#第七部分-未来展望" aria-hidden="true">#</a> 第七部分：未来展望</h2><h3 id="_7-1-技术发展趋势" tabindex="-1"><a class="header-anchor" href="#_7-1-技术发展趋势" aria-hidden="true">#</a> 7.1 技术发展趋势</h3><p><strong>趋势1：记忆架构智能化</strong></p><ul><li>自动记忆分层</li><li>自动记忆压缩</li><li>自动记忆清理</li></ul><p><strong>趋势2：检索技术进步</strong></p><ul><li>多模态检索</li><li>实时检索</li><li>个性化检索</li></ul><p><strong>趋势3：上下文管理优化</strong></p><ul><li>动态上下文窗口</li><li>智能上下文压缩</li><li>上下文预测</li></ul><h3 id="_7-2-挑战与机遇" tabindex="-1"><a class="header-anchor" href="#_7-2-挑战与机遇" aria-hidden="true">#</a> 7.2 挑战与机遇</h3><p><strong>挑战：</strong></p><ol><li>记忆容量限制</li><li>检索准确性</li><li>上下文窗口限制</li><li>记忆一致性</li></ol><p><strong>机遇：</strong></p><ol><li>向量数据库发展</li><li>检索技术进步</li><li>上下文窗口扩大</li><li>记忆架构创新</li></ol><h2 id="总结-ai-agent的记忆与上下文管理" tabindex="-1"><a class="header-anchor" href="#总结-ai-agent的记忆与上下文管理" aria-hidden="true">#</a> 总结：AI Agent的记忆与上下文管理</h2><p>记忆和上下文管理是AI Agent智能水平的关键指标。</p><p><strong>关键要点：</strong></p><ol><li><p><strong>记忆类型</strong></p><ul><li>短期记忆</li><li>长期记忆</li><li>工作记忆</li></ul></li><li><p><strong>记忆架构</strong></p><ul><li>三层记忆架构</li><li>分层记忆架构</li></ul></li><li><p><strong>上下文管理</strong></p><ul><li>上下文窗口</li><li>上下文增强</li><li>上下文压缩</li></ul></li><li><p><strong>记忆检索</strong></p><ul><li>向量检索</li><li>混合检索</li><li>重排序检索</li></ul></li><li><p><strong>记忆优化</strong></p><ul><li>记忆压缩</li><li>记忆清理</li></ul></li></ol><p><strong>实践建议：</strong></p><ol><li><p><strong>设计合理的记忆架构</strong></p><ul><li>分层设计</li><li>容量优化</li><li>检索优化</li></ul></li><li><p><strong>优化上下文管理</strong></p><ul><li>合理设置窗口大小</li><li>使用上下文增强</li><li>优化上下文质量</li></ul></li><li><p><strong>持续优化记忆</strong></p><ul><li>定期清理</li><li>定期压缩</li><li>定期评估</li></ul></li></ol><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ol><li>认知科学研究</li><li>AI Agent框架文档</li><li>向量数据库最佳实践</li><li>企业级应用案例</li></ol><hr><p><strong>系列文章导航：</strong></p><ol><li>AI增强型全栈开发者的技术定位与能力模型</li><li>全栈开发的技术演进：从工具时代到智能体时代</li><li>AI编程效率的实证研究：从神话到现实</li><li>Agents vs Skills - 技术范式之争</li><li>Vibe Coding的批判性分析</li><li>Claude Skills深度解析</li><li>AI工具链的工程化实践</li><li>企业级AI应用的最佳实践</li><li>AI时代的系统设计思维</li><li>Prompt Engineering的工程化方法</li><li>AI Agent的记忆与上下文管理（本文）</li><li>2026-2030技术趋势大胆预测与多方向展望</li></ol>`,130)])])}const u=s(p,[["render",o],["__file","11-AI Agent的记忆与上下文管理.html.vue"]]);export{u as default};
