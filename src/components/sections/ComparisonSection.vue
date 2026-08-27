<script setup>
import { computed } from 'vue'
import BaseSection from '../ui/BaseSection.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import ComparisonTable from '../ui/ComparisonTable.vue'
import AccordionList from '../ui/AccordionList.vue'
import { comparison } from '../../data/site'

/** Mesmo dado, duas apresentacoes: tabela no desktop, acordeao no mobile. */
const accordionItems = computed(() =>
  comparison.rows.map((row) => ({
    id: row.cells[0].toLowerCase().replace(/\s+/g, '-'),
    question: row.cells[0],
    answer: `${row.cells[2]}. ${row.cells[1]}. ${row.cells[3]}`,
    tone: row.tone,
  })),
)
</script>

<template>
  <BaseSection tone="light" width="content">
    <SectionHeading level="h2" tone="light">{{ comparison.title }}</SectionHeading>
    <p class="comparison__subtitle">{{ comparison.subtitle }}</p>

    <div class="comparison__desktop">
      <ComparisonTable
        :columns="comparison.columns"
        :rows="comparison.rows"
        caption="Comparação entre Home Equity, financiamento e consignado"
      />
    </div>

    <div class="comparison__mobile">
      <AccordionList :items="accordionItems" />
    </div>
  </BaseSection>
</template>

<style scoped>
.comparison__subtitle {
  margin: 0;
  padding-top: var(--space-2);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--color-text-primary);
}

.comparison__desktop {
  display: none;
}

.comparison__mobile {
  display: block;
}

@media (min-width: 768px) {
  .comparison__desktop {
    display: block;
    padding-top: var(--space-9);
  }

  .comparison__mobile {
    display: none;
  }
}
</style>
