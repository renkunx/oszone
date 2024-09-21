---
title: 18 AST-GREP：基于语法和语义的代码搜索与替换，你需要了解一下！
description: 18 AST-GREP：基于语法和语义的代码搜索与替换，你需要了解一下！
showGithub: true 
---

你是否曾花费数小时试图通过纯文本或正则表达式查找并替换代码模式？如果是，你一定深知这过程的繁琐与易错。现在有一种更高效的方法：结构化搜索与替换(Structural Search and Replace)，这项技术允许你基于代码的语法和语义而非仅文本内容来查找和修改代码模式。

![AST-GREP](https://i.haidao.tech/202405/e367635c9887e9c407371e4ff57585a9.png)

`AST-GREP`正是一款快速且支持多语言的代码结构搜索、检查及重写工具。你可以形象地将它比作具备语法感知能力的`grep/sed`！通过模式语法或更高级的规则，它可基于抽象语法树(AST)在成千上万文件中精准定位并修改代码，实现交互式操作。

假设你需要将项目中类似`os.homedir && os.homedir()`的旧式安全访问方式改为 ES6 标准的可选链式操作`os.homedir？.()`。以往你可能需要费力定位和逐一替换，但现在只需一条 `AST-GREP` 命令：`sg -p '$A && $A()' -r '$A？.()'`，就可以完成整个项目的重构，如下图所示：

![重构对比](https://i.haidao.tech/202405/b42042c8b983d948848c350e62aee796.png)

### 亮点功能

1. **极速搜索与替换**：借助并行 Rust 技术，可实现数千源代码文件的极速处理⚡️⚡️⚡️
    
2. **多语言支持**：目前支持以下 9 种编程语言。
![](https://i.haidao.tech/202405/2823d7b206298f0499e54587efb281d0.png)

3. **多场景适用**：支持命令行、IDE 插件等多种使用方式，并提供交互式代码修改、语言服务器及测试工具等实用功能。


4. **代码搜索**

- **模式语法**：针对项目中的简约但不简单的搜索需求，`AST-GREP` 提供了直观的模式语法，如下所示：

![模式语法搜索](https://i.haidao.tech/202405/892a6482478309c76379494e8aa2525c.png)

> 值得一提的是，`AST-GREP` 在搜索时会自动过滤掉注释和不生效的代码。


- **规则匹配**：对于更复杂的场景，可以使用 YAML 配置编写规则进行匹配。
例如，项目中如果在内联 `Promise.all` 数组中使用 `await`，通常是错误的做法，违背了并行执行承诺的初衷。我们可以创建以下规则来查找这种反模式：

```yaml no-await-in-promise-all.yml
id: no-await-in-promise-all
language: javascript
rule:
  pattern: Promise.all($A)
  has:
    pattern: await $_
    stopBy: end
```

```bash
ast-grep scan --rule no-await-in-promise-all.yml # 执行规则匹配
```

> 更多规则设置参见[Rule Object Reference](https://ast-grep.github.io/reference/rule.html "Rule Object Reference")

5. **代码重写**：除了强大的搜索功能，`AST-GREP` 还提供了代码重写能力。继续上一个示例，假设我们要将不规范的 `Promise` 写法修正，可将规则改为：
```yaml
id: no-await-in-promise-all
language: javascript
rule:
  pattern: await $A
  inside:
    pattern: Promise.all($_)
    stopBy: end
fix: $A
```
源文件
```js
const [foo， bar] = await Promise.all([
  await getFoo()，
  getBar()，
  (async () => { await getBaz()})()，
])
```

```bash
sg scan -r no-await-in-promise-all.yml #执行重构
```

重构后

```js diff
const [foo， bar] = await Promise.all([
-- await getFoo()， 
++ getFoo()， 
  getBar()，
  (async () => { await getBaz()})()，
])
```


### AST-GREP for VS Code

虽然`VS Code`内置代码搜索支持正则表达式，但正则在处理代码搜索替换时，无法跨行匹配、处理嵌套结构效果不佳，且难以有效忽略注释。而基于`AST-GREP`技术的`VS Code`插件 `ast-grep VSCode` 很好地解决了这些痛点，极大增强了代码搜索替换的能力。

#### 安装步骤

1. 安装`AST-GREP`命令行，可根据自己系统情况任选一种
```bash
# install via npm
npm i @ast-grep/cli -g

# install via cargo, cargo是Rust的包管理器
cargo install ast-grep

# install via homebrew
brew install ast-grep
```
2. 在 VS Code 中安装 [ast-grep VSCode](https://marketplace.visualstudio.com/items?itemName=ast-grep.ast-grep-vscode "ast-grep VSCode 插件")

3. 初始化项目（可选，如果要使用更高级的规则功能）

```bash
ast-grep new # 初始化ast-grep项目，创建rules/tests等
```

### 写到最后

如果你是一个团队的技术负责人，`AST-GREP`可以帮助你制定和执行符合你业务需求的编码最佳实践。`AST-GREP`的愿景是让抽象语法树的魔法普及到每个人，并让人们从繁琐的AST编程中解放出来！`AST-GREP`作为一款基于AST的代码处理利器，不仅拥有先进的搜索替换能力，还提供了诸如代码检查、重构、测试等一体化解决方案。通过降低 AST 编程的门槛，它让更多开发者能够享受现代编程语言基础架构带来的效率提升和创新可能。