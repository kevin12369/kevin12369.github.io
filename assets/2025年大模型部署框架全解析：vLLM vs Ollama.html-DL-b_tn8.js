import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c as p,o,e as r,a,b as e,d as l}from"./app-aAmohw-1.js";const c={},d={href:"https://docs.vllm.ai/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://ollama.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/vllm-project/vllm",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/ollama/ollama",target:"_blank",rel:"noopener noreferrer"};function k(b,n){const s=i("ExternalLinkIcon");return o(),p("div",null,[n[4]||(n[4]=r(`<h1 id="_2025年大模型部署框架全解析-vllm-vs-ollama" tabindex="-1"><a class="header-anchor" href="#_2025年大模型部署框架全解析-vllm-vs-ollama" aria-hidden="true">#</a> 2025年大模型部署框架全解析：vLLM vs Ollama</h1><blockquote><p>从个人实验到企业生产，选择最适合你的部署方案</p></blockquote><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>2025年，大模型本地部署已成为AI应用落地的关键环节。随着vLLM和Ollama等开源框架的成熟，开发者可以轻松在本地运行各类开源大语言模型。本文将深入对比这两大主流部署框架，帮助你选择最适合的方案。</p><h2 id="框架概述" tabindex="-1"><a class="header-anchor" href="#框架概述" aria-hidden="true">#</a> 框架概述</h2><h3 id="vllm-高性能推理引擎" tabindex="-1"><a class="header-anchor" href="#vllm-高性能推理引擎" aria-hidden="true">#</a> vLLM：高性能推理引擎</h3><p><strong>定位：</strong> 企业级、高性能推理服务</p><p><strong>背景：</strong></p><ul><li>开发者：UC Berkeley SkyPilot团队</li><li>核心技术：PagedAttention、张量并行、流水线并行</li><li>目标：解决大模型服务中的显存效率与吞吐量瓶颈</li></ul><p><strong>核心优势：</strong></p><ul><li>超高吞吐量</li><li>低延迟响应</li><li>支持多模型并发</li><li>企业级稳定性</li></ul><h3 id="ollama-本地部署利器" tabindex="-1"><a class="header-anchor" href="#ollama-本地部署利器" aria-hidden="true">#</a> Ollama：本地部署利器</h3><p><strong>定位：</strong> 个人开发者、轻量化场景</p><p><strong>背景：</strong></p><ul><li>开发者：Ollama团队（原GitHub Copilot核心成员）</li><li>核心技术：llama.cpp、GGUF格式</li><li>目标：让开发者轻松本地运行大模型</li></ul><p><strong>核心优势：</strong></p><ul><li>开箱即用</li><li>跨平台支持</li><li>简单易用</li><li>轻量级部署</li></ul><h2 id="技术架构对比" tabindex="-1"><a class="header-anchor" href="#技术架构对比" aria-hidden="true">#</a> 技术架构对比</h2><h3 id="vllm架构" tabindex="-1"><a class="header-anchor" href="#vllm架构" aria-hidden="true">#</a> vLLM架构</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">vLLMArchitecture</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># PagedAttention：分页缓存机制</span>
        self<span class="token punctuation">.</span>paged_attention <span class="token operator">=</span> PagedAttention<span class="token punctuation">(</span>
            block_size<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span>
            num_gpu_blocks<span class="token operator">=</span><span class="token number">1024</span>
        <span class="token punctuation">)</span>
        
        <span class="token comment"># 连续批处理</span>
        self<span class="token punctuation">.</span>continuous_batching <span class="token operator">=</span> ContinuousBatching<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 张量并行</span>
        self<span class="token punctuation">.</span>tensor_parallel <span class="token operator">=</span> TensorParallel<span class="token punctuation">(</span>
            world_size<span class="token operator">=</span><span class="token number">8</span>
        <span class="token punctuation">)</span>
        
        <span class="token comment"># 流水线并行</span>
        self<span class="token punctuation">.</span>pipeline_parallel <span class="token operator">=</span> PipelineParallel<span class="token punctuation">(</span>
            num_stages<span class="token operator">=</span><span class="token number">4</span>
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键技术：</strong></p><h4 id="_1-pagedattention" tabindex="-1"><a class="header-anchor" href="#_1-pagedattention" aria-hidden="true">#</a> 1. PagedAttention</h4><p><strong>原理：</strong></p><ul><li>将KV Cache分块管理</li><li>按需分配和释放显存</li><li>支持超长上下文</li></ul><p><strong>优势：</strong></p><ul><li>显存利用率提升2-3倍</li><li>支持上万个并发请求</li><li>显存碎片化减少</li></ul><h4 id="_2-连续批处理" tabindex="-1"><a class="header-anchor" href="#_2-连续批处理" aria-hidden="true">#</a> 2. 连续批处理</h4><p><strong>功能：</strong></p><ul><li>动态批处理不同长度的请求</li><li>最大化GPU利用率</li><li>减少推理延迟</li></ul><p><strong>代码示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm <span class="token keyword">import</span> LLM<span class="token punctuation">,</span> SamplingParams

<span class="token comment"># 创建LLM实例</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    tensor_parallel_size<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
    gpu_memory_utilization<span class="token operator">=</span><span class="token number">0.9</span>
<span class="token punctuation">)</span>

<span class="token comment"># 创建采样参数</span>
sampling_params <span class="token operator">=</span> SamplingParams<span class="token punctuation">(</span>
    temperature<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">,</span>
    top_p<span class="token operator">=</span><span class="token number">0.95</span><span class="token punctuation">,</span>
    max_tokens<span class="token operator">=</span><span class="token number">1000</span>
<span class="token punctuation">)</span>

<span class="token comment"># 推理</span>
outputs <span class="token operator">=</span> llm<span class="token punctuation">.</span>generate<span class="token punctuation">(</span>
    prompts<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;解释量子计算&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;什么是机器学习&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    sampling_params<span class="token operator">=</span>sampling_params
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama架构" tabindex="-1"><a class="header-anchor" href="#ollama架构" aria-hidden="true">#</a> Ollama架构</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">OllamaArchitecture</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># llama.cpp核心</span>
        self<span class="token punctuation">.</span>llama_cpp <span class="token operator">=</span> LlamaCppEngine<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># GGUF格式支持</span>
        self<span class="token punctuation">.</span>gguf_loader <span class="token operator">=</span> GGUFLoader<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># 模型管理</span>
        self<span class="token punctuation">.</span>model_manager <span class="token operator">=</span> ModelManager<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment"># API服务</span>
        self<span class="token punctuation">.</span>api_server <span class="token operator">=</span> APIServer<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键技术：</strong></p><h4 id="_1-gguf格式" tabindex="-1"><a class="header-anchor" href="#_1-gguf格式" aria-hidden="true">#</a> 1. GGUF格式</h4><p><strong>特点：</strong></p><ul><li>压缩的模型权重</li><li>支持量化（INT4、INT8）</li><li>快速加载</li></ul><p><strong>优势：</strong></p><ul><li>模型大小减少50-75%</li><li>加载速度提升3-5倍</li><li>内存占用大幅降低</li></ul><h4 id="_2-模块化设计" tabindex="-1"><a class="header-anchor" href="#_2-模块化设计" aria-hidden="true">#</a> 2. 模块化设计</h4><p><strong>架构：</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 模块化组件</span>
<span class="token keyword">type</span> Ollama <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Model      ModelEngine
    Server     ServerEngine
    API        APIEngine
    CLI        CLIEngine
<span class="token punctuation">}</span>

<span class="token comment">// 模型引擎</span>
<span class="token keyword">type</span> ModelEngine <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    GGUFLoader GGUFLoader
    Inference  InferenceEngine
    Cache      ModelCache
<span class="token punctuation">}</span>

<span class="token comment">// 推理引擎</span>
<span class="token keyword">type</span> InferenceEngine <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Context    InferenceContext
    Generator  TextGenerator
    Sampler    TokenSampler
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能对比" tabindex="-1"><a class="header-anchor" href="#功能对比" aria-hidden="true">#</a> 功能对比</h2><h3 id="_1-模型支持" tabindex="-1"><a class="header-anchor" href="#_1-模型支持" aria-hidden="true">#</a> 1. 模型支持</h3><table><thead><tr><th>特性</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>支持模型</td><td>Hugging Face所有模型（fp16/bf16）</td><td>GGUF格式模型（Llama、Qwen、Mistral等）</td></tr><tr><td>模型格式</td><td>PyTorch、Safetensors</td><td>GGUF</td></tr><tr><td>模型量化</td><td>FP16、BF16、INT8</td><td>INT4、INT8、FP16</td></tr><tr><td>自定义模型</td><td>需要转换为PyTorch格式</td><td>支持自定义GGUF模型</td></tr></tbody></table><h3 id="_2-部署方式" tabindex="-1"><a class="header-anchor" href="#_2-部署方式" aria-hidden="true">#</a> 2. 部署方式</h3><h4 id="vllm部署" tabindex="-1"><a class="header-anchor" href="#vllm部署" aria-hidden="true">#</a> vLLM部署</h4><p><strong>方式1：Python API</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm <span class="token keyword">import</span> LLM<span class="token punctuation">,</span> SamplingParams

llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">)</span>
outputs <span class="token operator">=</span> llm<span class="token punctuation">.</span>generate<span class="token punctuation">(</span>prompts<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sampling_params<span class="token operator">=</span>SamplingParams<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式2：OpenAI兼容API</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动vLLM服务器</span>
python <span class="token parameter variable">-m</span> vllm.entrypoints.openai.api_server <span class="token punctuation">\\</span>
    <span class="token parameter variable">--model</span> meta-llama/Llama-3-8B <span class="token punctuation">\\</span>
    <span class="token parameter variable">--port</span> <span class="token number">8000</span>

<span class="token comment"># 调用API</span>
<span class="token function">curl</span> http://localhost:8000/v1/completions <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token string">&#39;{
    &quot;model&quot;: &quot;meta-llama/Llama-3-8B&quot;,
    &quot;messages&quot;: [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;你好&quot;}]
  }&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式3：Docker部署</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull vllm/vllm-openai:latest

<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--gpus</span> all <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">8000</span>:8000 <span class="token punctuation">\\</span>
    --shm-size<span class="token operator">=</span>10g <span class="token punctuation">\\</span>
    vllm/vllm-openai:latest <span class="token punctuation">\\</span>
    <span class="token parameter variable">--model</span> meta-llama/Llama-3-8B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ollama部署" tabindex="-1"><a class="header-anchor" href="#ollama部署" aria-hidden="true">#</a> Ollama部署</h4><p><strong>方式1：命令行交互</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装Ollama</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://ollama.com/install.sh <span class="token operator">|</span> <span class="token function">sh</span>

<span class="token comment"># 拉取模型</span>
ollama pull llama3:8b

<span class="token comment"># 运行模型</span>
ollama run llama3:8b <span class="token string">&quot;你好&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式2：API服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动API服务</span>
ollama serve

<span class="token comment"># 调用API</span>
<span class="token function">curl</span> http://localhost:11434/api/generate <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token string">&#39;{
    &quot;model&quot;: &quot;llama3:8b&quot;,
    &quot;prompt&quot;: &quot;你好&quot;
  }&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式3：Python SDK</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> ollama

<span class="token comment"># 加载模型</span>
llm <span class="token operator">=</span> ollama<span class="token punctuation">.</span>pull<span class="token punctuation">(</span><span class="token string">&quot;llama3:8b&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 生成文本</span>
response <span class="token operator">=</span> ollama<span class="token punctuation">.</span>generate<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;llama3:8b&quot;</span><span class="token punctuation">,</span>
    prompt<span class="token operator">=</span><span class="token string">&quot;你好&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-性能对比" tabindex="-1"><a class="header-anchor" href="#_3-性能对比" aria-hidden="true">#</a> 3. 性能对比</h3><h4 id="吞吐量对比" tabindex="-1"><a class="header-anchor" href="#吞吐量对比" aria-hidden="true">#</a> 吞吐量对比</h4><table><thead><tr><th>模型</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>Llama 3-8B</td><td>500+ tokens/s</td><td>50-100 tokens/s</td></tr><tr><td>Llama 3-70B</td><td>200+ tokens/s</td><td>20-40 tokens/s</td></tr><tr><td>Qwen3-72B</td><td>300+ tokens/s</td><td>30-60 tokens/s</td></tr></tbody></table><p><strong>测试环境：</strong></p><ul><li>GPU: NVIDIA A100 80GB</li><li>Batch Size: 1</li><li>Max Tokens: 1000</li></ul><h4 id="延迟对比" tabindex="-1"><a class="header-anchor" href="#延迟对比" aria-hidden="true">#</a> 延迟对比</h4><table><thead><tr><th>场景</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>首字延迟</td><td>&lt;100ms</td><td>200-500ms</td></tr><tr><td>平均延迟</td><td>50-100ms</td><td>100-300ms</td></tr><tr><td>P99延迟</td><td>200-500ms</td><td>500-1000ms</td></tr></tbody></table><h4 id="并发能力" tabindex="-1"><a class="header-anchor" href="#并发能力" aria-hidden="true">#</a> 并发能力</h4><table><thead><tr><th>并发数</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>10</td><td>稳定</td><td>稳定</td></tr><tr><td>50</td><td>稳定</td><td>延迟增加</td></tr><tr><td>100</td><td>稳定</td><td>可能崩溃</td></tr><tr><td>1000</td><td>稳定</td><td>不支持</td></tr></tbody></table><h3 id="_4-资源需求" tabindex="-1"><a class="header-anchor" href="#_4-资源需求" aria-hidden="true">#</a> 4. 资源需求</h3><h4 id="硬件需求" tabindex="-1"><a class="header-anchor" href="#硬件需求" aria-hidden="true">#</a> 硬件需求</h4><table><thead><tr><th>模型</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>Llama 3-8B</td><td>16GB</td><td>8GB (INT4)</td></tr><tr><td>Llama 3-70B</td><td>140GB</td><td>70GB (INT4)</td></tr><tr><td>Qwen3-72B</td><td>144GB</td><td>72GB (INT4)</td></tr></tbody></table><h4 id="内存占用" tabindex="-1"><a class="header-anchor" href="#内存占用" aria-hidden="true">#</a> 内存占用</h4><table><thead><tr><th>模型</th><th>vLLM (FP16)</th><th>Ollama (INT4)</th></tr></thead><tbody><tr><td>Llama 3-8B</td><td>16GB</td><td>6GB</td></tr><tr><td>Llama 3-70B</td><td>140GB</td><td>38GB</td></tr><tr><td>Qwen3-72B</td><td>144GB</td><td>40GB</td></tr></tbody></table><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><h3 id="vllm适用场景" tabindex="-1"><a class="header-anchor" href="#vllm适用场景" aria-hidden="true">#</a> vLLM适用场景</h3><h4 id="_1-企业级服务" tabindex="-1"><a class="header-anchor" href="#_1-企业级服务" aria-hidden="true">#</a> 1. 企业级服务</h4><p><strong>场景：</strong></p><ul><li>高并发API服务</li><li>实时对话系统</li><li>批量文档处理</li></ul><p><strong>优势：</strong></p><ul><li>高吞吐量</li><li>低延迟</li><li>稳定可靠</li></ul><h4 id="_2-多模型服务" tabindex="-1"><a class="header-anchor" href="#_2-多模型服务" aria-hidden="true">#</a> 2. 多模型服务</h4><p><strong>场景：</strong></p><ul><li>同时服务多个模型</li><li>模型A/B测试</li><li>动态模型切换</li></ul><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm <span class="token keyword">import</span> LLM<span class="token punctuation">,</span> SamplingParams

<span class="token comment"># 加载多个模型</span>
llama <span class="token operator">=</span> LLM<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">)</span>
qwen <span class="token operator">=</span> LLM<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;Qwen/Qwen2.5-7B&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建采样参数</span>
sampling_params <span class="token operator">=</span> SamplingParams<span class="token punctuation">(</span>temperature<span class="token operator">=</span><span class="token number">0.8</span><span class="token punctuation">)</span>

<span class="token comment"># 并发推理</span>
results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> prompt <span class="token keyword">in</span> prompts<span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token string">&quot;中文&quot;</span> <span class="token keyword">in</span> prompt<span class="token punctuation">:</span>
        results<span class="token punctuation">.</span>append<span class="token punctuation">(</span>qwen<span class="token punctuation">.</span>generate<span class="token punctuation">(</span><span class="token punctuation">[</span>prompt<span class="token punctuation">]</span><span class="token punctuation">,</span> sampling_params<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        results<span class="token punctuation">.</span>append<span class="token punctuation">(</span>llama<span class="token punctuation">.</span>generate<span class="token punctuation">(</span><span class="token punctuation">[</span>prompt<span class="token punctuation">]</span><span class="token punctuation">,</span> sampling_params<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-分布式部署" tabindex="-1"><a class="header-anchor" href="#_3-分布式部署" aria-hidden="true">#</a> 3. 分布式部署</h4><p><strong>场景：</strong></p><ul><li>大规模集群部署</li><li>超大模型推理</li><li>负载均衡</li></ul><p><strong>架构：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm <span class="token keyword">import</span> LLM

<span class="token comment"># 分布式推理</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-405B&quot;</span><span class="token punctuation">,</span>
    tensor_parallel_size<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">,</span>
    pipeline_parallel_size<span class="token operator">=</span><span class="token number">4</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama适用场景" tabindex="-1"><a class="header-anchor" href="#ollama适用场景" aria-hidden="true">#</a> Ollama适用场景</h3><h4 id="_1-个人开发实验" tabindex="-1"><a class="header-anchor" href="#_1-个人开发实验" aria-hidden="true">#</a> 1. 个人开发实验</h4><p><strong>场景：</strong></p><ul><li>快速体验新模型</li><li>本地测试和调试</li><li>学习和研究</li></ul><p><strong>优势：</strong></p><ul><li>一键部署</li><li>简单易用</li><li>资源占用低</li></ul><h4 id="_2-边缘设备部署" tabindex="-1"><a class="header-anchor" href="#_2-边缘设备部署" aria-hidden="true">#</a> 2. 边缘设备部署</h4><p><strong>场景：</strong></p><ul><li>树莓派部署</li><li>笔记本本地运行</li><li>离线环境</li></ul><p><strong>优势：</strong></p><ul><li>轻量级</li><li>跨平台</li><li>低功耗</li></ul><h4 id="_3-原型开发" tabindex="-1"><a class="header-anchor" href="#_3-原型开发" aria-hidden="true">#</a> 3. 原型开发</h4><p><strong>场景：</strong></p><ul><li>快速验证想法</li><li>概念验证（POC）</li><li>技术选型</li></ul><p><strong>优势：</strong></p><ul><li>快速迭代</li><li>低成本</li><li>易于调试</li></ul><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="vllm最佳实践" tabindex="-1"><a class="header-anchor" href="#vllm最佳实践" aria-hidden="true">#</a> vLLM最佳实践</h3><h4 id="_1-优化配置" tabindex="-1"><a class="header-anchor" href="#_1-优化配置" aria-hidden="true">#</a> 1. 优化配置</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm <span class="token keyword">import</span> LLM

<span class="token comment"># 优化配置</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    <span class="token comment"># 张量并行</span>
    tensor_parallel_size<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment"># GPU内存利用率</span>
    gpu_memory_utilization<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">,</span>
    <span class="token comment"># 最大模型长度</span>
    max_model_len<span class="token operator">=</span><span class="token number">8192</span><span class="token punctuation">,</span>
    <span class="token comment"># KV Cache设置</span>
    block_size<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token comment"># 启用CUDA图</span>
    enable_prefix_caching<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-监控与日志" tabindex="-1"><a class="header-anchor" href="#_2-监控与日志" aria-hidden="true">#</a> 2. 监控与日志</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>arg_utils <span class="token keyword">import</span> EngineArgs

<span class="token comment"># 启用详细日志</span>
engine_args <span class="token operator">=</span> EngineArgs<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    disable_log_stats<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    disable_log_requests<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-错误处理" tabindex="-1"><a class="header-anchor" href="#_3-错误处理" aria-hidden="true">#</a> 3. 错误处理</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm <span class="token keyword">import</span> LLM<span class="token punctuation">,</span> SamplingParams
<span class="token keyword">import</span> logging

<span class="token comment"># 设置日志</span>
logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>level<span class="token operator">=</span>logging<span class="token punctuation">.</span>INFO<span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">)</span>
    outputs <span class="token operator">=</span> llm<span class="token punctuation">.</span>generate<span class="token punctuation">(</span>
        prompts<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;测试&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        sampling_params<span class="token operator">=</span>SamplingParams<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    logging<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;推理失败: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token comment"># 降级处理</span>
    outputs <span class="token operator">=</span> fallback_generate<span class="token punctuation">(</span>prompts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama最佳实践" tabindex="-1"><a class="header-anchor" href="#ollama最佳实践" aria-hidden="true">#</a> Ollama最佳实践</h3><h4 id="_1-模型管理" tabindex="-1"><a class="header-anchor" href="#_1-模型管理" aria-hidden="true">#</a> 1. 模型管理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看已安装模型</span>
ollama list

<span class="token comment"># 更新模型</span>
ollama pull llama3:8b

<span class="token comment"># 删除模型</span>
ollama <span class="token function">rm</span> llama3:8b

<span class="token comment"># 创建模型副本</span>
ollama <span class="token function">cp</span> llama3:8b my-model
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-参数调优" tabindex="-1"><a class="header-anchor" href="#_2-参数调优" aria-hidden="true">#</a> 2. 参数调优</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 调整温度</span>
ollama run llama3:8b <span class="token parameter variable">--temperature</span> <span class="token number">0.7</span> <span class="token string">&quot;你好&quot;</span>

<span class="token comment"># 调整Top-P</span>
ollama run llama3:8b <span class="token parameter variable">--top_p</span> <span class="token number">0.9</span> <span class="token string">&quot;你好&quot;</span>

<span class="token comment"># 设置最大token数</span>
ollama run llama3:8b <span class="token parameter variable">--num_ctx</span> <span class="token number">4096</span> <span class="token string">&quot;你好&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-api集成" tabindex="-1"><a class="header-anchor" href="#_3-api集成" aria-hidden="true">#</a> 3. API集成</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

<span class="token comment"># 调用Ollama API</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>
    <span class="token string">&quot;http://localhost:11434/api/generate&quot;</span><span class="token punctuation">,</span>
    json<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&quot;model&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;llama3:8b&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;prompt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;你好&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;stream&quot;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
        <span class="token string">&quot;options&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;temperature&quot;</span><span class="token punctuation">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
            <span class="token string">&quot;num_predict&quot;</span><span class="token punctuation">:</span> <span class="token number">1000</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token string">&quot;response&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选型建议" tabindex="-1"><a class="header-anchor" href="#选型建议" aria-hidden="true">#</a> 选型建议</h2><h3 id="决策树" tabindex="-1"><a class="header-anchor" href="#决策树" aria-hidden="true">#</a> 决策树</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>开始
  │
  ├─ 是否需要高并发服务？
  │   ├─ 是 → 选择vLLM
  │   └─ 否 → 继续
  │
  ├─ 是否是企业级生产环境？
  │   ├─ 是 → 选择vLLM
  │   └─ 否 → 继续
  │
  ├─ 是否需要快速原型开发？
  │   ├─ 是 → 选择Ollama
  │   └─ 否 → 继续
  │
  ├─ 硬件资源是否有限？
  │   ├─ 是 → 选择Ollama
  │   └─ 否 → 继续
  │
  └─ 综合需求 → 混合部署
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推荐方案" tabindex="-1"><a class="header-anchor" href="#推荐方案" aria-hidden="true">#</a> 推荐方案</h3><h4 id="方案1-个人开发" tabindex="-1"><a class="header-anchor" href="#方案1-个人开发" aria-hidden="true">#</a> 方案1：个人开发</h4><p><strong>推荐：</strong> Ollama</p><p><strong>原因：</strong></p><ul><li>一键部署</li><li>简单易用</li><li>资源占用低</li></ul><p><strong>配置：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装Ollama</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://ollama.com/install.sh <span class="token operator">|</span> <span class="token function">sh</span>

<span class="token comment"># 拉取轻量模型</span>
ollama pull llama3:8b

<span class="token comment"># 运行</span>
ollama run llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案2-小型团队" tabindex="-1"><a class="header-anchor" href="#方案2-小型团队" aria-hidden="true">#</a> 方案2：小型团队</h4><p><strong>推荐：</strong> Ollama + vLLM混合</p><p><strong>架构：</strong></p><ul><li>开发环境：Ollama</li><li>测试环境：Ollama</li><li>生产环境：vLLM</li></ul><p><strong>配置：</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 开发环境</span>
<span class="token key atrule">dev</span><span class="token punctuation">:</span>
  <span class="token key atrule">framework</span><span class="token punctuation">:</span> ollama
  <span class="token key atrule">model</span><span class="token punctuation">:</span> llama3<span class="token punctuation">-</span>8b
  <span class="token key atrule">quantization</span><span class="token punctuation">:</span> int4

<span class="token comment"># 生产环境</span>
<span class="token key atrule">prod</span><span class="token punctuation">:</span>
  <span class="token key atrule">framework</span><span class="token punctuation">:</span> vllm
  <span class="token key atrule">model</span><span class="token punctuation">:</span> meta<span class="token punctuation">-</span>llama/Llama<span class="token punctuation">-</span>3<span class="token punctuation">-</span>8B
  <span class="token key atrule">tensor_parallel_size</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">gpu_memory_utilization</span><span class="token punctuation">:</span> <span class="token number">0.9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案3-企业级服务" tabindex="-1"><a class="header-anchor" href="#方案3-企业级服务" aria-hidden="true">#</a> 方案3：企业级服务</h4><p><strong>推荐：</strong> vLLM</p><p><strong>原因：</strong></p><ul><li>高吞吐量</li><li>低延迟</li><li>稳定可靠</li><li>企业级支持</li></ul><p><strong>配置：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm <span class="token keyword">import</span> LLM

<span class="token comment"># 生产级配置</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-70B&quot;</span><span class="token punctuation">,</span>
    tensor_parallel_size<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span>
    pipeline_parallel_size<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
    gpu_memory_utilization<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">,</span>
    max_model_len<span class="token operator">=</span><span class="token number">16384</span><span class="token punctuation">,</span>
    enable_prefix_caching<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    disable_log_stats<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="vllm优化技巧" tabindex="-1"><a class="header-anchor" href="#vllm优化技巧" aria-hidden="true">#</a> vLLM优化技巧</h3><h4 id="_1-启用前缀缓存" tabindex="-1"><a class="header-anchor" href="#_1-启用前缀缓存" aria-hidden="true">#</a> 1. 启用前缀缓存</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    enable_prefix_caching<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-优化kv-cache" tabindex="-1"><a class="header-anchor" href="#_2-优化kv-cache" aria-hidden="true">#</a> 2. 优化KV Cache</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    block_size<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span>
    max_num_seqs<span class="token operator">=</span><span class="token number">256</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-使用flash-attention-2" tabindex="-1"><a class="header-anchor" href="#_3-使用flash-attention-2" aria-hidden="true">#</a> 3. 使用Flash Attention 2</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    enable_flash_attn<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama优化技巧" tabindex="-1"><a class="header-anchor" href="#ollama优化技巧" aria-hidden="true">#</a> Ollama优化技巧</h3><h4 id="_1-使用量化模型" tabindex="-1"><a class="header-anchor" href="#_1-使用量化模型" aria-hidden="true">#</a> 1. 使用量化模型</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取INT4量化模型</span>
ollama pull llama3:8b-q4_0

<span class="token comment"># 运行量化模型</span>
ollama run llama3:8b-q4_0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-调整上下文长度" tabindex="-1"><a class="header-anchor" href="#_2-调整上下文长度" aria-hidden="true">#</a> 2. 调整上下文长度</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置较小的上下文长度</span>
ollama run llama3:8b <span class="token parameter variable">--num_ctx</span> <span class="token number">2048</span> <span class="token string">&quot;你好&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-使用gpu加速" tabindex="-1"><a class="header-anchor" href="#_3-使用gpu加速" aria-hidden="true">#</a> 3. 使用GPU加速</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定GPU</span>
<span class="token assign-left variable">CUDA_VISIBLE_DEVICES</span><span class="token operator">=</span><span class="token number">0</span> ollama run llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控与调试" tabindex="-1"><a class="header-anchor" href="#监控与调试" aria-hidden="true">#</a> 监控与调试</h2><h3 id="vllm监控" tabindex="-1"><a class="header-anchor" href="#vllm监控" aria-hidden="true">#</a> vLLM监控</h3><h4 id="_1-性能指标" tabindex="-1"><a class="header-anchor" href="#_1-性能指标" aria-hidden="true">#</a> 1. 性能指标</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> vllm<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> Metrics

<span class="token comment"># 获取性能指标</span>
metrics <span class="token operator">=</span> Metrics<span class="token punctuation">.</span>get_metrics<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;吞吐量: </span><span class="token interpolation"><span class="token punctuation">{</span>metrics<span class="token punctuation">.</span>throughput<span class="token punctuation">}</span></span><span class="token string"> tokens/s&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;延迟: </span><span class="token interpolation"><span class="token punctuation">{</span>metrics<span class="token punctuation">.</span>latency<span class="token punctuation">}</span></span><span class="token string"> ms&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;GPU利用率: </span><span class="token interpolation"><span class="token punctuation">{</span>metrics<span class="token punctuation">.</span>gpu_utilization<span class="token punctuation">}</span></span><span class="token string">%&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-日志分析" tabindex="-1"><a class="header-anchor" href="#_2-日志分析" aria-hidden="true">#</a> 2. 日志分析</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 启用详细日志</span>
<span class="token keyword">import</span> logging

logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>
    level<span class="token operator">=</span>logging<span class="token punctuation">.</span>DEBUG<span class="token punctuation">,</span>
    <span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama监控" tabindex="-1"><a class="header-anchor" href="#ollama监控" aria-hidden="true">#</a> Ollama监控</h3><h4 id="_1-模型状态" tabindex="-1"><a class="header-anchor" href="#_1-模型状态" aria-hidden="true">#</a> 1. 模型状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看模型状态</span>
ollama <span class="token function">ps</span>

<span class="token comment"># 查看模型信息</span>
ollama show llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-日志查看" tabindex="-1"><a class="header-anchor" href="#_2-日志查看" aria-hidden="true">#</a> 2. 日志查看</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看日志</span>
journalctl <span class="token parameter variable">-u</span> ollama <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="故障排查" tabindex="-1"><a class="header-anchor" href="#故障排查" aria-hidden="true">#</a> 故障排查</h2><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><h4 id="_1-vllm问题" tabindex="-1"><a class="header-anchor" href="#_1-vllm问题" aria-hidden="true">#</a> 1. vLLM问题</h4><p><strong>问题：</strong> CUDA Out of Memory</p><p><strong>解决：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 减少并发数</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama3-8B&quot;</span><span class="token punctuation">,</span>
    max_num_seqs<span class="token operator">=</span><span class="token number">64</span>
<span class="token punctuation">)</span>

<span class="token comment"># 降低GPU内存利用率</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    gpu_memory_utilization<span class="token operator">=</span><span class="token number">0.7</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题：</strong> 推理速度慢</p><p><strong>解决：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 启用Flash Attention</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    enable_flash_attn<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>

<span class="token comment"># 增加tensor并行</span>
llm <span class="token operator">=</span> LLM<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">&quot;meta-llama/Llama-3-8B&quot;</span><span class="token punctuation">,</span>
    tensor_parallel_size<span class="token operator">=</span><span class="token number">4</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-ollama问题" tabindex="-1"><a class="header-anchor" href="#_2-ollama问题" aria-hidden="true">#</a> 2. Ollama问题</h4><p><strong>问题：</strong> 模型下载失败</p><p><strong>解决：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用镜像源</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">OLLAMA_HOST</span><span class="token operator">=</span>https://ollama.com
ollama pull llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题：</strong> 推理速度慢</p><p><strong>解决：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用GPU加速</span>
<span class="token assign-left variable">CUDA_VISIBLE_DEVICES</span><span class="token operator">=</span><span class="token number">0</span> ollama run llama3:8b

<span class="token comment"># 使用更小的模型</span>
ollama pull llama3:8b-q4_0
ollama run llama3:8b-q4_0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="未来展望" tabindex="-1"><a class="header-anchor" href="#未来展望" aria-hidden="true">#</a> 未来展望</h2><h3 id="vllm发展方向" tabindex="-1"><a class="header-anchor" href="#vllm发展方向" aria-hidden="true">#</a> vLLM发展方向</h3><ol><li><p><strong>多模态支持</strong></p><ul><li>原生多模态推理</li><li>跨模态注意力机制</li></ul></li><li><p><strong>更高效的架构</strong></p><ul><li>新的注意力机制</li><li>更好的并行策略</li></ul></li><li><p><strong>云原生部署</strong></p><ul><li>Kubernetes集成</li><li>自动扩缩容</li></ul></li></ol><h3 id="ollama发展方向" tabindex="-1"><a class="header-anchor" href="#ollama发展方向" aria-hidden="true">#</a> Ollama发展方向</h3><ol><li><p><strong>轻量化优化</strong></p><ul><li>更小的模型支持</li><li>移动端优化</li></ul></li><li><p><strong>生态扩展</strong></p><ul><li>更多模型格式支持</li><li>更丰富的工具集成</li></ul></li><li><p><strong>企业级功能</strong></p><ul><li>多用户支持</li><li>访问控制</li><li>监控告警</li></ul></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>vLLM和Ollama各有优势，适合不同的使用场景：</p><p><strong>vLLM适合：</strong></p><ul><li>企业级生产环境</li><li>高并发API服务</li><li>多模型并发服务</li><li>分布式部署</li></ul><p><strong>Ollama适合：</strong></p><ul><li>个人开发实验</li><li>快速原型开发</li><li>边缘设备部署</li><li>轻量化场景</li></ul><p><strong>选择建议：</strong></p><ul><li>个人开发：Ollama</li><li>小型团队：Ollama + vLLM混合</li><li>企业服务：vLLM</li></ul><p>根据你的具体需求、硬件资源和应用场景，选择最适合的部署框架，才能充分发挥大模型的价值。</p><hr><p><strong>参考资料：</strong></p>`,202)),a("ul",null,[a("li",null,[a("a",d,[n[0]||(n[0]=e("vLLM官方文档",-1)),l(s)])]),a("li",null,[a("a",u,[n[1]||(n[1]=e("Ollama官方文档",-1)),l(s)])]),a("li",null,[a("a",m,[n[2]||(n[2]=e("vLLM GitHub",-1)),l(s)])]),a("li",null,[a("a",v,[n[3]||(n[3]=e("Ollama GitHub",-1)),l(s)])])])])}const _=t(c,[["render",k],["__file","2025年大模型部署框架全解析：vLLM vs Ollama.html.vue"]]);export{_ as default};
