import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as n,o as r}from"./app-ry7nqkQQ.js";const d={};function s(t,e){return r(),i("div",null,[...e[0]||(e[0]=[n(`<h1 id="autogen-chatglm2-6b-实现本地化部署" tabindex="-1"><a class="header-anchor" href="#autogen-chatglm2-6b-实现本地化部署" aria-hidden="true">#</a> AutoGen + ChatGLM2-6B 实现本地化部署</h1><h2 id="什么是autogen" tabindex="-1"><a class="header-anchor" href="#什么是autogen" aria-hidden="true">#</a> 什么是AutoGen?</h2><p>Autogen 是一个由 Microsoft 推出的框架，它允许用户创建和管理多个自主代理，以协同完成复杂的任务。</p><p>这个框架的灵活性极高，你可以根据自己的需求定义不同的代理和它们的角色，然后让它们一起工作。</p><p>这种多代理协作的方式不仅提高了任务完成的效率，还提高了结果的质量，特别是在编程、规划和创意写作等领域。</p><h2 id="什么是chatglm2-6b" tabindex="-1"><a class="header-anchor" href="#什么是chatglm2-6b" aria-hidden="true">#</a> 什么是ChatGLM2-6B？</h2><p>ChatGLM2-6B是智谱AI及清华KEG实验室发布的中英双语对话模型。</p><p>ChatGLM2-6B是开源的文本生成式对话模型,基于General Language Model(GLM)框架,具有62亿参数。 fp16 半精度下，ChatGLM-6B 需要至少 13GB 的显存进行推理，结合模型量化技术，这一需求可以进一步降低到 10GB（INT8） 和 6GB（INT4）， 使得 ChatGLM-6B 可以部署在消费级显卡上，人人都能上手一个大模型。ChatGLM-6B 使用了和 ChatGPT 相似的技术，针对中文问答和对话进行了优化。经过约 1T 标识符的中英双语训练，辅以监督微调、反馈自助、人类反馈强化学习等技术的加持，62 亿参数的 ChatGLM-6B 已经能生成相当符合人类偏好的回答。</p><p><a href="https://chatglm.cn/blog" target="_blank" rel="noopener noreferrer">智谱清言 (chatglm.cn)</a></p><h2 id="什么是fastchat" tabindex="-1"><a class="header-anchor" href="#什么是fastchat" aria-hidden="true">#</a> 什么是FastChat？</h2><p>FastChat框架是一个训练、部署和评估大模型的开源平台，其核心特点是：</p><ul><li>提供SOTA模型的训练和评估代码</li><li>提供分布式多模型部署框架 + WebUI + OpenAI API</li></ul><h2 id="部署前先要做好的几个准备工作" tabindex="-1"><a class="header-anchor" href="#部署前先要做好的几个准备工作" aria-hidden="true">#</a> 部署前先要做好的几个准备工作</h2><ul><li>确认自己电脑或者设备的CPU或者GPU型号，这很关键。</li><li>确认自己电脑的内存是否大于8G，这对于选择语言模型很关键。</li><li>通过设备CPU或者GPU型号，找到对应的torch、transformers和CUDA版本。</li></ul><h2 id="以-windows-11-为例开始搭建运行环境" tabindex="-1"><a class="header-anchor" href="#以-windows-11-为例开始搭建运行环境" aria-hidden="true">#</a> 以 Windows 11 为例开始搭建运行环境</h2><ul><li>Anaconda 环境</li><li>git 环境</li><li>fastchat 环境</li><li>transformers 环境</li><li>torch 环境</li><li>autogen 环境</li><li>chatglm2-6b 环境</li></ul><h3 id="配置anaconda环境" tabindex="-1"><a class="header-anchor" href="#配置anaconda环境" aria-hidden="true">#</a> 配置Anaconda环境</h3><h4 id="anaconda-官网下载地址" tabindex="-1"><a class="header-anchor" href="#anaconda-官网下载地址" aria-hidden="true">#</a> Anaconda 官网下载地址</h4><p><a href="https://www.anaconda.com/download/" target="_blank" rel="noopener noreferrer">Free Download | Anaconda --- 免费下载 |蟒蛇</a></p><h3 id="配置git环境" tabindex="-1"><a class="header-anchor" href="#配置git环境" aria-hidden="true">#</a> 配置Git环境</h3><h4 id="git-官网下载地址" tabindex="-1"><a class="header-anchor" href="#git-官网下载地址" aria-hidden="true">#</a> Git 官网下载地址</h4><p><a href="https://gitforwindows.org/" target="_blank" rel="noopener noreferrer">Git for Windows --- 适用于 Windows 的 Git</a></p><h3 id="配置fastchat环境" tabindex="-1"><a class="header-anchor" href="#配置fastchat环境" aria-hidden="true">#</a> 配置FastChat环境</h3><h4 id="从github上下载fastchat开源项目" tabindex="-1"><a class="header-anchor" href="#从github上下载fastchat开源项目" aria-hidden="true">#</a> 从GitHub上下载FastChat开源项目</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>git clone https://github.com/lm-sys/FastChat.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建python虚拟运行环境" tabindex="-1"><a class="header-anchor" href="#创建python虚拟运行环境" aria-hidden="true">#</a> 创建python虚拟运行环境</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cd FastChat

conda create -n autogen python=3.0 -y

conda activate autogen

pip3 install --upgrade pip -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn

pip3 install -e &quot;.[model_worker,webui]&quot; -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-transformers-环境" tabindex="-1"><a class="header-anchor" href="#配置-transformers-环境" aria-hidden="true">#</a> 配置 transformers 环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 uninstall -y transformers
pip3 install transformers==4.30.2 -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置torch环境" tabindex="-1"><a class="header-anchor" href="#配置torch环境" aria-hidden="true">#</a> 配置torch环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3 install torch==2.0.0+cu117 torchvision==0.15.1+cu117 torchaudio==2.0.1 --index-url https://download.pytorch.org/whl/cu117

pip3 install cpm_kernels -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置autogen环境" tabindex="-1"><a class="header-anchor" href="#配置autogen环境" aria-hidden="true">#</a> 配置autogen环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip install pyautogen -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载chatglm2-6b模型" tabindex="-1"><a class="header-anchor" href="#下载chatglm2-6b模型" aria-hidden="true">#</a> 下载Chatglm2-6b模型</h3><p>模型可从Hugging Face官网手动下载到/FastChat/ChatGLM-6B目录，没有目录的创建一个ChatGLM-6B目录（关键）。</p><h2 id="加载模型" tabindex="-1"><a class="header-anchor" href="#加载模型" aria-hidden="true">#</a> 加载模型</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code># controller 控制器

cd FastChat

conda activate autogen

python -m fastchat.serve.controller --host 0.0.0.0

# model_worker 模型执行器

cd FastChat

conda activate autogen

python -m fastchat.serve.model_worker --model-path ChatGLM-6B

# api_server API服务

cd FastChat

conda activate autogen

python -m fastchat.serve.openai_api_server --host 0.0.0.0 --port 9527
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试代码" tabindex="-1"><a class="header-anchor" href="#测试代码" aria-hidden="true">#</a> 测试代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>from autogen import oai
from autogen import AssistantAgent, UserProxyAgent, config_list_from_json

def TestAutoGen():
    config_list = [
        {
            &quot;model&quot;: &quot;ChatGLM-6B&quot;,
            &quot;base_url&quot;: &quot;http://127.0.0.1:9527/v1&quot;,
            #&quot;api_type&quot;: &quot;open_ai&quot;,#该行要注释掉，不然报错
            &quot;api_key&quot;: &quot;NULL&quot;
        }
    ]
    assistant = AssistantAgent(&quot;assistant&quot;, llm_config={
                               &quot;config_list&quot;: config_list})
    user_proxy = UserProxyAgent(
        &quot;user_proxy&quot;, code_execution_config={&quot;work_dir&quot;: &quot;coding&quot;})
    user_proxy.initiate_chat(
        assistant, message=&quot;用react.js写一个用户登录程序&quot;)


if __name__ == &#39;__main__&#39;:
    TestAutoGen()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2><h4 id="问题1" tabindex="-1"><a class="header-anchor" href="#问题1" aria-hidden="true">#</a> 问题1：</h4><p>启动FastChat的controller时报错： <code>ERROR: [Errno 99] error while attempting to bind on address (&#39;::1&#39;, 21001, 0, 0): cannot assign requested address</code> 这时，需要在需要在启动命令后加 - -host 0.0.0.0 <code>python -m fastchat.serve.controller --host 0.0.0.0</code></p><h4 id="问题2" tabindex="-1"><a class="header-anchor" href="#问题2" aria-hidden="true">#</a> 问题2：</h4><p><code>AttributeError: &#39;ChatGLMTokenizer&#39; object has no attribute &#39;tokenizer&#39;. Did you mean: &#39;tokenize&#39;</code> 修改transformers的版本：<code>pip install transformers == 4.33.2</code></p><h4 id="问题3" tabindex="-1"><a class="header-anchor" href="#问题3" aria-hidden="true">#</a> 问题3：</h4><p>有文档里autogen测试代码中ChatGLM的请求地址前参数写的是api_base，运行代码会报错，不能识别该参数。 <code>Completions.create() got an unexpected keyword argument &#39;api_base&#39;</code> 这时，需要把api_base要改成base_url。</p><h4 id="问题4" tabindex="-1"><a class="header-anchor" href="#问题4" aria-hidden="true">#</a> 问题4：</h4><p>有文档里autogen测试代码中ChatGLM配置里包括api_type参数，运行代码会报错，不能识别该参数。 <code>Completions.create() got an unexpected keyword argument &#39;api_type&#39;</code> 这时，需要把该参数注释掉。</p><h4 id="问题5" tabindex="-1"><a class="header-anchor" href="#问题5" aria-hidden="true">#</a> 问题5：</h4><p>运行代码会报错，测试代码中ChatGLM配置里model参数不能识别。 <code>openai.BadRequestError: Error code: 400 - {&#39;object&#39;: &#39;error&#39;, &#39;message&#39;: &#39;Only chatglm2-6b allowed now, your model ChatGLM-6B&#39;, &#39;code&#39;: 40301}</code> 这时，需要修改模型的名称，需要与FastChat的model_worker启动时的模型名称相同才会识别。</p><h4 id="问题6" tabindex="-1"><a class="header-anchor" href="#问题6" aria-hidden="true">#</a> 问题6：</h4><p>当给大模型的任务需要执行python代码时，程序会使用到docker，没有安装docker的话就会报错。 <code>AttributeError: module &#39;docker&#39; has no attribute &#39;from_env&#39;</code> 这时，执行pip3 install docker。</p><h4 id="问题7" tabindex="-1"><a class="header-anchor" href="#问题7" aria-hidden="true">#</a> 问题7：</h4><p>问题6安装docker后，执行仍报错。 <code>docker.errors.DockerException: Error while fetching server API version: (&#39;Connection aborted.&#39;, FileNotFoundError(2, &#39;No such file or directory&#39;))</code> 在代码的code_execution_config中添加&quot;use_docker&quot;:”python:3”，use_docker的值可以填docker镜像，填写镜像即是在镜像中执行模型自动生成的python代码，也可以什么都不填，什么都不填即是在本机运行，我这里因为是测试，就没有填实际的镜像。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>。</p>`,56)])])}const c=a(d,[["render",s],["__file","AutoGen _ FastChat _ ChatGLM2-6B 实现本地化部署.html.vue"]]);export{c as default};
