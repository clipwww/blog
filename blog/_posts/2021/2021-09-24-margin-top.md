---
title: 外間距折疊 (Collapsing margins) 筆記
summary: 有時候會發生 margin-top 失效，以為遇到什麼 bug
date: 2021-09-24
tags: 
  - CSS
---

## Collapsing margins

兩個相鄰元素之間的垂直間距 (vertical margins) 會折疊(合併)取最大的值
水平之間的間距 (horizontal margins) 並不會折疊
只會發生在`區塊 (block)`元素之間
設定 `float`、`absolute` 時也不會發生折疊

### 兄弟相鄰

---

<div>
  <div class="bg-red-400 px-2 py-1 mb-4 text-white">margin-bottom: 16px</div>
  <div class="bg-green-600 px-2 mt-2 py-1 text-white">margin-top: 8px</div>
</div>

紅色跟綠色區塊之間的間距折疊取最大值 16px

### 父與第一/最後的子

---

<div>
  <div class="bg-gray-400 px-2 py-1 text-white">block</div>
  <div class="bg-yellow-200 text-black text-xl my-2 px-2">
    <div class="mt-4 px-2 py-1 bg-green-500 p-4 text-xl text-white">margin-top: 16px</div>
    父: margin-top: 8px; margin-bottom: 8px;
    <div class="mb-4 px-2 py-1 bg-blue-500 p-4 text-xl text-white">margin-bottom: 16px</div>
  </div>
  <div class="bg-gray-400 px-2 py-1 text-white mb-2">block</div>
</div>


第一/最後的子元素跟父元素貼在一起，之間沒有 `content、padding-top、padding-bottom、border-top、border-bottom` 所以子元素的外間距就跟父元素折疊取最大值 16px


### 空區塊元素

---

<div>
  <div class="bg-gray-400 px-2 py-1 text-white">block</div>
  <div class="mt-4 mb-6"></div>
  <div class="bg-gray-400 px-2 py-1 text-white">block</div>
</div>

兩個灰色區塊之間有一個空區塊元素 margin-top: 16px; margin-bottom: 24px;
與上下的間距不會加起來，而是折疊取最大值 24px

```html
<div class="bg-gray-400 px-2 py-1 text-white">block</div>
<div class="mt-4 mb-6"></div>
<div class="bg-gray-400 px-2 py-1 text-white">block</div>
```

## 父子外間距折疊避免方式

### inline-block
<div class="mt-2">
  <div class="bg-gray-400 px-2 py-1 text-white">block</div>
  <div class="bg-yellow-200 text-black text-xl my-2 px-2 inline-block">
    <div class="mt-4 px-2 py-1 bg-green-500 p-4 text-xl text-white">margin-top: 16px</div>
    父: <span class="text-red-400 font-bold">display: inline-block;</span> margin-top: 8px; margin-bottom: 8px;
    <div class="mb-4 px-2 py-1 bg-blue-500 p-4 text-xl text-white">margin-bottom: 16px</div>
  </div>
  <div class="bg-gray-400 px-2 py-1 text-white mb-2">block</div>
</div>

### padding-top、padding-bottom
<div class="mt-2">
  <div class="bg-gray-400 px-2 py-1 text-white">block</div>
  <div class="bg-yellow-200 text-black text-xl my-2 px-4 py-4">
    <div class="mt-4 px-2 py-1 bg-green-500 p-4 text-xl text-white">margin-top: 16px</div>
    父: <span class="text-red-400 font-bold">padding-top: 16px; padding-bottom: 16px;</span> margin-top: 8px; margin-bottom: 8px;
    <div class="mb-4 px-2 py-1 bg-blue-500 p-4 text-xl text-white">margin-bottom: 16px</div>
  </div>
  <div class="bg-gray-400 px-2 py-1 text-white mb-2">block</div>
</div>

### border-top、border-bottom
<div class="mt-2">
  <div class="bg-gray-400 px-2 py-1 text-white">block</div>
  <div class="bg-yellow-200 text-black text-xl my-2 px-4 border-solid border-l-0 border-r-0 border-red-500">
    <div class="mt-4 px-2 py-1 bg-green-500 p-4 text-xl text-white">margin-top: 16px</div>
    父: <span class="text-red-400 font-bold">border-top: 1px solid #ef4444; border-bottom: 1px solid #ef4444;</span> margin-top: 8px; margin-bottom: 8px;
    <div class="mb-4 px-2 py-1 bg-blue-500 p-4 text-xl text-white">margin-bottom: 16px</div>
  </div>
  <div class="bg-gray-400 px-2 py-1 text-white mb-2">block</div>
</div>

## 參考

- [8.3.1 Collapsing margins](https://www.w3.org/TR/CSS21/box.html#collapsing-margins)
- [Mastering margin collapsing - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [CSS 教學 – margin-top 失效！外間距會直接影響到上一層](http://www.flycan.com/article/css/css-margin-top-520.html)