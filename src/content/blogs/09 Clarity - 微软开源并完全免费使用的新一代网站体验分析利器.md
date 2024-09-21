---
title: 09 Clarity - 微软开源并完全免费使用的新一代网站体验分析利器
description: 09 Clarity - 微软开源并完全免费使用的新一代网站体验分析利器
showGithub: true 
---

> Clarity——微软开源并完全免费使用的新一代网站体验分析利器，让你彻底了解你的用户；<br>
> 产品的Slogan：*了解你的用户，改进你的产品，改进你的业务*

近年来，微软的软件产品用户体验确实有了很大提升，这与他们推出的`Clarity`这款免费体验分析工具分不开关系。今天，就让我们一起来了解一下这款利器。

![Clarity控制台](https://i.haidao.tech/202404/99e533590ec7f05b085599f9bbfdb71c.png)

`Clarity`能够捕获用户在网站上的每一个操作，帮助你深入了解用户行为，优化产品和业务。它的安装非常简单：创建项目后，会生成一段如下代码，粘贴到网站或者应用的`<head>`元素中；然后只需几分钟即可开始获取数据，网站数据就会呈现到控制台中。

``` html
<!-- 将 Clarity 代码复制并粘贴到网站或应用的 <head> 元素中。 -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "项目ID");
</script>
```

### 热度地图

`Clarity`会为你的所有页面自动生成热度地图，一目了然看到用户点击最多的区域、忽略的内容以及滚动距离。你还可并排比较同一页面的两个版本，评估A/B测试结果。

![热度地图](https://i.haidao.tech/202404/0fda5076e25e5d3bad7ede395822db7f.gif)

### 会话回放

通过`Clarity`的会话回放功能，你可高清慢放观看用户是如何在网站中导航的，包括哪些地方流畅、哪里出现了问题，观看用户如何使用你的网站以及你何时会丢失他们。完整的还原让你洞悉用户体验的方方面面。

![体验用户所看到的](https://i.haidao.tech/202404/6001c616d132c1425b80464293c9c8de.gif)

### 发现用户痛点

`Clarity`拥有人工智能驱动的"用户愤怒点"检测功能。她能精准识别出用户遇到的问题和页面Bug，还可根据地理位置、设备等多重标签（多达25个）筛选查看不同群体的体验差异。

![精准定位用户的痛点](https://i.haidao.tech/202404/cd2574eeae696366cf16d61dc477695d.gif)

### 整合Google Analytics

`Clarity`能够无缝整合谷歌分析，不仅可观看特定`Google Analytics`细分人群的回放，还能在`Google Analytics`数据视角下，查看相应的热度地图和会话录制。

![可观看 Google Analytics 区段的录制](https://i.haidao.tech/202404/ce4b8c755bd802a8934da45b720c5925.gif)

### 全新AI助理 Copilot

基于GPT技术的Copilot助理，能以自然对话的方式为你解读数据洞见。无论你想总结会话要点、发现`Google Analytics`趋势，还是询问`Clarity`项目数据，它都可以回复简洁精准的分析结论。

![询问有关 Clarity 项目数据的问题](https://claritystatic.azureedge.net/images/copilotFeature2.png)

### 移动应用版 Clarity

除了Web版，`Clarity`还有移动应用SDK供开发者接入分析能力。借助它，你也可以全方位洞察App的用户体验，并且`Clarity`有着业内最高的隐私合规标准。

*目前仅支持 `android原生` `React Native` `Cordova` `Ionic` 平台可用*

![Clarity 移动版 SDK 功能同样强大](https://claritystatic.azureedge.net/images/mobileTopic2Feature1.png)
  
### 数据安全

通过自动匿名化、自动和手动遮罩敏感数据、定制禁录制区域等多种隐私保护措施，再加上开发者对录制内容的完全控制权；`Clarity`的也提供了可以最大程度保护用户隐私的功能，而不影响收集有用的用户行为分析数据。

最后，`Clarity`将数字化的用户行为数据转化为直观的视觉数据，帮助开发者和产品经理真正走进用户的使用场景。凭借其简单实用、精准高效的特点，`Clarity`已成为微软产品持续进化的重要推手。

![项目信息](https://i.haidao.tech/202404/a055d3d5ff82a364e5a4a73ffaa085b1.png)

总之，这是一款很棒的产品，欢迎大家试用体验!

> 一个人无法准确预测未来科技的变化，但是成长型思维可以使自己更好地对不确定性作出反应，并且在技术快速变化的情况下，不断纠错，亦即刷新。<br/>
> -- 纳德拉

