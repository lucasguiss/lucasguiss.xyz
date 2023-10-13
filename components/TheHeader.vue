<template>
<header class="w-full top-0 p-5 flex flex-row-reverse">
    <nav class="flex flex-row gap-x-10">
      <span class="text-lg text-lime cursor-pointer hover:text-mint font-medium" @click="store.setContent('home')">home</span>
      <span class="text-lg text-lime cursor-pointer hover:text-mint font-medium" @click="store.setContent('about')">about</span>
      <span class="text-lg text-lime cursor-pointer font-medium" @click="store.setContent('resume')">resume</span>
    </nav>
  </header>
</template>

<script setup lang='ts'>
import { useMainContentStore } from '@/stores';

const store = useMainContentStore()
</script>

<style scoped lang='scss'>

</style>@/src/main/stores