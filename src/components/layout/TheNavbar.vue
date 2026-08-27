<script setup>
import logo from '../../assets/img/logo_gl.svg'
import chatIcon from '../../assets/img/icon-chat.svg'
import { whatsappUrl } from '../../data/site'
</script>

<template>
  <header class="navbar">
    <nav class="navbar__inner" aria-label="Principal">
      <router-link to="/" class="navbar__brand">
        <img :src="logo" class="navbar__logo" alt="GL Exponencial — página inicial" width="130" height="40" />
      </router-link>

      <!-- Desktop: rotulo textual. Mobile: icone com nome acessivel. -->
      <a
        class="navbar__cta navbar__cta--desktop"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Entrar em contato
      </a>

      <a
        class="navbar__cta navbar__cta--mobile"
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato"
      >
        <img :src="chatIcon" alt="" width="40" height="40" />
      </a>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-surface);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  min-height: var(--navbar-height);
  /* Padding vertical menor que o recuo visual de 25px: o alvo de toque de
     44px do CTA ja ocupa o miolo, e 25px empurrariam a barra para 94px. */
  padding: var(--space-4) var(--space-8) var(--space-4) 80px;
}

.navbar__brand {
  display: inline-flex;
  align-items: center;
}

.navbar__logo {
  width: 100px;
  height: auto;
}

.navbar__cta {
  color: var(--color-accent);
  font-size: var(--fs-body);
  line-height: var(--lh-tight);
  transition: color var(--transition-base);
}

.navbar__cta:hover {
  color: var(--color-accent-hover);
}

.navbar__cta--desktop {
  /* alvo de toque de 44px sem deslocar o texto */
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}

.navbar__cta--mobile {
  display: none;
}

@media (max-width: 767px) {
  .navbar__inner {
    min-height: var(--navbar-height-sm);
    padding: var(--space-4) var(--space-5) var(--space-4) var(--space-5);
  }

  .navbar__cta--desktop {
    display: none;
  }

  .navbar__cta--mobile {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
  }
}
</style>
