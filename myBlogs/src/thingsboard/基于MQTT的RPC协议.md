---
icon: edit
date: 2023-04-03
category:
  - ThingsBoard
tag:
  - RPC
  - MQTT
footer: ThingsBoard
---

# 基于 MQTT 的 RPC 协议

## 什么是 MQTT

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

#### JavaScript 代码实现 设备模拟

```js
const mqtt = require('mqtt')

// Don't forget to update accessToken constant with your device access token
const thingsboardHost = 'host'
const accessToken = 'token'
// 限定模拟数据范围
const minTemperature = 17
const maxTemperature = 28
const minHumidity = 40
const maxHumidity = 90
const minPrecip = 0.0
const maxPrecip = 300.0
const minWindScale = 0
const maxWindScale = 15
const minWindType = 0
const maxWindType = 8
const windDir = ['东风', '东南风', '东北风', '南风', '北风', '西风', '西南风', '西北风']
const minNowType = 0
const maxNowType = 8
const weatherNow = ['晴', '多云', '小雨', '中雨', '大雨', '暴雨', '阵雨', '大风']

// Initialization of temperature and humidity data with random values
// 数据模拟
const data = {
  temperature: minTemperature + (maxTemperature - minTemperature) * Math.random(),
  humidity: minHumidity + (maxHumidity - minHumidity) * Math.random(),
  weatherNow: weatherNow[Math.floor(minNowType + (maxNowType - minNowType) * Math.random())],
  windDir: windDir[Math.floor(minWindType + (maxWindType - minWindType) * Math.random())],
  WindScale: Math.floor(minWindScale + (maxWindScale - minWindScale) * Math.random()),
  precip: minPrecip + (maxPrecip - minPrecip) * Math.random(),
}

// 芯片管脚数量 pin0 到 pin9
const pinArray = [false, false, false, false, false, false, false, false, false]

// Initialization of mqtt client using Thingsboard host and device access token
console.log('Connecting to: %s using access token: %s', thingsboardHost, accessToken)
const client = mqtt.connect(`mqtt://${thingsboardHost}`, {
  username: accessToken,
})

let weatherArray = []

client.on('connect', function () {
  console.log('客户端 连接成功!')
  //发送连接请求
  publish('v1/devices/me/attributes', {
    serialNumber: 'SN-002',
  })
  //订阅服务端RPC v1/devices/me/rpc/request/+
  client.subscribe('v1/devices/me/rpc/request/+')
  // 订阅属性主题
  client.subscribe('v1/devices/me/attributes')

  telemetry()
})

client.on('message', function (topic, message) {
  console.log('on message:')
  console.log(topic)
  console.log(message.toString())
  console.log('--------------------------------------')

  const data = JSON.parse(message)
  console.log('data', data)

  try {
    if (topic === 'v1/devices/me/attributes') {
      if (data.control) {
        console.log('Manual control...')
        publish('v1/devices/me/telemetry', { weather: weatherArray })
        weatherArray = []
      }
    }
  } catch (error) {}

  const requestId = topic.slice('v1/devices/me/rpc/request/'.length)

  switch (data.method) {
    case 'getGpioStatus':
      console.log('params', data.params)
      publish(`v1/devices/me/rpc/response/${requestId}`, {
        data: {
          1: pinArray[1],
          2: pinArray[2],
          3: pinArray[3],
          4: pinArray[4],
          5: pinArray[5],
          6: pinArray[6],
          7: pinArray[7],
          8: pinArray[8],
        },
        ok: 'true',
        done: 'true',
      })

      break

    case 'setGpioStatus':
      console.log('params', data.params)
      // 修改pin的电平
      pinArray[data.params.pin] = data.params.enabled
      // RPC回调
      publish(`v1/devices/me/rpc/response/${requestId}`, {
        data: {
          1: pinArray[1],
          2: pinArray[2],
          3: pinArray[3],
          4: pinArray[4],
          5: pinArray[5],
          6: pinArray[6],
          7: pinArray[7],
          8: pinArray[8],
        },
        ok: 'true',
        done: 'true',
      })
      break

    case 'getDeviceData':
      publish(`v1/devices/me/rpc/response/${requestId}`, {
        data: [{}],
        ok: 'true',
        done: 'true',
      })
      break

    case 'getAllWeather':
      console.log('getAllWeather')
      publish('v1/devices/me/telemetry', { weather: weatherArray })
      weatherArray = []
      break

    default:
      publish(`v1/devices/me/rpc/response/${requestId}`, {
        data: [{}],
        ok: 'true',
        done: 'true',
      })
      break
  }
})

//发送遥测 返回定时器对象
function telemetry() {
  return setInterval(publishTelemetry, 5 * 60 * 1000)
}

function publishTelemetry() {
  data.temperature = genNextValue(data.temperature, minTemperature, maxTemperature) + 0.0246
  data.humidity = genNextValue(data.humidity, minHumidity, maxHumidity) + 0.0246
  data.weatherNow = weatherNow[Math.floor(minNowType + (maxNowType - minNowType) * Math.random())]
  data.windDir = windDir[Math.floor(minWindType + (maxWindType - minWindType) * Math.random())]
  data.WindScale = Math.floor(genNextValue(data.WindScale, minWindScale, maxWindScale))
  data.precip = genNextValue(data.precip, minPrecip, maxPrecip) + 0.0246

  weatherArray.push(data)
  // console.log('天气数组：', weatherArray)
}

//发送数据+打印日志
function publish(topic, message) {
  client.publish(topic, JSON.stringify(message))
  log(topic, message)
}
//控制台打印
function log(topic, message) {
  console.log('send message:')
  console.log(topic)
  console.log(JSON.stringify(message))
  console.log('===================================')
}

// Generates new random value that is within 3% range from previous value
function genNextValue(prevValue, min, max) {
  let value = prevValue + (max - min) * (Math.random() - 0.5) * 0.03
  value = Math.max(min, Math.min(max, value))
  return Math.round(value * 10) / 10
}

//Catches ctrl+c event
// 退出时触发
process.on('SIGINT', function () {
  console.log()
  console.log('Disconnecting...')

  client.unsubscribe('v1/devices/me/rpc/request/+')

  client.end()
  console.log('Exited!')
  process.exit(2)
})

//Catches uncaught exceptions
// 故障时触发
process.on('uncaughtException', function (e) {
  console.log('Uncaught Exception...')
  console.log(e.stack)
  process.exit(99)
})
```

#### ESP8266 开发板
