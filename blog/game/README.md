
# 遊戲

紀錄買了些什麼遊戲
收藏遊戲的遊戲😆

<div class="flex flex-wrap gap-4">
  <div v-for="item in items" :key="item.name">
    <h3 class="border-solid border-0 border-b px-3">{{ item.name }}</h3>
    <ul>
      <li v-for="game in item.games" :key="game.name">{{ game.name }}</li>
    </ul>
  </div>
</div>


<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Nintendo Switch',
          games: [
            { name: '薩爾達傳說：曠野之息 & DLC' },
            { name: '薩爾達傳說：織夢島' },
            { name: '薩爾達無雙：災厄啟示錄 & DLC' },
            { name: '薩爾達傳說：禦天之劍 HD' },
            { name: '薩爾達傳說：王國之淚' },
            { name: '薩爾達傳說：智慧的再現' },
            { name: '超級瑪利歐：奧德賽' },
            { name: '瑪利歐賽車 8 DX豪華版' },
            { name: '超級瑪利歐：3D收藏輯' },
            { name: '路易吉鬼屋 3' },
            { name: 'Splatoon 2 & DLC' },
            { name: '斯普拉頓 3 ( Splatoon 3 ) & DLC' },
            { name: '任天堂明星大亂鬥 特別版 & DLC' },
            { name: '天穗之咲稻姬' },
            { name: '少女與戰車：戰車夢幻大會戰 DX' },
            { name: '健身環大冒險' },
            { name: '健身拳擊' },
            { name: 'Fortnite' },
            { name: 'LABO Toy-Con 04: VR Kit' },
            { name: '越南大戰 X' },
            { name: '寶可夢：劍 & DLC' },
            { name: '寶可夢：晶燦鑽石' },
            { name: '寶可夢傳說：阿爾宙斯' },
            { name: '寶可夢：紫 & DLC' },
            { name: '集合啦！動物森友會' },
            { name: '十三機兵防衛圈' },
            { name: '異度神劍 3 & DLC' },
            { name: '最後指令 Last Command' },
            { name: 'LEGO® Star Wars™ : 天行者傳奇' },
            { name: '魔物獵人崛起 & DLC 破曉' },
            { name: '賽馬娘 Pretty Derby 熱血喧鬧大感謝祭！' }
          ]
        },
        {
          name: 'PlayStation®5 PRO',
          games: [
            { name: '空戰奇兵 7：未知天際' },
            { name: 'Grand Theft Auto V' },
            { name: '魔物獵人 荒野' },
          ]
        },
        {
          name: 'Steam',
          games: [
            { name: 'Half-Life' },
            { name: 'Half-Life 2' },
            { name: 'Half-Life 2：Ep1' },
            { name: 'Half-Life 2：Ep2' },
            { name: 'PORTAL' },
            { name: 'PORTAL 2' },
            { name: 'Untitled Goose Game' },
            { name: '還願' },
            { name: '地球防衛軍 5' },
            { name: '空戰奇兵 7：未知天際' },
            { name: '最後指令 Last Command' },
            { name: '星際大戰 絕地：組織殞落' },
            { name: '幻獸帕魯' },
          ]
        }
      ],
    }
  }  
}
</script>