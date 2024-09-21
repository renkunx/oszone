---
title: 22 Omakub：一个专为Ubuntu设计的Web开发者配置方案
description: 22 Omakub：一个专为Ubuntu设计的Web开发者配置方案
showGithub: true 
---

![东京夜氛围](https://i.haidao.tech/202406/6a12ec4f4e296113bde5654860141eef.jpg)

我一直在关注 David Heinemeier Hansson （[Ruby on Rails作者](https://world.hey.com/dhh)，以下简称DHH）的博客，之前他出了一篇[37signals 将 Linux 作为新开发者默认系统](https://world.hey.com/dhh/linux-as-the-new-developer-default-at-37signals-ef0823b7)挺有意思，最近他又开源了Omakub，让我们来看看Omakub到底是什么？

Ubuntu 桌面版虽能呈现出色观感，但往往开箱即用时并非如此。在Linux社区中似乎还存在一种入会仪式，要求你必须精通每款工具及其主题细节，以此证明你是真正的极客。DHH认为这有些不合适，因此创造了[Omakub](https://github.com/basecamp/omakub)：一个专为Ubuntu设计的Web开发者配置方案。

# 安装Omakub

> 系统环境：Ubuntu 24.04

```bash
wget -qO- https://omakub.org/install | bash
```

启动安装过程，它几乎完全自动化。您只需在最后阶段批准四个扩展确认，然后就完成了。重启后 Omakub 将带着那些酷炫的东京夜氛围。

Omakub通过运行单一命令，将全新的Ubuntu安装转变为配置齐全、美观且现代的Web开发系统。无需为每个基本工具编写定制配置即可启动，亦无需紧跟所有最新的命令行工具。Omakub是对Linux最佳状态的一种见解。

# 软件列表

Omakub集成了精心挑选的应用程序和工具，这些内容通常需要通过长时间观看YouTube、阅读博客或是在Linux网络中摸索才能发现。其宗旨是让直接从Windows或Mac平台迁移过来的用户能够立即享用一个现成系统，无需进行任何配置和筛选工作。

* 浏览器：Chrome，Firefox 
* 终端 Alacritty，它运行 Zellij 以提供多个窗格/会话。底层仍然是 bash，但配置了一系列出色的文件系统工具，如 eza、fzf、rg、zoxide 和 bg。如果你不了解这些工具也不用担心！观看介绍视频，你将看到它们如何运作
* 编辑器： Neovim（通过 lazyvim 配置）和微软的 VSCode
* 通讯协作：WhatsApp ，Signal，Spotify，Zoom，1Password 
- [Xournal++](https://xournalpp.github.io/) PDF 工具
- [Flameshot](https://flameshot.org/)，截图功能（`Ctrl+Print Screen`）
- 用于播放视频的 VLC
- [Pinta](https://www.pinta-project.com/)，图像编辑
- GitHub 命令行界面（CLI）的 gh 命令
- Docker，预配置了 MySQL 和 Redis 的容器，并提供超酷的 TUI 工具 lazydocker 来启动/停止它们。
- [mise](https://mise.jdx.dev/)，用于管理默认安装的 Ruby 和 Node.js 版本，以及 Python/Go/Java 等其他语言。

# 系统功能

Ubuntu 的整体 UI 自然是 Gnome，但为了适应以键盘为主和窗口平铺的工作流程，它经过了大幅调整。使用这种设置时，不应像野蛮人一样用鼠标拖动窗口！利用六个默认工作区来放置应用程序（快捷键： `Super+1/2/3/…` ），在笔记本显示屏上最好使用全屏（快捷键： `F11` ），或者通过 Tactile 整洁地平铺（快捷键： `Super+T` ）。所有过渡动画都被削弱，也是为了提高移动速度。从 Dock 中启动任何应用（快捷键： `Super`），根据其位置（快捷键： `Alt+1/2/3/4` ），例如浏览器只需 `Alt+1` ，终端 `Alt+2` ，等等。

此外，Ulauncher 提供了一个类似于 Raycast 的应用启动器，您可以通过 `Super+Space` 触发它。并且您可以使用组合键（映射到大写锁定键）m 快速输入表情符号，然后是一个代表该表情符号的单个字母。运行 `omakub` ，选择快捷键，在那里您可以查看所有设置。

# omakase

omakase来自日语，读作（おまかせ /o ma ka se/ ）字面意思是委任，也就是不从菜单点菜，厨师提供什么就吃什么。omakub其核心价值在于“omakase 精神”，即整个配置体验能因一位对搭配效果有着独到见解者的预先定制而获益。这并不意味着这些选择必然优于其他，毕竟Linux已激发了无数选项，满足各种口味，这值得称颂。然而，众多开发者群体更倾向于放弃极致的定制自由，转而选择一套协调一致的产品组合，至少在他们全面了解所有选项并完全决定投身Linux之前是如此。

尽管Ubuntu拥有出色的包管理器apt，但开发者所需的许多工具要么未被打包，要么版本较LTS冻结的更新，要么需安装后采取必要措施以实现最佳运行。OmaKube囊括了所有这些必需脚本。能够将众多工具整合成一种连贯的感觉和外观，有助于更多开发者对Linux产生兴趣，他们随后可能会激发一个完全定制的设置。

# 写在最后

Omakub 是为所有这些未来的 Linux 用户而设。

Omakub作为一个开源项目持续迭代，欢迎更多开发者参与其中，共同为Linux营造更友好的开发环境。


