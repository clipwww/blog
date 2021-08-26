<template>
  <div class="blog-tags">
    <h2>Tags</h2>
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />

    <div class="mt-10" v-for="year in arrayPostByYear" :key="year.id">
      <h2 class="m-0">{{ year.id }}</h2>
      <div class="pl-8">
        <div class="my-5 border-dashed border-b border-t-0 border-l-0 border-r-0 border-gray-300 pb-5" v-for="post in year.posts" :key="post.key">
          <div class="text-xs text-gray-400">
            {{ resolvePostTags(post.frontmatter.tags).join(", ") }}
          </div>
          <NavLink class="block my-1 text-xl no-underline sm:text-2xl" :link="post.path">{{
            post.title
          }}</NavLink>
          <div class="text-xs my-1">{{ post.frontmatter.summary }}</div>
          <div class="text-xs text-gray-400">
            <span>{{ formatDate(post.frontmatter.date) }}</span>
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
    formatDate(date) {
      return dayjs(date).format("MM/DD HH:mm");
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
