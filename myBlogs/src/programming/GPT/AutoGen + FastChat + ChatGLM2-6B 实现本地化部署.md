---
icon: edit
date: 2023-12-14
category:
  - GPT
tags:
  - AutoGen
  - ChatGLM2-6B
---
# AutoGen + ChatGLM2-6B 实现本地化部署

## 什么是AutoGen?

Autogen 是一个由 Microsoft 推出的框架，它允许用户创建和管理多个自主代理，以协同完成复杂的任务。

这个框架的灵活性极高，你可以根据自己的需求定义不同的代理和它们的角色，然后让它们一起工作。

这种多代理协作的方式不仅提高了任务完成的效率，还提高了结果的质量，特别是在编程、规划和创意写作等领域。

## 什么是ChatGLM2-6B？

ChatGLM2-6B是智谱AI及清华KEG实验室发布的中英双语对话模型。

ChatGLM2-6B是开源的文本生成式对话模型,基于General Language Model(GLM)框架,具有62亿参数。 fp16 半精度下，ChatGLM-6B 需要至少 13GB 的显存进行推理，结合模型量化技术，这一需求可以进一步降低到 10GB（INT8） 和 6GB（INT4）， 使得 ChatGLM-6B 可以部署在消费级显卡上，人人都能上手一个大模型。ChatGLM-6B 使用了和 ChatGPT 相似的技术，针对中文问答和对话进行了优化。经过约 1T 标识符的中英双语训练，辅以监督微调、反馈自助、人类反馈强化学习等技术的加持，62 亿参数的 ChatGLM-6B 已经能生成相当符合人类偏好的回答。

[智谱清言 (chatglm.cn)](https://chatglm.cn/blog)

## 什么是FastChat？

FastChat框架是一个训练、部署和评估大模型的开源平台，其核心特点是：

- 提供SOTA模型的训练和评估代码
- 提供分布式多模型部署框架 + WebUI + OpenAI API

## 部署前先要做好的几个准备工作

- 确认自己电脑或者设备的CPU或者GPU型号，这很关键。
- 确认自己电脑的内存是否大于8G，这对于选择语言模型很关键。
- 通过设备CPU或者GPU型号，找到对应的torch、transformers和CUDA版本。

## 以 Windows 11 为例开始搭建运行环境

- Anaconda 环境
- git 环境
- fastchat 环境
- transformers 环境
- torch 环境
- autogen 环境
- chatglm2-6b 环境

### 配置Anaconda环境

#### Anaconda 官网下载地址

[Free Download | Anaconda --- 免费下载 |蟒蛇](https://www.anaconda.com/download/)

### 配置Git环境

#### Git 官网下载地址

[Git for Windows --- 适用于 Windows 的 Git](https://gitforwindows.org/)

### 配置FastChat环境

#### 从GitHub上下载FastChat开源项目

```bash
git clone https://github.com/lm-sys/FastChat.git
```

#### 创建python虚拟运行环境

```bash
cd FastChat

conda create -n autogen python=3.0 -y

conda activate autogen

pip3 install --upgrade pip -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn

pip3 install -e ".[model_worker,webui]" -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn

```

### 配置 transformers 环境

```bash
pip3 uninstall -y transformers
pip3 install transformers==4.30.2 -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn
```

### 配置torch环境

```bash
pip3 install torch==2.0.0+cu117 torchvision==0.15.1+cu117 torchaudio==2.0.1 --index-url https://download.pytorch.org/whl/cu117

pip3 install cpm_kernels -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn
```

### 配置autogen环境

```bash
pip install pyautogen -i https://pypi.mirrors.ustc.edu.cn/simple --trusted-host=pypi.mirrors.ustc.edu.cn
```

### 下载Chatglm2-6b模型

模型可从Hugging Face官网手动下载到/FastChat/ChatGLM-6B目录，没有目录的创建一个ChatGLM-6B目录（关键）。

## 加载模型

```bash
# controller 控制器

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
```

## 测试代码

```bash
from autogen import oai
from autogen import AssistantAgent, UserProxyAgent, config_list_from_json

def TestAutoGen():
    config_list = [
        {
            "model": "ChatGLM-6B",
            "base_url": "http://127.0.0.1:9527/v1",
            #"api_type": "open_ai",#该行要注释掉，不然报错
            "api_key": "NULL"
        }
    ]
    assistant = AssistantAgent("assistant", llm_config={
                               "config_list": config_list})
    user_proxy = UserProxyAgent(
        "user_proxy", code_execution_config={"work_dir": "coding"})
    user_proxy.initiate_chat(
        assistant, message="用react.js写一个用户登录程序")


if __name__ == '__main__':
    TestAutoGen()

```

## 问题解决

#### 问题1：
启动FastChat的controller时报错：
`ERROR: [Errno 99] error while attempting to bind on address ('::1', 21001, 0, 0): cannot assign requested address`
这时，需要在需要在启动命令后加 - -host 0.0.0.0
`python -m fastchat.serve.controller --host 0.0.0.0`
#### 问题2：
`AttributeError: 'ChatGLMTokenizer' object has no attribute 'tokenizer'. Did you mean: 'tokenize'`
修改transformers的版本：`pip install transformers == 4.33.2`

#### 问题3：
有文档里autogen测试代码中ChatGLM的请求地址前参数写的是api_base，运行代码会报错，不能识别该参数。
`Completions.create() got an unexpected keyword argument 'api_base'`
这时，需要把api_base要改成base_url。

#### 问题4：
有文档里autogen测试代码中ChatGLM配置里包括api_type参数，运行代码会报错，不能识别该参数。
`Completions.create() got an unexpected keyword argument 'api_type'`
这时，需要把该参数注释掉。

#### 问题5：
运行代码会报错，测试代码中ChatGLM配置里model参数不能识别。
`openai.BadRequestError: Error code: 400 - {'object': 'error', 'message': 'Only chatglm2-6b allowed now, your model ChatGLM-6B', 'code': 40301}`
这时，需要修改模型的名称，需要与FastChat的model_worker启动时的模型名称相同才会识别。

#### 问题6：
当给大模型的任务需要执行python代码时，程序会使用到docker，没有安装docker的话就会报错。
`AttributeError: module 'docker' has no attribute 'from_env'`
这时，执行pip3 install docker。

#### 问题7：
问题6安装docker后，执行仍报错。
`docker.errors.DockerException: Error while fetching server API version: ('Connection aborted.', FileNotFoundError(2, 'No such file or directory'))`
在代码的code_execution_config中添加"use_docker":”python:3”，use_docker的值可以填docker镜像，填写镜像即是在镜像中执行模型自动生成的python代码，也可以什么都不填，什么都不填即是在本机运行，我这里因为是测试，就没有填实际的镜像。
## 结论

。
