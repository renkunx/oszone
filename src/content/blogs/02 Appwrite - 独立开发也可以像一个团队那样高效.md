---
title: 02 Appwrite - 独立开发也可以像一个团队那样高效
description: 02 Appwrite - 独立开发也可以像一个团队那样高效
showGithub: true 
---


![左边为之前的logo，右边为新logo](https://i.haidao.tech/202403/5010916d6c60edebf580d808467668af.png)

### Appwirte是什么

Appwrite是一个基于Docker的端到端开发者平台，其容器化的微服务库可应用于网页端，移动端，以及后端。Appwrite 通过视觉化界面简化了从零开始编写 API 的繁琐过程，在保证软件安全的前提下为开发者创造了一个高效的开发环境。

Appwrite 可以提供给开发者：用户验证，外部授权，用户数据读写检索，文件储存，图像处理，云函数，消息（邮件，SMS，移动端原生消息），及时交互（类似多人协作场景）等多种服务.

产品的口号是：独立开发也可以像一个由数百人组成的团队一样高效，用很少的代码可以构建一个安全可扩展的应用。

> Your backend, minus the hassle
> Build secure and scalable applications with less code. Add authentication, databases, storage, and more using Appwrite's development platform.

### 本地安装

Appwrite 的容器化服务器只需要一行指令就可以运行。您可以使用 docker-compose 在本地主机上运行 Appwrite，也可以在任何其他容器化工具（如 [Kubernetes](https://kubernetes.io/docs/home/)、[Docker Swarm](https://docs.docker.com/engine/swarm/) 或 [Rancher](https://rancher.com/docs/)）上运行 Appwrite。

启动 Appwrite 服务器的最简单方法是运行我们的 docker-compose 文件。在运行安装命令之前，请确保您的机器上安装了 [Docker](https://dockerdocs.cn/get-docker/index.html)：

#### Linux

```bash
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:latest
```

#### Windows

1. CMD

```cmd
docker run -it --rm ^
    --volume //var/run/docker.sock:/var/run/docker.sock ^
    --volume "%cd%"/appwrite:/usr/src/code/appwrite:rw ^
    --entrypoint="install" ^
    appwrite/appwrite:latest
```

2.  PowerShell

```powershell
docker run -it --rm `
    --volume /var/run/docker.sock:/var/run/docker.sock `
    --volume ${pwd}/appwrite:/usr/src/code/appwrite:rw `
    --entrypoint="install" `
    appwrite/appwrite:latest
```

运行后，可以在浏览器上访问 http://localhost 找到 Appwrite 控制台。在非 Linux 的本机主机上完成安装后，服务器可能需要几分钟才能启动。

![](https://i.haidao.tech/202403/21efddc6681cac2bc42bd43a146eb985.png)

需要自定义容器构架，请查看我们的 Docker [环境变量](https://appwrite.io/docs/environment-variables) 文档。还可以参考我们的 [docker-compose.yml](https://appwrite.io/install/compose) 和 [.env](https://appwrite.io/install/env) 文件手动设置环境。

### 入门

#### 认证

集成使用多种登录方式（如电子邮件/密码、短信、OAuth、匿名、魔法链接等）对用户进行身份验证。

-  30多种登录方式
- 支持团队、角色和用户标签
- 速率限制和高级用户保护
- 自定义SMTP和电子邮件模板

```js
const result = account.create(
	ID.unique(),
	'walterobrian@example.com',	
	'password',
	"Walter O'Brian"
);
```
![注册登录](https://i.haidao.tech/202403/acd3a89956f7960a799da943360a84ba.gif)

#### 数据库

存储、查询和管理数据，可扩展且可靠的数据库，由您喜爱的技术支持。

-  安全稳定
-  快速内存缓存
-  高级权限模型
-  自定义数据验证
-  支持外键关联

```js
const result = databases.createDocument( 'Your-tasks', tasks, ID.unique(), {
	'description': 'Research user needs', 
	'tags': ['UX', 'design'], 
	} 
);
```

#### 存储

上传和管理文件，安全地存储文件，具有高级压缩、加密和图像转换功能。

- 文件静态和传输加密
- 内置图像转换功能
- 支持WebP/Brotli的高级压缩

```js
const result = storage.createFile(
	'my-bucket',
	ID.unique(),
	document.getElementById("uploader").files[0]
);
```

![文件上传](https://i.haidao.tech/202403/f1400f96ef21645556cc1393df8a7969.gif)
#### Serverless Function

使用Function可以自定义和扩展你的后端，部署和扩展在安全、隔离的运行时中运行的无服务器函数。
-  从GitHub自动部署
-  使用GitHub、CLI、事件监听器或HTTP请求触发
-  本地部署目前支持30多种运行时，13种语言（基本涵盖所有的后端语言和技术）
- Appwrite Cloud目前支持 `node`  `php-8.0` `ruby-3.0` `python-3.9` `dart-2.17`
-  自定义域名支持

```js
const userId = req.headers['user-id']; 

if (req.path === '/subscribe') { 
	const session = await stripe.checkout(userId); 
	return res.redirect(session.url, 303); 
} 

if (req.path === '/webhook') { 
	await appwrite.addSubscriberLabel(userId); 
} 

return res.json({ success: true });
```

#### 实时事件

实时事件适用于所有服务，订阅并使用实时API对任何Appwrite事件做出反应。

-  无限订阅
-  内置权限管理
-  支持数据库、身份验证、存储和函数

![多人协作场景](https://i.haidao.tech/202403/af17f167567091eba59ebeebb7317b4b.gif)
### 软件架构

![系统架构图](https://i.haidao.tech/202403/22982384d27d15929d8592ee5a5be6a1.png)

从架构图上可以看出Appwrite 使用高拓展性的微服务架构。Appwrite 目前支持多种 API（REST、WebSocket 和  GraphQL），您可以根据开发习惯灵活选择。

Appwrite API 界面层利用后台缓存和任务委派来提供极速的响应时间。后台的 Worker 代理还允许使用消息队列来处理负载，并精确控制硬件合理分配和成本。

### Appwrite Cloud

云服务已在2023 / 5月进行邀请测试，目前已进入生产可用状态；如果想快速体验可以注册体验：[cloud.appwrite.io](https://cloud.appwrite.io/)

**入门计划**

- 为每个在副业项目或SaaS产品上工作的开发者提供一个免费层级，这些项目可以在我们的入门计划限制下茁壮成长。
-  免费。

 **专业计划**

- 一个支持您扩大生产项目雄心并允许您成长的计划。拥有灵活的预算控制工具，确保您永远不会收到意外账单。
- 每月每位会员15美元。

 **规模计划**

- 一个计划，随着您继续扩大您的商业产品和团队，提供更多的支持。更高的限制和我们的团队提供更多的支持，以确保我们支持扩大团队的需求。
- 每月每个组织685美元。

![appwrite.io_ (1).png](https://i.haidao.tech/202403/2346512b21f81573f3a779d55a8a3059.png)

### 开源信息

![](https://i.haidao.tech/202403/e337ad3376c11ba1fb1f0f52ac9db7a0.png)

### 注意事项

1. 本地部署版本会早于Cloud版本发布
2. 目前还不支持国内的第三方服务如：登陆，支付等服务还没有
3. 开发文档和语言目前还没有中文

我们将持续关注`Appwirte`项目的更新动态，后续对版本的更新，还会进行更多的解读和说明；如果对`Appwrite`感兴趣，请关注我们。