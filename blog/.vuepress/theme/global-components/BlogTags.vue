<template>
  <div class="blog-tags">
    <h2>Tags</h2>
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />

    <div class="mt-10" v-for="year in arrayPostByYear" :key="year.id">
      <h2 class="m-0">{{ year.id }}</h2>
      <div class="pl-4">
        <div
          class="
            my-5
            border-dashed
            border-b
            border-t-0
            border-l-0
            border-r-0
            flex
            items-center
            border-gray-300
            pb-5
          "
          v-for="post in year.posts"
          :key="post.key"
        >
          <div class="flex flex-col items-center justify-center font-bold mr-4">
            <span class="text-xl">{{ formatMonth(post.frontmatter.date) }}</span>
            <span class="text-4xl">{{ formatDay(post.frontmatter.date) }}</span>
          </div>
          <div>
            <div class="text-xs text-gray-400">
              {{ resolvePostTags(post.frontmatter.tags).join(", ") }}
            </div>
            <NavLink
              class="block my-1 text-xl no-underline sm:text-2xl"
              :link="post.path"
              >{{ post.title }}</NavLink
            >
            <div class="text-xs my-1">{{ post.frontmatter.summary }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _groupBy from "lodash/groupBy";
import dayjs from "dayjs";

export default {
  props: ["tags"],
  computed: {
    allPosts() {
      return this.$site.pages.filter((page) => page.id === "post");
    },
    arrayPostByYear() {
      const group = _groupBy(this.allPosts, (post) => {
        return dayjs(post.frontmatter.date).year();
      });

      return Object.keys(group)
        .sort((a, b) => (+a > +b ? -1 : 1))
        .map((key) => {
          return {
            id: +key,
            posts: group[key].sort((a, b) =>
              dayjs(a.frontmatter.date).isBefore(b.frontmatter.date) ? 1 : -1
            ),
          };
        });
    },
  },
  methods: {
    formatMonth(date) {
      return dayjs(date).format("MMM");
    },
    formatDay(date) {
      return dayjs(date).format("DD");
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags;
      return [tags];
    },
  },
};
</script>

<style lang="stylus">
.blog-tags {
  width: 66%;
}

@media screen and (max-width: 1000px) {
  .blog-tags {
    width: 90%;
  }
}
</style>
