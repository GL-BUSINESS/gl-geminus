<script setup>
import { computed } from 'vue'
import { contact } from '../../data/site'

const mapSrc = computed(
  () => `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`,
)
const telHref = computed(() => `tel:${contact.phoneDigits}`)
</script>

<template>
  <footer class="footer" id="contato">
    <div class="footer__panel footer__panel--map">
      <h2 class="footer__title">Entre em contato conosco!</h2>
      <iframe
        class="footer__map"
        :src="mapSrc"
        title="Mapa com a localização do escritório"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>

    <div class="footer__panel footer__panel--info">
      <div class="footer__info">
        <div class="footer__block">
          <h3 class="footer__label">Endereço</h3>
          <address class="footer__value">
            <span v-for="line in contact.addressLines" :key="line">{{ line }}<br /></span>
          </address>
        </div>

        <div class="footer__block">
          <h3 class="footer__label">Telefone</h3>
          <p class="footer__value">
            <a class="footer__link" :href="telHref">{{ contact.phone }}</a>
          </p>
        </div>

        <hr class="footer__rule" />

        <div class="footer__legal">
          <router-link class="footer__link footer__link--policy" to="/politica-de-privacidade">
            Política de Privacidade
          </router-link>
          <p class="footer__cnpj">{{ contact.cnpj }}</p>
          <p class="footer__cnpj">{{ contact.legalName }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: 1fr;
  background-color: var(--color-surface-dark);
}

.footer__panel {
  padding: var(--space-11) 0;
}

.footer__title {
  margin: 0;
  padding-left: var(--space-12);
  font-size: var(--fs-h1-fixed);
  line-height: var(--lh-heading-fixed);
  font-weight: var(--fw-bold);
  color: var(--color-text-secondary);
}

.footer__map {
  width: calc(100% - var(--space-12));
  height: 500px;
  margin-top: var(--space-9);
  margin-left: var(--space-12);
  border: 0;
}

.footer__panel--info {
  display: flex;
  align-items: center;
}

.footer__info {
  width: 100%;
  max-width: 360px;
  margin-left: 108px;
}

.footer__block + .footer__block {
  margin-top: var(--space-7);
}

.footer__label {
  margin: 0;
  font-size: var(--fs-h2);
  line-height: var(--lh-body);
  font-weight: var(--fw-bold);
  color: var(--color-accent);
}

.footer__value {
  margin: 0;
  padding-top: 10px;
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-style: normal;
  color: var(--color-text-secondary);
}

.footer__link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-base);
}

.footer__link:hover {
  color: var(--color-accent-hover);
}

.footer__rule {
  margin: var(--space-7) 0 0;
  border: 0;
  border-top: 1px solid var(--color-border-subtle);
}

.footer__legal {
  padding-top: var(--space-5);
}

.footer__link--policy {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: var(--fs-sm);
}

.footer__cnpj {
  margin: 0;
  font-size: var(--fs-sm);
  line-height: var(--lh-body);
  color: var(--color-text-secondary);
}

@media (min-width: 1024px) {
  .footer {
    grid-template-columns: 1fr 1fr;
  }
}

/* Entre 1024 e 1300 as duas colunas continuam, mas o recuo de 144px
   comeria a coluna do titulo — reduz para o padding padrao da secao. */
@media (min-width: 1024px) and (max-width: 1299px) {
  .footer__title {
    padding-left: var(--section-padding-x);
  }

  .footer__map {
    width: calc(100% - var(--section-padding-x));
    margin-left: var(--section-padding-x);
  }

  .footer__info {
    margin-left: var(--section-padding-x);
  }
}

@media (max-width: 1023px) {
  .footer__panel {
    padding: var(--space-10) var(--section-padding-x);
  }

  .footer__panel--info {
    padding-top: 0;
  }

  .footer__title {
    padding-left: 0;
    text-align: center;
  }

  .footer__map {
    width: 100%;
    margin-left: 0;
  }

  .footer__info {
    max-width: none;
    margin-left: 0;
  }
}
</style>
