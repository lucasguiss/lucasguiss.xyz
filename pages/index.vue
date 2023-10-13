<template>
  <header class="w-full flex flex-row-reverse gap-x-2 p-10">
    <nav class="flex flex-row gap-x-10">
      <a class="text-lg text-lime">about</a>
      <a class="text-lg text-lime">resume</a>
    </nav>
  </header>

  <main>
    <section>
      <h1 class="text-xl text-offwhite">Lucas Guiss Gusmão</h1>
      <h2 class="text-lg text-offwhite">Tech Leader at ROIT</h2>
      <p class="text-base text-offwhite">I design and build scalable and resilient applications for the web.</p>
    </section>
    <aside>
      <component :is=""></component>
    </aside>
  </main>

  <footer>
    <p class="text-sm text-offwhite">© 2023 Lucas Guiss Gusmão. Todos os direitos reservados.</p>
    <p class="text-sm text-offwhite"><a href="mailto:lucasguissgusmao@gmail.com">lucasguissgusmao@gmail.com</a></p>
  </footer>
</template>
<script setup lang="ts">
</script>