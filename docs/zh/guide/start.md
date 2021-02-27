# 快速上手

## 安装

### 标签引入

你可以使用标签引入该项目的最新版。

``` html
<script src="https://cdn.jsdelivr.net/npm/anichart@latest/dist/anichart.min.js"></script>
```

标签引入会全局导入 anichart 变量。这是最方便的使用方式，但有可能会因为第三方 CDN 网络链接不稳定等原因暂时无法使用，可用性一般，并且失去了代码提示和调试功能，不推荐使用。

### 本地安装

更推荐使用本地安装的方式：

#### 使用 Yarn

``` bash
yarn add anichart
```

#### 使用 NPM

``` bash
npm i anichart
```

## 使用

::: tip
本项目使用 Typescript 编写，如果你也使用 TypeScript 能够获得更丰富的类型推断以及代码提示功能。
:::

### 引入

如果使用标签引入则可以跳过这一步，如果安装时选择本地安装，则需要引入：

``` js
import * as anichart from "anichart"
```

### 创建舞台

首先我们需要创建一个 Stage （舞台）。Stage 是整个动画的承载者。

``` js
const stage = new anichart.Stage();
```

### 添加组件

在舞台上添加物体，比如添加一个黑色的方块：

``` js
// 创建一个矩形组件
const rect = new anichart.Rect({
  shape: { width: 50, height: 50}, // 矩形形状，长宽都为50
  fillStyle: "white" // 矩形颜色，填充白色
});
// 将组件添加进舞台
stage.addChild(rect);
```

### 开始绘制

在添加完所有组件后，只需一行代码就能播放这个动画了。

``` js
stage.play();
```

### 总结

以上是基本的使用流程。接下来会简单展示如何渲染一个条形图的数据可视化视频。
