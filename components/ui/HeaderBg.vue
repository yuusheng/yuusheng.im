<script setup lang="ts">

</script>

<template>
  <div class="absolute inset-0">
    <div class="absolute flex justify-evenly inset-x-0.5 inset-y-0 inset-y-b-0 w-full color-gray/20">
      <UiSvgColSvg v-for="n in 12" :key="n" :stroke-dasharray="n % 2 === 0 ? '4 6' : ''" />
    </div>
    <div class="absolute flex flex-col justify-evenly w-full inset-x-0 inset-y-0.5 color-gray/20">
      <UiSvgRowSvg v-for="n in 6" :key="n" :stroke-dasharray="n % 2 === 0 ? '4 6' : ''" />
    </div>
  </div>
</template>
