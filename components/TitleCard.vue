<script setup lang="ts">
import type { ArticleTitle } from '~~/utils/types'

defineProps<{
  post: ArticleTitle
}>()

const router = useRouter()
</script>

<template>
  <div
    class="h-10 w-[7.5rem] cursor-pointer rounded bg-red-500 px-2 py-3"
    @click="router.push(`/posts?title=${post.title}`)"
  >
    <span>{{ post.title }}</span>
    <slot />
  </div>
</template>
