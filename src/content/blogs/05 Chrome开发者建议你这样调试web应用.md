---
title: 05 Chrome开发者建议你这样调试web应用
description: 05 Chrome开发者建议你这样调试web应用
showGithub: true 
---

> 本文来自 Chrome 团队的 Jecelyn Yeen (阮贝琪)在FEDAY分享，主题为：探讨网页调试的现况、Chrome DevTools 的最新进展以及一些实用的 DevTools 小工具。

现代Web开发中，为了满足用户的需求和期望，提高开发效率和质量，构建更现代、更安全、响应更快、功能更丰富的Web应用。

开发中经常使用一些流行的前端框架和库，如React、Angular、Vue.js等，这些框架和库提供了丰富的功能和组件，可以加速开发过程并提高用户体验。

![现代Web开发中常见的工作流](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/a-brief-overview-various-769879995ff7c_1920.png)

但目前浏览器还是只能识别HTML、CSS和JavaScript，导致构建过程就需要如构建、压缩和翻译等；这样开发时使用工具和语法，与浏览器可以理解的标准差别越来越大；就使得调试也变得异常复杂，如果还在使用console.log进行调试就显得捉襟见肘。

![](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/ff3db240b2cecb5c36d319f0ba08a5ca.png.jpg)

> 下面就为大家介绍一些现代Web中调试应用的一些Tips💡:

#### 1. 使用Source Map来进行调试

现代Web开发都需要构建工具，会有构建和打包流程，将代码转译为浏览器可以理解的HTML、JavaScript 和 CSS。此外，为了优化性能，常见做法是压缩和合并这些文件，从而缩减文件的大小并提高它们对 Web 的使用效率。

但是，这种优化会增加调试的难度。如果代码在压缩后仅包含一行，如果变量名称较短，则很难确定问题的根源。

这时源代码映射就派上用场了 - 浏览器的Dev Tools会应用这些源映射，它们会将您编译的代码映射回原始代码。开发者便可以快速确定经过缩减的代码与原始代码之间的关系，从而使调试过程更加顺畅，有助于您直接在浏览器中更快地查明调试问题。

>源代码映射最重要的方面是 `mappings` 字段。它使用 [VLQ base 64 编码字符串](https://developer.chrome.com/blog/sourcemaps/?hl=zh-cn#base64-vlq-and-keeping-the-source-map-small)将已编译文件中的行和位置映射到相应的原始文件。您可以使用来源映射可视化工具（例如 [source-map-visualization](https://sokra.github.io/source-map-visualization/) 和[来源映射可视化](https://evanw.github.io/source-map-visualization/)）直观呈现此映射。

关于source map更多的信息可以参考：`https://web.dev/articles/source-maps`

#### 按已编写/已部署分组代码

源代码面板中的`按已编写/已部署分组`功能，可以快速筛选分类混乱的源码文件

![](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/screenshot-20240207-000016.png)

帮你分类出哪些是你自己编写的代码，哪些是浏览器运行的代码

![](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/screenshot-20240207-000344.png)
#### 隐藏第三方代码

在调试时忽略不重要的文件或文件夹,可以快速定位到问题。

Chrome和Firefox浏览器具备x-google-ignorelist的语法可自定义隐藏，目前Angular、Nuxt和Vite原生支持ignorelist的语法，可以自动隐藏三方库的代码文件。

webpack和rollup可以使用sourcemapIgnoreList自定义隐藏代码文件；如果使用的框架或者构建工具不支持隐藏第三方代码，可以手动进行标记隐藏：

![](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/E4DF1108-07F0-4672-B4E8-16D1E293CBA3.png)

> 这里的隐藏是不会调试进入这些隐藏的源码文件中

#### 前端临时处理CORS Error

Chrome支持修改响应头部的操作，将返回跨域问题的响应头进行编辑，增加`access-control-allow-origin:* `后，重新刷新页面就可以正常请求。

规则也支持通配符，可以进行批量修改和应用到请求中。

![](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/5987CA3F-4611-4E61-AB0C-FB1712714962.png)
#### Mock请求

使用网络面板更改API和模拟文件内容返回数据，重新请求就会生效。

![mock请求](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/screenshot-20240207-003257.png)

#### 录制器Recorder

在开发者工具中可以使用录制器，进行录制网页操作还可以进行回访和分享

![](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/%E5%BD%95%E5%88%B6.jpg)

可以应用到bug的复现和问题定位；具体使用方法可参考：
1. 录制和播放
2. 可以删除和编辑事件
3. 为录制的文件代码，可以导出分享，导入进行回放

#### 渲染Rendering

大家再调试Tooltip、DropDownMenu或者一些联想输入弹框的时候，是不是不能选中弹框的节点；一般只能修改触发的规则改为点击触发，然后调试完还要恢复为原来的hover或者active触发；但是浏览器是支持模拟focused page，入口在更多工具-渲染(Rendering)-模拟所聚焦的网页(Emulate a focused page)

![focused page](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/screenshot-20240207-004243.png)

由于入口难找，Jecelyn预告Chrome应该在下1-2个版本后，将入口放到Force elemen state面板中，会更方便调试。

#### 代码段Snippets

可以在浏览器中定义些代码片段，比如时间戳格式化、URL的编解码等常用工具函数，在任何页面中运行可以script代码

`cmd/win + p`,输入 `!${函数名}`来执行代码段

> 以上是分享中提到的Chrom调试Morden Web的一些技巧和方法，大家平时是怎么调试代码的，过程中有什么奇技淫巧，可以在评论区分享讨论一下。

原视频链接：`https://www.bilibili.com/video/BV1mG411i7f2`(点击阅读原文)