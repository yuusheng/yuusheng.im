<script setup>
const pre = new Date('2022-06-17').getTime()
const date = new Date().getTime() - pre
</script>

<template>
  ❤
  {{ date }}
</template>
