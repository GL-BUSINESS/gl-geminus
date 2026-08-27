<script setup>
import photo from '../../assets/img/person-giving-little-house-to-another-CTUW5DDB.webp'
import BaseButton from '../ui/BaseButton.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import { whatIs, whatsappUrl } from '../../data/site'
</script>

<template>
  <section class="whatis">
    <img
      class="whatis__media"
      :src="photo"
      alt="Uma pessoa entregando a miniatura de uma casa para outra pessoa"
      loading="lazy"
    />

    <div class="whatis__content">
      <SectionHeading level="h2" tone="dark">{{ whatIs.title }}</SectionHeading>
      <p class="whatis__text">{{ whatIs.text }}</p>
      <BaseButton :href="whatsappUrl" external>{{ whatIs.ctaLabel }}</BaseButton>
    </div>
  </section>
</template>

<style scoped>
.whatis {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-10) var(--section-padding-x);
  background-color: var(--color-bg);
}

.whatis__media {
  width: 100%;
  height: 476px;
  object-fit: cover;
}

.whatis__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-5);
}

.whatis__text {
  margin: 0;
  max-width: 520px;
  font-size: var(--fs-lead);
  line-height: var(--lh-body);
  color: var(--color-text-primary-inverse);
}

/* 1300px e o minimo para as duas colunas: 684 (foto) + 100 (gap) +
   520 (texto). Abaixo disso o texto viraria uma coluna de uma palavra. */
@media (min-width: 1300px) {
  .whatis {
    grid-template-columns: 684px minmax(0, 1fr);
    gap: 100px;
    padding: var(--space-10) var(--space-10) var(--space-10) 0;
  }

  /* Sem o teto a coluna de texto se estica em monitores largos e o
     titulo descola do paragrafo. */
  .whatis__content {
    max-width: 547px;
  }
}

@media (max-width: 1299px) {
  .whatis {
    justify-items: center;
    text-align: center;
  }

  /* Abaixo de duas colunas a foto some, como na referencia:
     ela so faz sentido ao lado do texto. */
  .whatis__media {
    display: none;
  }

  .whatis__content {
    align-items: center;
    width: 100%;
  }

  .whatis__text {
    max-width: 60ch;
  }
}

/* CTA ocupa a largura toda no mobile — alvo de toque generoso.
   No tablet volta a ter largura propria para nao virar uma faixa. */
@media (max-width: 767px) {
  .whatis__content :deep(.btn) {
    width: 100%;
  }
}
</style>
