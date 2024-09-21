---
title: 13 Astro 开启网站性能与开发效率的双重提升之旅
description: 13 Astro 开启网站性能与开发效率的双重提升之旅
showGithub: true 
---

![新兴的全栈框架](https://i.haidao.tech/202404/14fbf464d85ccf12306bc67b7d693985.webp)

`Astro`是一个新兴的全栈框架，它结合了多种优秀的Web技术，为构建现代化网站提供了一种全新的方式。让我们来进一步了解一下：

### 使用场景

![专注于静态内容，也可合理的扩展到动态应用](https://i.haidao.tech/202404/4eb0f0d85cd647db6823485de53ebe27.webp)


1. 博客和内容网站  
	`Astro`可以高效地处理Markdown和MDX文件，并且提供了许多功能强大的功能，如代码高亮、图像优化等，非常适合构建博客、文档网站等内容密集型网站。
    
2. 电子商务网站  
	借助其强大的静态渲染能力、UI框架集成和多种数据源支持，`Astro`非常适合构建电商网站，可获得出色的性能和开发体验。
    
3. 营销页面和登陆页面  
	快速构建营销着陆页是`Astro`的一大亮点。开发者可以充分利用其优秀的性能和灵活的组件化能力，轻松搭建出视觉吸引、响应迅速的营销页面。
    
4. SPA和MPA混合应用  
	`Astro`支持在一个项目中同时使用SPA和MPA架构，用户可以根据需求选择合适的架构，实现最佳的性能和开发体验。
    

### 亮点功能

1. `Astro` 群岛  
	`Astro` 开创并推广了一种叫做 **群岛** 的前端架构。群岛架构通过帮助你避免单体 JavaScript 模式并自动从页面中剥离所有非必需的 JavaScript，从而实现了更好的前端性能。开发者在使用 `Astro` 的同时，仍然可以继续使用他们最喜欢的 UI 组件和框架，并且从中得到受益。
    ![群岛架构](https://i.haidao.tech/202404/b62fddd2bf9d748c12680d21d982bc59.png)
    岛屿始终独立于页面上的其他岛屿运行，且一个页面上可以存在多个岛屿。尽管岛屿在不同的组件上下文中运行，它们仍然可以共享状态并相互通信。
    这种灵活性使得 `Astro` 能够支持多个 UI 框架，如 [React](https://react.dev/)、[Preact](https://preactjs.com/)、[Svelte](https://svelte.dev/)、[Vue](https://vuejs.org/) 和 [SolidJS](https://www.solidjs.com/)。由于它们是独立的，你甚至可以在每个页面上混合使用多种框架。
    
2. 部分水合(Partial Hydration)  
    通过部分水合，`Astro`让交互式组件只在需要时才被水合，从而进一步优化性能。
    
3. 内容集合  
    组织、验证你的 Markdown 内容，并提供 TypeScript 类型安全。
    
4. 默认无JS  
    服务器优先，将沉重的渲染移出访问者的设备；让客户端更少的执行 JS ，以提升网站速度。
    
### 内容驱动

相比之下，大多数现代 Web 框架都是为构建 **Web 应用程序**而设计的。这些框架擅长于在浏览器中构建复杂的、类似应用程序的体验：登录后的管理仪表板、收件箱、社交网络、待办事项列表，甚至是像 [Figma](https：//figma.com/) 和 [Ping](https：//ping.gg/) 这样的类原生应用程序。然而随着复杂性的增加，它们在提供内容时可能会遇到性能问题。
![专注于内容](https://i.haidao.tech/202404/2e6165d32f6aa28a601863b3c4104101.webp)

`Astro` 从它最初作为静态网站生成器的开始就专注于内容，使得 `Astro` 可以**合理地扩展到性能强大的动态 Web 应用程序**，同时仍然尊重你的内容和你的受众。`Astro` 对内容的独特关注让 `Astro` 能够做出取舍并提供无与伦比的在其他框架中实现起来不合理的性能功能。

### 服务器优先

![服务端渲染](https://i.haidao.tech/202404/7417559b2116bfd6e24a56f500e1a4e8.webp)

**`Astro` 尽可能多地使用[服务器渲染](https：//docs.astro.build/zh-cn/basics/rendering-modes/)而不是在浏览器中的客户端渲染。** 这与传统的服务器端框架 -- 像 PHP、WordPress、Laravel、Ruby on Rails 等 -- 使用了几十年的方法相同。

这种方法与其他现代 JavaScript Web 框架形成鲜明对比，如 Next.js、SvelteKit、Nuxt、Remix 等。这些框架是为客户端渲染整个网站而制作的，提供服务器端渲染主要是为了解决性能问题。这种方法被称为**单页应用程序（SPA）**，对比 `Astro` 的**多页应用程序（MPA）**。

SPA 模式有它的优势。然而，这些都是以牺牲额外的复杂性和性能权衡为代价的。这些取舍损害了页面性能 -- 比如[可交互时间（TTI）](https：//web.dev/interactive/)等关键指标 -- 对于以内容为中心的网站没有多大意义，而这种网站的首次加载性能至关重要。

`Astro` 的服务器优先方法使你可以在且仅在必要的时候选择加入客户端渲染。你可以选择添加在客户端运行的 UI 框架组件。你可以利用 `Astro` 的[视图过渡路由](https：//docs.astro.build/zh-cn/guides/view-transitions/)来更精细地控制选定页面的过渡和动画。`Astro` 的服务器优先渲染，无论是预渲染还是按需渲染，都提供了可以增强和扩展的高性能默认值。

### 默认快速

好的性能总是重要的，但它对于那些成功取决于展示你的内容的网站来说**尤其**重要。在许多 Web 框架中，很容易在开发过程中构建一个看起来很棒的网站，但在部署后加载速度非常慢。JavaScript 通常是罪魁祸首，因为用户的手机和低功耗设备很少能与开发者的电脑速度相匹配。

`Astro` 的魔力在于它如何将上述两个价值 **以内容为中心和服务器优先的架构**  相结合，做出权衡并提供其他框架无法实现的功能。结果是每个网站都开箱即有令人惊叹的 Web 性能。

> Astro 的目标：**使用 Astro 几乎不可能做出缓慢的网站。**

一个 `Astro` 网站可以比使用最受欢迎的 React Web 框架构建的同一网站[加载速度快 40%，JavaScript 减少 90%](https：//twitter.com/t3dotgg/status/1437195415439360003)。

![真是的性能对比数据](https://i.haidao.tech/202404/8ca4106c4f369b3b35825b1c91d53dab.png)

### 易于使用

**`Astro` 的目标是使所有 Web 开发者都对它易于理解。** `Astro` 被设计成熟悉和平易近人的感觉，无论技能水平或过去的 Web 开发经验如何。

`Astro` 的 `.astro` UI 语言是 HTML 的超集：任何有效的 HTML 都是有效的 `Astro` 模板语法！因此，如果你能编写 HTML，你就可以编写 `Astro` 组件！但是，它还结合了我们从其他组件语言中借用的一些我们最喜欢的功能，如 JSX 表达式（React）和默认使用 CSS 作用域（Svelte 和 Vue）。这种与 HTML 的相似性也使得使用渐进式增强和常见的可访问性模式变得更加容易而无额外开销。

`Astro` 还可以使用你已经了解的最喜欢的 UI 组件语言，甚至可以复用你可能已经有的组件。React、Preact、Svelte、Vue、Solid、Lit 和其他的，包括 Web components，都被支持在 `Astro` 项目中编写 UI 组件。

`Astro` 的设计比其他 UI 框架和语言更简单。其中一个重要原因是 `Astro` 被设计为在服务器上渲染，不是在浏览器中。这意味着你无需担心：hooks (React)、stale closures (还是 React)、refs (Vue)、observables (Svelte)、atoms、selectors、reactions、或 derivations。服务器上没有响应式，因此这些复杂性都消失了。

**复杂性是可选的**， `Astro` 是为了尽可能多地从开发者体验中消除“必须的复杂性”，尤其是你首次加入时。你可以在 `Astro` 中只使用 HTML 和 CSS 构建一个“Hello World”示例网站。然后，当你需要构建更强大的东西时，你随时可以逐渐取用新功能和 API。

### 以开发者为中心

只有当开发者喜欢使用 `Astro` 时，它才是一个成功的项目。它有支持你使用 `Astro` 构建网站所需的一切。

`Astro` 在开发者工具方面投入很多精力，从你打开终端的那一刻起就有的很棒的 CLI 体验、提供语法高亮的官方 VS Code 扩展、TypeScript 和 Intellisense，以及提供 14 种语言的开发文档。

![Astro一直保持开源社区的健康、成长和可持续性](https://i.haidao.tech/202404/c89d0e56a856dd71272e6beb7d4d63b4.webp)

### 快速上手

```shell
# 使用 npm 创建一个新项目, node v18.17.1 或 v20.3.0 或更高版本。（不支持 v19
npm create astro@latest
# 进入项目目录
cd path/to/project
# 启动项目
npm run dev

```

如果一切顺利，Astro 现在应该可以在 [http://localhost:4321/](http://localhost:4321/) 上为你的项目提供服务了！

*推荐使用 `npm create astro@latest -- --template starlight` 模版*
### 收尾总结 

`Astro`通过一系列创新设计，提供了卓越的开发体验、优异的性能表现和出色的灵活性，是一款非常优秀且前景广阔的全栈Web框架。无论是内容网站、电商网站还是营销页面，都可以考虑使用`Astro`进行快速构建。

最后，推荐这集播客，可以更深入的了解`Astro`项目，了解为什么`Astro`项目可以使用多种UI框架的原理。

![扫码了解](https://i.haidao.tech/202404/ed24286b0defa47268a9bcb75630c43b.PNG)