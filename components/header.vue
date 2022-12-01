<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const router = useRouter()
</script>

<template>
  <header flex="~" lt-sm:mx10 m="x30 y3" items-center justify-between>
    <a class="avatar" @click="router.push('/')" />

    <div flex lt-sm:hidden initial>
      <a class="navigate-btn" @click="router.push('posts')">
        posts
      </a>
      <a class="navigate-btn" @click="router.push('photo')">
        photo
      </a>
      <a class="navigate-btn" @click="router.push('project')">
        project
      </a>
      <a class="navigate-btn" @click="router.push('days')">
        <i i-majesticons-heart hover:i-majesticons-heart-line />
      </a>
      <a class="navigate-btn" @click="toggleDark()">
        <i i-majesticons-moon hover:i-majesticons-moon-line dark:i-majesticons-sun hover:dark:i-majesticons-sun-line />
      </a>
    </div>

    <div navigate-btn sm:hidden initial>
      <div cursor-pointer i-majesticons-more-menu-vertical />
    </div>
  </header>
</template>

<style scoped>
.avatar {
  width: 3rem;
  height: 3rem;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url(../assets/avatar.svg);
}
.dark .avatar {
  background-image: url(../assets/avatar-dark.svg);
}
</style>
