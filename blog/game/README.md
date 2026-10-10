---
aside: false
outline: false
pageClass: game-page
---

# 🎮 遊戲

紀錄買了些什麼遊戲
收藏遊戲的遊戲😆

<div class="game-shelf">
  <section v-for="item in items" :key="item.name" class="game-shelf__column">
    <div class="game-shelf__heading">
      <img class="game-shelf__logo-img" :class="`game-shelf__logo-img--${item.id}`" :src="$withBase(item.logoSrc)" :alt="item.logoAlt" />
      <div class="game-shelf__title-wrap">
        <h3 class="game-shelf__title">{{ item.name }}</h3>
        <span class="game-shelf__count">{{ item.games.length }} 款</span>
      </div>
    </div>
    <ul class="game-shelf__games">
      <li v-for="game in item.games" :key="game.name" class="game-shelf__game">{{ game.name }}</li>
    </ul>
  </section>
</div>


<script>
export default {
  data() {
    return {
      items: [
        {
          id: 'switch',
          name: 'Nintendo Switch',
          logoAlt: 'Nintendo Switch logo',
          logoSrc: '/logos/nintendo-switch.svg',
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
            { name: '超級瑪利歐兄弟：驚奇' },
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
            { name: '寶可夢傳說 Z-A & DLC' },
            { name: '集合啦！動物森友會' },
            { name: '十三機兵防衛圈' },
            { name: '異度神劍 3 & DLC' },
            { name: '最後指令 Last Command' },
            { name: 'LEGO® Star Wars™ : 天行者傳奇' },
            { name: '魔物獵人崛起 & DLC 破曉' },
            { name: '賽馬娘 Pretty Derby 熱血喧鬧大感謝祭！ & DLC' }
          ]
        },
        {
          id: 'switch-2',
          name: 'Nintendo Switch 2',
          logoAlt: 'Nintendo Switch 2 logo',
          logoSrc: '/logos/nintendo-switch-2.svg',
          games: [
            { name: '瑪利歐賽車世界' },
            { name: 'Nintendo Switch 2秘密展' },
            { name: '薩爾達傳說：王國之淚 NS2 Edition 升級通行證' },
            { name: '咚奇剛 蕉力全開 & DLC' },
            { name: '寶可夢傳說 Z-A NS2 Edition 升級通行證' },
            { name: '薩爾達無雙：封印戰記' },
            { name: '星際火狐 StarFox' },
            { name: '斯普拉遁：塗擊隊' },
          ]
        },
        {
          id: 'ps5',
          name: 'PlayStation®5 PRO',
          logoAlt: 'PlayStation 5 logo',
          logoSrc: '/logos/playstation5.svg',
          games: [
            { name: '空戰奇兵 7：未知天際' },
            { name: '空戰奇兵 8：希孚之翼'},
            { name: '數碼寶貝 Next Order' },
            { name: 'Grand Theft Auto V' },
            { name: '魔物獵人 荒野' },
            { name: '最後生還者 第I章' },
            { name: '非常普通的鹿 DEEEER Simulator'},
            { name: 'Viewfinder' }
          ]
        },
        {
          id: 'steam',
          name: 'Steam',
          logoAlt: 'Steam logo',
          logoSrc: '/logos/steam.svg',
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
            { name: '幻獸帕魯' }
          ]
        }
      ],
    }
  }  
}
</script>

<style scoped>
.game-shelf {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(18rem, 22rem);
  gap: 1rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  padding: 0.5rem 0.15rem 0.9rem;
}

.game-shelf::-webkit-scrollbar {
  height: 10px;
}

.game-shelf::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-brand-1) 65%, transparent);
}

.game-shelf__column {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 32rem;
  max-height: min(72vh, 38rem);
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 18%, var(--vp-c-divider));
  border-radius: 22px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--vp-c-bg-soft) 94%, white 6%), var(--vp-c-bg));
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);
  scroll-snap-align: start;
}

.game-shelf__heading {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1rem 0.85rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.game-shelf__logo-img {
  display: block;
  width: 3.1rem;
  height: 3.1rem;
  padding: 0.35rem;
  border-radius: 8px;
  background: #fff;
  object-fit: contain;
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.08);
}

.game-shelf__logo-img--switch,
.game-shelf__logo-img--switch-2 {
  width: 3.4rem;
  height: 3.4rem;
}

.game-shelf__logo-img--ps5 {
  width: 3.5rem;
  height: 3.5rem;
}

.game-shelf__logo-img--steam {
  width: 3rem;
  height: 3rem;
}

.game-shelf__title-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.game-shelf__title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.15rem;
}

.game-shelf__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 3.25rem;
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-brand-1) 14%, var(--vp-c-bg-soft));
  color: var(--vp-c-brand-1);
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
}

.game-shelf__games {
  margin: 0;
  padding: 0.4rem 0;
  list-style: none;
  overflow-y: auto;
  overscroll-behavior-y: contain;
}

.game-shelf__games::-webkit-scrollbar {
  width: 8px;
}

.game-shelf__games::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-text-3) 70%, transparent);
}

.game-shelf__game {
  padding: 0.8rem 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.game-shelf__game + .game-shelf__game {
  border-top: 1px dashed var(--vp-c-divider);
}

@media (max-width: 640px) {
  .game-shelf {
    grid-auto-columns: minmax(82vw, 88vw);
  }

  .game-shelf__column {
    min-height: 28rem;
    max-height: min(66vh, 32rem);
  }
}
</style>