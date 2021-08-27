---
title: 賽馬娘 獅子杯
summary: 阿肥務實，阿肥有料
date: 2021-08-27
tags:
  - 雜記
  - 遊戲
  - ウマ娘
---

## 場地

<div class="font-bold text-xl">阪神 芝 2200m (中距離) 右・內 夏 ☀️ 良</div>

![レオ杯 レースデータ](https://i.imgur.com/nHtRWwj.png)
source: [GameWith](https://gamewith.jp/uma-musume/article/show/289441)

## 隊伍

<div class="flex w-full my-2">
  <img class="w-1/3" src="https://imgur.com/5Up9Fgk.png" alt="肥" />
  <img class="w-1/3" src="https://imgur.com/7OAlzvi.png" alt="草" />
  <img class="w-1/3" src="https://imgur.com/FYpcVIk.png" alt="內洽"/>
</div>

## 預賽

<table class="w-full table-auto text-right">
  <thead>
    <tr>
      <th></th>
      <th>1着</th>
      <th>2着</th>
      <th>3着</th>
      <th>圈外</th>
      <th>勝率</th>
      <th>連對率</th>
      <th>複勝率</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="record in records" :key="record.name">
      <td class="whitespace-nowrap">{{ record.name }}</td>
      <td>{{ record.first }}</td>
      <td>{{ record.second }}</td>
      <td>{{ record.third }}</td>
      <td>{{ record.out }}</td>
      <td>{{ (record.first / sum * 100).toFixed(2) }}%</td>
      <td>{{ ((record.first + record.second) / sum * 100).toFixed(2) }}%</td>
      <td>{{ ((record.first + record.second + record.third) / sum * 100).toFixed(2) }}%</td>
    </tr>
  </tbody>
</table>

帶咒術馬最想看到的就是[像這樣](https://i.imgur.com/RxMsJfs.mp4)讓人耐切散步🤣

## 決賽

<script>
export default {
  data() {
    return {
      records: [
        {
          name: 'スペシャルウィーク',
          first: 46,
          second: 16,
          third: 7,
          out: 11
        },
        {
          name: 'グラスワンダー',
          first: 14,
          second: 18,
          third: 10,
          out: 38
        },
        {
          name: 'ナイスネイチャ',
          first: 0,
          second: 0,
          third: 1,
          out: 79
        }
      ]
    };
  },
  computed: {
    sum() {
      const { first, second, third, out  } = this.records[0];
      return first + second + third + out
    }
  }
}
</script>