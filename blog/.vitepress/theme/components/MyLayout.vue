<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { isArticlePage } from '../lib/posts'
import Comment from './Comment.vue'
import ImageZoomProvider from './ImageZoomProvider.vue'
import PostMeta from './PostMeta.vue'

const { Layout } = DefaultTheme
const { frontmatter, page } = useData()

const showArticleEnhancements = computed(() => isArticlePage(page.value.relativePath, frontmatter.value.layout))
const showComments = computed(() => showArticleEnhancements.value && frontmatter.value.comments !== false)
</script>

<template>
  <div>
    <Layout>
      <template #doc-before>
        <PostMeta v-if="showArticleEnhancements" />
      </template>

      <template #doc-footer-before>
        <Comment v-if="showComments" />
      </template>
    </Layout>

    <ImageZoomProvider />
  </div>
</template>