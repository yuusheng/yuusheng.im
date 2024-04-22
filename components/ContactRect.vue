<script setup lang="ts">
const contactList = [
  { link: 'https://github.com/yuusheng', icon: 'i-ri-github-fill', title: 'GitHub', color: 'white' },
  { link: 'https://twitter.com/yuusheng7', icon: 'i-ri-twitter-fill', title: '', color: 'blue' },
  { link: 'https://mas.to/@yuusheng', icon: 'i-ri-mastodon-fill', title: '', color: 'blue' },
  { link: 'mailto:hi@yuusheng.im', icon: 'i-ri-at-fill', title: '', color: 'blue' },
]
</script>

<template>
  <div mt10 flex>
    <a
      v-for="contact of contactList"
      :key="contact.icon"
      :href="contact.link"
      target="_blank"
      flex="~ items-center"
      p="x1.8 y1" m="r2.4" text-xl
      bg="#d0d0d040" rounded
    >
      <div :class="contact.icon" />
      <span v-if="contact?.title" ml-1>{{ contact?.title }}</span>
    </a>
  </div>
</template>
