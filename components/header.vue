<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const router = useRouter()
</script>

<template>
  <header flex="~" my3 items-center justify-around>
    <a class="avatar" :class="isDark ? 'dark-avatar' : 'light-avatar'" @click="router.push('/')" />

    <div flex>
      <a class="navigate-btn" @click="router.push('blog')">
        blog
      </a>
      <a class="navigate-btn" @click="router.push('photo')">
        photo
      </a>
      <a class="navigate-btn" @click="router.push('project')">
        project
      </a>
      <a class="navigate-btn" @click="router.push('days')">
        ❤
      </a>
      <a class="navigate-btn" @click="toggleDark()">
        切换
      </a>
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
}
.light-avatar {
  background-image: url(../assets/avatar.svg);
}
.dark-avatar {
  background-image: url(../assets/avatar-dark.svg);
}
</style>
