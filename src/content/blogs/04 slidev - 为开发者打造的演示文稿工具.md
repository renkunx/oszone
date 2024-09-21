---
title: 04 slidev - 为开发者打造的演示文稿工具
description: 04 slidev - 为开发者打造的演示文稿工具
showGithub: true 
---

> Slidev (slide + dev, /slʌɪdɪv/) 是基于 Web 的幻灯片制作和演示工具。

 提起幻灯片制作工具，大家都会想到[微软 PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 或 [苹果 Keynote](https://www.apple.com/keynote/)，它们在制作带有复杂动画和图表等方面效果相当好。**今天为大家介绍一款开发者友好的演示文稿工具——Slidev**

 Slidev 并不寻求完全取代其他幻灯片制作工具。相反，它专注于迎合开发者社区的需求。 通过分离内容和视觉效果使你能够一次专注于一件事：专注于分享你的想法、用充分的内容和效果去支撑的创意。同时拥有支持 HTML 和 Vue 组件的能力，并且能够呈现像素级完美的布局，还在你的演讲稿中内置了互动的演示样例，只需一些代码就能产出效果炸裂的演示稿。它还拥有很多内置的集成功能，如实时编码、导出、演讲录制等。

> Slidev 是由 web 驱动的，因此你可以使用它进行任何操作 —— 具有无限的可能性。

### 功能特点[​](https://cn.sli.dev/guide/#features)

- 📝 [**Markdown 支持**](https://cn.sli.dev/guide/syntax.html) —— 使用你最喜欢的编辑器和工作流编写 Markdown 文件
- 🧑‍💻 [**开发者友好**](https://cn.sli.dev/guide/syntax.html#code-blocks) —— 内置代码高亮、实时编码等功能
- 🎨 [**可定制主题**](https://cn.sli.dev/themes/gallery.html) —— 以 npm 包的形式共享、使用主题
- 🌈 [**灵活样式**](https://cn.sli.dev/guide/syntax.html#embedded-styles) —— 使用 [Windi CSS](https://windicss.org/) 按需使用的实用类和 [UnoCSS](https://github.com/unocss/unocss)
- 🤹 [**可交互**](https://cn.sli.dev/custom/directory-structure.html#components) —— 无缝嵌入 Vue 组件
- 🎙 [**演讲者模式**](https://cn.sli.dev/guide/presenter-mode.html) —— 可以使用另一个窗口，甚至是你的手机来控制幻灯片
- 🎨 [**绘图**](https://cn.sli.dev/guide/drawing.html) - 在你的幻灯片上进行绘图和批注
- 🧮 [**LaTeX 支持**](https://cn.sli.dev/guide/syntax.html#latex) —— 内置了对 LaTeX 数学公式的支持
- 📰 [**图表支持**](https://cn.sli.dev/guide/syntax.html#diagrams) —— 使用文本描述语言创建图表
- 🌟 [**图标**](https://cn.sli.dev/guide/syntax.html#icons) —— 能够直接从任意图标库中获取图标
- 💻 [**编辑器**](https://cn.sli.dev/guide/editors.html) —— 集成的编辑器，或者使用 [VS Code 扩展](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**演讲录制**](https://cn.sli.dev/guide/recording.html) —— 内置录制功能和摄像头视图
- 📤 [**跨平台**](https://cn.sli.dev/guide/exporting.html) —— 能够导出 PDF、PNG 文件，甚至是一个可以托管的单页应用
- ⚡️ [**快速**](https://vitejs.dev/) —— 基于 [Vite](https://vitejs.dev/) 的即时重载
- 🛠 [**可配置**](https://cn.sli.dev/custom/config-vite.html) —— 支持使用 Vite 插件、Vue 组件以及任何的 npm 包

### 演示功能

1. 导航功能说明

![演示效果](https://i.haidao.tech/202403/683991a7dff90d7b7a89266500b01783.png)

2. 演讲录制

基于 [RecordRTC](https://github.com/muaz-khan/RecordRTC) 与 [WebRTC API](https://webrtc.org/)技术。Slidev 拥有内置的演讲录制和摄像头视图。你可以使用它们轻松实现你的演讲录制
![演讲录制](https://i.haidao.tech/202403/738bce68ce07e8f12b2c3a16a46f429c.jpeg)
点击导航面板上的`演讲录制`按钮，将会弹出一个对话框。在此对话框中，你可以选择将你的摄像头视图嵌入到幻灯片中进行录制，也可以将它们分成两个视频文件。

4. 演讲者模式

点击导航面板上的`进入演讲者模式`按钮，或者手动访问 `http://localhost:3030/presenter` 地址，即可进入演讲者模式。每当你进入演示者模式，其他页面实例会自动与演示者保持同步。


![](https://i.haidao.tech/202403/268369773d56d9c72d368854bc5d6cbd.png)


- 演讲备注

	你也可以为每张幻灯片编写备注。它们将展示在 [演讲者模式](https://cn.sli.dev/guide/presenter-mode) 中，供你在演示时参考。在 Markdown 中，每张幻灯片中的最后一个注释块将被视为备注。

- 计时功能
- 绘图批注
	`Slidev`基于 [drauu](https://github.com/antfu/drauu) 实现了绘图和批注的功能，可用进一步增强你的演示效果。你可以通过点击工具栏上的`批注`图标来启用。你创建的绘图和批注都会实时**自动同步**起来。

	如果想对绘图进行持久化？只需在frontmatter 中的配置:

```md
---
drawings:
  persist: true
---
```

	就可以把你得到绘图作为 SVG 保存在 `.slidev/drawings` 目录下，并把它们放入你导出的 pdf 或者部署的网站中。

### 内置功能

1. 丰富的布局

内置布局丰富，支持`center` `cover` `two-cols` `two-cols-header` `image-right|right` `iframe-right|left` 等，也支持自定义布局。

2. 可使用扩展插件

扩展插件是你可以在演示文稿中使用的附加组件、布局、样式、配置等集。

- 它们不影响幻灯片的全局样式
- 你可以在同一演示文稿中使用多个插件

3. 集成Monaco 编辑器

当你需要在演示文稿中做修改时，只需在语言 id 后添加 `{monaco}` —— 即可将该代码块变为一个功能齐全的 Monaco 编辑器。

> 技术分享中你应该会有这样的场景：针对之前代码做了优化，你需要做个算法演示；在PPT中你截两张图展示修改前后，再在ide中运行代码展示性能的提升；如果你用`Slidev`以下两个功能着实可以让你的演讲分享效果提升一大截：

	- diff功能：类似git diff，直观地展示变更了那些行
	- Runner：直接在演示文稿中运行代码

![007.png](https://i.haidao.tech/202403/7f2bc7320cf41462f0dfdefd1047e8f7.png)

4. 动画
	1. 点击动画
	2. 高亮和标记
	3. Motion
	4. Magic-Move
![Magic Move](https://i.haidao.tech/202403/1124e64f419ea6b185ad65637e14be7f.gif)

5.  图标

 `Slidev`基于[`unplugin-icons`](https://github.com/antfu/unplugin-icons) 和 [Iconify](https://iconify.design/)技术，你可以在 Markdown 中在安装对应包后访问几乎所有的开源的图标集。图标 ID 遵循 [Iconify](https://iconify.design/) 的命名规则 `{collection-name}-{icon-name}`

6. 组件支持

![可使用vue自定义组件](https://i.haidao.tech/202403/e117d6be71a82f8e8f78bb87454b9b41.png)


7. 导出

可将演示文稿或者标注导出为 PDF 或 PNG 的功能，基于这个功能我可以将我的公众号文章生成小红（绿）书的图片格式，发布到小红（绿）书；这篇合集中的第二篇图文就是使用导出功能生成的，可以自定义导出的尺寸。

```shell
slidev export { path/to/file.md } --format png --dark
```


### 项目信息

![_Users_renkun_SourceTree_github-badge_index.html.png](https://i.haidao.tech/202403/aa4fc5d9d67de7c35544b57ff05a48a6.png)

Slidev项目是由著名的开源开发者Anthony Fu主导开发的，项目质量很高迭代很快，有兴趣的可以尝试。

目前Slidev还未发布1.0版本（还是beta版本），在使用过程会出现一些问题和报错，建议使用

```shell
npm init slidev
```

进行尝试，会在目录里安装依赖，使用全局安装建议node > 18。