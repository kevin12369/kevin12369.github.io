---
title: 'ThingsBoard 基于 MQTT 的 RPC 协议'
description: '1. MQTT 是一个基于客户端-服务器的消息发布/订阅传输协议。'
published: 2024-01-01

category: '未分类'
tags: []
draft: false
---


# ThingsBoard 基于 MQTT 的 RPC 协议

## 什么是 MQTT

1. MQTT 是一个基于客户端-服务器的消息发布/订阅传输协议。
2. MQTT 协议是轻量、简单、开放和易于实现的，这些特点使它适用范围非常广泛。
3. 在很多情况下，包括受限的环境中，如：机器与机器（M2M）通信和物联网（IoT）。
4. 其在，通过卫星链路通信传感器、偶尔拨号的医疗设备、智能家居、及一些小型化设备中已广泛使用。

### 设计规范

1. 精简，不添加可有可无的功能；
2. 发布/订阅（Pub/Sub）模式，方便消息在传感器之间传递；
3. 允许用户动态创建主题，零运维成本；
4. 把传输量降到最低以提高传输效率；
5. 把低带宽、高延迟、不稳定的网络等因素考虑在内；
6. 支持连续的会话控制；
7. 理解客户端计算能力可能很低；
8. 提供服务质量管理；
9. 假设数据不可知，不强求传输数据的类型与格式，保持灵活性。

## RPC 是什么？

RPC（Remote Procedure Call）远程过程调用协议，一种通过网络从远程计算机上请求服务，而不需要了解底层网络技术的协议。

RPC 它假定某些协议的存在，例如 TPC/UDP 等，为通信程序之间携带信息数据。

在 OSI 网络七层模型中，RPC 跨越了传输层和应用层，RPC 使得开发，包括网络分布式多程序在内的应用程序更加容易。

### RPC 的原理解释

RPC 的实现步骤：

1. 存在两台计算机 A 和 B；
2. 计算机 A 上的进程，调用另外一台计算机 B 上的进程；
3. 此时 A 上的调用进程被挂起，而 B 上的被调用进程开始执行并回调计算出的结果；
4. 当 A 接收到返回的结果后，A 上被挂起的进程才能继续执行。

[RPC 模式原理](./images/RPC模式原理.png 'RPC模式原理')

### ThingsBoard 中 MQTT 的角色

- ThingsBoard 是 MQTT 服务器

  - MQTT 服务器以称为"消息代理"（Broker），可以是一个应用程序或一台设备。

- 数据遥测场景

  - 发布主题（Topic）为`v1/devices/me/telemetry`
  - 发布者（Publish）是已注册的设备
  - 订阅者（Subscribe）是 ThingsBoard 服务

- 指令下发场景

  - RPC：
    - 订阅主题（Topic）为`v1/devices/me/rpc/request/+`（主题通配符"+"）
    - 回复主题（Topic）为`v1/devices/me/rpc/response/` + requestId
    - 发布者（Publish）是 ThingsBoard 服务中提供的由 MQTT 封装的 RPC 请求 API
    - 订阅者（Subscribe）是已注册的设备
  - MQTT：
    - 订阅主题（Topic）为`v1/devices/me/attributes`
    - 发布者（Publish）是 ThingsBoard 服务中提供的是 MQTT 的共享属性（具有单向下发的特性）
    - 订阅者（Subscribe）是已注册的设备

### ThingsBoard 中 RPC 的应用

1. 通过 ThingsBoard 封装的 RPC 请求`http(s)://host:port/api/plugins/rpc/{callType}/{deviceId}`，向指定的设备发送组装好的服务端 MQTT 消息
2. 设备订阅 rpc 的主题`client.subscribe('v1/devices/me/rpc/request/+')`
3. 消息中包含对应设备 ID 通过 MQTT 协议，发送给指定设备并且带有消息的 ID`requestId`，解析 MQTT 消息，发送给指定的函数
4. 处理 MQTT 消息中的参数信息，计算结果通过 MQTT 的 RPC 回调主题+消息的 ID`v1/devices/me/rpc/response/${requestId}`，将结果发送给服务端，完成调用流程

#### ThingsBoard 中 RPC 存在的问题

1. ThingsBoard 封装的 RPC 的 API 请求，在设备不在线的情况容易出错，并不能主动还原
2. 一段时间后再次发起 RPC 的 API 请求，还是不能还原
3. 暂时必须重启 ThingsBoard 服务，才能正常发起 RPC 的 API 请求

#### ThingsBoard 规则链 RPC 发生器

1. 利用 generater 发生器，设计一个 RPC 定时请求数据的脚本
2. 发生器上的`period in second`就是发生器的触发周期，目前设计的是 12 个小时触发一次，也就是 `43200` 秒
3. 发生器上可以选择控制或者请求指定的设备
4. 利用 ThingsBoard 内部的 MQTT RPC 主题发出消息，向指定的设备请求数据，这里并不会产生 API 错误

#### ThingsBoard 利用共享属性实现单向下发控制指令

1. 设备端订阅属性主题
2. 当共享属性参数并且改变参数的值，设备端通过监听主题获取参数的值的变化
3. 触发设备端相应的控制函数，实现控制设备数据在遥测主题下发送
