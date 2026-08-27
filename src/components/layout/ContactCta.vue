<script setup>
import BaseButton from '../ui/BaseButton.vue'
import { whatsappUrl } from '../../data/site'
</script>

<template>
  <aside class="cta">
    <div class="cta__inner">
      <p class="cta__text">
        Ficou com alguma dúvida?<br />
        Entre em contato conosco no botão ao lado
      </p>
      <BaseButton :href="whatsappUrl" external>Entrar em contato</BaseButton>
    </div>
  </aside>
</template>

<style scoped>
.cta {
  background-color: var(--color-bg);
  padding: var(--space-6) var(--section-padding-x);
}

.cta__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  max-width: var(--content-max);
  margin-inline: auto;
  padding: var(--space-5) 0;
}

.cta__text {
  margin: 0;
  font-size: 18px;
  line-height: var(--lh-body);
  color: var(--color-surface);
}

@media (max-width: 767px) {
  .cta__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
