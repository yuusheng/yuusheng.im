<script setup lang="ts">
import { motion, useScroll, useTransform } from 'motion-v'
import AvatarJpg from '~/assets/avatar.jpg'

const { scrollY } = useScroll()

const left = useTransform(
  scrollY,
  [0, 50, 100],
  [180, 180, 40],
)

const top = useTransform(
  scrollY,
  [0, 50, 100],
  [100, 100, 40],
)
</script>

<template>
  <div class="container z-50 grid aspect-[24/1] h-14" style="grid-template-columns: repeat(24, 1fr);">
    <motion.div
      :style="{
        top,
      }"
      class="col-[3/16]"
    >
      <img class="size-14 cursor-pointer rounded-full" :src="AvatarJpg" @click="$router.push('/')">
    </motion.div>
  </div>
</template>
