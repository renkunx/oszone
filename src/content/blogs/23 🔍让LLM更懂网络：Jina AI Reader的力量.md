---
title: 23 🔍让LLM更懂网络：Jina AI Reader的力量
description: 23 🔍让LLM更懂网络：Jina AI Reader的力量
showGithub: true 
---

在这个信息爆炸的时代，大型语言模型（LLMs）如通义千问等成为连接知识与用户的桥梁，但它们往往受限于输入质量——网络资源虽丰富，却非全都“消化”得了。而“Jina AI Reader”，正是那把钥匙，巧妙开启了网络资源宝库，让LLMs能更聪明地吸收、理解与运用网络信息。

 >网页直达LLM，知识跃然“读”上 —— Jina AI Reader

## 详细介绍

Jina AI Reader，这个神器做了两件大事，彻底改变了LLMs与网络信息的交互方式：

1. **读取优化**：只需在任何URL前加上`https://r.jina.ai/`，它就能将其转换成LLM友好型输入。这意味着，无论是复杂结构的网页还是深藏图片后的信息，都能被准确提取，供模型高效利用，提升问答、总结等任务的表现。
![](https://i.haidao.tech/202409/0fadab1b2d6e33004c225d55e14af2d7.png)

3. **即时搜索**：引入`https://s.jina.ai/`前缀，它便化身为搜索引擎，根据你的查询，即时从浩瀚网络中捞取最新资讯。这不同于传统的搜索引擎API，它不仅提供摘要，还自动深入访问前五条结果的页面，提取核心内容，为LLMs提供更全面、新鲜的世界知识。
![330765639-675ac203-f246-41c2-b094-76318240159f.png](https://i.haidao.tech/202409/9c0a80be03fb88f930bfd96ceed430c3.png)

## 特色功能

- **多源适配**：无论是维基百科、新闻站点还是学术论文，Reader都能精准转化。
- **图像理解**：内置的图像识别能力，能为图片添加描述性alt标签，让LLM也能“看见”。
- **即时搜索强化**：提供最新最热的搜索结果，直接提取关键信息，无需二次访问。
- **定制化控制**：通过请求头，用户可自定义行为，如使用HTTP代理、传递Cookies等。
- **网站内搜索**：特定域名搜索，比如设定`site=example.com`，聚焦特定资源。

## 如何使用

### 单个URL转换

简单！只需在目标URL前加上`https://r.jina.ai/`即可。例如，将维基百科的人工智能页面转换为LLM友好的输入：

```shell
https://r.jina.ai/https://en.wikipedia.org/wiki/Artificial_intelligence
```

### 网站整体抓取

配合Google Colab，Reader能批量处理一整个网站的数据提取。[查看示例](https://colab.research.google.com/drive/1uoBy6_7BhxqpFQ45vuhgDDDGwstaCt4P#scrollTo=5LQjzJiT9ewT)

### 网络搜索

使用`https://s.jina.ai/`作为前缀进行搜索。记得编码查询字符串，如查询美国总统选举：

```markdown
[https://s.jina.ai/Who%20will%20win%202024%20US%20presidential%20election%3F](https://s.jina.ai/Who%20will%20win%202024%20US%20presidential%20election%3F)
```

### 站内搜索

限定搜索范围，如仅在jina.ai内搜索：

```bash
curl 'https://s.jina.ai/When%20was%20Jina%20AI%20founded%3F?site=jina.ai'
```

### 互动代码构建器

别忘了利用[在线代码生成器](https://jina.ai/reader#apiform)，直观探索Reader API的各种高级用法。

![Reader API](https://i.haidao.tech/202409/e2fb9368a43e618032bcca49fe794e37.gif)
## 最后

Jina AI Reader，不仅是LLM的最佳拍档，更是开发者简化信息处理流程、加速应用落地的秘密武器。无论你是构建复杂的问答系统、知识图谱更新还是内容摘要服务，Reader都能让你的项目如虎添翼。立即尝试，让你的LLM从此不再“迷茫”于海量网络数据中，而是精准、高效地吸收每一滴知识之泉。

在教育领域，它能辅助在线课程平台智能索引全球学术资料；电商行业，它助力商品推荐系统理解用户评论中的图像需求；新闻分析应用里，Reader确保每一条信息抓取都富含价值，提升文章质量与用户满意度。拥抱Jina AI Reader，开启智能信息处理的新篇章！