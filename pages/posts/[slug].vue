<script setup lang="ts">

</script>

<template>
  <div>
    <ContentDoc :path="($route.params.slug as string)" />
  </div>
</template>
