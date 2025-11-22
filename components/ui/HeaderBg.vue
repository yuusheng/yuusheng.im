<script setup lang="ts">

</script>

<template>
  <div class="absolute inset-0">
    <div class="inset-y-b-0 absolute inset-0 flex w-full justify-evenly text-gray-200/20">
      <UiSvgColSvg v-for="n in 23" :key="n" :stroke-dasharray="n % 2 !== 0 ? '4 6' : ''" />
    </div>
    <div class="absolute inset-0 flex w-full flex-col justify-evenly text-gray-200/20">
      <UiSvgRowSvg v-for="n in 11" :key="n" :stroke-dasharray="n % 2 !== 0 ? '4 6' : ''" />
    </div>
  </div>
</template>
