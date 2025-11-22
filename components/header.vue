<script setup lang="ts">
import { motion, useScroll, useTransform } from 'motion-v'

import AvatarJpg from '~/assets/avatar.jpg'

const { scrollY } = useScroll()

const scrollRange = [0, 100]
const dynamicBorderRadius = useTransform(
  scrollY,
  scrollRange,
  [10, 50],
)
const dynamicHeight = useTransform(
  scrollY,
  scrollRange,
  [80, 50],
)
const opacity = useTransform(
  scrollY,
  scrollRange,
  [0, 0.2],
)
const borderOpacity = useMotionTemplate`rgb(229 231 235 / ${opacity})`

const width = useTransform(
  scrollY,
  scrollRange,
  [10, 2],
)
</script>

<template>
  <div class="sticky top-0 z-50 flex h-[82px] w-screen items-center">
    <motion.div
      :style="{
        borderRadius: dynamicBorderRadius,
        height: dynamicHeight,
        borderColor: borderOpacity,
        paddingLeft: width,
        paddingRight: width,
      }"
      class="
        container  flex h-[80px] items-center justify-between
        border border-solid border-gray-200/20
        bg-white text-[1.15rem] dark:bg-black
      "
    >
      <img class="size-12 cursor-pointer rounded-full" :src="AvatarJpg" @click="$router.push('/')">
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
        <!-- <button class="navigate-btn" @click="toggleColorMode"> -->
        <!--   <Icon :name="$colorMode.preference === 'dark' ? 'i-ri-sun-fill' : 'i-ri-moon-fill'" /> -->
        <!-- </button> -->
      </div>

      <div class="navigate-btn sm:hidden">
        <Icon name="i-majesticons-more-menu-vertical" class="cursor-pointer" />
      </div>
    </motion.div>
  </div>
</template>
