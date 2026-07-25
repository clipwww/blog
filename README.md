# Blog

想寫的時候才會寫

內容雜七雜八

## 開發

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## 遷移說明

已從 VuePress 1 遷移到 VitePress 1 + Vue 3。

### 保留與替代

| 舊功能 | 新做法 |
| --- | --- |
| `@vuepress/theme-blog` 文章列表 / tag 聚合 | 改為 VitePress 自訂 theme + `createContentLoader` |
| `@vuepress/search` | 改用 VitePress 內建 local search |
| `@kawarimidoll/vuepress-plugin-tailwind` | 改用 UnoCSS `presetWind3`，維持既有 utility class |
| `@vuepress/last-updated` | 改用 VitePress `lastUpdated`，來源為 git commit 時間 |
| `vuepress-plugin-medium-zoom` | 改用 `medium-zoom` 重新掛回文章圖片放大 |
| utterances 留言 | 保留，自訂 Vue 3 元件重新掛載 |

### 本次先捨棄

| 舊功能 | 原因 |
| --- | --- |
| `vuepress-plugin-minimal-analytics` | 舊 GA UA 設定已過時，先不直接搬 |
| `vuepress-plugin-reading-progress` | VitePress 無對等內建功能，本次先不補 |
| `@vuepress/plugin-nprogress` | VitePress 預設不提供等價進度列，本次先不補 |
| `vuepress-plugin-social-share` | 非啟動必要功能，本次先不補 |
| feed / sitemap | 不是本次啟動阻塞點，先保留待後續補回 |

### 最後更新日

文章頁的最後更新日改由 VitePress 直接讀 git commit 時間。這代表未修改的舊文章會維持原本的最後提交日期，不會因為這次遷移整批變成今天。