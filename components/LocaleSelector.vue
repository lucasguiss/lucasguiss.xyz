<script setup>
const { locale } = useI18n()
import { Icon } from '#components'

const EnIcon = h(Icon, { name: '🇺🇸'})
const BrIcon = h(Icon, { name: '🇧🇷'})
</script>

<template>
  <div>
      <select v-model="locale">
        <option value="en"><EnIcon /></option>
        <option value="pt-BR"><BrIcon /></option>
      </select>
  </div>
</template>