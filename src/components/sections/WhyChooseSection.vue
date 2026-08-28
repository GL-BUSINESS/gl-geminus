<script setup>
import BaseSection from '../ui/BaseSection.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import ReasonCard from '../ui/ReasonCard.vue'
import { reasons, brand } from '../../data/site'
</script>

<template>
  <BaseSection tone="light" width="content">
    <SectionHeading level="h2" align="center" tone="light">
      Por que escolher a {{ brand }}?
    </SectionHeading>

    <ul class="reasons">
      <ReasonCard v-for="item in reasons" :key="item.title" :title="item.title" :text="item.text" />
    </ul>
  </BaseSection>
</template>

<style scoped>
.reasons {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
  margin-top: var(--space-10);
  list-style: none;
}

@media (min-width: 768px) {
  /* Tres colunas iguais, 40px entre elas e 20px de recuo nas bordas.
     Em fracoes, e nao em 306px fixos, os cards acompanham a secao: dao
     306px quando ela mede 1037 e 417px quando mede 1372 — as duas
     medidas da referencia. */
  .reasons {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-8);
    padding-inline: var(--space-5);
  }
}
</style>
