# Button 按钮
按钮组件

## 基础用法
:::demo 使用`size`、`color`、`pain`、`round`属性来定义Button的样式。
```vue
<template>
  <div style="margin-bottom:20px;">
    <QButton color="pink">粉色按钮</QButton>
    <QButton color="yellow">黄色按钮</QButton>
    <QButton color="green">绿色按钮</QButton>
  </div>
  <div style="margin-bottom:20px;">
    <QButton color="blue" plain>朴素按钮</QButton>
    <QButton color="green" plain>绿色按钮</QButton>
    <QButton color="gray" plain>灰色按钮</QButton>
    <QButton color="yellow" plain>黄色按钮</QButton>
    <QButton color="red" plain>红色按钮</QButton>
  </div>
  <div style="margin-bottom:20px;">
    <QButton size="small" plain>小按钮</QButton>
    <QButton size="medium" plain>中按钮</QButton>
    <QButton size="large" plain>大按钮</QButton>
  </div>
  <div style="margin-bottom:20px;">
    <QButton color="blue" round plain icon="search">搜索按钮</QButton>
    <QButton color="green" round plain icon="edit">编辑按钮</QButton>
    <QButton color="gray" round plain icon="check">成功按钮</QButton>
    <QButton color="yellow" round plain icon="message">提示按钮</QButton>
    <QButton color="red" round plain icon="delete">删除按钮</QButton>
  </div>
  <div style="margin-bottom:20px;">
    <QButton color="blue" round plain icon="search"></QButton>
    <QButton color="green" round plain icon="edit"></QButton>
    <QButton color="gray" round plain icon="check"></QButton>
    <QButton color="yellow" round plain icon="message"></QButton>
    <QButton color="red" round plain icon="delete"></QButton>
  </div>
</template>
```
:::
## 进阶用法