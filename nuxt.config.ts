export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    configPath: 'tailwind.config.ts'
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600]
    }
  }
})