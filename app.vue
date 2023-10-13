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
  ogUrl: 'https://lucasguiss.xyz'
})

useHead({
  title: 'Lucas Guiss',
  meta: [
    { name: 'description', content: 'Personal Website' }
  ],
  bodyAttrs: {
    class: 'm-0 p-0 box-border bg-midnight w-full h-full font-poppins'
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