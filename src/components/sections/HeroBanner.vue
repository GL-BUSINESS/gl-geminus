<script setup>
import heroDesktop from '../../assets/img/banner-DMmhqFDB.webp'
import { hero } from '../../data/site'
</script>

<template>
  <section class="hero">
    <!-- Imagem unica para todas as larguras: object-fit cover recorta
         mantendo o centro visivel. -->
    <img class="hero__media" :src="heroDesktop" alt="" aria-hidden="true" />

    <div class="hero__content">
      <h1 class="hero__title">{{ hero.title }}</h1>
      <p class="hero__subtitle">{{ hero.subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background-color: var(--color-bg);
}

.hero__media {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
}

.hero__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-5);
  padding: var(--navbar-height) var(--section-padding-x) 0;
  text-align: center;
}

/* 864px = 60% de 1440, a mesma medida do titulo na referencia.
   E o que produz a quebra em tres linhas com "crédito" na primeira. */
.hero__title {
  max-width: 864px;
  margin: 0;
  font-size: var(--fs-display);
  line-height: var(--lh-display);
  font-weight: var(--fw-black);
  letter-spacing: -0.02em;
  color: var(--color-text-primary-inverse);
}

.hero__subtitle {
  margin: 0;
  font-size: var(--fs-lead);
  line-height: var(--lh-tight);
  font-weight: var(--fw-semibold);
  color: var(--color-text-muted);
}

/* Entre o mobile e o desktop o titulo de 90px nao cabe: escala com a
   viewport ate voltar ao tamanho fixo em telas largas. */
@media (min-width: 768px) and (max-width: 1300px) {
  .hero__title {
    font-size: clamp(48px, 6.6vw, 90px);
    line-height: 1.02;
  }
}

@media (max-width: 767px) {
  .hero__media {
    height: 580px;
  }

  .hero__title {
    letter-spacing: -0.01em;
  }

  .hero__content {
    gap: var(--space-7);
    padding-top: var(--navbar-height-sm);
  }
}
</style>
