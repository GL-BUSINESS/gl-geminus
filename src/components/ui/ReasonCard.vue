<script setup>
/** Card da secao "Por que escolher?": faixa azul de titulo + corpo preto. */
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <li class="card">
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__text">{{ text }}</p>
  </li>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: var(--color-surface-black);
  overflow: hidden;
}

.card__title {
  margin: 0;
  padding: var(--space-4);
  min-height: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-accent);
  color: var(--color-text-primary-inverse);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-weight: var(--fw-bold);
  text-align: center;
}

.card__text {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 119px;
  margin: 0;
  padding: var(--space-4);
  color: var(--color-text-primary-inverse);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  text-align: center;
}

@media (max-width: 767px) {
  .card__title {
    min-height: 58px;
  }
}
</style>
