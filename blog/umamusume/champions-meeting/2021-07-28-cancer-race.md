---
layout: Post
title: キャンサー杯
summary: 神鷹，我的超人
date: 2021-07-28
icon: https://i.imgur.com/5PRs0A3.png
---

<NavLink></NavLink>


## 場地

<div class="font-bold text-xl">東京 芝 1600m (マイル) 左 夏 ☀️ 稍重</div>

![キャンサー杯 レースデータ](https://i.imgur.com/e8bV54q.png)
source: [GameWith](https://gamewith.jp/uma-musume/article/show/287165)

## 隊伍

<div class="flex w-full my-2">
  <img class="w-1/3" src="https://imgur.com/QEWb4b9.png" alt="" data-action="zoom" />
  <img class="w-1/3" src="https://imgur.com/eVgkeLf.png" alt="" data-action="zoom" />
  <img class="w-1/3" src="https://imgur.com/qeqcsMw.png" alt="" data-action="zoom" />
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
      <th class="whitespace-nowrap">出場數</th>
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
      <td>{{ getSum(record) }}</td>
      <td>{{ (record.first / getSum(record) * 100).toFixed(2) }}%</td>
      <td>{{ ((record.first + record.second) / getSum(record) * 100).toFixed(2) }}%</td>
      <td>{{ ((record.first + record.second + record.third) / getSum(record) * 100).toFixed(2) }}%</td>
    </tr>
  </tbody>
</table>



## A組決賽

<img class="my-2 w-1/3" src="https://imgur.com/FModHeR.png" alt="A決" data-action="zoom" />

<img class="my-2 w-1/3" src="https://imgur.com/rtxiTqs.png" alt="" data-action="zoom" />

決賽沒配到超強青雲
神鷹成功搶到前2，進終盤直線輕鬆開固有逃爛

<div class="text-center mt-10">

[回上一頁](../README.md)

</div>

<script>
export default {
  data() {
    return {
      records: [
        {
          name: 'エルコンドルパサー',
          first: 30,
          second: 11,
          third: 4,
          out: 36
        },
        {
          name: 'グラスワンダー',
          first: 9,
          second: 9,
          third: 11,
          out: 51
        },
        {
          name: 'ナリタタイシン',
          first: 16,
          second: 11,
          third: 13,
          out: 40
        }
      ]
    };
  },
  methods: {
    getSum(record) {
      const { first, second, third, out  } = record;
      return first + second + third + out
    }
  }
}
</script>