<script setup>
/**
 * Casca de secao: cuida do fundo, do padding vertical/horizontal e da
 * largura maxima do conteudo. Evita repetir esses valores em cada secao.
 */
defineProps({
  tone: { type: String, default: 'dark' }, // dark | light | none
  width: { type: String, default: 'content' }, // content (1037px) | wide (1296px) | full
})
</script>

<template>
  <section class="section" :class="`section--${tone}`">
    <div class="section__inner" :class="`section__inner--${width}`">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: var(--section-padding-y) var(--section-padding-x);
}

.section--dark {
  background-color: var(--color-bg);
  color: var(--color-text-primary-inverse);
}

.section--light {
  background-color: var(--color-bg-light);
  color: var(--color-text-primary);
}

.section--none {
  padding: 0;
}

.section__inner {
  margin-inline: auto;
}

.section__inner--content {
  max-width: var(--content-max);
}

.section__inner--wide {
  max-width: var(--container-max);
}

.section__inner--full {
  max-width: none;
}

/* No desktop as secoes de conteudo acompanham a largura da tela em vez de
   travar em 1037px: padding de 5% e conteudo com 80% da area interna — a
   mesma proporcao da referencia, que em 1440 da exatamente os 1037px de
   antes e continua crescendo em telas maiores.
   Abaixo de 1024px vale o comportamento fixo, ja validado no mobile. */
@media (min-width: 1024px) {
  .section {
    padding: 5%;
  }

  .section--none {
    padding: 0;
  }

  .section__inner--content {
    width: 80%;
    max-width: none;
  }
}
</style>
