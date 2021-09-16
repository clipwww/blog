<template>
  <div id="vuepress-theme-blog__post-layout">
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta
          :tags="$frontmatter.tags"
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
          :viewCount="viewCount"
        />
      </header>

      <Content itemprop="articleBody" />

      <div class="text-center text-xs text-gray-600 dark:text-gray-300 my-6">
        <social-share />
        <div>
          <span class="font-bold mr-1">Last Updated:</span>
          <span>{{ $page.lastUpdated }}</span>
        </div>
      </div>
      <footer>
        <Newsletter v-if="$service.email.enabled" />
        <hr />
        <Utterances :theme="theme" :key="theme" />
      </footer>
    </article>
    <Toc />
  </div>
</template>

<script>
import axios from "axios";

import Toc from "@theme/components/Toc.vue";
import PostMeta from "@theme/components/PostMeta.vue";
import Utterances from "@theme/components/Utterances.vue";
// import { Comment } from "@vuepress/plugin-blog/lib/client/components";

import { useThemeLocalStorage } from '../components/util';


export default {
  components: {
    Toc,
    PostMeta,
    Utterances,
    // Comment,
    Newsletter: () => import("@theme/components/Newsletter.vue"),
  },
  data() {
    return {
      viewCount: 0,
      theme: "",
    };
  },
  computed: {
    pageKey() {
      return this.$page.key;
    },
    apiUrl() {
      return `https://mechakucha-api.herokuapp.com/blog/post/${this.pageKey}/view-count`;
    },
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.addCodeBtn();
      });
    },
  },
  mounted() {
    this.onThemeChanged();
    
    this.addCodeBtn();

    const view = localStorage.getItem(this.pageKey);
    if (view) {
      this.getViewCount();
    } else {
      this.addViewCount();
    }

    window.addEventListener("theme-changed", this.onThemeChanged);
  },
  beforeDestroy() {
    window.removeEventListener("theme-changed", this.onThemeChanged);
  },
  methods: {
    addCodeBtn() {
      // full screen the code blocks
      const codeBlocks = document.querySelectorAll("div[class*='language-']");
      const htmlDom = document.querySelector("html");
      for (let block of codeBlocks) {
        if (this.checkBtn(block)) continue;

        let btn = document.createElement("div");
        btn.classList.add("code-button");

        // click to full screen the code block
        btn.onclick = function () {
          if (block.classList.contains("code-block-fullscreen")) {
            block.classList.remove("code-block-fullscreen");
            htmlDom.classList.remove("screen-fixed");
          } else {
            block.classList.add("code-block-fullscreen");
            htmlDom.classList.add("screen-fixed");
          }
        };

        block.appendChild(btn);
      }
    },
    checkBtn(block) {
      return Object.values(block.children).find((value) => {
        if (value.classList.contains("code-button")) return true;
        return false;
      });
    },
    async getViewCount() {
      try {
        const { data: ret } = await axios.get(this.apiUrl);
        if (!ret.success) {
          return;
        }

        this.viewCount = ret.item.viewCount;
      } catch (err) {
        console.log(err);
      }
    },
    async addViewCount() {
      try {
        const { data: ret } = await axios.post(this.apiUrl);
        if (!ret.success) {
          return;
        }

        this.viewCount = ret.item.viewCount;
        localStorage.setItem(this.pageKey, new Date());
      } catch (err) {
        console.log(err);
      }
    },
    onThemeChanged(e) {
      const themeLocalStorage = useThemeLocalStorage();
      const isDark = themeLocalStorage.get();
      this.theme = isDark ? "github-dark" : "github-light";
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.vuepress-blog-theme-content {
  @extend $wrapper;
  font-size: 16px;
  letter-spacing: 0px;
  color: var(--c-text);
  position: relative;

  @media (min-width: $MQNarrow) {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07);
  }

  .post-title {
    padding-top: 0;
  }
}

@media (max-width: $MQMobile) {
  .vuepress-blog-theme-content {
    padding-top: 0;
  }

  .post-title {
    margin-top: 0;
  }
}
</style>
