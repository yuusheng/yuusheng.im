<script setup lang="ts">
import icursor from 'assets/img/logos/iCursor.svg'

interface Project {
  logo: any
  title: string
  url: string
  description: string
  github: string
}

const projects: Project[] = [
  {
    logo: icursor,
    title: 'iCursor',
    url: 'https://icursor.yuusheng.im',
    description: 'Make your cursor in web looks like cursor in iPad',
    github: 'https://github.com/yuusheng/icursor',
  },
]
</script>

<template>
  <div class="mt-[7.5rem] ml-[7.5rem] flex flex-wrap">
    <ProjectCard
      v-for="project of projects"
      :key="project.title"
      :logo="project.logo"
      :title="project.title"
      :url="project.url"
      :description="project.description"
      :github="project.github"
    />
  </div>
</template>
