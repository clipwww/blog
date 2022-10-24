---
title: Intersection Observer 踩雷紀錄
summary: 當 Intersection Observer root element 有 padding 時，在不同瀏覽器上觀察範圍會有預期外的行為
date: 2022-10-24
tags: 
  - JavaScript
  - Intersection Observer
---

[Intersection Observer 筆記](../2021/2021-09-23-Intersection-observer.md)

## 遇到的問題與原因

使用 Intersection Observer 來實現滾動到對應數字時選擇該數字
![](https://i.imgur.com/V9bH6Pb.png)
一開始用 padding 來調整 root element 的可視範圍在 Edge 上一切正常

然而當使用 Firefox 進行測試時卻遇到異常
檢查後發現在 Firefox 時回傳的 entries 會有 1 個以上 isIntersecting 的物件
Firefox 的觀察範圍比其他瀏覽器都還要大

搜尋了相關 Issue 後找到這篇

[Intersection Observer: padding changes 'boundaries' of root element?](https://stackoverflow.com/questions/71283704/intersection-observer-padding-changes-boundaries-of-root-element)

做了些許測試後得出以下結論
當 IntersectionObserver 的 root 有 padding 時
- Chrome/Edge/Safari: 會以 content 作為觀察範圍
- Firefox: 會以 padding + content 作為觀察範圍

<img class="bg-white p-2" src="https://i.imgur.com/C7b6aLM.png" />


## CodePen Example
https://codepen.io/clipwww/pen/Poexxar

root box (h: 300px, padding: 100px)

### Chrome: 以 content 作為觀察範圍
完全進入 content 才會變綠色

<div class="flex items-center">
<img class="w-1/2" src="https://i.imgur.com/NlCTsVv.png" />
<img class="w-1/2" src="https://i.imgur.com/L487l7i.png" />
</div>

### Firefox: 以 padding + content 作為觀察範圍
還沒完全進入 content ，但已經完全進入 padding 範圍，就變綠色了
![](https://i.imgur.com/FJ7Z8se.png)


## 解法

- root element 不要有 padding 避免不同瀏覽器行為不一致
- 用 `rootMargin` 去調整觀察範圍，需要縮小時就用**負數**