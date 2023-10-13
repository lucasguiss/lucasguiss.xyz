export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  routeRules: {
    '/': { prerender: true }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
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
