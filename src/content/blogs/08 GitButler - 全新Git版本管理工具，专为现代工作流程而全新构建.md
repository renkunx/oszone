---
title: 08 GitButler - 全新Git版本管理工具，专为现代工作流程而全新构建
description: 08 GitButler - 全新Git版本管理工具，专为现代工作流程而全新构建
showGithub: true 
---

![应用截图](https://i.haidao.tech/202403/39a64b00ab99bddb214f0aa04b6103ac.webp)

>GitButler 是一个重新被定义的 git 客户端，是2024年才可以产生的新的git工作流的管理工具。

从应用截图看，左边3列和传统的git客户端都有类似的功能；但是奇迹就发生右边的可拓展区，同一个工作区可以无限增加的多分支模式，让您同时在多个分支上工作。它允许您快速将文件更改组织到单独的分支中，同时仍然将它们应用到您的工作目录。然后，您可以将分支单独推送到远程，或直接创建拉取请求。

>简而言之，它是`git add -p`和`git rebase -i`的更灵活版本，允许您跨分支高效地执行多任务。

### 同时多分支是如何工作的？

GitButler 在 Git 之上用一层跟踪未提交的更改。对文件或文件部分内容的更改可以分到我们所说的虚拟分支。只要您对虚拟分支的内容感到满意，就可以将其推送到远程。GitButler 确保其他虚拟分支的状态保持独立。

### GitButler 的`虚拟分支`与 Git 分支有何不同？

我们喜欢 Git 的原因就是分支是完全独立开的，它们之间的切换是完整的上下文切换。GitButler 允许您在同一工作目录中并行处理多个分支。这实际上意味着多个分支的内容同时在一个工作区可用。

GitButler 在提交之前就知道更改。这使得它能够记录每个单独的差异属于哪个`虚拟分支`。实际上，这意味着您可以随时将各个分支及其内容分开，以将它们推送到远程或从工作目录中取消应用它们。

最后，在 Git 中，您一般需要提前创建所需的分支，而使用 GitButler 您可以在开发过程中的任何时候在`虚拟分支`之间移动更改。

### 为什么选择 GitButler？

大家开发的时候应该都是使用 Git 进行版本管理的。GitButler为什么能重新定义Git的工作流呢？跟他的创始人[@schacon](https://github.com/schacon)有关，他就是[Pro Git](https://git-scm.com/book/en/v2)的作者之一，相信这本书大家都或多或少的听过或者读过。与此同时，Git 的用户界面已经 15 年没有发生根本性改变，但如今大多数开发人员都有不同的工作流程和需求。

GitButler不是尝试将 Git CLI 的语义融入图形界面，而是从开发人员工作流程开始，并将其映射回 Git。

GitButler 是一个基于[Tauri](https://tauri.app/)的应用程序。它的 UI 是使用[TypeScript](https://www.typescriptlang.org/)语言，用[Svelte](https://svelte.dev/)编写的，后端是用[Rust](https://www.rust-lang.org/)编写的，从技术栈上看也是近期兴起的。

目前有macOS ([Apple Silicon](https://app.gitbutler.com/downloads/release/darwin/aarch64/dmg) | [Intel](https://app.gitbutler.com/downloads/release/darwin/x86_64/dmg)) · Linux ([AppImage](https://app.gitbutler.com/downloads/release/linux/x86_64/gz) | [deb](https://app.gitbutler.com/downloads/release/linux/x86_64/deb))版本，因为是基于 Tauri 相信 Windows版本也会出（社区对于 Windows 的版本呼声很高，也已经有人在 WSL 上适配了 GitButler，但是无法登陆），大家还是等一等官方的 Windows 发布。

![](https://i.haidao.tech/202403/d56741796f63700cdf5faa2d90877abe.webp)

### 主要特性

1.  **虚拟分支**
    - 同时组织多个分支的工作，而不是不断切换分支
	- 需要时自动创建新分支

<video src="https://i.haidao.tech/202403//feature-vb.mp4" autoplay></video>

2.  **易于提交管理**
    - 通过拖放来撤消、修改和合并提交

3.  **GitHub 集成**
    - 向 GitHub 进行身份验证以打开拉取请求、列出分支和状态等

4.  **便捷的 SSH 密钥管理**
    - GitButler 可以自动生成 SSH 密钥上传到 GitHub

<video src="https://i.haidao.tech/202403//feature-vb-manage.mp4" autoplay></video>

5. **集成AI工具**
    - 根据您正在进行的工作自动编写提交消息（您可以在首次添加存储库时或稍后在项目设置中启用它）
    - 自动创建描述性分支名称
    > 	使用 OpenAI 的 API 进行差异汇总，这意味着如果启用，代码差异将被发送到 OpenAI 的服务器。如果觉得有安全隐私问题，可以期待后续版本的更新，在Roadmap中提到了后续支持插入不同的 LLM 模型（包括本地的）。

6.  **提交签名**
    - 使用我们生成的 SSH 密钥轻松提交签名

### 常见工作流使用示例

#### 1. 修复开发功能时的错误

> 假设在开发一项功能时，您遇到了一个想要修复的错误。通常希望将修复程序作为单独的贡献（拉取请求）来提供。

*使用 Git您可以存储更改并切换到另一个分支，您可以在其中提交并推送修复。*

*使用 GitButler只需将修复分配给一个单独的虚拟分支，您可以单独推送该分支（或直接创建 PR）。另一个好处是，您可以在等待 CI 和/或代码审查时将修复代码保留在工作目录中。*
#### 2. 工作进行中想尝试其他人的分支

> 假设您想测试其他人的分支以进行代码审查。

_使用 Git 尝试其他人的分支是与您自己的工作完全分开的上下文切换。 _
*使用 GitButler，您可以直接在工作目录中应用和取消应用（添加/删除）任何远程分支。*

### 注意事项

1. 虚拟分支需要有远程仓库支持

![虚拟分支需要有远程仓库支持](https://i.haidao.tech/202403/0d326c2ac55f431cd98312464959dcfe.webp)

2. 使用自动编写提交信息或者创建分支，代码都会被上传，注意隐私安全，根据情况谨慎使用

### 操作视频

<video src="https://i.haidao.tech/202403//main-preview.mp4" autoplay></video>