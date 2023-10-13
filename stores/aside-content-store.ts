import { defineStore } from 'pinia'
import { AsideContent } from '@/types'


export const useAsideContentStore = defineStore('asideContent', {
  state: () => ({
    content: "none" as AsideContent
  }),
  getters: {
    getContent: (state) => state.content
  },
  actions: {
    setContent (content: AsideContent) {
      this.content = content
    },
    resetContent() {
      this.content = "none"
    }
  }
})