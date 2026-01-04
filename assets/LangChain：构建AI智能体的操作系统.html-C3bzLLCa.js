import{_ as p,r as o,c as i,o as l,a as c,b as s,d as e,e as t}from"./app-D2t769wk.js";const r={},u={href:"https://python.langchain.com/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/langchain-ai/langchain",target:"_blank",rel:"noopener noreferrer"},k={href:"https://langchain-ai.github.io/langgraph/",target:"_blank",rel:"noopener noreferrer"};function v(m,n){const a=o("ExternalLinkIcon");return l(),i("div",null,[n[3]||(n[3]=c(`<h1 id="langchain-构建ai智能体的操作系统" tabindex="-1"><a class="header-anchor" href="#langchain-构建ai智能体的操作系统" aria-hidden="true">#</a> LangChain：构建AI智能体的操作系统</h1><blockquote><p>从工具链到平台化，LangChain如何成为AI智能体的核心基础设施</p></blockquote><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>2025年10月，开源AI智能体框架LangChain宣布完成1.25亿美元B轮融资，估值达到12.5亿美元，正式跻身全球科技独角兽行列。这一里程碑事件标志着AI智能体框架已成为AI基础设施的核心赛道。本文将深入探讨LangChain的技术架构、核心能力、应用场景以及它在AI智能体生态系统中的重要地位。</p><h2 id="langchain的发展历程" tabindex="-1"><a class="header-anchor" href="#langchain的发展历程" aria-hidden="true">#</a> LangChain的发展历程</h2><h3 id="_2022年-开源项目的诞生" tabindex="-1"><a class="header-anchor" href="#_2022年-开源项目的诞生" aria-hidden="true">#</a> 2022年：开源项目的诞生</h3><ul><li><strong>创始人</strong>：Harrison Chase（机器学习工程师）</li><li><strong>初衷</strong>：解决大语言模型与外部系统交互的痛点</li><li><strong>核心理念</strong>：提供标准化接口与工具链</li></ul><h3 id="_2023年-公司化转型" tabindex="-1"><a class="header-anchor" href="#_2023年-公司化转型" aria-hidden="true">#</a> 2023年：公司化转型</h3><ul><li><strong>4月</strong>：Benchmark Capital领投1000万美元种子轮</li><li><strong>4月</strong>：红杉资本主导2500万美元A轮，估值2亿美元</li><li><strong>战略转折</strong>：从工具链转向智能体平台建设</li></ul><h3 id="_2024-2025年-平台化升级" tabindex="-1"><a class="header-anchor" href="#_2024-2025年-平台化升级" aria-hidden="true">#</a> 2024-2025年：平台化升级</h3><ul><li><strong>产品矩阵</strong>：LangChain + LangGraph + LangSmith</li><li><strong>生态扩张</strong>：支持OpenAI、Anthropic、Google等多模型</li><li><strong>商业化</strong>：企业版服务、定制化解决方案</li></ul><h3 id="_2025年-独角兽时刻" tabindex="-1"><a class="header-anchor" href="#_2025年-独角兽时刻" aria-hidden="true">#</a> 2025年：独角兽时刻</h3><ul><li><strong>融资</strong>：1.25亿美元B轮，估值12.5亿美元</li><li><strong>投资方</strong>：IVP领投，CapitalG、Sapphire Ventures加入</li><li><strong>社区规模</strong>：GitHub 11.8万星，1.94万分支</li></ul><h2 id="核心架构" tabindex="-1"><a class="header-anchor" href="#核心架构" aria-hidden="true">#</a> 核心架构</h2><h3 id="三层架构设计" tabindex="-1"><a class="header-anchor" href="#三层架构设计" aria-hidden="true">#</a> 三层架构设计</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># LangChain的三层架构</span>
<span class="token keyword">class</span> <span class="token class-name">LangChainArchitecture</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 应用层：用户交互与业务逻辑</span>
        self<span class="token punctuation">.</span>application_layer <span class="token operator">=</span> ApplicationLayer<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 编排层：任务分解、工具调用、状态管理</span>
        self<span class="token punctuation">.</span>orchestration_layer <span class="token operator">=</span> OrchestrationLayer<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 推理层：模型推理、生成、预测</span>
        self<span class="token punctuation">.</span>inference_layer <span class="token operator">=</span> InferenceLayer<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心组件详解" tabindex="-1"><a class="header-anchor" href="#核心组件详解" aria-hidden="true">#</a> 核心组件详解</h3><h4 id="_1-langchain-核心工具链" tabindex="-1"><a class="header-anchor" href="#_1-langchain-核心工具链" aria-hidden="true">#</a> 1. LangChain（核心工具链）</h4><p><strong>功能模块：</strong></p><ul><li><strong>Models</strong>：统一的大模型接口</li><li><strong>Prompts</strong>：提示词模板管理</li><li><strong>Memory</strong>：记忆与上下文管理</li><li><strong>Chains</strong>：链式任务编排</li><li><strong>Agents</strong>：智能体框架</li><li><strong>Tools</strong>：工具调用接口</li><li><strong>Indexes</strong>：向量数据库集成</li></ul><p><strong>代码示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>chains <span class="token keyword">import</span> ConversationChain
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>memory <span class="token keyword">import</span> ConversationBufferMemory
<span class="token keyword">from</span> langchain_openai <span class="token keyword">import</span> ChatOpenAI

<span class="token comment"># 创建对话链</span>
llm <span class="token operator">=</span> ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">,</span> temperature<span class="token operator">=</span><span class="token number">0.7</span><span class="token punctuation">)</span>
memory <span class="token operator">=</span> ConversationBufferMemory<span class="token punctuation">(</span><span class="token punctuation">)</span>

chain <span class="token operator">=</span> ConversationChain<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>llm<span class="token punctuation">,</span>
    memory<span class="token operator">=</span>memory<span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>

<span class="token comment"># 执行对话</span>
response <span class="token operator">=</span> chain<span class="token punctuation">.</span>predict<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token operator">=</span><span class="token string">&quot;解释量子计算的基本原理&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-langgraph-状态管理与编排" tabindex="-1"><a class="header-anchor" href="#_2-langgraph-状态管理与编排" aria-hidden="true">#</a> 2. LangGraph（状态管理与编排）</h4><p><strong>核心特性：</strong></p><ul><li><strong>状态图</strong>：有向图表示任务流程</li><li><strong>循环与条件</strong>：支持复杂逻辑分支</li><li><strong>多Agent协作</strong>：Agent间通信与协调</li><li><strong>持久化</strong>：状态保存与恢复</li></ul><p><strong>架构示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langgraph<span class="token punctuation">.</span>graph <span class="token keyword">import</span> StateGraph<span class="token punctuation">,</span> END
<span class="token keyword">from</span> langgraph<span class="token punctuation">.</span>prebuilt <span class="token keyword">import</span> ToolNode

<span class="token comment"># 定义状态</span>
<span class="token keyword">class</span> <span class="token class-name">AgentState</span><span class="token punctuation">:</span>
    messages<span class="token punctuation">:</span> <span class="token builtin">list</span>
    next_agent<span class="token punctuation">:</span> <span class="token builtin">str</span>

<span class="token comment"># 创建状态图</span>
workflow <span class="token operator">=</span> StateGraph<span class="token punctuation">(</span>AgentState<span class="token punctuation">)</span>

<span class="token comment"># 添加节点</span>
workflow<span class="token punctuation">.</span>add_node<span class="token punctuation">(</span><span class="token string">&quot;researcher&quot;</span><span class="token punctuation">,</span> researcher_agent<span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_node<span class="token punctuation">(</span><span class="token string">&quot;writer&quot;</span><span class="token punctuation">,</span> writer_agent<span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_node<span class="token punctuation">(</span><span class="token string">&quot;reviewer&quot;</span><span class="token punctuation">,</span> reviewer_agent<span class="token punctuation">)</span>

<span class="token comment"># 定义边（条件路由）</span>
<span class="token keyword">def</span> <span class="token function">route_to_next</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token string">&quot;review&quot;</span> <span class="token keyword">in</span> state<span class="token punctuation">.</span>messages<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;reviewer&quot;</span>
    <span class="token keyword">elif</span> <span class="token string">&quot;write&quot;</span> <span class="token keyword">in</span> state<span class="token punctuation">.</span>messages<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;writer&quot;</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;researcher&quot;</span>

workflow<span class="token punctuation">.</span>add_conditional_edges<span class="token punctuation">(</span>
    <span class="token string">&quot;researcher&quot;</span><span class="token punctuation">,</span>
    route_to_next<span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;writer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;writer&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;reviewer&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;reviewer&quot;</span><span class="token punctuation">,</span>
        END<span class="token punctuation">:</span> END
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-langsmith-测试与可观测性" tabindex="-1"><a class="header-anchor" href="#_3-langsmith-测试与可观测性" aria-hidden="true">#</a> 3. LangSmith（测试与可观测性）</h4><p><strong>核心功能：</strong></p><ul><li><strong>追踪</strong>：完整的调用链追踪</li><li><strong>评估</strong>：自动化测试与评估</li><li><strong>监控</strong>：性能指标监控</li><li><strong>调试</strong>：交互式调试环境</li></ul><p><strong>使用示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langsmith <span class="token keyword">import</span> Client

<span class="token comment"># 初始化客户端</span>
client <span class="token operator">=</span> Client<span class="token punctuation">(</span>api_key<span class="token operator">=</span><span class="token string">&quot;your-api-key&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建追踪</span>
run <span class="token operator">=</span> client<span class="token punctuation">.</span>create_run<span class="token punctuation">(</span>
    project_name<span class="token operator">=</span><span class="token string">&quot;my-agent&quot;</span><span class="token punctuation">,</span>
    inputs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;分析最新的AI趋势&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment"># 查看追踪结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>run<span class="token punctuation">.</span>trace<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心能力" tabindex="-1"><a class="header-anchor" href="#核心能力" aria-hidden="true">#</a> 核心能力</h2><h3 id="_1-模块化工具库" tabindex="-1"><a class="header-anchor" href="#_1-模块化工具库" aria-hidden="true">#</a> 1. 模块化工具库</h3><p><strong>支持的工具类型：</strong></p><ul><li><strong>文档加载器</strong>：PDF、Word、Excel、Markdown等20+格式</li><li><strong>向量数据库</strong>：Chroma、FAISS、Pinecone等</li><li><strong>API集成</strong>：OpenAI、HuggingFace、自定义API</li><li><strong>Web工具</strong>：搜索、爬虫、API调用</li></ul><p><strong>工具集成示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>tools <span class="token keyword">import</span> Tool
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>utilities <span class="token keyword">import</span> SerpAPIWrapper

<span class="token comment"># 创建搜索工具</span>
search <span class="token operator">=</span> SerpAPIWrapper<span class="token punctuation">(</span><span class="token punctuation">)</span>
search_tool <span class="token operator">=</span> Tool<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&quot;Search&quot;</span><span class="token punctuation">,</span>
    func<span class="token operator">=</span>search<span class="token punctuation">.</span>run<span class="token punctuation">,</span>
    description<span class="token operator">=</span><span class="token string">&quot;搜索互联网获取最新信息&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment"># 创建计算器工具</span>
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>tools <span class="token keyword">import</span> StructuredTool
<span class="token keyword">from</span> calculator <span class="token keyword">import</span> Calculator

calc <span class="token operator">=</span> StructuredTool<span class="token punctuation">.</span>from_function<span class="token punctuation">(</span>
    Calculator<span class="token punctuation">.</span>calculate<span class="token punctuation">,</span>
    name<span class="token operator">=</span><span class="token string">&quot;Calculator&quot;</span><span class="token punctuation">,</span>
    description<span class="token operator">=</span><span class="token string">&quot;执行数学计算&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-多模型支持" tabindex="-1"><a class="header-anchor" href="#_2-多模型支持" aria-hidden="true">#</a> 2. 多模型支持</h3><p><strong>支持的模型提供商：</strong></p><ul><li>OpenAI：GPT-4、GPT-3.5、GPT-5.2</li><li>Anthropic：Claude 3、Claude 4</li><li>Google：Gemini 2.5、Gemini 3</li><li>开源模型：Llama 3、Qwen3、DeepSeek</li><li>本地模型：Ollama、vLLM</li></ul><p><strong>模型切换示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain_openai <span class="token keyword">import</span> ChatOpenAI
<span class="token keyword">from</span> langchain_anthropic <span class="token keyword">import</span> ChatAnthropic
<span class="token keyword">from</span> langchain_community<span class="token punctuation">.</span>llms <span class="token keyword">import</span> HuggingFacePipeline

<span class="token comment"># 切换不同模型</span>
<span class="token keyword">def</span> <span class="token function">get_model</span><span class="token punctuation">(</span>provider<span class="token operator">=</span><span class="token string">&quot;openai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> provider <span class="token operator">==</span> <span class="token string">&quot;openai&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> provider <span class="token operator">==</span> <span class="token string">&quot;anthropic&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> ChatAnthropic<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;claude-3-opus&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> provider <span class="token operator">==</span> <span class="token string">&quot;local&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> HuggingFacePipeline<span class="token punctuation">.</span>from_model_id<span class="token punctuation">(</span>
            <span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span>
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-rag-检索增强生成" tabindex="-1"><a class="header-anchor" href="#_3-rag-检索增强生成" aria-hidden="true">#</a> 3. RAG（检索增强生成）</h3><p><strong>RAG架构：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>chains <span class="token keyword">import</span> RetrievalQA
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>document_loaders <span class="token keyword">import</span> TextLoader
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>text_splitter <span class="token keyword">import</span> RecursiveCharacterTextSplitter
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>embeddings <span class="token keyword">import</span> OpenAIEmbeddings
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>vectorstores <span class="token keyword">import</span> Chroma

<span class="token comment"># 加载文档</span>
loader <span class="token operator">=</span> TextLoader<span class="token punctuation">(</span><span class="token string">&quot;knowledge_base.txt&quot;</span><span class="token punctuation">)</span>
documents <span class="token operator">=</span> loader<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 分割文档</span>
text_splitter <span class="token operator">=</span> RecursiveCharacterTextSplitter<span class="token punctuation">(</span>
    chunk_size<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">,</span>
    chunk_overlap<span class="token operator">=</span><span class="token number">200</span>
<span class="token punctuation">)</span>
splits <span class="token operator">=</span> text_splitter<span class="token punctuation">.</span>split_documents<span class="token punctuation">(</span>documents<span class="token punctuation">)</span>

<span class="token comment"># 创建向量数据库</span>
embeddings <span class="token operator">=</span> OpenAIEmbeddings<span class="token punctuation">(</span><span class="token punctuation">)</span>
vectorstore <span class="token operator">=</span> Chroma<span class="token punctuation">.</span>from_documents<span class="token punctuation">(</span>
    documents<span class="token operator">=</span>splits<span class="token punctuation">,</span>
    embedding<span class="token operator">=</span>embeddings
<span class="token punctuation">)</span>

<span class="token comment"># 创建RAG链</span>
retriever <span class="token operator">=</span> vectorstore<span class="token punctuation">.</span>as_retriever<span class="token punctuation">(</span><span class="token punctuation">)</span>
qa_chain <span class="token operator">=</span> RetrievalQA<span class="token punctuation">.</span>from_chain_type<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>ChatOpenAI<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    chain_type<span class="token operator">=</span><span class="token string">&quot;stuff&quot;</span><span class="token punctuation">,</span>
    retriever<span class="token operator">=</span>retriever
<span class="token punctuation">)</span>

<span class="token comment"># 查询</span>
result <span class="token operator">=</span> qa_chain<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span><span class="token string">&quot;什么是LangChain？&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-agent智能体" tabindex="-1"><a class="header-anchor" href="#_4-agent智能体" aria-hidden="true">#</a> 4. Agent智能体</h3><p><strong>Agent类型：</strong></p><h4 id="_1-react-agent-推理-行动" tabindex="-1"><a class="header-anchor" href="#_1-react-agent-推理-行动" aria-hidden="true">#</a> 1. ReAct Agent（推理+行动）</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>agents <span class="token keyword">import</span> AgentExecutor<span class="token punctuation">,</span> create_react_agent
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>tools <span class="token keyword">import</span> Tool

<span class="token comment"># 定义Agent</span>
agent <span class="token operator">=</span> create_react_agent<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    tools<span class="token operator">=</span><span class="token punctuation">[</span>search_tool<span class="token punctuation">,</span> calc_tool<span class="token punctuation">]</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>

agent_executor <span class="token operator">=</span> AgentExecutor<span class="token punctuation">.</span>from_agent_and_tools<span class="token punctuation">(</span>
    agent<span class="token operator">=</span>agent<span class="token punctuation">,</span>
    tools<span class="token operator">=</span><span class="token punctuation">[</span>search_tool<span class="token punctuation">,</span> calc_tool<span class="token punctuation">]</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>

<span class="token comment"># 执行任务</span>
result <span class="token operator">=</span> agent_executor<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span>
    <span class="token string">&quot;计算2025年AI市场的增长率，并搜索相关数据&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-openai-functions-agent" tabindex="-1"><a class="header-anchor" href="#_2-openai-functions-agent" aria-hidden="true">#</a> 2. OpenAI Functions Agent</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>agents <span class="token keyword">import</span> create_openai_functions_agent

agent <span class="token operator">=</span> create_openai_functions_agent<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    functions<span class="token operator">=</span><span class="token punctuation">[</span>search_tool<span class="token punctuation">,</span> calc_tool<span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-自定义agent" tabindex="-1"><a class="header-anchor" href="#_3-自定义agent" aria-hidden="true">#</a> 3. 自定义Agent</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>agents <span class="token keyword">import</span> AgentExecutor<span class="token punctuation">,</span> Agent
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>tools <span class="token keyword">import</span> BaseTool

<span class="token keyword">class</span> <span class="token class-name">CustomTool</span><span class="token punctuation">(</span>BaseTool<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&quot;custom_tool&quot;</span>
    description <span class="token operator">=</span> <span class="token string">&quot;自定义工具描述&quot;</span>
    
    <span class="token keyword">def</span> <span class="token function">_run</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 自定义逻辑</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;处理结果: </span><span class="token interpolation"><span class="token punctuation">{</span>query<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>

<span class="token comment"># 创建自定义Agent</span>
<span class="token keyword">class</span> <span class="token class-name">CustomAgent</span><span class="token punctuation">(</span>Agent<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> tools<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>tools <span class="token operator">=</span> tools
        self<span class="token punctuation">.</span>llm <span class="token operator">=</span> ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">plan</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> task<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 任务规划</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>llm<span class="token punctuation">.</span>predict<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;规划任务: </span><span class="token interpolation"><span class="token punctuation">{</span>task<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> plan<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 执行计划</span>
        <span class="token keyword">for</span> step <span class="token keyword">in</span> plan<span class="token punctuation">:</span>
            tool <span class="token operator">=</span> self<span class="token punctuation">.</span>select_tool<span class="token punctuation">(</span>step<span class="token punctuation">)</span>
            result <span class="token operator">=</span> tool<span class="token punctuation">.</span>run<span class="token punctuation">(</span>step<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><h3 id="_1-企业级知识库问答" tabindex="-1"><a class="header-anchor" href="#_1-企业级知识库问答" aria-hidden="true">#</a> 1. 企业级知识库问答</h3><p><strong>架构：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用户查询 → RAG系统 → 向量检索 → 答案生成 → 结果返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>chains <span class="token keyword">import</span> ConversationalRetrievalChain
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>memory <span class="token keyword">import</span> ConversationBufferMemory

<span class="token comment"># 创建对话式RAG</span>
qa_chain <span class="token operator">=</span> ConversationalRetrievalChain<span class="token punctuation">.</span>from_llm<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    retriever<span class="token operator">=</span>vectorstore<span class="token punctuation">.</span>as_retriever<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    memory<span class="token operator">=</span>ConversationBufferMemory<span class="token punctuation">(</span>
        memory_key<span class="token operator">=</span><span class="token string">&quot;chat_history&quot;</span><span class="token punctuation">,</span>
        return_messages<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-文档分析与摘要" tabindex="-1"><a class="header-anchor" href="#_2-文档分析与摘要" aria-hidden="true">#</a> 2. 文档分析与摘要</h3><p><strong>功能：</strong></p><ul><li>长文档摘要</li><li>关键信息提取</li><li>跨文档问答</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>chains<span class="token punctuation">.</span>summarize <span class="token keyword">import</span> load_summarize_chain
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>doc_loaders <span class="token keyword">import</span> PyPDFLoader

<span class="token comment"># 加载PDF文档</span>
loader <span class="token operator">=</span> PyPDFLoader<span class="token punctuation">(</span><span class="token string">&quot;document.pdf&quot;</span><span class="token punctuation">)</span>
documents <span class="token operator">=</span> loader<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 创建摘要链</span>
summarize_chain <span class="token operator">=</span> load_summarize_chain<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    chain_type<span class="token operator">=</span><span class="token string">&quot;map_reduce&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment"># 生成摘要</span>
summary <span class="token operator">=</span> summarize_chain<span class="token punctuation">.</span>run<span class="token punctuation">(</span>documents<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-代码生成与审查" tabindex="-1"><a class="header-anchor" href="#_3-代码生成与审查" aria-hidden="true">#</a> 3. 代码生成与审查</h3><p><strong>功能：</strong></p><ul><li>代码生成</li><li>代码审查</li><li>Bug检测</li><li>代码优化</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>chains <span class="token keyword">import</span> LLMChain
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>prompts <span class="token keyword">import</span> PromptTemplate

<span class="token comment"># 创建代码生成链</span>
code_prompt <span class="token operator">=</span> PromptTemplate<span class="token punctuation">(</span>
    input_variables<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;language&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;task&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    template<span class="token operator">=</span><span class="token string">&quot;用{language}编写代码：{task}&quot;</span>
<span class="token punctuation">)</span>

code_chain <span class="token operator">=</span> LLMChain<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>ChatOpenAI<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;gpt-4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    prompt<span class="token operator">=</span>code_prompt
<span class="token punctuation">)</span>

<span class="token comment"># 生成代码</span>
code <span class="token operator">=</span> code_chain<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
    language<span class="token operator">=</span><span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span>
    task<span class="token operator">=</span><span class="token string">&quot;实现一个快速排序算法&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-多agent协作系统" tabindex="-1"><a class="header-anchor" href="#_4-多agent协作系统" aria-hidden="true">#</a> 4. 多Agent协作系统</h3><p><strong>场景：</strong></p><ul><li>复杂任务分解</li><li>专业Agent分工</li><li>结果整合</li></ul><p><strong>实现示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langgraph<span class="token punctuation">.</span>graph <span class="token keyword">import</span> StateGraph

<span class="token comment"># 创建多Agent协作系统</span>
workflow <span class="token operator">=</span> StateGraph<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 添加专业Agent</span>
workflow<span class="token punctuation">.</span>add_node<span class="token punctuation">(</span><span class="token string">&quot;researcher&quot;</span><span class="token punctuation">,</span> research_agent<span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_node<span class="token punctuation">(</span><span class="token string">&quot;developer&quot;</span><span class="token punctuation">,</span> developer_agent<span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_node<span class="token punctuation">(</span><span class="token string">&quot;tester&quot;</span><span class="token punctuation">,</span> tester_agent<span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_node<span class="token punctuation">(</span><span class="token string">&quot;manager&quot;</span><span class="token punctuation">,</span> manager_agent<span class="token punctuation">)</span>

<span class="token comment"># 定义协作流程</span>
workflow<span class="token punctuation">.</span>add_edge<span class="token punctuation">(</span><span class="token string">&quot;manager&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;researcher&quot;</span><span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_edge<span class="token punctuation">(</span><span class="token string">&quot;researcher&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;developer&quot;</span><span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_edge<span class="token punctuation">(</span><span class="token string">&quot;developer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tester&quot;</span><span class="token punctuation">)</span>
workflow<span class="token punctuation">.</span>add_edge<span class="token punctuation">(</span><span class="token string">&quot;tester&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;manager&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战案例" tabindex="-1"><a class="header-anchor" href="#实战案例" aria-hidden="true">#</a> 实战案例</h2><h3 id="案例1-vodafone数据运营革命" tabindex="-1"><a class="header-anchor" href="#案例1-vodafone数据运营革命" aria-hidden="true">#</a> 案例1：Vodafone数据运营革命</h3><p><strong>背景：</strong></p><ul><li>服务3.4亿用户</li><li>300TB实时数据</li><li>5000技术文档</li><li>200类监测指标</li></ul><p><strong>解决方案：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 智能仪表盘</span>
<span class="token keyword">class</span> <span class="token class-name">InsightEngine</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>nl2sql <span class="token operator">=</span> NL2SQLChain<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>visualizer <span class="token operator">=</span> ChartGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">process_query</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 自然语言转SQL</span>
        sql <span class="token operator">=</span> self<span class="token punctuation">.</span>nl2sql<span class="token punctuation">.</span>run<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
        <span class="token comment"># 执行查询</span>
        data <span class="token operator">=</span> self<span class="token punctuation">.</span>execute_sql<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
        <span class="token comment"># 生成可视化</span>
        chart <span class="token operator">=</span> self<span class="token punctuation">.</span>visualizer<span class="token punctuation">.</span>generate<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        <span class="token keyword">return</span> chart

<span class="token comment"># 文档搜索引擎</span>
<span class="token keyword">class</span> <span class="token class-name">Enigma</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>vector_store <span class="token operator">=</span> Chroma<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>rag_pipeline <span class="token operator">=</span> RAGPipeline<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 向量检索</span>
        docs <span class="token operator">=</span> self<span class="token punctuation">.</span>vector_store<span class="token punctuation">.</span>similarity_search<span class="token punctuation">(</span>query<span class="token punctuation">,</span> k<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>
        <span class="token comment"># RAG增强</span>
        answer <span class="token operator">=</span> self<span class="token punctuation">.</span>rag_pipeline<span class="token punctuation">.</span>run<span class="token punctuation">(</span>query<span class="token punctuation">,</span> docs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> answer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果：</strong></p><ul><li>故障诊断时间：45分钟 → 15分钟</li><li>工程师效率：提升300%</li><li>异常检测准确率：提升68%</li></ul><h3 id="案例2-智能客服系统" tabindex="-1"><a class="header-anchor" href="#案例2-智能客服系统" aria-hidden="true">#</a> 案例2：智能客服系统</h3><p><strong>架构：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>agents <span class="token keyword">import</span> AgentExecutor
<span class="token keyword">from</span> langchain<span class="token punctuation">.</span>tools <span class="token keyword">import</span> Tool

<span class="token keyword">class</span> <span class="token class-name">CustomerServiceAgent</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>knowledge_base <span class="token operator">=</span> VectorStore<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>order_system <span class="token operator">=</span> OrderSystemTool<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>ticket_system <span class="token operator">=</span> TicketSystemTool<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
    <span class="token keyword">def</span> <span class="token function">handle_query</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 意图识别</span>
        intent <span class="token operator">=</span> self<span class="token punctuation">.</span>classify_intent<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
        
        <span class="token comment"># 路由到相应工具</span>
        <span class="token keyword">if</span> intent <span class="token operator">==</span> <span class="token string">&quot;order&quot;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>order_system<span class="token punctuation">.</span>handle<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> intent <span class="token operator">==</span> <span class="token string">&quot;ticket&quot;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>ticket_system<span class="token punctuation">.</span>handle<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># RAG增强回答</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>rag_answer<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="_1-缓存机制" tabindex="-1"><a class="header-anchor" href="#_1-缓存机制" aria-hidden="true">#</a> 1. 缓存机制</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>cache <span class="token keyword">import</span> InMemoryCache

<span class="token comment"># 启用缓存</span>
cache <span class="token operator">=</span> InMemoryCache<span class="token punctuation">(</span><span class="token punctuation">)</span>

chain <span class="token operator">=</span> ConversationChain<span class="token punctuation">(</span>
    llm<span class="token operator">=</span>llm<span class="token punctuation">,</span>
    cache<span class="token operator">=</span>cache
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-批处理" tabindex="-1"><a class="header-anchor" href="#_2-批处理" aria-hidden="true">#</a> 2. 批处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>batch <span class="token keyword">import</span> BatchManager

<span class="token comment"># 批量处理</span>
batch_manager <span class="token operator">=</span> BatchManager<span class="token punctuation">(</span><span class="token punctuation">)</span>

queries <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;什么是AI？&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;什么是机器学习？&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;什么是深度学习？&quot;</span>
<span class="token punctuation">]</span>

results <span class="token operator">=</span> batch_manager<span class="token punctuation">.</span>batch_run<span class="token punctuation">(</span>chain<span class="token punctuation">,</span> queries<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-异步执行" tabindex="-1"><a class="header-anchor" href="#_3-异步执行" aria-hidden="true">#</a> 3. 异步执行</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">async_chain_run</span><span class="token punctuation">(</span>chain<span class="token punctuation">,</span> input_text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> chain<span class="token punctuation">.</span>arun<span class="token punctuation">(</span>input_text<span class="token punctuation">)</span>

<span class="token comment"># 并发执行</span>
results <span class="token operator">=</span> <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>gather<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">[</span>
    async_chain_run<span class="token punctuation">(</span>chain<span class="token punctuation">,</span> query<span class="token punctuation">)</span>
    <span class="token keyword">for</span> query <span class="token keyword">in</span> queries
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全与最佳实践" tabindex="-1"><a class="header-anchor" href="#安全与最佳实践" aria-hidden="true">#</a> 安全与最佳实践</h2><h3 id="_1-提示注入防护" tabindex="-1"><a class="header-anchor" href="#_1-提示注入防护" aria-hidden="true">#</a> 1. 提示注入防护</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>prompts <span class="token keyword">import</span> PromptTemplate

<span class="token comment"># 使用安全的提示模板</span>
safe_prompt <span class="token operator">=</span> PromptTemplate<span class="token punctuation">(</span>
    template<span class="token operator">=</span><span class="token string">&quot;请回答以下问题：{question}&quot;</span><span class="token punctuation">,</span>
    input_variables<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token comment"># 输入验证</span>
<span class="token keyword">def</span> <span class="token function">validate_input</span><span class="token punctuation">(</span>input_text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 检查恶意输入</span>
    <span class="token keyword">if</span> <span class="token string">&quot;&lt;script&gt;&quot;</span> <span class="token keyword">in</span> input_text<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&quot;检测到潜在恶意输入&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> input_text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-api密钥管理" tabindex="-1"><a class="header-anchor" href="#_2-api密钥管理" aria-hidden="true">#</a> 2. API密钥管理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> dotenv <span class="token keyword">import</span> load_dotenv

<span class="token comment"># 加载环境变量</span>
load_dotenv<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 使用环境变量</span>
api_key <span class="token operator">=</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">&quot;OPENAI_API_KEY&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-错误处理" tabindex="-1"><a class="header-anchor" href="#_3-错误处理" aria-hidden="true">#</a> 3. 错误处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>schema <span class="token keyword">import</span> StrOutputParser

<span class="token comment"># 添加错误处理</span>
<span class="token keyword">def</span> <span class="token function">safe_chain_run</span><span class="token punctuation">(</span>chain<span class="token punctuation">,</span> input_text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        result <span class="token operator">=</span> chain<span class="token punctuation">.</span>run<span class="token punctuation">(</span>input_text<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token comment"># 记录错误</span>
        logger<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Chain执行失败: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token comment"># 返回友好错误信息</span>
        <span class="token keyword">return</span> <span class="token string">&quot;抱歉，处理您的请求时遇到了问题。&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生态系统" tabindex="-1"><a class="header-anchor" href="#生态系统" aria-hidden="true">#</a> 生态系统</h2><h3 id="_1-langchain-hub" tabindex="-1"><a class="header-anchor" href="#_1-langchain-hub" aria-hidden="true">#</a> 1. LangChain Hub</h3><p><strong>功能：</strong></p><ul><li>预构建的Chain模板</li><li>社区贡献的Agent</li><li>工具集成示例</li></ul><h3 id="_2-社区资源" tabindex="-1"><a class="header-anchor" href="#_2-社区资源" aria-hidden="true">#</a> 2. 社区资源</h3><ul><li><strong>GitHub</strong>：11.8万星，1.94万分支</li><li><strong>Discord</strong>：活跃的开发者社区</li><li><strong>文档</strong>：详尽的API文档和教程</li><li><strong>教程</strong>：丰富的学习资源</li></ul><h3 id="_3-集成生态" tabindex="-1"><a class="header-anchor" href="#_3-集成生态" aria-hidden="true">#</a> 3. 集成生态</h3><p><strong>支持的集成：</strong></p><ul><li>数据库：PostgreSQL、MongoDB、Redis</li><li>云服务：AWS、Azure、GCP</li><li>工具：Jupyter、VS Code、GitHub Actions</li><li>平台：Slack、Teams、Discord</li></ul><h2 id="未来展望" tabindex="-1"><a class="header-anchor" href="#未来展望" aria-hidden="true">#</a> 未来展望</h2><h3 id="_2026年发展趋势" tabindex="-1"><a class="header-anchor" href="#_2026年发展趋势" aria-hidden="true">#</a> 2026年发展趋势</h3><ol><li><p><strong>多模态Agent</strong></p><ul><li>原生支持图像、视频、音频</li><li>跨模态理解与生成</li></ul></li><li><p><strong>边缘部署</strong></p><ul><li>轻量化Agent框架</li><li>本地化推理优化</li></ul></li><li><p><strong>自主学习</strong></p><ul><li>Agent自我优化</li><li>经验积累与复用</li></ul></li><li><p><strong>标准化协议</strong></p><ul><li>MCP（Model Context Protocol）</li><li>A2A（Agent-to-Agent）协议</li></ul></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>LangChain已经从一个简单的工具链项目，发展成为AI智能体的核心基础设施。通过LangChain、LangGraph和LangSmith三大核心产品，它为开发者提供了完整的智能体开发、部署和监控解决方案。</p><p><strong>核心优势：</strong></p><ul><li>模块化设计，灵活可扩展</li><li>丰富的工具生态</li><li>强大的社区支持</li><li>企业级可靠性</li></ul><p><strong>适用场景：</strong></p><ul><li>企业知识库问答</li><li>智能客服系统</li><li>文档分析与处理</li><li>代码生成与审查</li><li>多Agent协作系统</li></ul><p>随着AI智能体技术的不断发展，LangChain将继续演进，为构建更加智能、自主的AI系统提供强大的技术支撑。</p><hr><p><strong>参考资料：</strong></p>`,121)),s("ul",null,[s("li",null,[s("a",u,[n[0]||(n[0]=e("LangChain官方文档",-1)),t(a)])]),s("li",null,[s("a",d,[n[1]||(n[1]=e("LangChain GitHub",-1)),t(a)])]),s("li",null,[s("a",k,[n[2]||(n[2]=e("LangGraph文档",-1)),t(a)])])])])}const g=p(r,[["render",v],["__file","LangChain：构建AI智能体的操作系统.html.vue"]]);export{g as default};
