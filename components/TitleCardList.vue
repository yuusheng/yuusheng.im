<script setup lang="ts">
import type { ArticleTitle } from '~~/utils/types'

defineProps<{ posts: ArticleTitle[] }>()
</script>

<template>
  <div class="flex space-x-1">
    <TitleCard v-for="post of posts" :key="post.title" :post="post" />
  </div>
</template>
