import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as t,o}from"./app-ry7nqkQQ.js";const a={};function s(l,e){return o(),i("div",null,[...e[0]||(e[0]=[t(`<h1 id="openai-api-接口文档-中文版" tabindex="-1"><a class="header-anchor" href="#openai-api-接口文档-中文版" aria-hidden="true">#</a> OpenAI-API 接口文档(中文版)</h1><h2 id="openai-api-中文版" tabindex="-1"><a class="header-anchor" href="#openai-api-中文版" aria-hidden="true">#</a> OpenAI-API-中文版</h2><h3 id="一、introduction介绍" tabindex="-1"><a class="header-anchor" href="#一、introduction介绍" aria-hidden="true">#</a> 一、<a href="https://platform.openai.com/docs/api-reference/introduction" target="_blank" rel="noopener noreferrer">Introduction</a>介绍</h3><p>如果你想使用我么你的 API，你可以通过 <strong>HTTP</strong> 请求从任何语言与 API 进行交互，也可以使用我们官方 Python 绑定、官方 Node.js 库或者使用<a href="https://platform.openai.com/docs/libraries/community-libraries" target="_blank" rel="noopener noreferrer">社区维护的库</a>。</p><p>若安装官方 Python 绑定，请运行一下命令：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install openai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要安装官方的 Node.js 库，请在您的 Node.js 项目目录中运行一下命令：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>npm install openai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、authentication认证" tabindex="-1"><a class="header-anchor" href="#二、authentication认证" aria-hidden="true">#</a> 二、<a href="https://platform.openai.com/docs/api-reference/authentication" target="_blank" rel="noopener noreferrer">Authentication</a>认证</h3><ol><li><strong>OpenAI-API-KEY</strong></li></ol><p><strong>OpenAI API</strong>使用 API 密钥进行身份验证。请访问您的 <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer">API 密钥</a>页面以检索您在请求中使用的 API 密钥。</p><p>**请记住，您的 API 密钥是机密的！**不要与他人分享它或在任何客户端代码（浏览器、应用程序）中公开它生产请求必须通过您自己的后端服务器路由，其中您的 API 密钥可以从环境变量或密钥管理服务中安全加载。</p><p>所有 API 请求都应在<code>Authorization</code>HTTP 标头中包含您的 API 密钥，如下所示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code># 注意：Bearer OPENAI_API_KEY，Bearer的后面是有一个空格的
Authorization: Bearer OPENAI_API_KEY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>OpenAI-Organization</strong></li></ol><p>Requesting organization 请求组织</p><p>对于属于多个组织的用户，您可以传递一个<strong>表头</strong>来指定用于 API 请求的组织。这些 API 请求的使用将计入指定组织的订阅配额。</p><p>示例<strong>curl</strong>命令：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>curl http://api.openai.com/v1/models\\
  - H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \\
  - H &quot;OpenAI-Organization: org-gth0C8mT2wnKealyCkSRrpQk&quot; \\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<strong>openai Python 包</strong>的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>import os
import openai
openai.organization = &#39;org-gth0C8mT2wnKealyCkSRrpQk&#39;
openai.api_key = os.environ(&#39;OPENAI_API_KEY&#39;)
openai.Model.list()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 openai Node.js 包的示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>import { Configuration, OpenAIApi } from &#39;openai&#39;
const configuration = new Configuration({
  organization: &#39;org-gth0C8mT2wnKealyCkSRrpQk&#39;,
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
const response = await openai.listEngines()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在组织<a href="https://platform.openai.com/account/org-settings" target="_blank" rel="noopener noreferrer">设置页面</a>上找到<strong>组织 ID</strong>。</p><h3 id="三、making-requests-提出请求" tabindex="-1"><a class="header-anchor" href="#三、making-requests-提出请求" aria-hidden="true">#</a> 三、Making Requests 提出请求</h3><p>您可以将下面的命令粘贴到您的终端中，以运行您的第一个 API 请求。请确保将 <strong>$OPENAI_API_KEY</strong> 替换为您的 <strong>API 密钥</strong>。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>curl http://api.openai.com/v1/chat/completions \\
  - H &quot;Content-Type: application/json&quot; \\
  - H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \\
  - d &#39;{
    &quot;model&quot;: &quot;gpt-3.5-turbo&quot;,
    &quot;message&quot;: [{&quot;role&quot;: &quot;user&quot;,&quot;content&quot;: &quot;Say this is a test!&quot;}],
    &quot;temperature&quot;: 0.7
  }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此请求查询<code>gpt-3.5-turbo模型</code>，以完成从提示&quot;Say this is a test&quot;开始的文本。您应该会收到类似一下内容的响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;id&quot;: &quot;chatcmpl-abc123&quot;,
  &quot;object&quot;: &quot;chat.completion&quot;,
  &quot;create&quot;: &quot;1677858242&quot;,
  &quot;model&quot;: &quot;gpt-3.5-turbo&quot;,
  &quot;usage&quot;: {
    &quot;prompt_tokens&quot;: 13,
    &quot;completion_token&quot;: 7,
    &quot;total_tokens&quot;: 20
  },
  &quot;choices&quot;: [
    {
      &quot;message&quot;: {
        &quot;role&quot;: &quot;assistant&quot;,
        &quot;content&quot;: &quot;\\n\\nThis is a test!&quot;
      },
      &quot;finish_reason&quot;: &quot;stop&quot;,
      &quot;index&quot;: 0
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在您已经生成了第一个聊天完成。我们可以看到<code>finish_reason</code>是<code>stop</code>,这意味着 API 返回了模型生成的完整完成。在上面的请求中，我们只生成了一条消息，但您可以将<code>n</code>参数设置为生成多个消息选项。在此示例中，<code>gpt-3.5-turbo</code>被用于更传统的<a href="https://platform.openai.com/docs/guides/completion/introduction" target="_blank" rel="noopener noreferrer">文本完成任务</a>。该模型也针对<a href="https://platform.openai.com/docs/guides/chat" target="_blank" rel="noopener noreferrer">聊天应用</a>进行了优化。</p><h3 id="四、models-模型" tabindex="-1"><a class="header-anchor" href="#四、models-模型" aria-hidden="true">#</a> 四、<a href="https://platform.openai.com/docs/guides/chat" target="_blank" rel="noopener noreferrer">Models</a> 模型</h3><p>列出并描述 API 中可用的各种模型。您可以参考<a href="https://platform.openai.com/docs/models" target="_blank" rel="noopener noreferrer">模型文档</a>以了解可用的模型以及它们之间的差异。</p><ol><li><a href="https://platform.openai.com/docs/api-reference/models/list" target="_blank" rel="noopener noreferrer">List models</a>列出模型</li></ol><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET
http://api.openapi.com/v1/models
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>列出当前可用的模型，并提供有关每个模型的基本信息，例如所有者和可用性。</p><p>请求演示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>curl http://api.openapi.com/v1//models \\
  - H &quot;Authorization: Bearer $OPENAI_API_KEY&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;data&quot;:[
    {
      &quot;id&quot;: &quot;model-id-0&quot;,
      &quot;object&quot;: &quot;model&quot;,
      &quot;owned_by&quot;: &quot;organization-owner&quot;,
      &quot;permisson&quot;:[...]
    },
    {
      &quot;id&quot;: &quot;model-id-1&quot;,
      &quot;object&quot;: &quot;model&quot;,
      &quot;owned_by&quot;: &quot;organization-owner&quot;,
      &quot;permisson&quot;:[...]
    },
    {
      &quot;id&quot;: &quot;model-id-2&quot;,
      &quot;object&quot;: &quot;model&quot;,
      &quot;owned_by&quot;: &quot;openai&quot;,
      &quot;permisson&quot;:[...]
    },
  ],
  &quot;object&quot;: &quot;list&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><a href="https://platform.openai.com/docs/api-reference/models/retrieve" target="_blank" rel="noopener noreferrer">Retrieve model</a> 检索模型：</li></ol><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET
http://api.openai.com/v1/models/{model}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检索模型实例，提供有关模型的基本信息，例如所有者和权限。</p><p>其中，<code>model</code>为必填的字符串类型，用于此请求的模型的 ID。</p><p>请求演示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>curl http://api.openai.com/v1/models/text-davinci-003 \\
  - H &quot;Authorization: Bearer $OPENAI_API_KEY&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;id&quot;: &quot;text-davinci-003&quot;,
  &quot;object&quot;: &quot;model&quot;,
  &quot;owned_by&quot;: &quot;openai&quot;,
  &quot;permission&quot;: [...]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、completions完成" tabindex="-1"><a class="header-anchor" href="#五、completions完成" aria-hidden="true">#</a> 五、<a href="https://platform.openai.com/docs/api-reference/completions" target="_blank" rel="noopener noreferrer">Completions</a>完成</h3><p>给定一个提示，模型将返回一个或多个预测的完成，并且还可以再每个位置返回替代令牌的概率。</p><ol><li><a href="https://platform.openai.com/docs/api-reference/completions/create" target="_blank" rel="noopener noreferrer">Create completion</a></li></ol><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST
http://api.openai.com/v1/completions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>未提供的提示和参数创建完成。</p><p>请求演示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>curl https://api.openai.com/v1/completions \\
  - H &quot;Content-Type: application/json&quot; \\
  - H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \\
  - d &#39;{
    &quot;model&quot;: &quot;text-davinci-003&quot;,
    &quot;prompt&quot;: &quot;Say this is a test&quot;,
    &quot;max_tokens&quot;: 7,
    &quot;temperature&quot;: 0
  }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;id&quot;: &quot;cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7&quot;,
  &quot;object&quot;: &quot;text_completion&quot;,
  &quot;created&quot;: 1589478378,
  &quot;model&quot;: &quot;text-davinci-003&quot;,
  &quot;choices&quot;: [
    {
      &quot;text&quot;: &quot;\\n\\nThis is indeed a test&quot;,
      &quot;index&quot;: 0,
      &quot;logprobs&quot;: null,
      &quot;finish_reason&quot;: &quot;length&quot;
    }
  ],
  &quot;usage&quot;: {
    &quot;prompt_tokens&quot;: 5,
    &quot;completion_tokens&quot;: 7,
    &quot;total_tokens&quot;: 12
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Request body（入参详解）</p><ul><li><code>model</code> (string, 必填)</li></ul><p>要使用的模型的 ID。可以使用<a href="https://platform.openai.com/docs/api-reference/models/list" target="_blank" rel="noopener noreferrer">列表模型</a> API（GET <a href="https://api.openai.com/v1/models" target="_blank" rel="noopener noreferrer">api.openai.com/v1/models</a>）查看所有可用模型，或参阅<a href="https://platform.openai.com/docs/models/overview" target="_blank" rel="noopener noreferrer">模型概述</a>了解它们的描述。</p><ul><li><p><code>prompt</code> (string or array, 选填, Defaults to &lt;|endoftext|&gt;)</p><p>用于生成完成、编码为字符串、字符串数组、标记数组或标记数组数组的提示。</p><p>注意 |endoftext| 是模型在训练期间看到的文档分隔符，因此如果未指定提示，模型将生成，就像从新文档的开头一样。</p></li><li><p><code>suffix</code> (string，选填，Defaults to null)</p><p>完成插入文本后的后缀。</p></li><li><p><code>max_tokens</code> (integer，选填，Defaults to 16)</p><p>完成时要生成的最大 <a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer">token</a> 数。</p><p>提示 max_tokens 的 token 计数不能超过模型的上下文长度。大多数模型的上下文长度为 2048 个令牌（最新模型除外，它支持 4096）</p></li><li><p><code>temperature</code> (number，选填，Defaults to 1)</p><p>使用哪个采样温度，在 0 和 2 之间。</p><p>较高的值，如 0.8 会使输出更随机，而较低的值，如 0.2 会使其更加集中和确定性。</p><p>我们通常建议修改这个（temperature ）为 top_p 但两者不能同时存在，二选一。</p></li><li><p><code>top_p</code> (number，选填，Defaults to 1)</p><p>一种替代温度采样的方法叫做核心采样，模型会考虑到具有 top_p 概率质量的标记结果。因此，0.1 表示只有占前 10% 概率质量的标记被考虑。</p><p>我们通常建议修改这个（top_p ）或者 temperature，但不要同时修改两者。</p></li><li><p><code>n</code> (integer，选填，Defaults to 1)</p><p>每个 prompt 生成的完成次数。</p><p>注意：由于此参数会生成许多完成，因此它会快速消耗您的令牌配额。小心使用，并确保对 max_tokens 和 stop 进行合理的设置。</p></li><li><p><code>stream</code> (boolean，选填，Defaults to false)</p><p>是否返回部分进度流。如果设置，令牌将作为数据服务器推送事件随着它们变得可用而发送，流通过 data: [DONE] 消息终止。</p></li><li><p><code>logprobs</code> (integer，选填，Defaults to null)</p><p>在 logprobs 返回的最有可能的标记列表中，包括所选标记和对应的对数概率。</p><p>例如，如果 logprobs 为 5，则 API 将返回一个由 5 个最有可能的标记组成的列表。API 总是会返回采样标记的对数概率，因此响应中可能会有多达 logprobs+1 个元素。</p><p>logprobs 的最大值为 5。如果您需要更多，请通过我们的 <a href="https://help.openai.com/en/" target="_blank" rel="noopener noreferrer">帮助中心</a> 联系我们并描述您的用例。</p></li><li><p><code>echo</code> (boolean，选填，Defaults to false)</p><p>除了完成之外，还回显提示</p></li><li><p><code>stop</code> (string or array，选填，Defaults to null)</p><p>最多生成 4 个序列，API 将停止生成更多的标记。返回的文本不包含停止序列。</p></li><li><p><code>presence_penalty</code> (number，选填，Defaults to 0)</p><p>介于 -2.0 和 2.0 之间的数字。正值会根据它们是否出现在文本中迄今为止来惩罚新令牌，从而增加模型谈论新主题的可能性。</p><p><a href="https://platform.openai.com/docs/api-reference/parameter-details" target="_blank" rel="noopener noreferrer">请参阅有关频率和状态惩罚的更多信息</a></p></li><li><p><code>frequency_penalty</code> (number，选填，Defaults to 0)</p><p>介于-2.0 和 2.0 之间的数字。正值会根据文本中新令牌的现有频率对其进行惩罚，从而降低模型重复相同行的可能性。</p><p><a href="https://platform.openai.com/docs/api-reference/parameter-details" target="_blank" rel="noopener noreferrer">请参阅有关频率和存在惩罚的更多信息</a></p></li><li><p><code>best_of</code> (integer，选填，Defaults to 1)</p><p>在生成服务器端生成 <code>best_of</code> 完成，并返回“最佳”（每个标记具有最高对数概率的那一个）。结果无法流式传输。</p><p>当与 <code>n</code> 一起使用时，<code>best_of</code> 控制候选完成的数量，<code>n</code> 指定要返回多少个 - <code>best_of</code> 必须大于 <code>n</code>。</p><p>注意：由于此参数生成许多完成，因此可能会快速消耗您的令牌配额。请小心使用并确保 <code>max_tokens</code> 和 <code>stop</code> 设置合理。</p></li><li><p><code>logit_bias</code> (map，选填，Defaults to null)</p><p>修改指定标记在完成中出现的可能性。</p><p>接受一个 JSON 对象，将标记（由 GPT 分词器中的标记 ID 指定）映射到从 -100 到 100 的相关偏差值。您可以使用此 <a href="https://platform.openai.com/tokenizer?view=bpe" target="_blank" rel="noopener noreferrer">分词器工具</a>（适用于 GPT-2 和 GPT-3）将文本转换为令牌 ID。数学上，在采样之前，模型生成的 logits 会添加偏差。确切的效果因模型而异，但是介于-1 和 1 之间的值应该会减少或增加选择的可能性；像 -100 或 100 这样的值应该会导致相关令牌被禁止或独占选择。</p><p>例如，您可以传递 <code>{&quot;50256&quot;: -100}</code> 来防止生成</p></li><li><p><code>user</code> (string，选填)</p><p>一个唯一的标识符，代表您的终端用户，可以帮助 OpenAI 监测和检测滥用。<a href="https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids" target="_blank" rel="noopener noreferrer">了解更多信息</a>。</p></li></ul><h3 id="六、chat聊天" tabindex="-1"><a class="header-anchor" href="#六、chat聊天" aria-hidden="true">#</a> 六、<a href="https://platform.openai.com/docs/api-reference/chat" target="_blank" rel="noopener noreferrer">Chat</a>聊天</h3><p>给定一组描述对话的消息列表，模型将返回一个回复。</p><ol><li><a href="https://platform.openai.com/docs/api-reference/chat/create" target="_blank" rel="noopener noreferrer">Create chat completion</a></li></ol><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST
http://api.openai.com/v1/chat/completions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为给定的聊天对话创建模型响应。</p><p>请求演示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>curl https://api.openai.com/v1/chat/completions \\
  -H &quot;Content-Type: application/json&quot; \\
  -H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \\
  -d &#39;{ 
    &quot;model&quot;: &quot;gpt-3.5-turbo&quot;, 
    &quot;messages&quot;: [{
      &quot;role&quot;: &quot;user&quot;,
      &quot;content&quot;: &quot;Hello!&quot;
    }]
    }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;id&quot;: &quot;chatcmpl-123&quot;,
  &quot;object&quot;: &quot;chat.completion&quot;,
  &quot;create&quot;: 1677652288,
  &quot;chioce&quot;: [{
    &quot;index&quot;: 0,
    &quot;message&quot;: {
      &quot;role&quot;: &quot;assistant&quot;,
      &quot;content&quot;: &quot;\\n\\nHello there, how may I assist you today?&quot;,
    },
    &quot;finish_reason&quot;: &quot;stop&quot;
  }],
  &quot;usage&quot;: {
    &quot;prompt_tokens&quot;: 9,
    &quot;completions&quot;: 12,
    &quot;total_tokens&quot;: 21
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Request body(入参详解)</p><ul><li><p>model（string，必填） 要使用的模型ID。有关哪些模型适用于Chat API的详细信息，<img src="https://platform.openai.com/docs/models/model-endpoint-compatibility" alt="请查看模型端点兼容性表"></p></li><li><p>messages （array，必填） 迄今为止描述对话的消息列表</p></li><li><p>role （string，必填） 此消息的作者角色。system 、user 或 assistant 之一</p></li><li><p>content （string，必填） 消息的内容</p></li><li><p>name （string，选填） 此消息的作者的姓名。可以包含 a-z、A-Z、0-9 和下划线，最大长度为 64 个字符</p></li><li><p>temperature （number，选填，Defaults to 1） 使用哪个采样温度，在 0和2之间。 较高的值，如0.8会使输出更随机，而较低的值，如0.2会使其更加集中和确定性。 我们通常建议修改这个（temperature ）为 top_p 但两者不能同时存在，二选一。</p></li><li><p>top_p （number，选填，Defaults to 1） 一种替代温度采样的方法叫做核心采样，模型会考虑到具有 top_p 概率质量的标记结果。因此，0.1 表示只有占前 10% 概率质量的标记被考虑。 我们通常建议修改这个（top_p ）或者 temperature，但不要同时修改两者。</p></li><li><p>n （integer，选填，Defaults to 1） 每个输入消息要生成多少聊天完成选项数</p></li><li><p>stream （boolean，选填，Defaults to false） 如果设置了，将发送部分消息增量，就像在 ChatGPT 中一样。令牌将作为数据<img src="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format" alt="服务器推送事件">随着它们变得可用而被发送，流通过 data: [DONE] 消息终止。请参阅OpenAI Cookbook 以获取<img src="https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb" alt="示例代码">。</p></li><li><p>stop （string or array，选填，Defaults to null） 最多生成4个序列，API将停止生成更多的标记。</p></li><li><p>max_tokens （integer，选填，Defaults to inf） 在聊天完成中生成的最大<img src="https://platform.openai.com/tokenizer" alt="tokens">数。 输入令牌和生成的令牌的总长度受模型上下文长度的限制。</p></li><li><p>presence_penalty （number，选填，Defaults to 0） 介于 -2.0 和 2.0 之间的数字。正值会根据它们是否出现在文本中迄今为止来惩罚新令牌，从而增加模型谈论新主题的可能性。 <img src="https://platform.openai.com/docs/api-reference/parameter-details" alt="请参阅有关频率和状态惩罚的更多信息"></p></li><li><p>frequency_penalty （number，选填，Defaults to 0） 介于-2.0和2.0之间的数字。正值会根据文本中新令牌的现有频率对其进行惩罚，从而降低模型重复相同行的可能性。 <img src="https://platform.openai.com/docs/api-reference/parameter-details" alt="请参阅有关频率和存在惩罚的更多信息"></p></li><li><p>logit_bias （map，选填，Defaults to null） 修改完成时指定标记出现的可能性。 接受一个JSON对象，将标记（由分词器中的标记ID指定）映射到从 -100 到 100 的相关偏差值。在采样之前，模型生成的logits会加上这个偏差。确切的影响因模型而异，但是 -1 到 1 之间的值应该会减少或增加选择概率；像 -100 或 100 这样的值应该会导致相关标记被禁止或独占选择。</p></li><li><p>user （string，选填） 一个唯一的标识符，代表您的终端用户，可以帮助OpenAI监测和检测滥用。<img src="https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids" alt="了解更多信息">。</p></li></ul><h3 id="七、edit编辑" tabindex="-1"><a class="header-anchor" href="#七、edit编辑" aria-hidden="true">#</a> 七、<a href="https://platform.openai.com/docs/api-reference/edits" target="_blank" rel="noopener noreferrer">Edit</a>编辑</h3><p>给定一个提示和一条指令，模型将返回提示的编辑版本。</p><ol><li><a href="https://platform.openai.com/docs/api-reference/edits/create" target="_blank" rel="noopener noreferrer">Create edit</a></li></ol><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST
https://api.openai.com/v1/edits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为提供的输入、指令和参数创建一个新的编辑。</p><p>请求演示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>curl https://api.openai.com/v1/edits \\
  -H &quot;Content-Type: application/json&quot; \\
  -H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \\
  -d &#39;{
    &quot;model&quot;: &quot;text-davinci-edit-001&quot;,
    &quot;input&quot;: &quot;What day of the wek is it?&quot;,
    &quot;instruction&quot;: &quot;Fix the spelling mistakes&quot;
  }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;object&quot;: &quot;edit&quot;,
  &quot;created&quot;: 1589478378,
  &quot;choices&quot;: [
    {
      &quot;text&quot;: &quot;What day of the week is it?&quot;,
      &quot;index&quot;: 0,
    }
  ],
  &quot;usage&quot;: {
    &quot;prompt_tokens&quot;: 25,
    &quot;completion_tokens&quot;: 32,
    &quot;total_tokens&quot;: 57
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Request body(入参详解)</p><ul><li><p>model （string，必填） 要使用的模型ID。您可以在此端点中使用 text-davinci-edit-001 或 code-davinci-edit-001 模型。</p></li><li><p>input （string，选填，Defaults to &#39;&#39;） 用作编辑起点的输入文本。</p></li><li><p>instruction （string，必填） 指导模型如何编辑提示的说明。</p></li><li><p>n （integer，选填，Defaults to 1） 输入和指令需要生成多少次编辑。</p></li><li><p>temperature （number，选填，Defaults to 1） 使用哪个采样温度，在 0和2之间。 较高的值，如0.8会使输出更随机，而较低的值，如0.2会使其更加集中和确定性。 我们通常建议修改这个（temperature ）为 top_p 但两者不能同时存在，二选一。</p></li><li><p>top_p （number，选填，Defaults to 1） 一种替代温度采样的方法叫做核心采样，模型会考虑到具有 top_p 概率质量的标记结果。因此，0.1 表示只有占前 10% 概率质量的标记被考虑。 我们通常建议修改这个（top_p ）或者 temperature，但不要同时修改两者。</p></li></ul>`,82)])])}const u=n(a,[["render",s],["__file","OpenAI接口文档.html.vue"]]);export{u as default};
