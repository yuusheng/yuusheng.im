<script setup lang="ts">
const router = useRouter()

const color = useColorMode()
function toggleColorMode() {
  color.preference = color.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header flex="~" text="[1.15rem]" p="x6 y5" items-center justify-between>
    <div relative>
      <div class="avatar cursor-pointer" @click="router.push('/')" />
    </div>

    <div flex lt-sm:hidden initial>
      <NuxtLink to="/posts" class="navigate-btn">
        Posts
      </NuxtLink>
      <NuxtLink to="/photo" class="navigate-btn">
        Photo
      </NuxtLink>
      <NuxtLink to="project" class="navigate-btn" @click="router.push('project')">
        Project
      </NuxtLink>
      <button class="navigate-btn" @click="toggleColorMode">
        <i i-ri-moon-fill hover:i-ri-moon-line dark:i-ri-sun-fill hover:dark:i-ri-sun-line />
      </button>
    </div>

    <div navigate-btn sm:hidden initial>
      <div cursor-pointer i-majesticons-more-menu-vertical />
    </div>
  </header>
</template>

<style scoped>
.avatar {
  width: 3.5rem;
  height: 3.5rem;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(../assets/avatar.svg);
}

.dark .avatar {
  background-image: url(../assets/avatar-dark.svg);
}
</style>
