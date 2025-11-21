<script setup lang="ts">
const router = useRouter()

const color = useColorMode()
function toggleColorMode() {
  color.preference = color.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="container flex text-[1.15rem] py-5 items-center justify-between">
    <div relative>
      <div class="avatar cursor-pointer" @click="router.push('/')" />
    </div>

    <div class="flex">
      <NuxtLink to="/posts" class="navigate-btn">
        Posts
      </NuxtLink>
      <NuxtLink to="/photo" class="navigate-btn">
        Photo
      </NuxtLink>
      <NuxtLink to="/project" class="navigate-btn" @click="router.push('project')">
        Project
      </NuxtLink>
      <button class="navigate-btn" @click="toggleColorMode">
        <Icon :name="$colorMode.value === 'dark' ? 'i-ri-sun-fill' : 'i-ri-moon-fill'" />
      </button>
    </div>

    <div class="navigate-btn sm:hidden">
      <Icon name="i-majesticons-more-menu-vertical" class="cursor-pointer" />
    </div>
  </header>
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
