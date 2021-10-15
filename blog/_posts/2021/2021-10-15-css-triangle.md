---
title: 用 CSS Border 做三角形
summary: 之前只會做正三角，原來還可以調整角度
date: 2021-10-15
tags: 
  - CSS
---

利用只設定 Border 來取得三角形

```css
border-color: 上 右 下 左; 
border-width: 上 右 下 左;
```

一個空的 (沒有 content) 元素
border 的四個方向設定不同顏色可以取得

<div class="sample"></div>
<style >
.sample {
  display: inline-block;
  border-style: solid;
  border-color: red orange yellow green;
  border-width: 50px 50px 50px 50px;
}
</style>

```css
.sample {
  display: inline-block;
  border-style: solid;
  border-color: red orange yellow green;
  border-width: 50px 50px 50px 50px;
}
```

<div class="mt-10"></div>

只留一下一邊顏色，其他邊設定顏色為透明 (transparent) 就可以取得三角形了
以這個案例用 border-bottom-color 為主要的三角形
border-bottom-width = 三角形的高

<div class="sample2"></div>
<style >
  .sample2 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent orange transparent;
  border-width: 0 50px 100px 50px;
}
</style>

```css
.sample2 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent orange transparent;
  border-width: 0 50px 100px 50px;
}
```

<div class="mt-10"></div>

border-left-width + border-right-width  = 三角形的底邊長

<div class="sample3"></div>
<style >
  .sample3 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent red transparent;
  border-width: 0 40px 100px 120px;
}
</style>

```css
.sample3 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent red transparent;
  border-width: 0 40px 100px 70px;
}
```

<div class="mt-10"></div>

<div class="sample4"></div>
<style >
  .sample4 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent blue transparent;
  border-width: 0 20px 100px 20px;
}
</style>

```css
.sample4 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent blue transparent;
  border-width: 0 20px 100px 20px;
}
```

<div class="mt-10"></div>

因為沒有 content 才能夠取得三角形
所以只要設定 content 還可以獲得梯形

width = 上底邊長
border-bottom-width = 三角形的高
width + border-left-width + border-right-width  = 下底邊長

<div class="sample5"></div>
<style >
.sample5 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent purple transparent;
  border-width: 0 50px 100px 50px;
  width: 40px;
}
</style>

```css
.sample5 {
  display: inline-block;
  border-style: solid;
  border-color: transparent transparent purple transparent;
  border-width: 0 50px 100px 50px;
  width: 40px;
}
```

<div class="mt-10"></div>


實作範例：[`幸運轉盤`](https://clipwww.github.io/lucky-wheel-game/)
1. 轉盤中心的針
2. 轉盤的每一片區塊的三角形，透過角度跟高就可以計算獲得底邊長

![](https://i.imgur.com/wWHk4tY.png)