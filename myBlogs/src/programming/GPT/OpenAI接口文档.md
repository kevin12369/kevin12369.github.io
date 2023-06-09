---
icon: edit
date: 2023-05-31
category:
  - GPT
tag:
  - OpenAI
---

# OpenAI-API 接口文档(中文版)

## OpenAI-API-中文版

### 一、[Introduction](https://platform.openai.com/docs/api-reference/introduction)介绍

如果你想使用我么你的 API，你可以通过 **HTTP** 请求从任何语言与 API 进行交互，也可以使用我们官方 Python 绑定、官方 Node.js 库或者使用[社区维护的库](https://platform.openai.com/docs/libraries/community-libraries)。

若安装官方 Python 绑定，请运行一下命令：

```python
pip install openai
```

要安装官方的 Node.js 库，请在您的 Node.js 项目目录中运行一下命令：

```python
npm install openai
```

### 二、[Authentication](https://platform.openai.com/docs/api-reference/authentication)认证

1. **OpenAI-API-KEY**

**OpenAI API**使用 API 密钥进行身份验证。请访问您的 [API 密钥](https://platform.openai.com/account/api-keys)页面以检索您在请求中使用的 API 密钥。

**请记住，您的 API 密钥是机密的！**不要与他人分享它或在任何客户端代码（浏览器、应用程序）中公开它生产请求必须通过您自己的后端服务器路由，其中您的 API 密钥可以从环境变量或密钥管理服务中安全加载。

所有 API 请求都应在`Authorization`HTTP 标头中包含您的 API 密钥，如下所示：

```http
# 注意：Bearer OPENAI_API_KEY，Bearer的后面是有一个空格的
Authorization: Bearer OPENAI_API_KEY
```

2. **OpenAI-Organization**

Requesting organization 请求组织

对于属于多个组织的用户，您可以传递一个**表头**来指定用于 API 请求的组织。这些 API 请求的使用将计入指定组织的订阅配额。

示例**curl**命令：

```http
curl http://api.openai.com/v1/models\
  - H "Authorization: Bearer $OPENAI_API_KEY" \
  - H "OpenAI-Organization: org-gth0C8mT2wnKealyCkSRrpQk" \
```

使用**openai Python 包**的示例：

```python
import os
import openai
openai.organization = 'org-gth0C8mT2wnKealyCkSRrpQk'
openai.api_key = os.environ('OPENAI_API_KEY')
openai.Model.list()
```

使用 openai Node.js 包的示例：

```js
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
  organization: 'org-gth0C8mT2wnKealyCkSRrpQk',
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
const response = await openai.listEngines()
```

可以在组织[设置页面](https://platform.openai.com/account/org-settings)上找到**组织 ID**。

### 三、Making Requests 提出请求

您可以将下面的命令粘贴到您的终端中，以运行您的第一个 API 请求。请确保将 **$OPENAI_API_KEY** 替换为您的 **API 密钥**。

```http
curl http://api.openai.com/v1/chat/completions \
  - H "Content-Type: application/json" \
  - H "Authorization: Bearer $OPENAI_API_KEY" \
  - d '{
    "model": "gpt-3.5-turbo",
    "message": [{"role": "user","content": "Say this is a test!"}],
    "temperature": 0.7
  }'
```

此请求查询`gpt-3.5-turbo模型`，以完成从提示"Say this is a test"开始的文本。您应该会收到类似一下内容的响应：

```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "create": "1677858242",
  "model": "gpt-3.5-turbo",
  "usage": {
    "prompt_tokens": 13,
    "completion_token": 7,
    "total_tokens": 20
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "\n\nThis is a test!"
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}
```

现在您已经生成了第一个聊天完成。我们可以看到`finish_reason`是`stop`,这意味着 API 返回了模型生成的完整完成。在上面的请求中，我们只生成了一条消息，但您可以将`n`参数设置为生成多个消息选项。在此示例中，`gpt-3.5-turbo`被用于更传统的[文本完成任务](https://platform.openai.com/docs/guides/completion/introduction)。该模型也针对[聊天应用](https://platform.openai.com/docs/guides/chat)进行了优化。

### 四、[Models](https://platform.openai.com/docs/guides/chat) 模型

列出并描述 API 中可用的各种模型。您可以参考[模型文档](https://platform.openai.com/docs/models)以了解可用的模型以及它们之间的差异。

1. [List models](https://platform.openai.com/docs/api-reference/models/list)列出模型

```http
GET
http://api.openapi.com/v1/models
```

列出当前可用的模型，并提供有关每个模型的基本信息，例如所有者和可用性。

请求演示：

```http
curl http://api.openapi.com/v1//models \
  - H "Authorization: Bearer $OPENAI_API_KEY"
```

响应：

```json
{
  "data":[
    {
      "id": "model-id-0",
      "object": "model",
      "owned_by": "organization-owner",
      "permisson":[...]
    },
    {
      "id": "model-id-1",
      "object": "model",
      "owned_by": "organization-owner",
      "permisson":[...]
    },
    {
      "id": "model-id-2",
      "object": "model",
      "owned_by": "openai",
      "permisson":[...]
    },
  ],
  "object": "list"
}
```

2. [Retrieve model](https://platform.openai.com/docs/api-reference/models/retrieve) 检索模型：

```http
GET
http://api.openai.com/v1/models/{model}
```

检索模型实例，提供有关模型的基本信息，例如所有者和权限。

其中，`model`为必填的字符串类型，用于此请求的模型的 ID。

请求演示：

```http
curl http://api.openai.com/v1/models/text-davinci-003 \
  - H "Authorization: Bearer $OPENAI_API_KEY"
```

响应：

```json
{
  "id": "text-davinci-003",
  "object": "model",
  "owned_by": "openai",
  "permission": [...]
}
```

### 五、[Completions](https://platform.openai.com/docs/api-reference/completions)完成

给定一个提示，模型将返回一个或多个预测的完成，并且还可以再每个位置返回替代令牌的概率。

1. [Create completion](https://platform.openai.com/docs/api-reference/completions/create)

```http
POST
http://api.openai.com/v1/completions
```

未提供的提示和参数创建完成。

请求演示：

```http
curl https://api.openai.com/v1/completions \
  - H "Content-Type: application/json" \
  - H "Authorization: Bearer $OPENAI_API_KEY" \
  - d '{
    "model": "text-davinci-003",
    "prompt": "Say this is a test",
    "max_tokens": 7,
    "temperature": 0
  }'
```

响应：

```json
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "text-davinci-003",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}
```

Request body（入参详解）

- `model` (string, 必填)

要使用的模型的 ID。可以使用[列表模型](https://platform.openai.com/docs/api-reference/models/list) API（GET [api.openai.com/v1/models](https://api.openai.com/v1/models)）查看所有可用模型，或参阅[模型概述](https://platform.openai.com/docs/models/overview)了解它们的描述。

- `prompt` (string or array, 选填, Defaults to <|endoftext|>)

  用于生成完成、编码为字符串、字符串数组、标记数组或标记数组数组的提示。

  注意 |endoftext| 是模型在训练期间看到的文档分隔符，因此如果未指定提示，模型将生成，就像从新文档的开头一样。

- `suffix` (string，选填，Defaults to null)

  完成插入文本后的后缀。

- `max_tokens` (integer，选填，Defaults to 16)

  完成时要生成的最大 [token](https://platform.openai.com/tokenizer) 数。

  提示 max_tokens 的 token 计数不能超过模型的上下文长度。大多数模型的上下文长度为 2048 个令牌（最新模型除外，它支持 4096）

- `temperature` (number，选填，Defaults to 1)

  使用哪个采样温度，在 0 和 2 之间。

  较高的值，如 0.8 会使输出更随机，而较低的值，如 0.2 会使其更加集中和确定性。

  我们通常建议修改这个（temperature ）为 top_p 但两者不能同时存在，二选一。

- `top_p` (number，选填，Defaults to 1)

  一种替代温度采样的方法叫做核心采样，模型会考虑到具有 top_p 概率质量的标记结果。因此，0.1 表示只有占前 10% 概率质量的标记被考虑。

  我们通常建议修改这个（top_p ）或者 temperature，但不要同时修改两者。

- `n` (integer，选填，Defaults to 1)

  每个 prompt 生成的完成次数。

  注意：由于此参数会生成许多完成，因此它会快速消耗您的令牌配额。小心使用，并确保对 max_tokens 和 stop 进行合理的设置。

- `stream` (boolean，选填，Defaults to false)

  是否返回部分进度流。如果设置，令牌将作为数据服务器推送事件随着它们变得可用而发送，流通过 data: [DONE] 消息终止。

- `logprobs` (integer，选填，Defaults to null)

  在 logprobs 返回的最有可能的标记列表中，包括所选标记和对应的对数概率。

  例如，如果 logprobs 为 5，则 API 将返回一个由 5 个最有可能的标记组成的列表。API 总是会返回采样标记的对数概率，因此响应中可能会有多达 logprobs+1 个元素。

  logprobs 的最大值为 5。如果您需要更多，请通过我们的 [帮助中心](https://help.openai.com/en/) 联系我们并描述您的用例。

- `echo` (boolean，选填，Defaults to false)

  除了完成之外，还回显提示

- `stop` (string or array，选填，Defaults to null)

  最多生成 4 个序列，API 将停止生成更多的标记。返回的文本不包含停止序列。

- `presence_penalty` (number，选填，Defaults to 0)

  介于 -2.0 和 2.0 之间的数字。正值会根据它们是否出现在文本中迄今为止来惩罚新令牌，从而增加模型谈论新主题的可能性。

  [请参阅有关频率和状态惩罚的更多信息](https://platform.openai.com/docs/api-reference/parameter-details)

- `frequency_penalty` (number，选填，Defaults to 0)

  介于-2.0 和 2.0 之间的数字。正值会根据文本中新令牌的现有频率对其进行惩罚，从而降低模型重复相同行的可能性。

  [请参阅有关频率和存在惩罚的更多信息](https://platform.openai.com/docs/api-reference/parameter-details)

- `best_of` (integer，选填，Defaults to 1)

  在生成服务器端生成 `best_of` 完成，并返回“最佳”（每个标记具有最高对数概率的那一个）。结果无法流式传输。

  当与 `n` 一起使用时，`best_of` 控制候选完成的数量，`n` 指定要返回多少个 - `best_of` 必须大于 `n`。

  注意：由于此参数生成许多完成，因此可能会快速消耗您的令牌配额。请小心使用并确保 `max_tokens` 和 `stop` 设置合理。

- `logit_bias` (map，选填，Defaults to null)

  修改指定标记在完成中出现的可能性。

  接受一个 JSON 对象，将标记（由 GPT 分词器中的标记 ID 指定）映射到从 -100 到 100 的相关偏差值。您可以使用此 [分词器工具](https://platform.openai.com/tokenizer?view=bpe)（适用于 GPT-2 和 GPT-3）将文本转换为令牌 ID。数学上，在采样之前，模型生成的 logits 会添加偏差。确切的效果因模型而异，但是介于-1 和 1 之间的值应该会减少或增加选择的可能性；像 -100 或 100 这样的值应该会导致相关令牌被禁止或独占选择。

  例如，您可以传递 `{"50256": -100}` 来防止生成

- `user` (string，选填)

  一个唯一的标识符，代表您的终端用户，可以帮助 OpenAI 监测和检测滥用。[了解更多信息](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids)。

### 六、[Chat](https://platform.openai.com/docs/api-reference/chat)聊天

给定一组描述对话的消息列表，模型将返回一个回复。

1. [Create chat completion](https://platform.openai.com/docs/api-reference/chat/create)

```http
POST
http://api.openai.com/v1/chat/completions
```

为给定的聊天对话创建模型响应。

请求演示：

```http
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{ 
    "model": "gpt-3.5-turbo", 
    "messages": [{
      "role": "user",
      "content": "Hello!"
    }]
    }'
```

响应：

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "create": 1677652288,
  "chioce": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "\n\nHello there, how may I assist you today?",
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completions": 12,
    "total_tokens": 21
  }
}
```

Request body(入参详解)

- model（string，必填）
要使用的模型ID。有关哪些模型适用于Chat API的详细信息，![请查看模型端点兼容性表](https://platform.openai.com/docs/models/model-endpoint-compatibility)

- messages （array，必填）
迄今为止描述对话的消息列表

- role （string，必填）
此消息的作者角色。system 、user 或 assistant 之一

- content （string，必填）
消息的内容

- name （string，选填）
此消息的作者的姓名。可以包含 a-z、A-Z、0-9 和下划线，最大长度为 64 个字符

- temperature （number，选填，Defaults to 1）
使用哪个采样温度，在 0和2之间。
较高的值，如0.8会使输出更随机，而较低的值，如0.2会使其更加集中和确定性。
我们通常建议修改这个（temperature ）为 top_p 但两者不能同时存在，二选一。

- top_p （number，选填，Defaults to 1）
一种替代温度采样的方法叫做核心采样，模型会考虑到具有 top_p 概率质量的标记结果。因此，0.1 表示只有占前 10% 概率质量的标记被考虑。
我们通常建议修改这个（top_p ）或者 temperature，但不要同时修改两者。

- n （integer，选填，Defaults to 1）
每个输入消息要生成多少聊天完成选项数

- stream （boolean，选填，Defaults to false）
如果设置了，将发送部分消息增量，就像在 ChatGPT 中一样。令牌将作为数据![服务器推送事件](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)随着它们变得可用而被发送，流通过 data: [DONE] 消息终止。请参阅OpenAI Cookbook 以获取![示例代码](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb)。

- stop （string or array，选填，Defaults to null）
最多生成4个序列，API将停止生成更多的标记。

- max_tokens （integer，选填，Defaults to inf）
在聊天完成中生成的最大![tokens](https://platform.openai.com/tokenizer)数。
输入令牌和生成的令牌的总长度受模型上下文长度的限制。

- presence_penalty （number，选填，Defaults to 0）
介于 -2.0 和 2.0 之间的数字。正值会根据它们是否出现在文本中迄今为止来惩罚新令牌，从而增加模型谈论新主题的可能性。
![请参阅有关频率和状态惩罚的更多信息](https://platform.openai.com/docs/api-reference/parameter-details)

- frequency_penalty （number，选填，Defaults to 0）
介于-2.0和2.0之间的数字。正值会根据文本中新令牌的现有频率对其进行惩罚，从而降低模型重复相同行的可能性。
![请参阅有关频率和存在惩罚的更多信息](https://platform.openai.com/docs/api-reference/parameter-details)

- logit_bias （map，选填，Defaults to null）
修改完成时指定标记出现的可能性。
接受一个JSON对象，将标记（由分词器中的标记ID指定）映射到从 -100 到 100 的相关偏差值。在采样之前，模型生成的logits会加上这个偏差。确切的影响因模型而异，但是 -1 到 1 之间的值应该会减少或增加选择概率；像 -100 或 100 这样的值应该会导致相关标记被禁止或独占选择。

- user （string，选填）
一个唯一的标识符，代表您的终端用户，可以帮助OpenAI监测和检测滥用。![了解更多信息](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids)。

### 七、[Edit](https://platform.openai.com/docs/api-reference/edits)编辑

给定一个提示和一条指令，模型将返回提示的编辑版本。

1. [Create edit](https://platform.openai.com/docs/api-reference/edits/create)

```http
POST
https://api.openai.com/v1/edits
```

为提供的输入、指令和参数创建一个新的编辑。

请求演示：

```http
curl https://api.openai.com/v1/edits \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "text-davinci-edit-001",
    "input": "What day of the wek is it?",
    "instruction": "Fix the spelling mistakes"
  }'
```

响应：

```json
{
  "object": "edit",
  "created": 1589478378,
  "choices": [
    {
      "text": "What day of the week is it?",
      "index": 0,
    }
  ],
  "usage": {
    "prompt_tokens": 25,
    "completion_tokens": 32,
    "total_tokens": 57
  }
}
```

Request body(入参详解)

- model （string，必填）
要使用的模型ID。您可以在此端点中使用 text-davinci-edit-001 或 code-davinci-edit-001 模型。

- input （string，选填，Defaults to ''）
用作编辑起点的输入文本。

- instruction （string，必填）
指导模型如何编辑提示的说明。

- n （integer，选填，Defaults to 1）
输入和指令需要生成多少次编辑。

- temperature （number，选填，Defaults to 1）
使用哪个采样温度，在 0和2之间。
较高的值，如0.8会使输出更随机，而较低的值，如0.2会使其更加集中和确定性。
我们通常建议修改这个（temperature ）为 top_p 但两者不能同时存在，二选一。

- top_p （number，选填，Defaults to 1）
一种替代温度采样的方法叫做核心采样，模型会考虑到具有 top_p 概率质量的标记结果。因此，0.1 表示只有占前 10% 概率质量的标记被考虑。
我们通常建议修改这个（top_p ）或者 temperature，但不要同时修改两者。

