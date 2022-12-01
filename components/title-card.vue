<script setup lang="ts">
import type { ArticleTitle } from '~~/utils/types'

defineProps<{
  post: ArticleTitle
}>()

const router = useRouter()
</script>

<template>
  <div
    h10 w30 p="x2 y3" bg-red rounded cursor-pointer
    @click="router.push(`/posts?title=${post.title}`)"
  >
    <span>{{ post.title }}</span>
    <slot />
  </div>
</template>
