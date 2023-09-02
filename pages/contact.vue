<template>
  <div class="teste">
    <span>teste</span>
    <input />
    <span>teste</span>
    <input />
    <span>teste</span>
    <textarea ></textarea>
    <button @click="sendEmail">Enviar</button>
  </div>
</template>
<script setup lang="ts">


const sendEmail = async () => {
  await useFetch('/api/email')
}

</script>
<style>
.teste {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20rem;
  margin-right: 20rem;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 20rem;
}
</style>