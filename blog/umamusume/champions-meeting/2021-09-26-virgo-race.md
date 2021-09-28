---
layout: Post
title: ヴァルゴ杯
summary: 愛麗數碼，我的超人
date: 2021-09-26
icon: https://i.imgur.com/xRtLXBK.png
---


## 場地

<div class="font-bold text-xl">阪神 芝 1600m (マイル) 右・外 秋 ☀️ 良</div>

![ヴァルゴ杯 レースデータ](https://i.imgur.com/E7zZs6J.png)
source: [GameWith](https://gamewith.jp/uma-musume/article/show/293090)

## 隊伍

<div class="flex w-full my-2">
  <img class="w-1/5" src="https://imgur.com/BJUKEas.png" alt="" data-action="zoom" />
  <img class="w-1/5" src="https://imgur.com/TJplADx.png" alt="" data-action="zoom" />
  <img class="w-1/5" src="https://imgur.com/posFrYy.png" alt="" data-action="zoom" />
  <img class="w-1/5" src="https://imgur.com/1HY3xCn.png" alt="" data-action="zoom" />
  <img class="w-1/5" src="https://imgur.com/hbOLmPe.png" alt="" data-action="zoom" />
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

這次場地先行馬沒有個安定的加速技
能獲得安定勝率的馬（青雲、泳裝丸善）我又沒有
只能出個地固逃進王來蓋其他逃馬 + 差追來賭勝利
凹地固馬太苦了，凹出一隻有滿速的我就不想再凹了

預賽勝率慘不忍睹，第一次嚐到5場全敗（還不只一次
還好 Round1、Round2 各有一次人品爆發湊出3勝晉級A決

## A組決賽

<div class="flex w-full my-2">
  <img class="w-1/3" src="https://imgur.com/nYDjPpW.png" alt="A決" data-action="zoom" />
  <img class="w-1/3" src="https://imgur.com/0Nv0OMS.png" alt="" data-action="zoom" />
  <img class="w-1/3" src="https://imgur.com/Z0cXo0q.png" alt="" data-action="zoom" />
</div>

決賽運氣極佳，配對到2隻沒有地固的泳裝丸善
進王輕鬆蓋，連固有都不需要開就壓制住了
愛麗數碼中盤後段就保持在6位，一進終盤就開666
豪腳+固有接力，幸運的沒撞牆就輕鬆衝到第一了（不過乘換鴿了

<div class="aspect-w-16 aspect-h-9">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/x9tt-IK0czU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="text-center mt-10">

[回上一頁](../README.md)

</div>


<script>
export default {
  data() {
    return {
      records: [
        {
          name: 'アグネスデジタル',
          first: 12,
          second: 7,
          third: 12,
          out: 49
        },
        {
          name: 'サクラバクシンオー (S)',
          first: 9,
          second: 7,
          third: 7,
          out: 17
        },
        {
          name: 'サクラバクシンオー (A+)',
          first: 0,
          second: 5,
          third: 3,
          out: 2
        },
        {
          name: 'ウオッカ',
          first: 7,
          second: 7,
          third: 9,
          out: 27
        },
        {
          name: 'ヒシアマゾン',
          first: 6,
          second: 7,
          third: 7,
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