---
layout: Post
title: ウマ娘 チャンミ ヴァルゴ杯
summary: 愛麗數碼，我的超人
date: 2021-09-26
---

[[toc]]

## 場地

<div class="font-bold text-xl">阪神 芝 1600m (マイル) 右・外 秋 ☀️ 良</div>


## 隊伍

<div class="flex w-full my-2">
  <!-- <img class="w-1/3" src="https://imgur.com/5Up9Fgk.png" alt="" data-action="zoom" />
  <img class="w-1/3" src="https://imgur.com/7OAlzvi.png" alt="" data-action="zoom" />
  <img class="w-1/3" src="https://imgur.com/FYpcVIk.png" alt="" data-action="zoom" /> -->
</div>

## 無限制組預賽

<table class="w-full table-auto text-right">
  <thead>
    <tr>
      <th></th>
      <th class="whitespace-nowrap">1着</th>
      <th class="whitespace-nowrap">2着</th>
      <th class="whitespace-nowrap">3着</th>
      <th class="whitespace-nowrap">圈外</th>
      <th class="whitespace-nowrap">勝率</th>
      <th class="whitespace-nowrap">連對率</th>
      <th class="whitespace-nowrap">複勝率</th>
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


## A組決賽



<script>
export default {
  data() {
    return {
      records: [
        {
          name: 'アグネスデジタル',
          first: 0,
          second: 0,
          third: 0,
          out: 0
        },
        {
          name: 'サクラバクシンオー',
          first: 0,
          second: 0,
          third: 0,
          out: 0
        },
        {
          name: 'サクラバクシンオー',
          first: 0,
          second: 0,
          third: 0,
          out: 0
        },
        {
          name: 'ウオッカ',
          first: 0,
          second: 0,
          third: 0,
          out: 0
        },
        {
          name: 'ヒシアマゾン',
          first: 0,
          second: 0,
          third: 0,
          out: 0
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