<script setup>
/**
 * Tabela comparativa (>= 851px). Abaixo disso o ComparisonSection troca
 * por AccordionList, que e legivel sem rolagem horizontal.
 */
defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },
  caption: { type: String, default: '' },
})
</script>

<template>
  <div class="table-wrap">
    <table class="table">
      <caption v-if="caption" class="sr-only">{{ caption }}</caption>
      <!-- Proporcoes fixas: sem elas o navegador aperta a coluna das taxas
           e quebra "A partir de 1,09% a.m" em duas linhas. -->
      <colgroup>
        <col style="width: 16.6%" />
        <col style="width: 21.4%" />
        <col style="width: 15.8%" />
        <col style="width: 46.2%" />
      </colgroup>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col" scope="col" class="table__cell table__cell--head">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.cells[0]">
          <th scope="row" class="table__cell" :class="`table__cell--${row.tone}`">
            {{ row.cells[0] }}
          </th>
          <td
            v-for="(cell, i) in row.cells.slice(1)"
            :key="i"
            class="table__cell"
            :class="`table__cell--${row.tone}`"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Se a tabela nao couber, ela rola dentro do proprio container —
   nunca empurra a largura da pagina. */
.table-wrap {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border: var(--border-width) solid var(--color-border);
}

.table__cell {
  padding: var(--space-4);
  border: var(--border-width) solid var(--color-border);
  font-size: 19.2px;
  line-height: var(--lh-body);
  font-weight: var(--fw-regular);
  text-align: center;
  vertical-align: middle;
}

.table__cell--head {
  color: var(--color-accent);
  font-weight: var(--fw-bold);
}

.table__cell--success {
  color: var(--color-success);
}

.table__cell--danger {
  color: var(--color-danger);
}

/* A primeira coluna e um <th scope="row"> — mantem o peso do rotulo. */
.table tbody th {
  font-weight: var(--fw-bold);
}
</style>
