<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: ['dark:bg-black', 'dark:color-gray-300'],
  },
  link: [{ rel: 'icon', href: '/avatar.png' }],
})
</script>

<template>
  <Header />
  <div px50>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import './index.css';
</style>
