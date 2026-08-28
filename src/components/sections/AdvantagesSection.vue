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
  /* A arte tem tamanho fixo e fica a 35% da largura do bloco — nao
     centrada. Em telas largas o bloco cresce e o centro se afasta das
     pontas das setas; os 35% mantem o encaixe em qualquer largura. */
  .advantages__arrows {
    display: block;
    position: absolute;
    top: -18px;
    left: 35%;
    width: 308px;
    height: 400px;
    pointer-events: none;
  }

  .advantages__list {
    grid-template-columns: 1fr;
    row-gap: 54px;
  }

  /* Zigue-zague em porcentagem, como na referencia: a largura e o recuo
     de cada item colocam o texto centrado a 27,5% / 75% / 25% / 75% do
     bloco. Assim o desenho acompanha a tela em vez de descolar. */
  .advantages__item:nth-child(1) { grid-row: 1; width: 45%; padding-left: 10%; }
  .advantages__item:nth-child(2) { grid-row: 2; width: 100%; padding-left: 50%; }
  .advantages__item:nth-child(3) { grid-row: 3; width: 50%; }
  .advantages__item:nth-child(4) { grid-row: 4; width: 100%; padding-left: 50%; }

  /* Bloco, e nao flex: como item flex o paragrafo encolhe ate o texto e
     o text-align nao tem o que centralizar — a linha curta do item 1
     ficava colada a esquerda em vez de centrada na coluna.
     O marcador some aqui, entao o flex nao faz falta. */
  .advantages__item {
    display: block;
    text-align: center;
  }

  .advantages__marker {
    display: none;
  }
}
</style>
