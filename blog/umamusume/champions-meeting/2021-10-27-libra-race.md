---
layout: Post
title: ライブラ杯
summary: 黃金船，我的超人
date: 2021-10-27
icon: https://i.imgur.com/oB3lfsb.png
---


## 場地

<div class="font-bold text-xl">京都 芝 3000m (長距離) 右・外 秋 ☀️ 良</div>

![ヴァルゴ杯 ライブラ杯](https://i.imgur.com/Bx04dHH.png)
source: [GameWith](https://gamewith.jp/uma-musume/article/show/296624)

## 隊伍

<div class="flex w-full my-2">
  <img class="w-1/4" src="https://imgur.com/kquOApz.png" alt="" data-action="zoom" />
  <img class="w-1/4" src="https://imgur.com/nssrS08.png" alt="" data-action="zoom" />
  <img class="w-1/4" src="https://imgur.com/mzb29SS.png" alt="" data-action="zoom" />
  <img class="w-1/4" src="https://imgur.com/eg3KCsU.png" alt="" data-action="zoom" />
</div>

## 無限制組預賽

<UmamusumeRaceResult :records="records" />

唯一指定技能「直線一氣」
進終盤那一小段直線開出來直接起飛（沒撞牆的話

沒有強力逃馬，差馬沒有安定的加速技
也沒法練出高素質先行麥昆，因此決定上三追
R1 Day1 發現只有長S沒直線一氣的船很難贏
還好 R1 Day2 開跑前凹出一隻就換上來了

R1 Day1: `4-5-5-5`
R1 Day2: `4-5-4-4`
R2 Day1: `4-3-5-3`
R2 Day2: `2-1-3-3`

前三輪都很順利，只會輸給超強的追馬
R2 Day2 跟中邪一樣各種金回不發、撞牆
輸了幾場莫名其妙的先馬、差馬

比起上次大賽算是輕輕鬆鬆了

## A組決賽

<div class="flex w-full my-2">
  <img class="w-1/3" src="https://imgur.com/mgRc6nB.png" alt="A決" data-action="zoom" />
  <img class="w-1/3" src="https://imgur.com/JIW5MYW.png" alt="" data-action="zoom" />
</div>



<!-- <div class="aspect-w-16 aspect-h-9">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/x9tt-IK0czU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> -->

<div class="text-center mt-10">

[回上一頁](../README.md)

</div>


<script>
export default {
  data() {
    return {
      records: [
        {
          name: 'ナリタタイシン',
          first: 29,
          second: 15,
          third: 14,
          out: 22
        },
        {
          name: 'マンハッタンカフェ',
          first: 10,
          second: 28,
          third: 17,
          out: 25
        },
        {
          name: 'ゴールドシップ (一氣)',
          first: 21,
          second: 12,
          third: 10,
          out: 17
        },
        {
          name: 'ゴールドシップ',
          first: 0,
          second: 6,
          third: 1,
          out: 13
        },
      ]
    };
  },
}
</script>