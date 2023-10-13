import { defineStore } from 'pinia'
import { MainContent } from '@/types'


export const useMainContentStore = defineStore('mainContent', {
  state: () => ({
    content: "home" as MainContent
  }),
  getters: {
    getContent: (state) => state.content
  },
  actions: {
    setContent (content: MainContent) {
      this.content = content
    },
    resetContent() {
      this.content = "home"
    }
  }
})