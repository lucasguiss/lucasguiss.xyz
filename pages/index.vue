<template>
  <header class="w-full top-0 p-5 flex flex-row-reverse">
    <nav class="flex flex-row gap-x-10">
      <a class="text-lg text-lime cursor-pointer hover:text-mint" @click="store.setContent('about')">about</a>
      <a class="text-lg text-lime cursor-pointer" @click="store.setContent('resume')">resume</a>
    </nav>
  </header>

  <main class="flex flex-row">
    <section class="py-60 pl-60">
      <h1 class="text-xl text-offwhite">Lucas Guiss Gusmão</h1>
      <h2 class="text-lg text-offwhite">Tech Leader at ROIT</h2>
      <p class="text-base text-offwhite break-words">I design and build scalable and resilient applications for the web.</p>
      <div class="pt-60">
        <a href="https://github.com/lucasguiss" target="_blank" class="i-mdi-github-box bg-lime hover:bg-mint text-5xl"></a>
        <a href="https://www.linkedin.com/in/lucasguissgusmao/" target="_blank" class="i-mdi-linkedin-box bg-lime hover:bg-mint text-5xl"></a>
        <a href="https://twitter.com/lucasguiss" target="_blank" class="i-mdi-twitter-box bg-lime hover:bg-mint text-5xl"></a>
      </div>
    </section>
    <aside class="py-60 pl-60">
      <component :is="componentMapper[store.getContent]"></component>
    </aside>
  </main>

  <footer class="fixed bottom-0 w-full pb-5">
    <div class="w-full flex flex-col justify-center items-center">
      <p class="text-sm text-offwhite hover:text-mint break-words">
        <a href="mailto:lucasguissgusmao@gmail.com">
          ✉ lucasguissgusmao@gmail.com
        </a>
      </p>
      <p class="text-sm text-offwhite break-words">© 2023 Lucas Guiss Gusmão. All rights reserved.</p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useAsideContentStore } from '@/stores';

const store = useAsideContentStore()
const About = defineAsyncComponent(() => import("@/components/About.vue"))
const Resume = defineAsyncComponent(() => import("@/components/Resume.vue"))

const componentMapper = {
  'none': undefined,
  'about': About,
  'resume': Resume,
}

onBeforeUnmount(() => {
  store.resetContent()
})

</script>