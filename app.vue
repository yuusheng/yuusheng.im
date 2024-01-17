<script setup lang="ts">
useHead({
  title: 'yuusheng',
  link: [
    { rel: 'icon', href: '/favicon.png' },
  ],
  meta: [
    { name: 'author', content: 'yuusheng' },
    { name: 'description', content: 'yuusheng, developer, posts, frontend' },
  ],
  bodyAttrs: {
    class: ['dark:bg-black', 'dark:color-warm-gray-50', 'font-sans', 'transition-200'],
  },
})
</script>

<template>
  <Header />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
