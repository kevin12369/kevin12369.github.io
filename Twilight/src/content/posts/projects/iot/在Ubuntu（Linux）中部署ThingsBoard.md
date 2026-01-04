---
title: '在 Ubuntu（Linux）中部署 ThingsBoard'
description: '在开始部署之前，需要先准备好以下环境：'
published: 2025-12-26

category: '未分类'
tags: []
draft: false
---


# 在 Ubuntu（Linux）中部署 ThingsBoard

## 前置条件

在开始部署之前，需要先准备好以下环境：

- Ubuntu 20.04 或更高版本
- 至少 2GB 内存（推荐 4GB 或更多）
- 至少 10GB 可用磁盘空间
- Java 11 或更高版本
- PostgreSQL 12 或更高版本

## 安装 Java

ThingsBoard 需要 Java 运行环境。先检查系统是否已安装 Java：

```bash
java -version
```

如果没有安装，执行以下命令安装 OpenJDK 11：

```bash
sudo apt update
sudo apt install -y openjdk-11-jdk
```

安装完成后，再次检查 Java 版本：

```bash
java -version
```

## 安装 PostgreSQL

ThingsBoard 使用 PostgreSQL 作为数据库。安装 PostgreSQL：

```bash
sudo apt install -y postgresql postgresql-contrib
```

启动 PostgreSQL 服务：

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

创建 ThingsBoard 数据库和用户：

```bash
sudo -u postgres psql
```

进入 PostgreSQL 命令行后，执行以下 SQL 命令：

```sql
CREATE DATABASE thingsboard;
CREATE USER thingsboard WITH PASSWORD 'thingsboard';
GRANT ALL PRIVILEGES ON DATABASE thingsboard TO thingsboard;
\q
```

## 下载 ThingsBoard

从 ThingsBoard 官网下载最新版本：

```bash
wget https://github.com/thingsboard/thingsboard/releases/download/v3.6.4/thingsboard-3.6.4.deb
```

（注：版本号可能需要根据实际情况调整，访问 [ThingsBoard GitHub Releases](https://github.com/thingsboard/thingsboard/releases) 查看最新版本）

## 安装 ThingsBoard

使用 dpkg 安装下载的 deb 包：

```bash
sudo dpkg -i thingsboard-3.6.4.deb
```

如果遇到依赖问题，执行：

```bash
sudo apt install -f
```

## 配置 ThingsBoard

编辑 ThingsBoard 配置文件：

```bash
sudo nano /etc/thingsboard/thingsboard.conf
```

找到数据库配置部分，修改为：

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

保存并退出（按 Ctrl+X，然后按 Y，再按 Enter）。

## 初始化数据库

运行 ThingsBoard 安装脚本，初始化数据库：

```bash
sudo /usr/share/thingsboard/bin/install/install.sh --loadDemo
```

这个命令会：
- 创建数据库表
- 加载演示数据（包括示例设备、用户、仪表板等）

如果不想加载演示数据，去掉 `--loadDemo` 参数：

```bash
sudo /usr/share/thingsboard/bin/install/install.sh
```

## 启动 ThingsBoard

启动 ThingsBoard 服务：

```bash
sudo systemctl start thingsboard
```

设置开机自启：

```bash
sudo systemctl enable thingsboard
```

检查服务状态：

```bash
sudo systemctl status thingsboard
```

如果看到 `Active: active (running)`，说明服务已经成功启动。

## 访问 ThingsBoard

打开浏览器，访问：

```
http://localhost:8080
```

默认登录信息：
- 用户名：`tenant@thingsboard.org`
- 密码：`tenant`

登录后，可以看到 ThingsBoard 的管理界面，包括设备列表、仪表板、规则链等功能。

## 常用命令

```bash
# 启动服务
sudo systemctl start thingsboard

# 停止服务
sudo systemctl stop thingsboard

# 重启服务
sudo systemctl restart thingsboard

# 查看服务状态
sudo systemctl status thingsboard

# 查看日志
sudo journalctl -u thingsboard -f
```

## 卸载 ThingsBoard

如果需要卸载 ThingsBoard：

```bash
sudo systemctl stop thingsboard
sudo apt remove thingsboard
sudo rm -rf /etc/thingsboard
sudo rm -rf /var/lib/thingsboard
sudo rm -rf /var/log/thingsboard
```

## 注意事项

1. **防火墙设置**：如果需要从外部访问，需要开放 8080 端口：

   ```bash
   sudo ufw allow 8080/tcp
   ```

2. **内存限制**：ThingsBoard 默认使用 1GB 内存，如果服务器内存不足，可以在配置文件中调整：

   ```properties
   JAVA_OPTS="-Xms1G -Xmx1G"
   ```

3. **备份数据**：定期备份数据库：

   ```bash
   sudo -u postgres pg_dump thingsboard > thingsboard_backup.sql
   ```

4. **更新版本**：更新 ThingsBoard 时，先备份数据，然后下载新版本并重新安装。

## 故障排查

### 服务无法启动

查看日志：

```bash
sudo journalctl -u thingsboard -n 50
```

常见问题：
- PostgreSQL 未启动：检查 PostgreSQL 服务状态
- 数据库连接失败：检查数据库配置是否正确
- 端口被占用：检查 8080 端口是否被其他程序占用

### 无法访问 Web 界面

- 检查防火墙设置
- 确认服务是否正常运行
- 尝试使用 `localhost` 或服务器 IP 地址访问

### 数据库连接错误

- 检查 PostgreSQL 服务状态
- 确认数据库用户名和密码是否正确
- 检查数据库是否已创建

## 总结

在 Ubuntu 上部署 ThingsBoard 的步骤其实不复杂，主要就是安装依赖、配置数据库、安装 ThingsBoard 软件包，然后启动服务。按照上面的步骤一步步操作，应该能顺利完成部署。

部署完成后，就可以开始使用 ThingsBoard 管理物联网设备、收集数据、创建仪表板了。