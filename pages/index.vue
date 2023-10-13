<template>
  <main class="w-full flex items-center justify-center p-4 sm:p-8 md:p-12">
    <component :is="componentMapper[store.getContent]" />
  </main>
</template>
<script setup lang="ts">
import { useMainContentStore } from '@/stores';

const store = useMainContentStore()
const About = defineAsyncComponent(() => import("@/components/About.vue"))
const Resume = defineAsyncComponent(() => import("@/components/Resume.vue"))
const Home = defineAsyncComponent(() => import("@/components/Home.vue"))

const componentMapper = {
  'home': Home,
  'about': About,
  'resume': Resume,
}

onBeforeUnmount(() => {
  store.resetContent()
})

</script>