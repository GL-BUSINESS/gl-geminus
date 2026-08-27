<script setup>
import TheNavbar from './components/layout/TheNavbar.vue'
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <TheNavbar />
  <main id="conteudo">
    <router-view />
  </main>
</template>
