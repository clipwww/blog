---
title: 用 utterances 簡單快速的幫 blog 加上留言功能
summary: utterance 是一個基於 Github issues 構建的輕量級評論小工具。
date: 2021-09-16
tags: 
  - JavaScript
  - Vue
  - VuePress
  - utterances
author: 我
location: 台北, 台灣
---

## 序
我原本留言功能是用 [Vssue](https://vssue.js.org/) 實現
後來在閱讀別人的文章時時發現了 [utterances](https://utteranc.es/)
同樣基於 Github issues 但有更多樣式可以選，而且可以對留言按 emoji（重要）

## 安裝

1. 因為是基於 Github issues，所以要用作留言使用的 repo 必需是`公開（public）`的

2. 安裝[utterances app](https://github.com/apps/utterances)設置允許訪問的 repo
<img src="https://i.imgur.com/qlizQ6R.png" class="w-64" data-action="zoom">

3. 在欲放置留言功能的地方引入 `client.js` 即可

```javascript
<script
  src="https://utteranc.es/client.js"
  type="text/javascript"
  async
  repo="{ repo }"
  label="{ label }"
  issue-term="{ issue-term }"
  theme="{ theme }"
  crossorigin="anonymous"
></script>
```

- `repo`: Github帳號/repo名稱  ex. clipwww/blog

- `label`: 就 Github issue 的 label (選填)

- `issue-term`: blog 文章跟 issue 之間的 Mapping
  - pathname: 建立時會以 blog 文章的 pathname 作為 issue標題
  - url: 建立時會以 blog 文章的 url 作為 issue標題
  - title: 建立時會以 blog 文章的標題作為 issue 標題
  - og:title: 建立時會以 blog 文章的 og:title 作為 issue 標題
  - 自行定義 Term: 建立時會以自定義的 Term 作為 issue 標題
    ```javascript
    <script
      src="https://utteranc.es/client.js"
      issue-term="YEE"
      ...
    ></script>
    ```
    ![issue term example](https://i.imgur.com/krV4Jc8.png)

- `issue-number`: 指定特定的 issue number
設定 issue-number 時不能設定 issue-term，不然沒有用
且無法自動創建 issue ，必需要指定已經存在的 issue number
ex: <span class="text-blue-400">h<span>t</span>tps://github.com/clipwww/blog/issues/<span class="text-xl text-red-400">{ Issue Number }</span>/</span>

- `theme`: 主題
github-light、github-dark...等
詳細可參考 utterances [官方文件](https://utteranc.es/)

## Vue Component
因為我是用 VuePress 的 @vuepress/theme-blog 建置 blog
那就要替換掉原本在 layouts > Post.vue 裡使用的 @vuepress/plugin-blog - Comment 組件

```vue
<template>
  <div>
    <script
      src="https://utteranc.es/client.js"
      type="text/javascript"
      async
      label="Utterances"
      issue-term="title"
      :theme="theme"
      repo="clipwww/blog"
      crossorigin="anonymous"
    ></script>
  </div>
</template>

<script>
export default {
  props: {
		theme: {
			type: String,
			default: 'github-dark'
		}
	}
};
</script>
```

```vue
 <Utterances :theme="theme" :key="theme" />
 ```

 這樣切換明亮/深色模式時就會重新 render 了
 

<img src="https://i.imgur.com/EBB9DzH.jpg" class="w-96 mt-10" /> 


## 參考
- [utterances 官方文件](https://utteranc.es/)
- [Vuepress 使用 utterances 评论系统](https://blog.saintic.com/blog/301.html)
- [手把手教你使用issue作为博客评论系统](https://segmentfault.com/a/1190000019517784)