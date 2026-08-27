<script setup>
/** Passo numerado da secao "Como Funciona?". */
defineProps({
  number: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <li class="step">
    <p class="step__number" aria-hidden="true">{{ number }}</p>
    <div class="step__body">
      <h3 class="step__title">
        <span class="sr-only">Passo {{ Number(number) }}: </span>{{ title }}
      </h3>
      <p class="step__text">{{ text }}</p>
    </div>
  </li>
</template>

<style scoped>
.step {
  display: flex;
  align-items: flex-start;
  list-style: none;
}

.step__number {
  flex: 0 0 auto;
  font-size: var(--fs-h2);
  line-height: var(--lh-body);
  font-weight: var(--fw-bold);
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}

.step__body {
  padding-left: var(--space-6);
}

.step__title {
  margin: 0;
  font-size: var(--fs-h3);
  line-height: var(--lh-body);
  font-weight: var(--fw-regular);
  color: var(--color-text-primary-inverse);
}

.step__text {
  margin: 0;
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--color-text-primary-inverse);
}
</style>
