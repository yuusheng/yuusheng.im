<script setup lang="ts">
import type { ArticleTitle } from '~~/utils/types'

defineProps<{
  post: ArticleTitle
}>()

const router = useRouter()
</script>

<template>
  <div
    class="h-[2.5rem] w-[7.5rem] px-2 py-3 bg-red-500 rounded cursor-pointer"
    @click="router.push(`/posts?title=${post.title}`)"
  >
    <span>{{ post.title }}</span>
    <slot />
  </div>
</template>
