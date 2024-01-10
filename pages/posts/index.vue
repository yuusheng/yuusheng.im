<script setup>
const posts = await queryContent('/').without(['body']).find()
</script>

<template>
  <div v-for="post in posts">
    <NuxtLink :to="`/posts${post._path}`">{{ post.title }}</NuxtLink>
  </div>
</template>
