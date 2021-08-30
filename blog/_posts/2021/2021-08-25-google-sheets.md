---
title: 用 Google 試算表當簡易資料庫
summary: 紀錄一下用 Google 試算表當成資料庫並且變成API來使用這件事
date: 2021-08-25
tags:
  - JavaScript
  - Google Sheets
  - JSON
author: 我
location: 台北, 台灣
---

想做個自己進電影院看電影的紀錄
需要的資料格式很簡單就不想搞DB、弄後台介面
因此拿 Google 試算表當成簡易資料庫
然後取得JSON格式的資料變成API來做應用

## Google Sheets as a JSON Endpoint

1. 檔案 > 發佈到網路
  要發布範圍跟類型就直接選`整份文件`、`網頁`就好了
  點發佈後就能夠獲得文件的公開連結
  <img class="w-64 my-2" src="https://i.imgur.com/Pm03es5.png"  data-action="zoom" />
  另外要點右上角的`共用`
  ![](https://i.imgur.com/E6yOfKa.png)
  調整為知道連結的使用者都可以查看

2. 透過文件的公開連結取得 Sheets 的 Key

    <span class="text-blue-500 dark:text-blue-200">ht<span>t</span>ps://docs.google.com/spreadsheets/d/e/<span class="text-red-400 text-xl">{ key }</span>/pubhtml</span>
  
  
3. 取得 JSON 格式資料
  然後將 key 替換到下面這個格式的網址
  index 則是代表工作表的順序，需要取得第一張工作表的資料就填入1即可
  
    <span class="text-blue-500 dark:text-blue-200">ht<span>t</span>ps://spreadsheets.google.com/feeds/list/<span class="text-red-400 text-xl">{ key }</span>/<span class="text-red-400 text-xl">{ index }</span>/public/values?alt=json</span>
    
      
    回傳的資料格式如下，長的比較特別，就要再另外自己整理了
    <img class="w-64 my-2" src="https://i.imgur.com/joA9hCP.png"  data-action="zoom" />

## Google Sheets API v4
前陣子發現我的電影紀錄偶爾會拿不到資料
甚至有一整天就直接掛掉
搜尋了一下找到[這篇](https://support.google.com/docs/thread/121088347/retrieving-data-from-sheets-results-in-404-error-50-of-the-time?hl=en&msgid=121557699)建議升級使用 v4

只需要將網址替換為下面這個格式
<span class="text-blue-500 dark:text-blue-200">ht<span>t</span>ps://sheets.googleapis.com/v4/spreadsheets/<span class="text-red-400 text-xl">{ key }</span>/values/<span class="text-red-400 text-xl">{ 工作表名稱與範圍 }</span>?key=<span class="text-red-400 text-xl">{ API Key }</span></span>

- key: 取得的方式與之前相同，也一樣需要將試算表設定為任何擁有連結的人都查看
- 工作表名稱與範圍: `工作表名稱`就真的是`名稱`，如果是中文最好用`encodeURIComponent`編碼過；如果想要加上指定範圍的話則像是: `工作表1!A:D` 這樣指定只取得 A ~ D 的資料
- API key: 就到 [console](https://console.cloud.google.com/apis/credentials) 去啟用 `Google Sheets API` 然後申請一組`API金鑰`
  <span class="text-xs">有要修改的話才需要OAuth用戶端ID，僅查看的話申請API金鑰即可</span>

回傳的格式如下，比起之前更簡單易用了
![](https://i.imgur.com/FmN9yzs.png)


#### 應用😎
- [我的看電影紀錄](https://clipwww.github.io/log/#/movie)