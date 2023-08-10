// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxt/image', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  routeRules: {
    '/': { prerender: true }
  }
})
