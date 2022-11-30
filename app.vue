<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: ['dark:bg-black', 'dark:color-gray-300'],
  },
  link: [{ rel: 'icon', href: '/avatar.png' },
  ],
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
