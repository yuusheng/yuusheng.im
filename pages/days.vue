<script setup lang="ts">
const pre = new Date('2022-06-17').getTime()
const oneDay = 24 * 60 * 60 * 1000
const date = Math.floor((new Date().getTime() - pre) / oneDay)
</script>

<template>
  ❤ has been {{ date }} days
</template>
