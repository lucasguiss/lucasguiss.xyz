<template>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
</template>
<script setup lang="ts">
useHead({
  title: 'Lucas Guiss Gusmão',
  meta: [
    { name: 'description', content: 'Software Engineer Personal Portfolio' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
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
<style>
@import url('https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro');

body,
html {
  margin: 0;
  padding: 0;
  background-color: #1E1E1E;
  font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
  color: #F2F4F7;
}

* {
  box-sizing: border-box;
}
</style>