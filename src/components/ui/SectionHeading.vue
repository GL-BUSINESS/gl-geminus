<script setup>
/**
 * Titulo de secao. `level` mantem a hierarquia semantica correta (h1/h2/h3)
 * independente do tamanho visual, que vem sempre do token --fs-h1.
 */
defineProps({
  level: { type: String, default: 'h2' },
  align: { type: String, default: 'left' }, // left | center
  tone: { type: String, default: 'dark' }, // dark (texto claro) | light (texto escuro)
})
</script>

<template>
  <component :is="level" class="heading" :class="[`heading--${align}`, `heading--${tone}`]">
    <slot />
  </component>
</template>

<style scoped>
.heading {
  margin: 0;
  font-size: var(--fs-h1);
  line-height: var(--lh-heading);
  font-weight: var(--fw-bold);
  letter-spacing: -0.01em;
}

.heading--center {
  text-align: center;
}

.heading--dark {
  color: var(--color-text-primary-inverse);
}

.heading--light {
  color: var(--color-text-primary);
}
</style>
