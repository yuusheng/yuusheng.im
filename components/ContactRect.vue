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
    classes: 'hover:bg-black dark:hover:bg-white dark:hover:text-black',
  },
  { link: 'https://mas.to/@yuusheng', icon: 'i-ri-mastodon-fill', classes: 'hover:bg-[#5b52e1]' },
  { link: 'mailto:hi@yuusheng.im', icon: 'i-ri-at-fill', classes: 'hover:bg-gradient-to-r hover:from-[#3c7aeb] hover:to-[#5bbff6]' },
]
</script>

<template>
  <div class="mt-10 flex gap-[0.6rem]">
    <a
      v-for="contact of contactList"
      :key="contact.icon"
      :href="contact.link"
      target="_blank"
      class="flex items-center rounded border border-solid border-gray-200/20 bg-black px-[0.45rem] py-1 text-xl hover:text-white"
      :class="contact.classes"
    >
      <Icon :name="contact.icon" />
      <span v-if="contact.title" class="ml-1">{{ contact.title }}</span>
    </a>
  </div>
</template>
