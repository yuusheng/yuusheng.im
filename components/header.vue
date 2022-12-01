<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const router = useRouter()
</script>

<template>
  <header flex="~" text="[1.15rem]" lt-sm:mx10 m="x30 y5" items-center justify-between>
    <div relative>
      <div class="avatar" @click="router.push('/')" />
    </div>

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
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: -1.75rem;
  left: -1.75rem;
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: none;
  background-image: url(../assets/avatar.svg);
}

.avatar:hover {
  transform: scale(1.2);
  transition: transform 120ms ease-in-out;
  outline: solid 1.6px rgba(186, 186, 186, 0.5);
  border-radius: 100%;
}

.dark .avatar {
  background-image: url(../assets/avatar-dark.svg);
}

a:hover {
  cursor: none;
  background: rgba(230, 230, 230, 0.5);
  outline: solid 1.6px rgba(186, 186, 186, 0.5);
}
</style>
