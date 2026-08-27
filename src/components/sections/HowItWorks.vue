<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import StepItem from '../ui/StepItem.vue'
import BaseSection from '../ui/BaseSection.vue'
import { steps } from '../../data/site'
</script>

<template>
  <BaseSection tone="dark" width="wide">
    <SectionHeading level="h2" align="center" tone="dark">Como Funciona?</SectionHeading>

    <ol class="steps">
      <StepItem
        v-for="step in steps"
        :key="step.number"
        :number="step.number"
        :title="step.title"
        :text="step.text"
      />
    </ol>
  </BaseSection>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-9) var(--space-12);
  /* 1166px: a mesma medida do bloco de passos na referencia,
     mais estreita que a area util da secao. */
  max-width: 1166px;
  margin: var(--space-10) auto 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 1024px) {
  .steps {
    /* Duas colunas preenchidas na vertical: 01-02-03 | 04-05,
       como na referencia. */
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, auto);
    grid-auto-flow: column;
    /* A separacao entre as colunas vem do padding do item, nao do gap —
       assim a segunda coluna comeca exatamente no meio, como na referencia. */
    column-gap: 0;
    row-gap: var(--space-9);
  }

  .steps > :deep(.step) {
    padding-right: var(--space-12);
  }
}
</style>
