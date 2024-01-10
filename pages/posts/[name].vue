<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.params.name as string)
</script>

<template>
  <article class="post-container scroll-smooth">
    <ContentDoc :path="path" />
  </article>
</template>
