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
      <a href="javascript:void(0);" class="navigate-btn" @click="router.push('posts')">
        posts
      </a>
      <a href="javascript:void(0);" class="navigate-btn" @click="router.push('photo')">
        photo
      </a>
      <a href="javascript:void(0);" class="navigate-btn" @click="router.push('project')">
        project
      </a>
      <a href="javascript:void(0);" class="navigate-btn" @click="router.push('days')">
        <i i-ri-heart-fill hover:i-ri-heart-line />
      </a>
      <a href="javascript:void(0);" class="navigate-btn" @click="toggleDark()">
        <i i-ri-moon-fill hover:i-ri-moon-line dark:i-ri-sun-fill hover:dark:i-ri-sun-line />
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
  background-image: url(../assets/avatar.svg);
}

.dark .avatar {
  background-image: url(../assets/avatar-dark.svg);
}
</style>
