---
title: 12 Patterns.dev 用设计模式打造最佳用户体验，提高应用的可扩展性和性能
description: 12 Patterns.dev 用设计模式打造最佳用户体验，提高应用的可扩展性和性能
showGithub: true 
---

各位码友们，大家好！今天给大家介绍一个非常棒的学习设计模式的网站 - `Patterns.dev`。

![Patterns.dev](https://i.haidao.tech/2024/04/e09311e59f9094451c71bd38c2b893ec.jpg)

# 为什么要学设计模式？

1. 面试过程中，设计模式是常被问到的知识点。面试官往往会通过考察候选人对设计模式的理解，来判断其对面向对象程序设计理念的掌握程度。
    
2. 在实际开发中，我们常常在无意识使用一些设计模式，只是自己没有意识到而已。比如单例模式、工厂模式等，都是我们日常编码时可能会用到的模式。掌握设计模式有助于写出更加地道的面向对象代码。
    
3. 设计模式可以被视为软件开发人员的"标准词汇"。了解这些词汇有助于开发人员之间更好地交流，提高团队的协作效率。同时，学习设计模式也是个人技术能力提升的一条捷径。
    
4. 设计模式包含了面向对象编程的精髓，体现了对象之间灵活、高内聚、低耦合的设计原则。掌握了设计模式，就等于掌握了面向对象分析和设计的精要。

设计模式对于开发者来说是非常重要的！但相信很多人和我一样，对于设计模式这个知识点都有一种"爱恨交加"的情绪。它虽然非常重要，但传统很多设计模式的讲解过于学院化和理论化，缺乏生动有趣的实例和案例，让人难以产生共鸣，容易在学习中失去兴趣。

而 `Patterns.dev` 就很好地解决了这个难题。*这个网站通过生动有趣的动画演示、可以直接运行的代码示例，以及贴近实战需求的亲和叙述方式，让设计模式的学习变得轻松易懂、趣味盎然。*

# 动画视图转换-*示例章节演示*

> 这里举例网站中Rendering Pattern中关于讲解动画视图转换章节

为了讲解动画视图，作者先以目前流行的转场效果作为目标，如下视频：

![目标效果](https://i.haidao.tech/2024/04/30ad8474581cebab9e5f7e64f2d03a84.gif)

然后由易到难分步去实现，以达到最终效果：

1. 从最初简单的Toggle示例入手

![Toggle示例](https://pub-23b37cd40d3e4aeab8f95b6ea1026eb3.r2.dev/202404/94a255765bff0d34f363a217a795f20f.gif)
实现中拆解了html，js 和 css 代码，并且代码中有详细的注释，去讲解动画的实现：

```js
if (document.startViewTransition) {
  // (check for browser support)
  document.addEventListener("click"， function (event) {
    if (event.target.matches("summary")) {
      event.preventDefault(); // (we'll toggle the element ourselves)
      const details = event.target.closest("details");
      document.startViewTransition(() => details.toggleAttribute("open"));
    }
  });
}
```

```css
::view-transition-old(root)，
::view-transition-new(root) {
  animation-duration: 2s;
}
```

2. 然后要进阶到视图的过渡

这就需要通过更高级的动画来实现多个变化的动画效果，这些动画效果超出了上面的 Toggle 。

视图转换需要通过为特定元素提供 CSS `view-transition-name` 和 `containment` 的 `layout` 或 `paint` ，这些 API 为开发者提供了对元素过渡的精细控制，包括它们的宽度、高度和位置。其实转场动画就是基于这些API实现的，这些高级过渡 API 对元素进行精细控制，才让流畅的动画效果从一个页面传达到下一个页面的。

在 [photo gallery](https://charming-crumble-af45ba.netlify.app/) 示例中，每个页面上的 `<img>` 元素被赋予相同的唯一 `view-transition-name` ，以及一个 CSS `containment` 值 `layout` 。动态地添加它们（例如，在一个 `onclick` 处理程序中），只要它们是页面特有的，并且在过渡开始之前添加即可。

![视图过渡效果](https://i.haidao.tech/2024/04/672e1e58e09e6b3ebd3a69eaf5853ebb.gif)


3. 然后是增加页面导航过渡

页面导航的过渡效果中分为两种情况：客户端渲染还是服务端渲染。

- SAP中的实现如下：

```js
import { Component } from "react";

export default class ViewTransition extends Component {
  shouldComponentUpdate() {
    if (!document.startViewTransition) return true; // skip when not supported

    document.startViewTransition(() => this.#updateDOM());
    return false; // don't update the component， we'll do this manually
  }

  #updateDOM() {
    // now we know the screenshot has been taken， we can force render
    // (which skips `shouldComponentUpdate`)
    this.forceUpdate();
    // set up a promise that will resolve when the component renders
    return new Promise((resolve) => {
      this.#rendered = resolve;
    });
  }

  render() {
    return this.props.children;
  }

  #rendered = () => {};

  componentDidUpdate() {
    // resolve the `updateDOM` promise to notify the View Transition API
    // that the DOM has been updated
    this.#rendered();
  }
}
```

- 在流行的Next.js中使用SSR，对于无需视图转换的也讲解了实现方法

	这种方法与 View Transitions API 的主要区别在于，它无法在动画播放时将元素从一个状态过渡到下一个状态，因为当它播放动画时，它没有新的 HTML 来实现这一点。

文中给出：使用 Turbo 和 Turn 为服务器端渲染的多页面应用添加动画效果；

Turbo，作为 Hotwire 库套件的一部分，提供了一种渐进式增强多页面应用（MPAs）的渲染方法。它可以将服务端渲染的应用程序，优化到单页面应用（SPAs）的速度。它通过捕获链接点击和表单提交，使用 JavaScript 执行请求，并用响应中的新 `<body>` 替换 原来的`<body>` 来实现这一点。因此，这是一种混合方法：HTML 在服务器上生成，但 DOM 通过 JavaScript 更新。

Turn 是一个用于使用 Turbo 进行页面导航动画的库。它支持两种动画方法；Turn 会在适当的时候为 `<html>` 元素添加 `turn-before-exit` 、 `turn-exit` 和 `turn-enter` 类，为开发者提供了一种自定义动画的方式。

更多信息参阅网站介绍， [Animating View Transitions](https://www.Patterns.dev/vanilla/view-transitions)

# 设计模式应该根据具体问题和需求进行审慎应用

正是这种创新的学习方式和与时俱进的内容，让 `Patterns.dev` 赢得了很多开发者的青睐。在这里，你可以:

- 通过动画直观地理解单例模式、观察者模式等经典设计模式的运作原理
- 学习 React 开发中的高阶组件、Hooks 等专有模式，提升代码复用性
- 掌握代码分割、Tree Shaking等Web性能优化模式，构建高效的现代Web应用
- 亲自动手在 CodeSandbox 中实践所学的模式

不仅如此，`Patterns.dev` 还紧跟 Web 开发的最新发展趋势，涵盖了 JavaScript、React、Vue.js、Next.js 等前沿技术框架中的设计模式实践，完美地拥抱了交互式 Web 体验。

总之，`Patterns.dev` 让设计模式"活"了起来，是程序员们提升代码质量、夯实面向对象编程基础的绝佳学习平台。有了它，相信大家都能写出更优雅、高内聚、低耦合的代码。

# 总结

虽然设计模式不是一种新鲜概念，但`Patterns.dev`将它们引入现代Web开发实践的尝试是成功的，这个项目很好地展示了设计模式在当下场景下的重要性和适用性，避免了过于纯理论和学院化的窠臼。

同时，`Patterns.dev`对React、Vue.js等框架的深度解读，反映出了它与现有技术生态的紧密融合。这使得开发者无需叠加学习成本就可以获益。

总的来说，`Patterns.dev`是一个内容丰富、交互创新、理念先进的项目。它对于提高现代Web开发的质量和效率，都有积极影响。希望在开源地带这个平台获得更多关注和支持。


> 网站也提供电子书版本网站也提供电子书版本《Learning Patterns》（可以免费下载，如果对你有帮助请付费支持一下 👍🏻， [下载地址](https://leanpub.com/learningpatterns/)）