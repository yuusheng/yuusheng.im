<script setup lang="ts">
useHead({
  title: 'yuushèng',
  link: [
    { rel: 'icon', href: '/favicon.png' },
  ],
  meta: [
    { name: 'author', content: 'yuusheng' },
    { name: 'description', content: 'yuusheng, developer, posts, frontend' },
  ],
  bodyAttrs: {
    class: ['dark:bg-black', 'dark:color-gray-300', 'font-sans'],
  },
})
</script>

<template>
  <Header />
  <main lt-sm:px0 px30>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
