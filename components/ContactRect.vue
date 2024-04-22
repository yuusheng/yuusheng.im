<script setup lang="ts">
const contactList = [
  {
    link: 'https://github.com/yuusheng',
    icon: 'i-ri-github-fill',
    title: 'GitHub',
    classes: 'hover:bg-black dark:hover:bg-white dark:hover:text-black',
  },
  {
    link: 'https://twitter.com/yuusheng7',
    icon: 'i-ri-twitter-x-fill',
    title: '',
    classes: 'hover:bg-black dark:hover:bg-white dark:hover:text-black',
  },
  { link: 'https://mas.to/@yuusheng',
    icon: 'i-ri-mastodon-fill',
    title: '',
    classes: 'hover:bg-[#5b52e1]',
  },
  { link: 'mailto:hi@yuusheng.im',
    icon: 'i-ri-at-fill',
    title: '',
    classes: 'hover:bg-gradient-linear bg-gradient-from-[#3c7aeb] bg-gradient-to-[#5bbff6]',
  },
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
      p="x1.8 y1" m="r2.4" text-xl hover:text-white
      bg="#d0d0d040" rounded
      :class="contact.classes"
    >
      <div :class="contact.icon" />
      <span v-if="contact.title" ml-1>{{ contact.title }}</span>
    </a>
  </div>
</template>
