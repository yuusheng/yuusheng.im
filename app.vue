<script setup lang="ts">
useHead({
  title: 'yuusheng',
  link: [{ rel: 'icon', href: '/favicon.jpg' }],
  meta: [
    { name: 'author', content: 'yuusheng' },
    { name: 'description', content: 'yuusheng, developer, posts, frontend' },
  ],
  bodyAttrs: {
    class: [
      'dark:bg-black',
      'dark:text-stone-50',
      'font-sans',
      'transition-all duration-200',
    ],
  },
})
</script>

<template>
  <Header />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Footer />
</template>
