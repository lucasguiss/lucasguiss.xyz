<template>
  <header class="w-full flex flex-row-reverse gap-x-2 p-10">
    <nav class="flex flex-row gap-x-10">
      <a class="text-lg text-lime" @click="store.setContent('about')">about</a>
      <a class="text-lg text-lime" @click="store.setContent('resume')">resume</a>
    </nav>
  </header>

  <main>
    <section>
      <h1 class="text-xl text-offwhite">Lucas Guiss Gusmão</h1>
      <h2 class="text-lg text-offwhite">Tech Leader at ROIT</h2>
      <p class="text-base text-offwhite">I design and build scalable and resilient applications for the web.</p>
      <Icon name="mdi:github-box" color="#70F996" />
      <Icon name="mdi:twitter-box" color="#70F996" />
      <Icon name="mdi:linkedin" color="#70F996" />
    </section>
    <aside>
      <component :is="componentMapper[store.getContent]"></component>
    </aside>
  </main>

  <footer>
    <p class="text-sm text-offwhite">© 2023 Lucas Guiss Gusmão. Todos os direitos reservados.</p>
    <p class="text-sm text-offwhite"><a href="mailto:lucasguissgusmao@gmail.com">lucasguissgusmao@gmail.com</a></p>
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