<script setup>
const route = useRoute()
const title = route.query?.title
</script>

<template>
  article

  <ContentDoc :path="title" />
</template>

<style>
pre {
  background-color: #eee;
  padding: 10px;
  border-radius: 5px;
}
</style>
