<script setup lang="ts">
const contactList = [
  { link: 'https://github.com/yuusheng', icon: 'i-ri-github-fill', title: 'github', color: 'white' },
  { link: 'https://twitter.com/yuusheng7', icon: 'i-ri-twitter-fill', title: '', color: 'blue' },
  { link: 'https://mas.to/@yuusheng', icon: 'i-ri-mastodon-fill', title: '', color: 'blue' },
  { link: 'mailto:hi@yuusheng.im', icon: 'i-ri-at-fill', title: '', color: 'blue' },
]
</script>

<template>
  <div mt10>
    <a
      v-for="contact of contactList"
      :key="contact.icon"
      :href="contact.link"
      target="_blank"
      p="x2 t1 b1.5" m="r2.4"
      class="rounded rect cursor-hover"
    >
      <i :class="contact.icon" /> {{ contact?.title }}
    </a>
  </div>
</template>

<style scoped>
.rect {
  background-color: rgba(208, 208, 208, 0.4);
}
</style>
