<template>
  <TheHeader />
  <NuxtPage />
  <TheFooter />
</template>
<script setup lang="ts">

useSeoMeta({
  title: 'Lucas Guiss',
  ogTitle: 'Lucas Guiss',
  description: 'Software Engineer | Tech Leader',
  ogDescription: 'Software Engineer | Tech Leader',
  ogImage: 'https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/alfa.png',
  ogUrl: 'https://lucasguiss.xyz',
  twitterTitle: 'Lucas Guiss',
  twitterDescription: 'Software Engineer | Tech Leader',
  twitterImage: 'https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/alfa.png',
  twitterCard: 'summary'
})

useHead({
  title: 'Lucas Guiss',
  meta: [
    { name: 'description', content: 'Software Engineer | Tech Leader ' }
  ],
  bodyAttrs: {
    class: 'm-0 p-0 box-border bg-midnight w-full h-full font-poppins'
  },
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/public/favicon.ico'
    }
  ]
})
</script>