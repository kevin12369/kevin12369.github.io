---
title: '在 Windows 10 中部署 ThingsBoard'
description: '在开始部署之前，需要先准备好以下环境：'
pubDate: 2025-12-26

category: '未分类'
tags: []
draft: false
---


# 在 Windows 10 中部署 ThingsBoard

## 前置条件

在开始部署之前，需要先准备好以下环境：

- Windows 10 操作系统
- 至少 4GB 内存（推荐 8GB 或更多）
- 至少 10GB 可用磁盘空间
- Java 11 或更高版本
- PostgreSQL 12 或更高版本

## 安装 Java

ThingsBoard 需要 Java 运行环境。

### 下载 Java

访问 Oracle 官网或 OpenJDK 官网下载 Java 11 或更高版本。

推荐使用 OpenJDK，下载地址：https://adoptium.net/

选择 Windows x64 版本下载。

### 安装 Java

1. 双击下载的安装包
2. 按照安装向导完成安装
3. 记住安装路径（默认是 `C:\Program Files\Eclipse Adoptium\jdk-11.x.x.x-hotspot\`）

### 配置环境变量

1. 右键点击"此电脑"，选择"属性"
2. 点击"高级系统设置"
3. 点击"环境变量"
4. 在"系统变量"中点击"新建"
5. 变量名：`JAVA_HOME`
6. 变量值：Java 安装路径（例如 `C:\Program Files\Eclipse Adoptium\jdk-11.x.x.x-hotspot`）
7. 在"系统变量"中找到 `Path`，点击"编辑"
8. 添加新条目：`%JAVA_HOME%\bin`
9. 点击"确定"保存

### 验证 Java 安装

打开命令提示符（CMD），输入：

```cmd
java -version
```

如果显示 Java 版本信息，说明安装成功。

## 安装 PostgreSQL

ThingsBoard 使用 PostgreSQL 作为数据库。

### 下载 PostgreSQL

访问 PostgreSQL 官网：https://www.postgresql.org/download/windows/

下载 Windows 版本的 PostgreSQL 安装程序。

### 安装 PostgreSQL

1. 双击下载的安装程序
2. 选择安装路径（默认是 `C:\Program Files\PostgreSQL\13\`）
3. 设置数据目录（默认是 `C:\Program Files\PostgreSQL\13\data`）
4. 设置 postgres 用户密码（记住这个密码）
5. 选择默认端口 5432
6. 选择区域设置（选择 Chinese (Simplified), China）
7. 按照向导完成安装

### 创建 ThingsBoard 数据库

安装完成后，打开 pgAdmin（PostgreSQL 的管理工具）：

1. 在浏览器中打开 pgAdmin（安装时会自动打开）
2. 输入 postgres 用户密码登录
3. 右键点击"Databases"，选择"Create" → "Database"
4. 数据库名称输入：`thingsboard`
5. 点击"Save"

或者使用命令行创建数据库：

打开 SQL Shell (psql)，输入 postgres 用户密码，然后执行：

```sql
CREATE DATABASE thingsboard;
CREATE USER thingsboard WITH PASSWORD 'thingsboard';
GRANT ALL PRIVILEGES ON DATABASE thingsboard TO thingsboard;
\q
```

## 下载 ThingsBoard

从 ThingsBoard 官网下载最新版本：

访问：https://github.com/thingsboard/thingsboard/releases

下载 Windows 版本的安装包（thingsboard-windows-setup-3.6.4.exe）

（注：版本号可能需要根据实际情况调整）

## 安装 ThingsBoard

1. 双击下载的安装程序
2. 选择安装路径（默认是 `C:\Program Files (x86)\thingsboard`）
3. 选择安装组件（默认全部安装）
4. 按照向导完成安装

## 配置 ThingsBoard

### 编辑配置文件

打开 ThingsBoard 配置文件：

```
C:\Program Files (x86)\thingsboard\conf\thingsboard.conf
```

使用记事本或其他文本编辑器打开，找到数据库配置部分，修改为：

```properties
# database type
DATABASE_TYPE=postgresql

# PostgreSQL connection parameters
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=thingsboard
POSTGRES_USER=thingsboard
POSTGRES_PASSWORD=thingsboard
```

保存文件。

### 初始化数据库

打开命令提示符（CMD），以管理员身份运行：

```cmd
cd "C:\Program Files (x86)\thingsboard"
install.bat --loadDemo
```

这个命令会：
- 创建数据库表
- 加载演示数据（包括示例设备、用户、仪表板等）

如果不想加载演示数据，去掉 `--loadDemo` 参数：

```cmd
install.bat
```

等待安装完成，可能需要几分钟时间。

## 启动 ThingsBoard

### 作为服务启动

ThingsBoard 安装时会自动注册为 Windows 服务。

打开"服务"管理器：

1. 按 `Win + R`，输入 `services.msc`
2. 找到 `thingsboard` 服务
3. 右键点击，选择"启动"

或者使用命令行：

```cmd
net start thingsboard
```

### 设置开机自启

在"服务"管理器中：

1. 右键点击 `thingsboard` 服务
2. 选择"属性"
3. 将"启动类型"设置为"自动"
4. 点击"确定"

### 手动启动

如果不想作为服务运行，可以手动启动：

打开命令提示符，进入 ThingsBoard 目录：

```cmd
cd "C:\Program Files (x86)\thingsboard"
thingsboard.bat
```

## 访问 ThingsBoard

打开浏览器，访问：

```
http://localhost:8080
```

默认登录信息：
- 用户名：`tenant@thingsboard.org`
- 密码：`tenant`

登录后，可以看到 ThingsBoard 的管理界面。

## 常用命令

```cmd
# 启动服务
net start thingsboard

# 停止服务
net stop thingsboard

# 查看服务状态
sc query thingsboard

# 手动启动
cd "C:\Program Files (x86)\thingsboard"
thingsboard.bat
```

## 查看日志

ThingsBoard 的日志文件位置：

```
C:\Program Files (x86)\thingsboard\logs\thingsboard.log
```

可以使用记事本或其他文本编辑器查看。

实时查看日志：

```cmd
cd "C:\Program Files (x86)\thingsboard\logs"
type thingsboard.log
```

## 卸载 ThingsBoard

如果需要卸载 ThingsBoard：

1. 打开"控制面板" → "程序和功能"
2. 找到"ThingsBoard"
3. 右键点击，选择"卸载"

或者使用命令行：

```cmd
cd "C:\Program Files (x86)\thingsboard"
uninstall.bat
```

卸载后，手动删除残留文件：

```
C:\Program Files (x86)\thingsboard
```

## 注意事项

1. **防火墙设置**：如果需要从外部访问，需要开放 8080 端口：

   - 打开"Windows Defender 防火墙"
   - 点击"高级设置"
   - 选择"入站规则" → "新建规则"
   - 选择"端口" → "TCP" → "特定本地端口"输入 `8080`
   - 选择"允许连接"
   - 按照向导完成

2. **内存限制**：ThingsBoard 默认使用 1GB 内存，如果服务器内存不足，可以在配置文件中调整：

   ```properties
   JAVA_OPTS="-Xms1G -Xmx1G"
   ```

   修改为更大的值，例如：

   ```properties
   JAVA_OPTS="-Xms2G -Xmx2G"
   ```

3. **备份数据**：定期备份数据库：

   使用 pgAdmin 备份，或者使用命令行：

   ```cmd
   pg_dump -U postgres -d thingsboard > thingsboard_backup.sql
   ```

4. **更新版本**：更新 ThingsBoard 时，先备份数据，然后下载新版本并重新安装。

## 故障排查

### 服务无法启动

1. 检查服务状态：
   ```cmd
   sc query thingsboard
   ```

2. 查看日志文件，找出错误原因

3. 常见问题：
   - PostgreSQL 未启动：检查 PostgreSQL 服务状态
   - 数据库连接失败：检查数据库配置是否正确
   - 端口被占用：检查 8080 端口是否被其他程序占用

### 无法访问 Web 界面

- 检查防火墙设置
- 确认服务是否正常运行
- 尝试使用 `localhost` 或本机 IP 地址访问
- 检查浏览器是否阻止了连接

### 数据库连接错误

- 检查 PostgreSQL 服务状态
- 确认数据库用户名和密码是否正确
- 检查数据库是否已创建
- 确认 PostgreSQL 服务正在监听 5432 端口

### 端口被占用

如果 8080 端口被占用，可以在配置文件中修改端口：

```properties
HTTP_BIND_PORT=8081
```

然后重启 ThingsBoard 服务。

## 总结

在 Windows 10 上部署 ThingsBoard 的步骤和在 Linux 上类似，主要就是安装 Java 和 PostgreSQL，然后安装 ThingsBoard 软件，配置数据库连接，最后启动服务。

Windows 版本的 ThingsBoard 提供了图形化的安装程序，安装过程更加简单。安装完成后，ThingsBoard 会自动注册为 Windows 服务，可以方便地管理和控制。

部署完成后，就可以开始使用 ThingsBoard 管理物联网设备、收集数据、创建仪表板了。