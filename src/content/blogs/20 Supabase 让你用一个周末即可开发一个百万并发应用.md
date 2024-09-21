---
title: 20 Supabase 让你用一个周末即可开发一个百万并发应用
description: 20 Supabase 让你用一个周末即可开发一个百万并发应用
showGithub: true 
---

![supabase控制台](https://i.haidao.tech/202406/a8567731f76040b323d1421f8f2d6deb.png)
## Supabase是什么

Supabase是一个开源的后端即服务(BaaS)平台，旨在使用企业级开源工具复刻Firebase的功能。它能够快速构建包含身份验证、实时功能和文件存储等功能的应用程序，而无需编写任何服务器端逻辑。

作为一个开源的Firebase替代品，Supabase具有以下几个主要特点:

1. 完全开源  
    Supabase的所有代码都是开源的，任何人都可以查看、审计和贡献代码。这为开发者提供了更大的透明度和控制力。
    
2. 易于使用  
    Supabase提供了友好的Web界面和API，开发者可以非常方便地设置和管理后端服务，无需部署任何服务器端代码。
    
3. 功能丰富  
    Supabase提供了身份验证、实时数据库、对象存储、函数等常见的后端功能，涵盖了构建现代应用所需的大部分后端服务。
    
4. 可扩展性强  
    Supabase建立在企业级开源工具(如PostgreSQL、Realtime等)之上，天生具备良好的扩展性能够支持大规模应用。
    
5. 部署灵活  
    开发者可以选择使用Supabase官方提供的云服务，也可以自行部署托管或在本地进行开发。

## 功能概览

- ✅ Postgres 数据库托管
- ✅  身份验证和授权
- ✅  自动生成的 API
    - ✅  REST
    - ✅  GraphQL
    - ✅  实时订阅
- ✅  Serverless函数
    - ✅  数据库函数
    - ✅  边缘函数
- ✅  文件存储
- ✅  AI + 向量/Embeddings 工具包
- ✅  Dashboard

## 系统架构

![](https://i.haidao.tech/202406/62409c6618290939b6af0714dc11aa4f.svg)

- [PostgreSQL](https://www.postgresql.org/) 是一个对象关系型数据库系统，经过 30 多年的积极开发，它在可靠性、功能健壮性和性能方面赢得了很好的声誉。
- [Realtime](https://github.com/supabase/realtime) 是一个 Elixir 服务器，允许你使用 WebSocket 监听 PostgreSQL 的插入、更新和删除。Supabase 监听 Postgres 的内置复制功能，将复制的字节流转换为 JSON，然后通过 WebSocket 广播 JSON。
- [PostgREST](http://postgrest.org/) 是一个 Web 服务器，可以将你的 PostgreSQL 数据库直接生成 RESTful API
- [GoTrue](https://github.com/supabase/gotrue) 是一个基于 SWT 的 API，用于管理用户和发布 SWT 令牌。
- [Storage](https://github.com/supabase/storage-api) 提供了一个 RESTful 接口，用于管理存储在 S3 中的文件，使用 Postgres 来管理权限。
- [pg_graphql](http://github.com/supabase/pg_graphql/) 公开GraphQL API的PostgreSQL扩展
- [postgres-meta](https://github.com/supabase/postgres-meta) 是一个 RESTful API，用于管理你的 Postgres，允许你获取表、添加角色和运行查询等。
- [Kong](https://github.com/Kong/kong) 是一个云原生 API 网关。

### 功能展示
#### 📈PostgreSQL

Supabase 使用 PostgreSQL 作为其数据库引擎，提供强大的查询和存储能力。无需编写任何后端代码，可直接在前端编写数据查询语句，支持图形管理界面和在线编辑数据。

1. 在 Supabase 仪表板内，像使用电子表格一样查看和编辑您的数据。构建您的架构，创建复杂的关系，并导入导出 CSV 文件。
![数据视图](https://i.haidao.tech/202406/da199a7190cec8c8d6b81cb8bf8d63df.gif)

2. 无需安装第三方 SQL 工具，您可以直接从 Supabase 仪表板运行查询。
![Sql编辑器](https://i.haidao.tech/202406/c09030a63520767059996b1409bb40c3.gif)

#### ⚡ Realtime

Realtime本质是通过 WebSocket 订阅数据库变更，实时接收数据；以下场景都可以利用 Supabase 的Realtime功能构建。
![supabase.com_realtime.png](https://i.haidao.tech/202406/3ab5b043ec2c7e12638009f719e4fafc.png)

#### 👨‍💻身份验证

Supabase 内置了一个完整的用户管理系统，支持电子邮件注册、社交登录(Google、GitHub、Apple、Facebook等)、密码重置等。

#### 🗄 文件存储

Supabase提供一个具有无限扩展性的开源对象存储，适用于任何文件类型。采用熟悉且易于实施的自定义策略和权限。你可以存储和服务任何类型的数字内容，包括图像、视频和其他文件。文件存储支持自定义访问控制、CDN 和图像转换等高级功能。

![](https://i.haidao.tech/202406/6a243650c47938ae650dbf45d376e7da.webp)

#### 🛒 Serverless Function

几秒钟内在全球部署 JavaScript，轻松编写、部署并监控分布在全球、靠近用户的无服务函数。可以为你的应用程序添加自定义逻辑。Function 可以访问数据库、文件存储和其他 Supabase 资源。
#### 🔍 Vector 向量搜索

Supabase Vector 是一款开源的向量数据库，使用 pgvector 存储、索引和访问嵌入向量，并借助提供的的 AI 工具包，利用 Hugging Face 和 OpenAI 构建 AI 应用程序。

![supabase.com_vector.png](https://i.haidao.tech/202406/cba0e2cd1977a2f713a9b22c590fb921.png)

## 定价方案

![](https://i.haidao.tech/202406/56d3d4cd60fc5e1dd4e526782113558e.png)

Supabase为个人开发者和小型项目提供了一个非常慷慨的免费计划，为初期开发阶段提供了充足的资源。免费计划包含的主要内容如下:

1. **500MB数据库空间**，足以满足小型项目的数据存储需求。
2. **5GB带宽**，涵盖数据库、存储、实时、身份验证、API、无服务器函数等所有传出流量。
3. **支持50，000月活跃用户**，提供身份验证和用户管理功能。
4. **1GB文件存储空间**，用于存储用户上传的文件和媒体内容。
5. **10个Edge Function**，用于处理后端逻辑。
6. **无限API请求**，确保应用程序的流畅运行。
7. **实时数据库**，实现数据的实时更新和同步。
8. **多种身份验证方式**，包括电子邮件、密码、OAuth社交登录等。

这些免费资源为开发者提供了强大的功能支持，使其能够在不产生任何费用的情况下，便捷地构建和部署功能丰富的应用程序。一旦项目规模扩大或需求增加，也可随时升级到付费计划以获取更多资源

## 写在最后

Supabase作为一款后端即服务平台,其核心特点是采用全面的企业级开源框架和组件，如PostgreSQL、Realtime、PostgREST等，确保系统具有出色的性能、可靠性和扩展性。与商业云服务相比，开源架构让Supabase更加透明和灵活，开发者可自由审计和定制。

与此同时，Supabase紧跟技术发展动态，最新推出了Vector向量搜索功能，支持使用Hugging Face和OpenAI等工具构建AI/ML应用，让开发者能够便捷地集成人工智能能力。

作为开发者工具，Supabase的核心优势在于其开箱即用且功能全面。开发者无需编写任何服务器代码，即可获得实时数据库、身份认证、文件存储、API、Functions等多种后端能力。Supabase提供了web控制台和API，通过简单的配置和编程，就能在很短时间内构建功能完备的应用程序。

据官方介绍，仅用一个周末的时间，开发者就能打造一款包含实时同步、身份认证、文件支持等功能的百万级应用。Supabase极大简化了后端开发，使开发者能够更专注于交互和业务逻辑的实现。

总的来说，Supabase借助企业级开源技术栈的强大功能和性能，同时通过降低开发者使用门槛，让构建现代化、功能丰富的应用变得前所未有的简单，并为未来的AI应用做好准备。