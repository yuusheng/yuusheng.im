<script setup lang="ts">
import { motion, useScroll, useTransform } from 'motion-v'

const color = useColorMode()
function toggleColorMode() {
  color.preference = color.preference === 'dark' ? 'light' : 'dark'
}

const { scrollY } = useScroll()

const dynamicBorderRadius = useTransform(
  scrollY,
  [0, 100],
  [10, 50],
)
const dynamicHeight = useTransform(
  scrollY,
  [0, 100],
  [80, 60],
)
const borderOpacity = useTransform(
  () => {
    let opacity = (scrollY.get() / 8 / 100)
    if (opacity > 0.2) {
      opacity = 0.2
    }
    return `rgb(229 231 235 / ${opacity})`
  },
)
const width = useTransform(
  scrollY,
  [0, 100],
  [10, 2],
)
</script>

<template>
  <div class="sticky top-0 z-50 mx-auto flex h-[82px] w-screen items-center">
    <motion.div
      layout
      :style="{
        borderRadius: dynamicBorderRadius,
        height: dynamicHeight,
        borderColor: borderOpacity,
        paddingLeft: width,
        paddingRight: width,
      }"
      class="container z-50 box-content flex size-full h-[80px] items-center justify-between border border-solid border-gray-200/20 bg-white px-[20px] text-[1.15rem] dark:bg-black"
    >
      <div class="relative">
        <div class="avatar cursor-pointer" @click="$router.push('/')" />
      </div>

      <div class="flex">
        <NuxtLink to="/posts" class="navigate-btn">
          Posts
        </NuxtLink>
        <NuxtLink to="/photo" class="navigate-btn">
          Photo
        </NuxtLink>
        <NuxtLink to="/project" class="navigate-btn" @click="$router.push('project')">
          Project
        </NuxtLink>
        <button class="navigate-btn" @click="toggleColorMode">
          <Icon :name="$colorMode.value === 'dark' ? 'i-ri-sun-fill' : 'i-ri-moon-fill'" />
        </button>
      </div>

      <div class="navigate-btn sm:hidden">
        <Icon name="i-majesticons-more-menu-vertical" class="cursor-pointer" />
      </div>
    </motion.div>
  </div>
</template>

<style scoped>
.avatar {
  width: 3.5rem;
  height: 3.5rem;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(~/assets/avatar.jpg);
  border-radius: 50%;
}
</style>
