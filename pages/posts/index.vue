<script setup lang="ts">
const posts = await queryContent<PostContent>().find()
</script>

<template>
  <div m="x5 sm:x40 y10" flex="~ gap-4 col">
    <NuxtLink
      v-for="post in posts" :key="post._path"
      :to="`/posts${post._path}`"
      flex="~ gap-3"
    >
      <span text-xl>{{ post.title }}</span>
      <span text="warm-gray/70">
        {{ post.date ? $dayjs(post.date).format('YYYY-MM-DD') : '' }}
      </span>
    </NuxtLink>
  </div>
</template>
