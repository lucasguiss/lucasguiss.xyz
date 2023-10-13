export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true }
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  ssr: false,
  tailwindcss: {
    configPath: 'tailwind.config.ts'
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600]
    }
  }
})
