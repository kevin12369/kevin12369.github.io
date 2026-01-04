import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as a,o as n}from"./app-ry7nqkQQ.js";const d={};function s(r,e){return n(),l("div",null,[...e[0]||(e[0]=[a(`<h1 id="_2025年大模型部署框架全解析-vllm-vs-ollama" tabindex="-1"><a class="header-anchor" href="#_2025年大模型部署框架全解析-vllm-vs-ollama" aria-hidden="true">#</a> 2025年大模型部署框架全解析：vLLM vs Ollama</h1><blockquote><p>从个人实验到企业生产，选择最适合你的部署方案</p></blockquote><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>2025年，大模型本地部署已成为AI应用落地的关键环节。随着vLLM和Ollama等开源框架的成熟，开发者可以轻松在本地运行各类开源大语言模型。本文将深入对比这两大主流部署框架，帮助你选择最适合的方案。</p><h2 id="框架概述" tabindex="-1"><a class="header-anchor" href="#框架概述" aria-hidden="true">#</a> 框架概述</h2><h3 id="vllm-高性能推理引擎" tabindex="-1"><a class="header-anchor" href="#vllm-高性能推理引擎" aria-hidden="true">#</a> vLLM：高性能推理引擎</h3><p><strong>定位：</strong> 企业级、高性能推理服务</p><p><strong>背景：</strong></p><ul><li>开发者：UC Berkeley SkyPilot团队</li><li>核心技术：PagedAttention、张量并行、流水线并行</li><li>目标：解决大模型服务中的显存效率与吞吐量瓶颈</li></ul><p><strong>核心优势：</strong></p><ul><li>超高吞吐量</li><li>低延迟响应</li><li>支持多模型并发</li><li>企业级稳定性</li></ul><h3 id="ollama-本地部署利器" tabindex="-1"><a class="header-anchor" href="#ollama-本地部署利器" aria-hidden="true">#</a> Ollama：本地部署利器</h3><p><strong>定位：</strong> 个人开发者、轻量化场景</p><p><strong>背景：</strong></p><ul><li>开发者：Ollama团队（原GitHub Copilot核心成员）</li><li>核心技术：llama.cpp、GGUF格式</li><li>目标：让开发者轻松本地运行大模型</li></ul><p><strong>核心优势：</strong></p><ul><li>开箱即用</li><li>跨平台支持</li><li>简单易用</li><li>轻量级部署</li></ul><h2 id="技术架构对比" tabindex="-1"><a class="header-anchor" href="#技术架构对比" aria-hidden="true">#</a> 技术架构对比</h2><h3 id="vllm架构" tabindex="-1"><a class="header-anchor" href="#vllm架构" aria-hidden="true">#</a> vLLM架构</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class vLLMArchitecture:
    def __init__(self):
        # PagedAttention：分页缓存机制
        self.paged_attention = PagedAttention(
            block_size=16,
            num_gpu_blocks=1024
        )
        
        # 连续批处理
        self.continuous_batching = ContinuousBatching()
        
        # 张量并行
        self.tensor_parallel = TensorParallel(
            world_size=8
        )
        
        # 流水线并行
        self.pipeline_parallel = PipelineParallel(
            num_stages=4
        )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键技术：</strong></p><h4 id="_1-pagedattention" tabindex="-1"><a class="header-anchor" href="#_1-pagedattention" aria-hidden="true">#</a> 1. PagedAttention</h4><p><strong>原理：</strong></p><ul><li>将KV Cache分块管理</li><li>按需分配和释放显存</li><li>支持超长上下文</li></ul><p><strong>优势：</strong></p><ul><li>显存利用率提升2-3倍</li><li>支持上万个并发请求</li><li>显存碎片化减少</li></ul><h4 id="_2-连续批处理" tabindex="-1"><a class="header-anchor" href="#_2-连续批处理" aria-hidden="true">#</a> 2. 连续批处理</h4><p><strong>功能：</strong></p><ul><li>动态批处理不同长度的请求</li><li>最大化GPU利用率</li><li>减少推理延迟</li></ul><p><strong>代码示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm import LLM, SamplingParams

# 创建LLM实例
llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    tensor_parallel_size=2,
    gpu_memory_utilization=0.9
)

# 创建采样参数
sampling_params = SamplingParams(
    temperature=0.8,
    top_p=0.95,
    max_tokens=1000
)

# 推理
outputs = llm.generate(
    prompts=[&quot;解释量子计算&quot;, &quot;什么是机器学习&quot;],
    sampling_params=sampling_params
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama架构" tabindex="-1"><a class="header-anchor" href="#ollama架构" aria-hidden="true">#</a> Ollama架构</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class OllamaArchitecture:
    def __init__(self):
        # llama.cpp核心
        self.llama_cpp = LlamaCppEngine()
        
        # GGUF格式支持
        self.gguf_loader = GGUFLoader()
        
        # 模型管理
        self.model_manager = ModelManager()
        
        # API服务
        self.api_server = APIServer()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键技术：</strong></p><h4 id="_1-gguf格式" tabindex="-1"><a class="header-anchor" href="#_1-gguf格式" aria-hidden="true">#</a> 1. GGUF格式</h4><p><strong>特点：</strong></p><ul><li>压缩的模型权重</li><li>支持量化（INT4、INT8）</li><li>快速加载</li></ul><p><strong>优势：</strong></p><ul><li>模型大小减少50-75%</li><li>加载速度提升3-5倍</li><li>内存占用大幅降低</li></ul><h4 id="_2-模块化设计" tabindex="-1"><a class="header-anchor" href="#_2-模块化设计" aria-hidden="true">#</a> 2. 模块化设计</h4><p><strong>架构：</strong></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>// 模块化组件
type Ollama struct {
    Model      ModelEngine
    Server     ServerEngine
    API        APIEngine
    CLI        CLIEngine
}

// 模型引擎
type ModelEngine struct {
    GGUFLoader GGUFLoader
    Inference  InferenceEngine
    Cache      ModelCache
}

// 推理引擎
type InferenceEngine struct {
    Context    InferenceContext
    Generator  TextGenerator
    Sampler    TokenSampler
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能对比" tabindex="-1"><a class="header-anchor" href="#功能对比" aria-hidden="true">#</a> 功能对比</h2><h3 id="_1-模型支持" tabindex="-1"><a class="header-anchor" href="#_1-模型支持" aria-hidden="true">#</a> 1. 模型支持</h3><table><thead><tr><th>特性</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>支持模型</td><td>Hugging Face所有模型（fp16/bf16）</td><td>GGUF格式模型（Llama、Qwen、Mistral等）</td></tr><tr><td>模型格式</td><td>PyTorch、Safetensors</td><td>GGUF</td></tr><tr><td>模型量化</td><td>FP16、BF16、INT8</td><td>INT4、INT8、FP16</td></tr><tr><td>自定义模型</td><td>需要转换为PyTorch格式</td><td>支持自定义GGUF模型</td></tr></tbody></table><h3 id="_2-部署方式" tabindex="-1"><a class="header-anchor" href="#_2-部署方式" aria-hidden="true">#</a> 2. 部署方式</h3><h4 id="vllm部署" tabindex="-1"><a class="header-anchor" href="#vllm部署" aria-hidden="true">#</a> vLLM部署</h4><p><strong>方式1：Python API</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm import LLM, SamplingParams

llm = LLM(model=&quot;meta-llama/Llama-3-8B&quot;)
outputs = llm.generate(prompts=[&quot;你好&quot;], sampling_params=SamplingParams())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式2：OpenAI兼容API</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 启动vLLM服务器
python -m vllm.entrypoints.openai.api_server \\
    --model meta-llama/Llama-3-8B \\
    --port 8000

# 调用API
curl http://localhost:8000/v1/completions \\
  -H &quot;Content-Type: application/json&quot; \\
  -d &#39;{
    &quot;model&quot;: &quot;meta-llama/Llama-3-8B&quot;,
    &quot;messages&quot;: [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;你好&quot;}]
  }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式3：Docker部署</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 拉取镜像
docker pull vllm/vllm-openai:latest

# 运行容器
docker run --gpus all \\
    -p 8000:8000 \\
    --shm-size=10g \\
    vllm/vllm-openai:latest \\
    --model meta-llama/Llama-3-8B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ollama部署" tabindex="-1"><a class="header-anchor" href="#ollama部署" aria-hidden="true">#</a> Ollama部署</h4><p><strong>方式1：命令行交互</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 安装Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 拉取模型
ollama pull llama3:8b

# 运行模型
ollama run llama3:8b &quot;你好&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式2：API服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 启动API服务
ollama serve

# 调用API
curl http://localhost:11434/api/generate \\
  -d &#39;{
    &quot;model&quot;: &quot;llama3:8b&quot;,
    &quot;prompt&quot;: &quot;你好&quot;
  }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式3：Python SDK</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>import ollama

# 加载模型
llm = ollama.pull(&quot;llama3:8b&quot;)

# 生成文本
response = ollama.generate(
    model=&quot;llama3:8b&quot;,
    prompt=&quot;你好&quot;
)

print(response)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-性能对比" tabindex="-1"><a class="header-anchor" href="#_3-性能对比" aria-hidden="true">#</a> 3. 性能对比</h3><h4 id="吞吐量对比" tabindex="-1"><a class="header-anchor" href="#吞吐量对比" aria-hidden="true">#</a> 吞吐量对比</h4><table><thead><tr><th>模型</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>Llama 3-8B</td><td>500+ tokens/s</td><td>50-100 tokens/s</td></tr><tr><td>Llama 3-70B</td><td>200+ tokens/s</td><td>20-40 tokens/s</td></tr><tr><td>Qwen3-72B</td><td>300+ tokens/s</td><td>30-60 tokens/s</td></tr></tbody></table><p><strong>测试环境：</strong></p><ul><li>GPU: NVIDIA A100 80GB</li><li>Batch Size: 1</li><li>Max Tokens: 1000</li></ul><h4 id="延迟对比" tabindex="-1"><a class="header-anchor" href="#延迟对比" aria-hidden="true">#</a> 延迟对比</h4><table><thead><tr><th>场景</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>首字延迟</td><td>&lt;100ms</td><td>200-500ms</td></tr><tr><td>平均延迟</td><td>50-100ms</td><td>100-300ms</td></tr><tr><td>P99延迟</td><td>200-500ms</td><td>500-1000ms</td></tr></tbody></table><h4 id="并发能力" tabindex="-1"><a class="header-anchor" href="#并发能力" aria-hidden="true">#</a> 并发能力</h4><table><thead><tr><th>并发数</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>10</td><td>稳定</td><td>稳定</td></tr><tr><td>50</td><td>稳定</td><td>延迟增加</td></tr><tr><td>100</td><td>稳定</td><td>可能崩溃</td></tr><tr><td>1000</td><td>稳定</td><td>不支持</td></tr></tbody></table><h3 id="_4-资源需求" tabindex="-1"><a class="header-anchor" href="#_4-资源需求" aria-hidden="true">#</a> 4. 资源需求</h3><h4 id="硬件需求" tabindex="-1"><a class="header-anchor" href="#硬件需求" aria-hidden="true">#</a> 硬件需求</h4><table><thead><tr><th>模型</th><th>vLLM</th><th>Ollama</th></tr></thead><tbody><tr><td>Llama 3-8B</td><td>16GB</td><td>8GB (INT4)</td></tr><tr><td>Llama 3-70B</td><td>140GB</td><td>70GB (INT4)</td></tr><tr><td>Qwen3-72B</td><td>144GB</td><td>72GB (INT4)</td></tr></tbody></table><h4 id="内存占用" tabindex="-1"><a class="header-anchor" href="#内存占用" aria-hidden="true">#</a> 内存占用</h4><table><thead><tr><th>模型</th><th>vLLM (FP16)</th><th>Ollama (INT4)</th></tr></thead><tbody><tr><td>Llama 3-8B</td><td>16GB</td><td>6GB</td></tr><tr><td>Llama 3-70B</td><td>140GB</td><td>38GB</td></tr><tr><td>Qwen3-72B</td><td>144GB</td><td>40GB</td></tr></tbody></table><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><h3 id="vllm适用场景" tabindex="-1"><a class="header-anchor" href="#vllm适用场景" aria-hidden="true">#</a> vLLM适用场景</h3><h4 id="_1-企业级服务" tabindex="-1"><a class="header-anchor" href="#_1-企业级服务" aria-hidden="true">#</a> 1. 企业级服务</h4><p><strong>场景：</strong></p><ul><li>高并发API服务</li><li>实时对话系统</li><li>批量文档处理</li></ul><p><strong>优势：</strong></p><ul><li>高吞吐量</li><li>低延迟</li><li>稳定可靠</li></ul><h4 id="_2-多模型服务" tabindex="-1"><a class="header-anchor" href="#_2-多模型服务" aria-hidden="true">#</a> 2. 多模型服务</h4><p><strong>场景：</strong></p><ul><li>同时服务多个模型</li><li>模型A/B测试</li><li>动态模型切换</li></ul><p><strong>实现：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm import LLM, SamplingParams

# 加载多个模型
llama = LLM(model=&quot;meta-llama/Llama-3-8B&quot;)
qwen = LLM(model=&quot;Qwen/Qwen2.5-7B&quot;)

# 创建采样参数
sampling_params = SamplingParams(temperature=0.8)

# 并发推理
results = []
for prompt in prompts:
    if &quot;中文&quot; in prompt:
        results.append(qwen.generate([prompt], sampling_params))
    else:
        results.append(llama.generate([prompt], sampling_params))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-分布式部署" tabindex="-1"><a class="header-anchor" href="#_3-分布式部署" aria-hidden="true">#</a> 3. 分布式部署</h4><p><strong>场景：</strong></p><ul><li>大规模集群部署</li><li>超大模型推理</li><li>负载均衡</li></ul><p><strong>架构：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm import LLM

# 分布式推理
llm = LLM(
    model=&quot;meta-llama/Llama-3-405B&quot;,
    tensor_parallel_size=8,
    pipeline_parallel_size=4
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama适用场景" tabindex="-1"><a class="header-anchor" href="#ollama适用场景" aria-hidden="true">#</a> Ollama适用场景</h3><h4 id="_1-个人开发实验" tabindex="-1"><a class="header-anchor" href="#_1-个人开发实验" aria-hidden="true">#</a> 1. 个人开发实验</h4><p><strong>场景：</strong></p><ul><li>快速体验新模型</li><li>本地测试和调试</li><li>学习和研究</li></ul><p><strong>优势：</strong></p><ul><li>一键部署</li><li>简单易用</li><li>资源占用低</li></ul><h4 id="_2-边缘设备部署" tabindex="-1"><a class="header-anchor" href="#_2-边缘设备部署" aria-hidden="true">#</a> 2. 边缘设备部署</h4><p><strong>场景：</strong></p><ul><li>树莓派部署</li><li>笔记本本地运行</li><li>离线环境</li></ul><p><strong>优势：</strong></p><ul><li>轻量级</li><li>跨平台</li><li>低功耗</li></ul><h4 id="_3-原型开发" tabindex="-1"><a class="header-anchor" href="#_3-原型开发" aria-hidden="true">#</a> 3. 原型开发</h4><p><strong>场景：</strong></p><ul><li>快速验证想法</li><li>概念验证（POC）</li><li>技术选型</li></ul><p><strong>优势：</strong></p><ul><li>快速迭代</li><li>低成本</li><li>易于调试</li></ul><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="vllm最佳实践" tabindex="-1"><a class="header-anchor" href="#vllm最佳实践" aria-hidden="true">#</a> vLLM最佳实践</h3><h4 id="_1-优化配置" tabindex="-1"><a class="header-anchor" href="#_1-优化配置" aria-hidden="true">#</a> 1. 优化配置</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm import LLM

# 优化配置
llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    # 张量并行
    tensor_parallel_size=2,
    # GPU内存利用率
    gpu_memory_utilization=0.9,
    # 最大模型长度
    max_model_len=8192,
    # KV Cache设置
    block_size=16,
    # 启用CUDA图
    enable_prefix_caching=True
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-监控与日志" tabindex="-1"><a class="header-anchor" href="#_2-监控与日志" aria-hidden="true">#</a> 2. 监控与日志</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm.engine.arg_utils import EngineArgs

# 启用详细日志
engine_args = EngineArgs(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    disable_log_stats=False,
    disable_log_requests=False
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-错误处理" tabindex="-1"><a class="header-anchor" href="#_3-错误处理" aria-hidden="true">#</a> 3. 错误处理</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm import LLM, SamplingParams
import logging

# 设置日志
logging.basicConfig(level=logging.INFO)

try:
    llm = LLM(model=&quot;meta-llama/Llama-3-8B&quot;)
    outputs = llm.generate(
        prompts=[&quot;测试&quot;],
        sampling_params=SamplingParams()
    )
except Exception as e:
    logging.error(f&quot;推理失败: {e}&quot;)
    # 降级处理
    outputs = fallback_generate(prompts)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama最佳实践" tabindex="-1"><a class="header-anchor" href="#ollama最佳实践" aria-hidden="true">#</a> Ollama最佳实践</h3><h4 id="_1-模型管理" tabindex="-1"><a class="header-anchor" href="#_1-模型管理" aria-hidden="true">#</a> 1. 模型管理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 查看已安装模型
ollama list

# 更新模型
ollama pull llama3:8b

# 删除模型
ollama rm llama3:8b

# 创建模型副本
ollama cp llama3:8b my-model
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-参数调优" tabindex="-1"><a class="header-anchor" href="#_2-参数调优" aria-hidden="true">#</a> 2. 参数调优</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 调整温度
ollama run llama3:8b --temperature 0.7 &quot;你好&quot;

# 调整Top-P
ollama run llama3:8b --top_p 0.9 &quot;你好&quot;

# 设置最大token数
ollama run llama3:8b --num_ctx 4096 &quot;你好&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-api集成" tabindex="-1"><a class="header-anchor" href="#_3-api集成" aria-hidden="true">#</a> 3. API集成</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>import requests

# 调用Ollama API
response = requests.post(
    &quot;http://localhost:11434/api/generate&quot;,
    json={
        &quot;model&quot;: &quot;llama3:8b&quot;,
        &quot;prompt&quot;: &quot;你好&quot;,
        &quot;stream&quot;: False,
        &quot;options&quot;: {
            &quot;temperature&quot;: 0.7,
            &quot;num_predict&quot;: 1000
        }
    }
)

result = response.json()
print(result[&quot;response&quot;])
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推荐方案" tabindex="-1"><a class="header-anchor" href="#推荐方案" aria-hidden="true">#</a> 推荐方案</h3><h4 id="方案1-个人开发" tabindex="-1"><a class="header-anchor" href="#方案1-个人开发" aria-hidden="true">#</a> 方案1：个人开发</h4><p><strong>推荐：</strong> Ollama</p><p><strong>原因：</strong></p><ul><li>一键部署</li><li>简单易用</li><li>资源占用低</li></ul><p><strong>配置：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 安装Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 拉取轻量模型
ollama pull llama3:8b

# 运行
ollama run llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案2-小型团队" tabindex="-1"><a class="header-anchor" href="#方案2-小型团队" aria-hidden="true">#</a> 方案2：小型团队</h4><p><strong>推荐：</strong> Ollama + vLLM混合</p><p><strong>架构：</strong></p><ul><li>开发环境：Ollama</li><li>测试环境：Ollama</li><li>生产环境：vLLM</li></ul><p><strong>配置：</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code># 开发环境
dev:
  framework: ollama
  model: llama3-8b
  quantization: int4

# 生产环境
prod:
  framework: vllm
  model: meta-llama/Llama-3-8B
  tensor_parallel_size: 2
  gpu_memory_utilization: 0.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案3-企业级服务" tabindex="-1"><a class="header-anchor" href="#方案3-企业级服务" aria-hidden="true">#</a> 方案3：企业级服务</h4><p><strong>推荐：</strong> vLLM</p><p><strong>原因：</strong></p><ul><li>高吞吐量</li><li>低延迟</li><li>稳定可靠</li><li>企业级支持</li></ul><p><strong>配置：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm import LLM

# 生产级配置
llm = LLM(
    model=&quot;meta-llama/Llama-3-70B&quot;,
    tensor_parallel_size=4,
    pipeline_parallel_size=2,
    gpu_memory_utilization=0.9,
    max_model_len=16384,
    enable_prefix_caching=True,
    disable_log_stats=False
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="vllm优化技巧" tabindex="-1"><a class="header-anchor" href="#vllm优化技巧" aria-hidden="true">#</a> vLLM优化技巧</h3><h4 id="_1-启用前缀缓存" tabindex="-1"><a class="header-anchor" href="#_1-启用前缀缓存" aria-hidden="true">#</a> 1. 启用前缀缓存</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    enable_prefix_caching=True
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-优化kv-cache" tabindex="-1"><a class="header-anchor" href="#_2-优化kv-cache" aria-hidden="true">#</a> 2. 优化KV Cache</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    block_size=16,
    max_num_seqs=256
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-使用flash-attention-2" tabindex="-1"><a class="header-anchor" href="#_3-使用flash-attention-2" aria-hidden="true">#</a> 3. 使用Flash Attention 2</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    enable_flash_attn=True
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama优化技巧" tabindex="-1"><a class="header-anchor" href="#ollama优化技巧" aria-hidden="true">#</a> Ollama优化技巧</h3><h4 id="_1-使用量化模型" tabindex="-1"><a class="header-anchor" href="#_1-使用量化模型" aria-hidden="true">#</a> 1. 使用量化模型</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 拉取INT4量化模型
ollama pull llama3:8b-q4_0

# 运行量化模型
ollama run llama3:8b-q4_0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-调整上下文长度" tabindex="-1"><a class="header-anchor" href="#_2-调整上下文长度" aria-hidden="true">#</a> 2. 调整上下文长度</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 设置较小的上下文长度
ollama run llama3:8b --num_ctx 2048 &quot;你好&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-使用gpu加速" tabindex="-1"><a class="header-anchor" href="#_3-使用gpu加速" aria-hidden="true">#</a> 3. 使用GPU加速</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 指定GPU
CUDA_VISIBLE_DEVICES=0 ollama run llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控与调试" tabindex="-1"><a class="header-anchor" href="#监控与调试" aria-hidden="true">#</a> 监控与调试</h2><h3 id="vllm监控" tabindex="-1"><a class="header-anchor" href="#vllm监控" aria-hidden="true">#</a> vLLM监控</h3><h4 id="_1-性能指标" tabindex="-1"><a class="header-anchor" href="#_1-性能指标" aria-hidden="true">#</a> 1. 性能指标</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from vllm.engine.metrics import Metrics

# 获取性能指标
metrics = Metrics.get_metrics()

print(f&quot;吞吐量: {metrics.throughput} tokens/s&quot;)
print(f&quot;延迟: {metrics.latency} ms&quot;)
print(f&quot;GPU利用率: {metrics.gpu_utilization}%&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-日志分析" tabindex="-1"><a class="header-anchor" href="#_2-日志分析" aria-hidden="true">#</a> 2. 日志分析</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 启用详细日志
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format=&#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ollama监控" tabindex="-1"><a class="header-anchor" href="#ollama监控" aria-hidden="true">#</a> Ollama监控</h3><h4 id="_1-模型状态" tabindex="-1"><a class="header-anchor" href="#_1-模型状态" aria-hidden="true">#</a> 1. 模型状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 查看模型状态
ollama ps

# 查看模型信息
ollama show llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-日志查看" tabindex="-1"><a class="header-anchor" href="#_2-日志查看" aria-hidden="true">#</a> 2. 日志查看</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 查看日志
journalctl -u ollama -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="故障排查" tabindex="-1"><a class="header-anchor" href="#故障排查" aria-hidden="true">#</a> 故障排查</h2><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><h4 id="_1-vllm问题" tabindex="-1"><a class="header-anchor" href="#_1-vllm问题" aria-hidden="true">#</a> 1. vLLM问题</h4><p><strong>问题：</strong> CUDA Out of Memory</p><p><strong>解决：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 减少并发数
llm = LLM(
    model=&quot;meta-llama/Llama3-8B&quot;,
    max_num_seqs=64
)

# 降低GPU内存利用率
llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    gpu_memory_utilization=0.7
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题：</strong> 推理速度慢</p><p><strong>解决：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 启用Flash Attention
llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    enable_flash_attn=True
)

# 增加tensor并行
llm = LLM(
    model=&quot;meta-llama/Llama-3-8B&quot;,
    tensor_parallel_size=4
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-ollama问题" tabindex="-1"><a class="header-anchor" href="#_2-ollama问题" aria-hidden="true">#</a> 2. Ollama问题</h4><p><strong>问题：</strong> 模型下载失败</p><p><strong>解决：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 使用镜像源
export OLLAMA_HOST=https://ollama.com
ollama pull llama3:8b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题：</strong> 推理速度慢</p><p><strong>解决：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># 使用GPU加速
CUDA_VISIBLE_DEVICES=0 ollama run llama3:8b

# 使用更小的模型
ollama pull llama3:8b-q4_0
ollama run llama3:8b-q4_0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="未来展望" tabindex="-1"><a class="header-anchor" href="#未来展望" aria-hidden="true">#</a> 未来展望</h2><h3 id="vllm发展方向" tabindex="-1"><a class="header-anchor" href="#vllm发展方向" aria-hidden="true">#</a> vLLM发展方向</h3><ol><li><p><strong>多模态支持</strong></p><ul><li>原生多模态推理</li><li>跨模态注意力机制</li></ul></li><li><p><strong>更高效的架构</strong></p><ul><li>新的注意力机制</li><li>更好的并行策略</li></ul></li><li><p><strong>云原生部署</strong></p><ul><li>Kubernetes集成</li><li>自动扩缩容</li></ul></li></ol><h3 id="ollama发展方向" tabindex="-1"><a class="header-anchor" href="#ollama发展方向" aria-hidden="true">#</a> Ollama发展方向</h3><ol><li><p><strong>轻量化优化</strong></p><ul><li>更小的模型支持</li><li>移动端优化</li></ul></li><li><p><strong>生态扩展</strong></p><ul><li>更多模型格式支持</li><li>更丰富的工具集成</li></ul></li><li><p><strong>企业级功能</strong></p><ul><li>多用户支持</li><li>访问控制</li><li>监控告警</li></ul></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>vLLM和Ollama各有优势，适合不同的使用场景：</p><p><strong>vLLM适合：</strong></p><ul><li>企业级生产环境</li><li>高并发API服务</li><li>多模型并发服务</li><li>分布式部署</li></ul><p><strong>Ollama适合：</strong></p><ul><li>个人开发实验</li><li>快速原型开发</li><li>边缘设备部署</li><li>轻量化场景</li></ul><p><strong>选择建议：</strong></p><ul><li>个人开发：Ollama</li><li>小型团队：Ollama + vLLM混合</li><li>企业服务：vLLM</li></ul><p>根据你的具体需求、硬件资源和应用场景，选择最适合的部署框架，才能充分发挥大模型的价值。</p><hr><p><strong>参考资料：</strong></p><ul><li><a href="https://docs.vllm.ai/" target="_blank" rel="noopener noreferrer">vLLM官方文档</a></li><li><a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama官方文档</a></li><li><a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vLLM GitHub</a></li><li><a href="https://github.com/ollama/ollama" target="_blank" rel="noopener noreferrer">Ollama GitHub</a></li></ul>`,203)])])}const u=i(d,[["render",s],["__file","2025年大模型部署框架全解析：vLLM vs Ollama.html.vue"]]);export{u as default};
