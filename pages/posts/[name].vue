<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.params.name as string)
</script>

<template>
  <div class="post-container">
    <ContentDoc :path="path" />
  </div>
</template>
