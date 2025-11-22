<template>
  <div class="relative size-full">
    <slot />
    <span class="absolute left-0 top-0 size-2 border-l border-t border-gray-200" />
    <span class="absolute right-0 top-0 size-2 border-r border-t border-gray-200" />
    <span class="absolute bottom-0 left-0 size-2 border-b border-l border-gray-200" />
    <span class="absolute bottom-0 right-0 size-2 border-b border-r border-gray-200" />
  </div>
</template>
