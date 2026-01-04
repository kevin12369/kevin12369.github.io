import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,o as l}from"./app-BnzN889n.js";const d={};function r(a,e){return l(),i("div",null,[...e[0]||(e[0]=[s(`<h1 id="ai-agent的记忆与上下文管理" tabindex="-1"><a class="header-anchor" href="#ai-agent的记忆与上下文管理" aria-hidden="true">#</a> AI Agent的记忆与上下文管理</h1><h2 id="前言-记忆是智能的基础" tabindex="-1"><a class="header-anchor" href="#前言-记忆是智能的基础" aria-hidden="true">#</a> 前言：记忆是智能的基础</h2><p>AI Agent的记忆和上下文管理能力是其智能水平的关键指标。一个优秀的AI Agent不仅需要能够处理当前任务，还需要能够记住历史信息、理解上下文、并在需要时检索相关信息。</p><p>本文将深入分析AI Agent的记忆和上下文管理，包括记忆类型、记忆架构、上下文管理、记忆检索和优化策略。</p><h3 id="研究基础" tabindex="-1"><a class="header-anchor" href="#研究基础" aria-hidden="true">#</a> 研究基础</h3><p>本文的分析基于以下来源：</p><ul><li><strong>认知科学研究</strong></li><li><strong>AI Agent框架文档</strong></li><li><strong>向量数据库最佳实践</strong></li><li><strong>企业级应用案例</strong></li></ul><h2 id="第一部分-记忆类型" tabindex="-1"><a class="header-anchor" href="#第一部分-记忆类型" aria-hidden="true">#</a> 第一部分：记忆类型</h2><h3 id="_1-1-短期记忆" tabindex="-1"><a class="header-anchor" href="#_1-1-短期记忆" aria-hidden="true">#</a> 1.1 短期记忆</h3><p><strong>定义：</strong> 临时存储当前对话和工作状态的记忆，容量有限，持续时间短。</p><p><strong>特点：</strong></p><ul><li>容量小（通常几千到几万个Token）</li><li>持续时间短（会话结束即消失）</li><li>访问速度快</li><li>适合存储当前对话上下文</li></ul><p><strong>应用场景：</strong></p><ul><li>对话历史</li><li>当前任务状态</li><li>临时变量</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># short_term_memory.py
from collections import deque

class ShortTermMemory:
    &quot;&quot;&quot;短期记忆&quot;&quot;&quot;
    
    def __init__(self, max_size=10000):
        self.memory = deque(maxlen=max_size)
    
    def add(self, item):
        &quot;&quot;&quot;添加记忆&quot;&quot;&quot;
        self.memory.append({
            &#39;content&#39;: item,
            &#39;timestamp&#39;: time.time()
        })
    
    def get_recent(self, n=10):
        &quot;&quot;&quot;获取最近的记忆&quot;&quot;&quot;
        return list(self.memory)[-n:]
    
    def clear(self):
        &quot;&quot;&quot;清空记忆&quot;&quot;&quot;
        self.memory.clear()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-长期记忆" tabindex="-1"><a class="header-anchor" href="#_1-2-长期记忆" aria-hidden="true">#</a> 1.2 长期记忆</h3><p><strong>定义：</strong> 持久化存储重要信息和知识的记忆，容量大，持续时间长。</p><p><strong>特点：</strong></p><ul><li>容量大（几乎无限）</li><li>持续时间长（永久存储）</li><li>访问速度相对慢</li><li>适合存储重要信息和知识</li></ul><p><strong>应用场景：</strong></p><ul><li>用户偏好</li><li>历史对话</li><li>知识库</li><li>经验总结</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># long_term_memory.py
import chromadb
from chromadb.config import Settings

class LongTermMemory:
    &quot;&quot;&quot;长期记忆&quot;&quot;&quot;
    
    def __init__(self, collection_name=&quot;agent_memory&quot;):
        self.client = chromadb.Client(Settings(
            chroma_db_impl=&quot;duckdb+parquet&quot;,
            persist_directory=&quot;./chroma_db&quot;
        ))
        self.collection = self.client.get_or_create_collection(
            name=collection_name
        )
    
    def add(self, content, metadata=None):
        &quot;&quot;&quot;添加记忆&quot;&quot;&quot;
        import uuid
        memory_id = str(uuid.uuid4())
        
        self.collection.add(
            documents=[content],
            metadatas=[metadata or {}],
            ids=[memory_id]
        )
        
        return memory_id
    
    def search(self, query, n_results=5):
        &quot;&quot;&quot;搜索记忆&quot;&quot;&quot;
        results = self.collection.query(
            query_texts=[query],
            n_results=n_results
        )
        
        return results
    
    def delete(self, memory_id):
        &quot;&quot;&quot;删除记忆&quot;&quot;&quot;
        self.collection.delete(ids=[memory_id])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-工作记忆" tabindex="-1"><a class="header-anchor" href="#_1-3-工作记忆" aria-hidden="true">#</a> 1.3 工作记忆</h3><p><strong>定义：</strong> 用于处理当前任务和推理过程的记忆，容量有限，但访问速度快。</p><p><strong>特点：</strong></p><ul><li>容量小（通常几十到几百个Token）</li><li>持续时间短（任务完成即释放）</li><li>访问速度最快</li><li>适合存储推理过程中的中间结果</li></ul><p><strong>应用场景：</strong></p><ul><li>推理过程</li><li>中间计算结果</li><li>临时状态</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># working_memory.py
class WorkingMemory:
    &quot;&quot;&quot;工作记忆&quot;&quot;&quot;
    
    def __init__(self, max_size=100):
        self.memory = {}
        self.max_size = max_size
    
    def set(self, key, value):
        &quot;&quot;&quot;设置记忆&quot;&quot;&quot;
        if len(self.memory) &gt;= self.max_size:
            # 删除最旧的记录
            oldest_key = next(iter(self.memory))
            del self.memory[oldest_key]
        
        self.memory[key] = {
            &#39;value&#39;: value,
            &#39;timestamp&#39;: time.time()
        }
    
    def get(self, key):
        &quot;&quot;&quot;获取记忆&quot;&quot;&quot;
        return self.memory.get(key, {}).get(&#39;value&#39;)
    
    def clear(self):
        &quot;&quot;&quot;清空记忆&quot;&quot;&quot;
        self.memory.clear()
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># memory_architecture.py
class MemoryArchitecture:
    &quot;&quot;&quot;记忆架构&quot;&quot;&quot;
    
    def __init__(self):
        self.working_memory = WorkingMemory(max_size=100)
        self.short_term_memory = ShortTermMemory(max_size=10000)
        self.long_term_memory = LongTermMemory()
    
    def add_input(self, input_data):
        &quot;&quot;&quot;添加输入&quot;&quot;&quot;
        # 添加到工作记忆
        self.working_memory.set(&#39;current_input&#39;, input_data)
        
        # 添加到短期记忆
        self.short_term_memory.add(input_data)
    
    def process_task(self, task):
        &quot;&quot;&quot;处理任务&quot;&quot;&quot;
        # 从工作记忆获取当前输入
        current_input = self.working_memory.get(&#39;current_input&#39;)
        
        # 处理任务
        result = self._process(task, current_input)
        
        # 存储中间结果到工作记忆
        self.working_memory.set(&#39;task_result&#39;, result)
        
        return result
    
    def consolidate_memory(self):
        &quot;&quot;&quot;整合记忆&quot;&quot;&quot;
        # 从短期记忆获取重要信息
        recent_memories = self.short_term_memory.get_recent(n=10)
        
        # 评估重要性
        important_memories = self._evaluate_importance(recent_memories)
        
        # 存储到长期记忆
        for memory in important_memories:
            self.long_term_memory.add(
                content=memory[&#39;content&#39;],
                metadata={&#39;timestamp&#39;: memory[&#39;timestamp&#39;]}
            )
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点：</strong></p><ul><li>分层存储</li><li>逐层抽象</li><li>优化检索</li></ul><h2 id="第三部分-上下文管理" tabindex="-1"><a class="header-anchor" href="#第三部分-上下文管理" aria-hidden="true">#</a> 第三部分：上下文管理</h2><h3 id="_3-1-上下文窗口" tabindex="-1"><a class="header-anchor" href="#_3-1-上下文窗口" aria-hidden="true">#</a> 3.1 上下文窗口</h3><p><strong>问题：</strong> LLM的上下文窗口有限，无法无限存储对话历史。</p><p><strong>解决方案：</strong></p><p><strong>方案1：滑动窗口</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># sliding_window.py
from collections import deque

class SlidingWindowManager:
    &quot;&quot;&quot;滑动窗口管理器&quot;&quot;&quot;
    
    def __init__(self, window_size=10):
        self.window = deque(maxlen=window_size)
    
    def add_message(self, role, content):
        &quot;&quot;&quot;添加消息&quot;&quot;&quot;
        self.window.append({
            &#39;role&#39;: role,
            &#39;content&#39;: content
        })
    
    def get_context(self):
        &quot;&quot;&quot;获取上下文&quot;&quot;&quot;
        return list(self.window)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方案2：重要性采样</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># importance_sampling.py
class ImportanceSamplingManager:
    &quot;&quot;&quot;重要性采样管理器&quot;&quot;&quot;
    
    def __init__(self, max_tokens=4000):
        self.messages = []
        self.max_tokens = max_tokens
    
    def add_message(self, role, content, importance=1.0):
        &quot;&quot;&quot;添加消息&quot;&quot;&quot;
        self.messages.append({
            &#39;role&#39;: role,
            &#39;content&#39;: content,
            &#39;importance&#39;: importance,
            &#39;tokens&#39;: len(content.split())
        })
    
    def get_context(self):
        &quot;&quot;&quot;获取上下文（基于重要性）&quot;&quot;&quot;
        # 按重要性排序
        sorted_messages = sorted(
            self.messages,
            key=lambda x: x[&#39;importance&#39;],
            reverse=True
        )
        
        # 选择最重要的消息
        selected_messages = []
        total_tokens = 0
        
        for message in sorted_messages:
            if total_tokens + message[&#39;tokens&#39;] &lt;= self.max_tokens:
                selected_messages.append(message)
                total_tokens += message[&#39;tokens&#39;]
        
        # 按时间顺序排序
        selected_messages.sort(key=lambda x: self.messages.index(x))
        
        return selected_messages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方案3：摘要压缩</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># summary_compression.py
class SummaryCompressionManager:
    &quot;&quot;&quot;摘要压缩管理器&quot;&quot;&quot;
    
    def __init__(self, max_tokens=4000, summary_ratio=0.3):
        self.messages = []
        self.max_tokens = max_tokens
        self.summary_ratio = summary_ratio
    
    def add_message(self, role, content):
        &quot;&quot;&quot;添加消息&quot;&quot;&quot;
        self.messages.append({
            &#39;role&#39;: role,
            &#39;content&#39;: content,
            &#39;tokens&#39;: len(content.split())
        })
    
    def get_context(self):
        &quot;&quot;&quot;获取上下文（带摘要压缩）&quot;&quot;&quot;
        # 计算总Token数
        total_tokens = sum(m[&#39;tokens&#39;] for m in self.messages)
        
        if total_tokens &lt;= self.max_tokens:
            return self.messages
        
        # 压缩旧消息
        summary_tokens = int(self.max_tokens * self.summary_ratio)
        context_tokens = self.max_tokens - summary_tokens
        
        # 选择最近的上下文
        recent_messages = []
        accumulated_tokens = 0
        
        for message in reversed(self.messages):
            if accumulated_tokens + message[&#39;tokens&#39;] &lt;= context_tokens:
                recent_messages.insert(0, message)
                accumulated_tokens += message[&#39;tokens&#39;]
        
        # 生成旧消息的摘要
        old_messages = self.messages[:-len(recent_messages)]
        if old_messages:
            summary = self._generate_summary(old_messages)
            recent_messages.insert(0, {
                &#39;role&#39;: &#39;system&#39;,
                &#39;content&#39;: f&quot;Previous conversation summary: {summary}&quot;,
                &#39;tokens&#39;: len(summary.split())
            })
        
        return recent_messages
    
    def _generate_summary(self, messages):
        &quot;&quot;&quot;生成摘要&quot;&quot;&quot;
        # 使用LLM生成摘要
        return &quot;Summary of previous conversation...&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-上下文增强" tabindex="-1"><a class="header-anchor" href="#_3-2-上下文增强" aria-hidden="true">#</a> 3.2 上下文增强</h3><p><strong>方法1：检索增强（RAG）</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># rag_context.py
class RAGContextManager:
    &quot;&quot;&quot;检索增强上下文管理器&quot;&quot;&quot;
    
    def __init__(self, knowledge_base):
        self.knowledge_base = knowledge_base
        self.context_window = []
    
    def add_message(self, role, content):
        &quot;&quot;&quot;添加消息&quot;&quot;&quot;
        self.context_window.append({
            &#39;role&#39;: role,
            &#39;content&#39;: content
        })
    
    def get_context(self, query, n_retrievals=3):
        &quot;&quot;&quot;获取增强的上下文&quot;&quot;&quot;
        # 检索相关知识
        retrieved_docs = self.knowledge_base.search(query, n_results=n_retrievals)
        
        # 构建增强的上下文
        context = self.context_window.copy()
        
        # 在上下文中插入检索到的知识
        if retrieved_docs:
            context.insert(0, {
                &#39;role&#39;: &#39;system&#39;,
                &#39;content&#39;: f&quot;Relevant knowledge: {retrieved_docs}&quot;
            })
        
        return context
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法2：知识图谱增强</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># knowledge_graph_context.py
class KnowledgeGraphContextManager:
    &quot;&quot;&quot;知识图谱上下文管理器&quot;&quot;&quot;
    
    def __init__(self, knowledge_graph):
        self.knowledge_graph = knowledge_graph
        self.context_window = []
    
    def add_message(self, role, content):
        &quot;&quot;&quot;添加消息&quot;&quot;&quot;
        self.context_window.append({
            &#39;role&#39;: role,
            &#39;content&#39;: content
        })
    
    def get_context(self, query):
        &quot;&quot;&quot;获取增强的上下文&quot;&quot;&quot;
        # 从知识图谱中提取相关实体和关系
        entities = self.knowledge_graph.extract_entities(query)
        relations = self.knowledge_graph.get_relations(entities)
        
        # 构建增强的上下文
        context = self.context_window.copy()
        
        if relations:
            context.insert(0, {
                &#39;role&#39;: &#39;system&#39;,
                &#39;content&#39;: f&quot;Related entities and relations: {relations}&quot;
            })
        
        return context
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第四部分-记忆检索" tabindex="-1"><a class="header-anchor" href="#第四部分-记忆检索" aria-hidden="true">#</a> 第四部分：记忆检索</h2><h3 id="_4-1-向量检索" tabindex="-1"><a class="header-anchor" href="#_4-1-向量检索" aria-hidden="true">#</a> 4.1 向量检索</h3><p><strong>原理：</strong> 将文本转换为向量，使用向量相似度进行检索。</p><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># vector_retrieval.py
import chromadb
from chromadb.config import Settings

class VectorRetriever:
    &quot;&quot;&quot;向量检索器&quot;&quot;&quot;
    
    def __init__(self, collection_name=&quot;memory&quot;):
        self.client = chromadb.Client(Settings(
            chroma_db_impl=&quot;duckdb+parquet&quot;,
            persist_directory=&quot;./chroma_db&quot;
        ))
        self.collection = self.client.get_or_create_collection(
            name=collection_name
        )
    
    def add(self, content, metadata=None):
        &quot;&quot;&quot;添加文档&quot;&quot;&quot;
        import uuid
        doc_id = str(uuid.uuid4())
        
        self.collection.add(
            documents=[content],
            metadatas=[metadata or {}],
            ids=[doc_id]
        )
        
        return doc_id
    
    def retrieve(self, query, n_results=5, metadata_filter=None):
        &quot;&quot;&quot;检索文档&quot;&quot;&quot;
        results = self.collection.query(
            query_texts=[query],
            n_results=n_results,
            where=metadata_filter
        )
        
        return results
    
    def delete(self, doc_id):
        &quot;&quot;&quot;删除文档&quot;&quot;&quot;
        self.collection.delete(ids=[doc_id])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-混合检索" tabindex="-1"><a class="header-anchor" href="#_4-2-混合检索" aria-hidden="true">#</a> 4.2 混合检索</h3><p><strong>原理：</strong> 结合向量检索和关键词检索，提升检索准确性。</p><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># hybrid_retrieval.py
from vector_retrieval import VectorRetriever
from keyword_retrieval import KeywordRetriever

class HybridRetriever:
    &quot;&quot;&quot;混合检索器&quot;&quot;&quot;
    
    def __init__(self):
        self.vector_retriever = VectorRetriever()
        self.keyword_retriever = KeywordRetriever()
    
    def retrieve(self, query, n_results=5):
        &quot;&quot;&quot;混合检索&quot;&quot;&quot;
        # 向量检索
        vector_results = self.vector_retriever.retrieve(query, n_results=n_results)
        
        # 关键词检索
        keyword_results = self.keyword_retrieval.retrieve(query, n_results=n_results)
        
        # 合并结果
        hybrid_results = self._merge_results(vector_results, keyword_results)
        
        # 返回前n_results个结果
        return hybrid_results[:n_results]
    
    def _merge_results(self, vector_results, keyword_results):
        &quot;&quot;&quot;合并结果&quot;&quot;&quot;
        # 简单的合并策略
        merged = []
        
        # 添加向量检索结果
        for result in vector_results:
            if result not in merged:
                merged.append(result)
        
        # 添加关键词检索结果
        for result in keyword_results:
            if result not in merged:
                merged.append(result)
        
        return merged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-重排序检索" tabindex="-1"><a class="header-anchor" href="#_4-3-重排序检索" aria-hidden="true">#</a> 4.3 重排序检索</h3><p><strong>原理：</strong> 先使用快速检索获取候选结果，再使用重排序模型进行精排。</p><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># reranking_retrieval.py
from vector_retrieval import VectorRetriever
from reranker import Reranker

class RerankingRetriever:
    &quot;&quot;&quot;重排序检索器&quot;&quot;&quot;
    
    def __init__(self):
        self.vector_retriever = VectorRetriever()
        self.reranker = Reranker()
    
    def retrieve(self, query, n_candidates=20, n_results=5):
        &quot;&quot;&quot;重排序检索&quot;&quot;&quot;
        # 第一阶段：快速检索
        candidates = self.vector_retriever.retrieve(query, n_results=n_candidates)
        
        # 第二阶段：重排序
        reranked_results = self.reranker.rerank(query, candidates)
        
        # 返回前n_results个结果
        return reranked_results[:n_results]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第五部分-记忆优化" tabindex="-1"><a class="header-anchor" href="#第五部分-记忆优化" aria-hidden="true">#</a> 第五部分：记忆优化</h2><h3 id="_5-1-记忆压缩" tabindex="-1"><a class="header-anchor" href="#_5-1-记忆压缩" aria-hidden="true">#</a> 5.1 记忆压缩</h3><p><strong>方法1：摘要压缩</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># memory_compression.py
class MemoryCompressor:
    &quot;&quot;&quot;记忆压缩器&quot;&quot;&quot;
    
    def compress(self, memories):
        &quot;&quot;&quot;压缩记忆&quot;&quot;&quot;
        # 按时间分组
        grouped = self._group_by_time(memories, group_size=5)
        
        # 为每组生成摘要
        compressed = []
        for group in grouped:
            summary = self._generate_summary(group)
            compressed.append({
                &#39;type&#39;: &#39;summary&#39;,
                &#39;content&#39;: summary,
                &#39;timestamp&#39;: group[-1][&#39;timestamp&#39;]
            })
        
        return compressed
    
    def _group_by_time(self, memories, group_size):
        &quot;&quot;&quot;按时间分组&quot;&quot;&quot;
        groups = []
        current_group = []
        
        for memory in memories:
            current_group.append(memory)
            
            if len(current_group) &gt;= group_size:
                groups.append(current_group)
                current_group = []
        
        if current_group:
            groups.append(current_group)
        
        return groups
    
    def _generate_summary(self, memories):
        &quot;&quot;&quot;生成摘要&quot;&quot;&quot;
        # 使用LLM生成摘要
        return &quot;Summary of memories...&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法2：分层压缩</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># hierarchical_compression.py
class HierarchicalCompressor:
    &quot;&quot;&quot;分层压缩器&quot;&quot;&quot;
    
    def compress(self, memories):
        &quot;&quot;&quot;分层压缩&quot;&quot;&quot;
        # 第一层：摘要压缩
        level1 = self._compress_level1(memories)
        
        # 第二层：主题聚类
        level2 = self._compress_level2(level1)
        
        # 第三层：高层摘要
        level3 = self._compress_level3(level2)
        
        return level3
    
    def _compress_level1(self, memories):
        &quot;&quot;&quot;第一层压缩：摘要&quot;&quot;&quot;
        # 将相似的记忆合并为摘要
        return memories
    
    def _compress_level2(self, memories):
        &quot;&quot;&quot;第二层压缩：主题聚类&quot;&quot;&quot;
        # 按主题聚类记忆
        return memories
    
    def _compress_level3(self, memories):
        &quot;&quot;&quot;第三层压缩：高层摘要&quot;&quot;&quot;
        # 生成高层摘要
        return memories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-记忆清理" tabindex="-1"><a class="header-anchor" href="#_5-2-记忆清理" aria-hidden="true">#</a> 5.2 记忆清理</h3><p><strong>清理策略：</strong></p><p><strong>策略1：基于时间的清理</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># time_based_cleanup.py
import time

class TimeBasedCleanup:
    &quot;&quot;&quot;基于时间的清理&quot;&quot;&quot;
    
    def __init__(self, max_age=30*24*3600):  # 30天
        self.max_age = max_age
    
    def cleanup(self, memories):
        &quot;&quot;&quot;清理过期记忆&quot;&quot;&quot;
        current_time = time.time()
        
        cleaned = []
        for memory in memories:
            age = current_time - memory[&#39;timestamp&#39;]
            
            if age &lt; self.max_age:
                cleaned.append(memory)
        
        return cleaned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>策略2：基于重要性的清理</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># importance_based_cleanup.py
class ImportanceBasedCleanup:
    &quot;&quot;&quot;基于重要性的清理&quot;&quot;&quot;
    
    def __init__(self, min_importance=0.5):
        self.min_importance = min_importance
    
    def cleanup(self, memories):
        &quot;&quot;&quot;清理不重要的记忆&quot;&quot;&quot;
        cleaned = []
        
        for memory in memories:
            importance = memory.get(&#39;importance&#39;, 1.0)
            
            if importance &gt;= self.min_importance:
                cleaned.append(memory)
        
        return cleaned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>策略3：基于访问频率的清理</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># frequency_based_cleanup.py
class FrequencyBasedCleanup:
    &quot;&quot;&quot;基于访问频率的清理&quot;&quot;&quot;
    
    def __init__(self, min_access_count=1):
        self.min_access_count = min_access_count
    
    def cleanup(self, memories):
        &quot;&quot;&quot;清理不常访问的记忆&quot;&quot;&quot;
        cleaned = []
        
        for memory in memories:
            access_count = memory.get(&#39;access_count&#39;, 0)
            
            if access_count &gt;= self.min_access_count:
                cleaned.append(memory)
        
        return cleaned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第六部分-最佳实践" tabindex="-1"><a class="header-anchor" href="#第六部分-最佳实践" aria-hidden="true">#</a> 第六部分：最佳实践</h2><h3 id="_6-1-记忆设计原则" tabindex="-1"><a class="header-anchor" href="#_6-1-记忆设计原则" aria-hidden="true">#</a> 6.1 记忆设计原则</h3><p><strong>原则1：分层设计</strong></p><ul><li>工作记忆：处理当前任务</li><li>短期记忆：存储会话信息</li><li>长期记忆：存储重要信息</li></ul><p><strong>原则2：容量优化</strong></p><ul><li>使用滑动窗口</li><li>使用摘要压缩</li><li>使用重要性采样</li></ul><p><strong>原则3：检索优化</strong></p><ul><li>使用向量检索</li><li>使用混合检索</li><li>使用重排序</li></ul><p><strong>原则4：持续优化</strong></p><ul><li>定期清理</li><li>定期压缩</li><li>定期评估</li></ul><h3 id="_6-2-上下文管理最佳实践" tabindex="-1"><a class="header-anchor" href="#_6-2-上下文管理最佳实践" aria-hidden="true">#</a> 6.2 上下文管理最佳实践</h3><p><strong>实践1：合理设置窗口大小</strong></p><ul><li>根据任务复杂度设置</li><li>根据模型上下文窗口设置</li><li>根据成本考虑设置</li></ul><p><strong>实践2：使用上下文增强</strong></p><ul><li>检索相关知识</li><li>使用知识图谱</li><li>使用预训练知识</li></ul><p><strong>实践3：优化上下文质量</strong></p><ul><li>过滤无关信息</li><li>优先重要信息</li><li>使用摘要压缩</li></ul><p><strong>实践4：监控上下文使用</strong></p><ul><li>监控Token消耗</li><li>监控上下文质量</li><li>监控检索效果</li></ul><h2 id="第七部分-未来展望" tabindex="-1"><a class="header-anchor" href="#第七部分-未来展望" aria-hidden="true">#</a> 第七部分：未来展望</h2><h3 id="_7-1-技术发展趋势" tabindex="-1"><a class="header-anchor" href="#_7-1-技术发展趋势" aria-hidden="true">#</a> 7.1 技术发展趋势</h3><p><strong>趋势1：记忆架构智能化</strong></p><ul><li>自动记忆分层</li><li>自动记忆压缩</li><li>自动记忆清理</li></ul><p><strong>趋势2：检索技术进步</strong></p><ul><li>多模态检索</li><li>实时检索</li><li>个性化检索</li></ul><p><strong>趋势3：上下文管理优化</strong></p><ul><li>动态上下文窗口</li><li>智能上下文压缩</li><li>上下文预测</li></ul><h3 id="_7-2-挑战与机遇" tabindex="-1"><a class="header-anchor" href="#_7-2-挑战与机遇" aria-hidden="true">#</a> 7.2 挑战与机遇</h3><p><strong>挑战：</strong></p><ol><li>记忆容量限制</li><li>检索准确性</li><li>上下文窗口限制</li><li>记忆一致性</li></ol><p><strong>机遇：</strong></p><ol><li>向量数据库发展</li><li>检索技术进步</li><li>上下文窗口扩大</li><li>记忆架构创新</li></ol><h2 id="总结-ai-agent的记忆与上下文管理" tabindex="-1"><a class="header-anchor" href="#总结-ai-agent的记忆与上下文管理" aria-hidden="true">#</a> 总结：AI Agent的记忆与上下文管理</h2><p>记忆和上下文管理是AI Agent智能水平的关键指标。</p><p><strong>关键要点：</strong></p><ol><li><p><strong>记忆类型</strong></p><ul><li>短期记忆</li><li>长期记忆</li><li>工作记忆</li></ul></li><li><p><strong>记忆架构</strong></p><ul><li>三层记忆架构</li><li>分层记忆架构</li></ul></li><li><p><strong>上下文管理</strong></p><ul><li>上下文窗口</li><li>上下文增强</li><li>上下文压缩</li></ul></li><li><p><strong>记忆检索</strong></p><ul><li>向量检索</li><li>混合检索</li><li>重排序检索</li></ul></li><li><p><strong>记忆优化</strong></p><ul><li>记忆压缩</li><li>记忆清理</li></ul></li></ol><p><strong>实践建议：</strong></p><ol><li><p><strong>设计合理的记忆架构</strong></p><ul><li>分层设计</li><li>容量优化</li><li>检索优化</li></ul></li><li><p><strong>优化上下文管理</strong></p><ul><li>合理设置窗口大小</li><li>使用上下文增强</li><li>优化上下文质量</li></ul></li><li><p><strong>持续优化记忆</strong></p><ul><li>定期清理</li><li>定期压缩</li><li>定期评估</li></ul></li></ol><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ol><li>认知科学研究</li><li>AI Agent框架文档</li><li>向量数据库最佳实践</li><li>企业级应用案例</li></ol><hr><p><strong>系列文章导航：</strong></p><ol><li>AI增强型全栈开发者的技术定位与能力模型</li><li>全栈开发的技术演进：从工具时代到智能体时代</li><li>AI编程效率的实证研究：从神话到现实</li><li>Agents vs Skills - 技术范式之争</li><li>Vibe Coding的批判性分析</li><li>Claude Skills深度解析</li><li>AI工具链的工程化实践</li><li>企业级AI应用的最佳实践</li><li>AI时代的系统设计思维</li><li>Prompt Engineering的工程化方法</li><li>AI Agent的记忆与上下文管理（本文）</li><li>2026-2030技术趋势大胆预测与多方向展望</li></ol>`,130)])])}const t=n(d,[["render",r],["__file","11-AI Agent的记忆与上下文管理.html.vue"]]);export{t as default};
