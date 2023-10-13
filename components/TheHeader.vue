<template>
<header class="w-full top-0 p-5 flex flex-row-reverse">
    <nav class="flex flex-row gap-x-10">
      <a class="text-lg text-lime cursor-pointer hover:text-mint font-medium" @click="store.setContent('home')">home</a>
      <a class="text-lg text-lime cursor-pointer hover:text-mint font-medium" @click="store.setContent('about')">about</a>
      <a class="text-lg text-lime cursor-pointer font-medium" @click="store.setContent('resume')">resume</a>
    </nav>
  </header>
</template>

<script setup lang='ts'>
import { useMainContentStore } from '@/stores';

const store = useMainContentStore()
</script>

<style scoped lang='scss'>

</style>@/src/main/stores