---
title: Intersection Observer 筆記
summary: Intersection Observer API 可觀察目標元素 (target) 與其根層 (root) 或瀏覽器 (viewport) 的交互狀態，當目標元素進入設定的條件時就呼叫 callback
date: 2021-09-23
tags: 
  - JavaScript
author: 我
location: 台北, 台灣
---

## Intersection Observer API
觀察目標元素 (target) 與其根層 (root) 或瀏覽器 (viewport) 的交互狀態，當目標元素進入設定的條件時就呼叫 callback

可以取代監聽 Scroll 事件的方式來實作：
- Lazy Loading 圖片，當圖片出現在可視範圍時才開始載入
- Infinite Scroll 無限加載內容，當滾動到頁面底端，或者指定的底部區塊出現時自動載入更多內容
- Scroll Spy 滾動監控，滾動到對應的區塊時才加上 active 的樣式
- 當元素出現在可視範圍時才展示的動畫

## 使用
### 建立一個 observer 觀察者
```js
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const observer = new IntersectionObserver(callback, options);
```

#### Options

- `root`
Element | 欲觀察的根層，default 為 null，也就是 window 層的 viewport

- `rootMargin`
根層的範圍偏移量，default 為 "0px 0px 0px 0px"，寫法跟 css 的 margin 一樣

- `threshold`
目標進入/離開觀察範圍多少比例時觸發 callback，default 為 [0]，也就是當目標一進入/離開觀察範圍就會觸發
可以設定單一值，在到達該比例時觸發 ( 範圍: 0 ~ 1 )
或是設定 Array ex. [0, 0.25, 0.5, 1] 每達到一次設定的值就觸發一次

#### Callback
callback 能接收到兩個參數
```js
function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ...
    } else {
      ...
    }
  })
}
```

- entries
因為可以同時觀察多個目標，所以會是一個 IntersectionObserverEntry 的 Array
  - boundingClientRect: DOMRectReadOnly
  - rootBounds: DOMRectReadOnly
  - intersectionRect: DOMRectReadOnly
  - intersectionRatio: 觸發的比例值
  - time: 觸發的時間戳
  - `target`: 觸發的目標元素
  - `isIntersecting`: 目標是否進入 (true) 或 離開 (false) 根層

### 觀察目標元素
```js
// 開始觀察
observer.observe(document.querySelector('.js-target'))
```

### 其他
```js
// 停止觀察
observer.disconnect()

// 停止觀察特定目標
observer.unobserve(document.querySelector('.js-target'))
```

## 範例
### Lazy Loading 圖片

<div>isIntersecting: {{ imageIsIntersecting }}</div>
<img class="block w-32 h-32 bg-gray-400 js-lazyload" data-src="https://picsum.photos/128" />

```html
<img class="... js-lazyload" data-src="https://picsum.photos/128" />
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src')
      observer.unobserve(img)
    }
  })
},{ threshold: 1 });

document.querySelectorAll('.js-lazyload').forEach(el => {
  observer.observe(el)
});
```

### Infinite Scroll 無限加載內容

<div>內容數量 {{ numList.length }}</div>
<div id="js-loadmore-wrap" class="relative my-2 border-solid border h-64 overflow-y-auto overscroll-y-contain">
  <div class="border-solid border-t-0 border-l-0 border-r-0 border-b px-4 py-2" v-for="(num, index) in numList" :key="index">{{ index + 1 }}</div>
  <div id="js-loadmore" class="text-center py-2">{{ isLoading ? '載入中...' : isMax ? '沒有更多了' : '・・・' }}</div>
</div>

```vue
<template>
  <div id="js-loadmore-wrap" class="... overflow-y-auto overscroll-y-contain">
    <div class="..." v-for="(num, index) in numList" :key="index">{{ index + 1 }}</div>
    <div id="js-loadmore" class="text-center py-2">
      {{ isLoading ? '載入中...' : isMax ? '沒有更多了' : '・・・' }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      numList: Array(20).fill('R')
    }
  },
  computed: {
    isMax() {
      return this.numList.length >= 200;
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadMore();
        }
      })
    },{ 
      root: document.querySelector('#js-loadmore-wrap'),
      threshold: 0.3 
    });

    observer.observe(document.querySelector('#js-loadmore'))
  },
  methods: {
    loadMore() {
      if (this.isMax) return;

      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.numList.push(...Array(20).fill('R'))
      }, 1500)
    }
  }
}
</script>
```

### Scroll Spy 滾動監控
<div>Active Number: {{ activeNum }}</div>
<div id="js-scrollspy-wrap" class="relative my-2 border-solid border flex h-72 overflow-y-auto overscroll-y-contain">
  <div class="sticky top-0 w-1/2">
    <div v-for="j in 5" :key="j" class="block px-4 py-1 text-lg" :class="{ 'text-red-400 text-3xl': activeNum === j }">{{ j }}</div>
  </div>
  <div class="w-1/2">
    <div :id="`js-${n}`" :data-num="n" class="h-72 text-center flex items-center justify-center font-bold text-5xl text-black" :class="`bg-green-${n}00`" v-for="n in 5" :key="n">
      {{ n }}
    </div>
  </div>
</div>

```vue
<template>
  <div id="js-scrollspy-wrap" class="relative ... overflow-y-auto overscroll-y-contain">
    <div class="sticky top-0 w-1/2">
      <div v-for="j in 5" 
        :key="j" class="..." 
        :class="{ 'text-red-400 text-3xl': activeNum === j }">
        {{ j }}
      </div>
    </div>
    <div class="w-1/2">
      <div :id="`js-${n}`" 
        :data-num="n" 
        class="..." 
        :class="`bg-green-${n}00`" 
        v-for="n in 5" 
        :key="n">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNum: 1,
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const num = entry.target.getAttribute('data-num')
          this.activeNum = +num;
        }
      })
    },{ 
      root: document.querySelector('#js-scrollspy-wrap'),
      threshold: 0.4
    });

    Array(5).fill('').forEach((_, i) => {
      observer.observe(document.querySelector(`#js-${i + 1}`))
    })
  },
}
</script>
```


<script>
export default {
  data() {
    return {
      activeNum: 1,
      imageIsIntersecting: false,
      isLoading: false,
      numList: Array(20).fill('R')
    }
  },
  computed: {
    isMax() {
      return this.numList.length >= 200;
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src')
          this.imageIsIntersecting = true;
          observer.unobserve(img)
        }
      })
    },{ threshold: 1 });

    document.querySelectorAll('.js-lazyload').forEach(el => {
      observer.observe(el)
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadMore();
        }
      })
    },{ 
      root: document.querySelector('#js-loadmore-wrap'),
      threshold: 0.3 
    });

    observer2.observe(document.querySelector('#js-loadmore'))

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const num = entry.target.getAttribute('data-num')
          this.activeNum = +num;
        }
      })
    },{ 
      root: document.querySelector('#js-scrollspy-wrap'),
      threshold: 0.4
    });

    Array(5).fill('').forEach((_, i) => {
      observer3.observe(document.querySelector(`#js-${i + 1}`))
    })
  },
  methods: {
    loadMore() {
      if (this.isMax) return;
      
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.numList.push(...Array(20).fill('R'))
      }, 1500)
    }
  }
}
</script>

<style lang="postcss" scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 7px;
  background-color: #fff;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  @apply bg-green-400;
  border-radius: 3px;
}

</style>