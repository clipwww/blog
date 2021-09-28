# ウマ娘 プリティーダービー

手游賽馬娘的一些雜記

[[toc]]

## チャンピオンズミーティング

<div>
  <div v-for="post in championsMettingPosts"
    class="my-4 flex items-center border-0 border-dashed border-b pb-4 border-gray-300 dark:border-gray-500" 
    :key="post.key">
    <img class="w-10 mr-4" :src="post.frontmatter.icon" :alt="post.title" />
    <div>
      <div class="text-sm text-gray-400">{{ resolvePostDate(post.frontmatter.date) }}</div>
      <NavLink
        class="block no-underline my-1 text-lg"
        :link="post.path">
        {{ post.title }}
        </NavLink>
      <div class="text-xs">{{ post.frontmatter.summary }}</div>
    </div>
  </div>
</div>

## ガチャ

<div class="pl-1">
  <div v-for="post in gachaPosts" class="my-4 border-0 border-dashed border-b pb-4 border-gray-300 dark:border-gray-500" :key="post.key">
    <div class="text-xs text-gray-400">{{ resolvePostDate(post.frontmatter.date) }}</div>
    <NavLink
      class="block no-underline my-1"
      :link="post.path">
      {{ post.title }}
      </NavLink>
    <div class="text-xs">{{ post.frontmatter.summary }}</div>
  </div>
</div>

## 攻略
- [技能解包](https://docs.google.com/spreadsheets/u/0/d/1Escw73cLZCUFiVvFvYEDfhViQpw-emBoYu5T9c--1f4/htmlview)


<div class="mt-20">
  <Comment />
</div>

<script>
import dayjs from 'dayjs';

import Comment from "@theme/components/Comment.vue";

export default {
  components: {
    Comment
  },
  computed: {
    championsMettingPosts() {
      return this.$site.pages.filter(page => page.path.includes('umamusume/champions-meeting/')).sort(this.handlePostSort);
    },
    gachaPosts() {
      return this.$site.pages.filter(page => page.path.includes('umamusume/gacha/')).sort(this.handlePostSort);
    },
  },
  methods: {
    resolvePostDate(date) {
      return dayjs(date)
        .format(this.$themeConfig.dateFormat || 'ddd MMM DD YYYY')
    },
    handlePostSort(a, b) {
      return  dayjs(a.frontmatter.date).isBefore(b.frontmatter.date) ? 1 : -1
    }
  }
}
</script>