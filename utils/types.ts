import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ArticleTitle {
  title: string
  path: string
}

export interface PostContent extends ParsedContent {
  title: string
  date: string
  description: string
}
