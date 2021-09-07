---
title: position:sticky; 
summary: 工作上用到「黏性定位」，紀錄一下
date: 2021-09-07
tags: 
  - CSS
author: 我
location: 台北, 台灣
---

## Sticky 黏性定位

```css
position: sticky;
```
MDN上寫 `sticky` 可以被視為 `relative` 跟 `fixed` 的混合
sticky element 不會影響原本的排版，就像是 relative
會以相對位置黏 (固定) 在最近的可滾動祖先上，這時像是 fixed
可移動的範圍為 sticky element 的父層

[MDN的範例(有微調整)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#sticky_positioning)
<StickyDemo />

```html
<div class="sticky-demo">
  <dl>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
    <footer>A Footer</footer>
  </dl>
  ...
</div>
```

```css
.sticky-demo {
  height: 200px;
  overflow-y: auto;
  ...
}

dt {
  position: sticky;
  top: 0;
  ...
}

footer {
  position: sticky;
  bottom: 0;
  ...
}
```

`<dt>` 與 `<footer>` 為 sticky element
`<dl>` 為 sticky element 的父層
`.sticky-demo` 有 height、overflow 為可滾動的祖先

可以看到當 scorllbar 到達 `<dt>` 的頂部時，`<dt>` 會黏在頂部
滾動到可見到 `<dl>` 的範圍時， `<footer>` 都會黏在底部
且到達 `<dl>` 的底部後便停下不再繼續黏住

---

### 為什麼在 Safari 上沒有用？
sticky element 必須要是 `display: block` 才會有效
[Safari position:sticky not working in an overflow:auto element](https://stackoverflow.com/questions/51792783/safari-positionsticky-not-working-in-an-overflowauto-element)

### 為什麼設定了 `position: sticky;` 還是沒有用？
垂直滾動 ( y軸 ): 必須要設定 `top`、`bottom` 才會使黏性定位生效
水平滾動 ( x軸 ): 必須要設定 `left`、`right` 才會使黏性定位生效

### 可滾動祖先有 `padding` 
sticky element 是會黏在祖先的 `Content` 上
[from wiki](https://en.wikipedia.org/wiki/CSS_box_model)
![W3C Box Model](@/images/w3c-box-model.png)

如果可滾動的祖先有 `padding-top: 30px;` 又想要黏在頂部就得設定 `top: -30px;`

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="yLXVqmK" data-user="clipwww" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/clipwww/pen/yLXVqmK">
  position: sticky;</a> by Jian, Er-Ting (<a href="https://codepen.io/clipwww">@clipwww</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

或是 [Position sticky with parent padding-top](https://stackoverflow.com/questions/51149440/position-sticky-with-parent-padding-top)

### Can I Use

[Can I Use: CSS Sticky](https://caniuse.com/css-sticky)
<img src="https://i.imgur.com/hlId0Nm.png" data-action="zoom" alt="Can I Use" />
