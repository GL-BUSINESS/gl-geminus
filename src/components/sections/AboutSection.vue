<script setup>
import photo from '../../assets/img/gl-fachadadaempresa-C3ukrhig.webp'
import SectionHeading from '../ui/SectionHeading.vue'
import { about } from '../../data/site'
</script>

<template>
  <section class="about">
    <div class="about__content">
      <SectionHeading level="h2" tone="dark">GL Capital: {{ about.title }}</SectionHeading>
      <p class="about__text">{{ about.text }}</p>
    </div>

    <img
      class="about__media"
      :src="photo"
      alt="Fachada do escritório da empresa"
      loading="lazy"
    />
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--color-bg);
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  justify-content: center;
  padding: var(--space-10) var(--section-padding-x);
}

.about__text {
  margin: 0;
  max-width: 576px;
  font-size: var(--fs-lead);
  line-height: var(--lh-body);
  color: var(--color-text-primary-inverse);
}

.about__media {
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
}

@media (min-width: 1024px) {
  .about {
    grid-template-columns: 1fr 1fr;
  }

  .about__media {
    min-height: 518px;
  }
}

/* Fora do layout de duas colunas a secao e so texto: empilhada, a foto
   viraria uma faixa larga sem funcao. */
@media (max-width: 1023px) {
  .about__media {
    display: none;
  }
}
</style>
