---
title: 00 Nitro - Nuxt背后的服务端框架
description: 00 Nitro - Nuxt背后的服务端框架
showGithub: true 
---


> Nitro是一个开源的TypeScript服务端框架，用于构建超快速的Web服务器。该框架是Nuxt的开放引擎，适用于所有人。

<span style="display:flex;" class="github-info">
  <a href="https://npmjs.com/package/nitropack" style="margin-right: 10px;"><img src="https://img.shields.io/npm/v/nitropack?style=flat&colorA=18181B&colorB=d8c449" alt="npm version"></a>
  <a href="https://npmjs.com/package/nitropack" style="margin-right: 10px;"><img src="https://img.shields.io/npm/dm/nitropack?style=flat&colorA=18181B&colorB=d8c449" alt="npm downloads"></a>
  <a href="https://github.com/unjs/nitro/blob/main/LICENSE" style="margin-right: 10px;"><img src="https://img.shields.io/github/license/unjs/nitro.svg?style=flat&colorA=18181B&colorB=d8c449" alt="License"></a>
    <a href="https://github.com/unjs/nitro" style="margin-right: 10px;"><img src="https://img.shields.io/github/stars/unjs/nitro
"></a>
</span>

通过以下命令安装和运行Nitro：

```shell
$npx giget@latest nitro
$cd nitro-app
$npm install
$npm run dev
```

Nitro具有以下特点：

* 🐇 快速开发：在开发中，服务器代码零配置设置，支持热模块替换。

* 😌 随处部署：将相同的代码库部署到任何部署提供程序，无需额外的配置。

> 使用 CI/CD 部署到生产环境时，Nitro 会尝试自动检测提供程序环境并设置正确的环境，而无需任何其他配置。目前，可以使用零配置自动检测以下提供程序。
> 1. aws amplify
> 2. azure
> 3. cloudflare pages
> 4. netlify
> 5. stormkit
> 6. vercel
> 7. zeabur

* 💼 便携紧凑：告别node_modules，输出大小小于1MB。

* 📁 文件系统路由：自动注册服务器和 API 路由。

* 🤏 极简设计：设计极简，适用于任何解决方案，开销最小。

* 🚀 代码拆分：采用异步块加载，实现快速服务器启动时间和响应。

* 👕 TypeScript：开箱即用支持TypeScript，附带一些额外的好东西。

* 💾 存储层：多驱动程序和平台无关的存储系统。

* 💰 缓存API：强大的内置缓存API。

* 🐱 可定制：通过插件挂钩系统定制化，具有高度可塑性。

* ✨ 自动导入：自动导入实用程序，实现最小且清晰的代码库。仅添加到最终捆绑包中的已使用的实用程序。

* 🏛️ 向后兼容：因此，您可以使用旧版npm包、CommonJS和为工作人员模拟Node.js模块。

> 使用Nitro，您将体验到无与伦比的开发速度和灵活性。不仅如此，其轻量级和紧凑的设计使其成为任何项目的理想选择。

立即尝试Nitro，开启您的开发之旅！🚀