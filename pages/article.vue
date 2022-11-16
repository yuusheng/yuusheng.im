<script setup>
const route = useRoute()
const title = route.query?.title
</script>

<template>
  article

  <ContentDoc :path="title" />
</template>
