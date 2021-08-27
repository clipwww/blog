<template>
  <router-link class="blog-tag" :to="tag.path">
    {{ tag.name }}
    <span class="text-sm ml-1">({{ tag.pages.length }})</span>
  </router-link>
</template>

<script>
export default {
  props: ['tag'],
}
</script>

<style lang="stylus">
.blog-tag
  display inline-flex
  align-items center
  word-break break-word
  font-size 20px
  margin-right 20px
  margin-bottom 20px
  padding 5px 20px 6px
  border-radius 50px
  font-weight 400
  text-align left
  box-sizing border-box
  transition background-color 0.3s
  color #fff;
  background-color var(--c-vue)
  text-decoration none
  transition all 0.5s

  &:hover
    color #fff;
    box-shadow 0 0 5px $accentColor
    

@media screen and (max-width: 768px)
  .blog-tag
    font-size 14px
    padding 3px 15px 4px
    margin-right 10px
    margin-bottom 10px
</style>
