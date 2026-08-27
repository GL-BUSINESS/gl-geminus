<script setup>
import arrows from '../../assets/img/setas-pontilhadas-2Ey7Wu8G.webp'
import BaseSection from '../ui/BaseSection.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import { advantages } from '../../data/site'
</script>

<template>
  <BaseSection tone="light" width="content">
    <SectionHeading level="h2" tone="light">Vantagens do Home Equity</SectionHeading>

    <div class="advantages">
      <!-- Zigue-zague decorativo entre os itens. So aparece no layout de
           duas colunas; no mobile os marcadores numerados fazem esse papel. -->
      <img class="advantages__arrows" :src="arrows" alt="" aria-hidden="true" />

      <ul class="advantages__list">
        <li v-for="(item, i) in advantages" :key="item.lead" class="advantages__item">
          <span class="advantages__marker" aria-hidden="true">{{ i + 1 }}</span>
          <p class="advantages__text">
            <template v-if="item.prefix">{{ item.prefix }}</template>
            <strong>{{ item.lead }}</strong>{{ item.rest }}
          </p>
        </li>
      </ul>
    </div>
  </BaseSection>
</template>

<style scoped>
.advantages {
  position: relative;
  margin-top: var(--space-10);
}

.advantages__arrows {
  display: none;
}

.advantages__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
  list-style: none;
}

.advantages__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.advantages__marker {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-top: 2px;
  border-radius: var(--radius-circle);
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  line-height: 1;
}

.advantages__text {
  margin: 0;
  font-size: var(--fs-lead);
  line-height: var(--lh-body);
  color: var(--color-text-primary);
}

@media (min-width: 1024px) {
  /* 308x400 e o tamanho em que a arte foi desenhada; a ponta de cada seta
     cai entre duas linhas da lista. Por isso o gap de 54px e o recuo de
     -18px sao fixos: mudar um desalinha as setas do texto. */
  .advantages__arrows {
    display: block;
    position: absolute;
    top: -18px;
    left: 50%;
    width: 308px;
    height: 400px;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .advantages__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--space-8);
    row-gap: 54px;
  }

  /* Zigue-zague: itens impares na coluna da esquerda, pares na direita,
     cada um deslocado uma linha para baixo do anterior. */
  .advantages__item:nth-child(1) { grid-column: 1; grid-row: 1; }
  .advantages__item:nth-child(2) { grid-column: 2; grid-row: 2; }
  .advantages__item:nth-child(3) { grid-column: 1; grid-row: 3; }
  .advantages__item:nth-child(4) { grid-column: 2; grid-row: 4; }

  .advantages__item {
    text-align: center;
  }

  .advantages__marker {
    display: none;
  }
}
</style>
