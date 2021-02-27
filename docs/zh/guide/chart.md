# 渲染条形图

数据可视化的本质是将数据转化为图表（对于这个框架而言，是转化为视频）。所以第一步是准备数据。

## 准备数据

本项目目前支持读取 Json 数据和 CSV 数据。这里首先介绍 CSV 数据。

CSV 文件其实是一个表格，它使用逗号和换行符来分割出单元格。

你可以直接使用文本编辑器来编辑 CSV 文件，也可以使用 Excel。适用于本项目的 CSV 文件示例如下：

``` csv
id,value,date
alpha,1,2020-01-01
alpha,2,2020-01-02
alpha,3,2020-01-03
beta,3,2020-01-01
beta,1,2020-01-02
beta,2,2020-01-03
```

这个 CSV 文件描述的数据表如下：

| id    | value | date       |
| ----- | ----- | ---------- |
| alpha | 1     | 2020-01-01 |
| alpha | 2     | 2020-01-02 |
| alpha | 3     | 2020-01-03 |
| beta  | 3     | 2020-01-01 |
| beta  | 1     | 2020-01-02 |
| beta  | 2     | 2020-01-03 |

::: tip
表头的名称（id，value，date）非常重要。所有的内置图表，默认会参考上述几个字段。你也可以在图表的选项中配置参考的字段名。
:::

## 读取数据

数据作为一种资源能被所有组件全局共享，他们被保存在 recoures 对象中。你可以这样载入数据。

``` js
anichart.recoures.loadCSV("path/to/csv/file.csv", "data");
```

其中，第一个参数为文件的**路径**，而第二个参数为该文件的**别名**。

::: warning
别名非常重要。所有内置的图表，默认会读取名为 "data" 的数据。当然，这也是可以在图表组件中配置的。
:::

## 创建条形图组件

接着，我们需要定义条形图的组件。所有图表组件类都以 XxxChart 的格式命名。条形图的类名为 BarChart。

``` js
const barChart = new anichart.BarChart();
```

## 大功告成

现在就可以直接进行动画的播放了！整体的代码是这样的：

``` js
import * as anichart from "anichart";
const stage = new anichart.Stage();
anichart.recoures.loadCSV("path/to/csv/file.csv", "data");
const barChart = new anichart.BarChart();
stage.addChild(barChart);
stage.play();
```

只需要几行代码，就能实现一个柱状图，是不是很简单呢？

如果想要更加深度的配置，那么就需要了解每个图表到底有哪些配置项了。目前配置项的文档仍然在制作中，所以只能留待各位自行探索了。但如果你使用的是 Typescript，那你非常幸运能够直接从声明文件中检查每个配置项的含义，所以吃下这发安利直接上 Typescript吧！
