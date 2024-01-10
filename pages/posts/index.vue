<script setup>
const posts = await queryContent('/').only(['title', '_path']).find()
</script>

<template>
  article

  <div v-for="post in posts">
    <NuxtLink :to="`/posts${post._path}`">{{ post.title }}</NuxtLink>
  </div>
</template>

<style>
pre {
  background-color: #eee;
  padding: 10px;
  border-radius: 5px;
}
</style>
