<script setup>
import { computed } from 'vue'

/**
 * Botao unico do design system.
 * Renderiza <a> quando recebe `href`/`to` e <button> caso contrario,
 * para que links continuem sendo links (navegacao, abrir em nova aba, teclado).
 */
const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary | link
  href: { type: String, default: null },
  to: { type: [String, Object], default: null },
  external: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const bindings = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) {
    return {
      href: props.href,
      ...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    }
  }
  return { type: props.type }
})
</script>

<template>
  <component :is="tag" class="btn" :class="`btn--${variant}`" v-bind="bindings">
    <span class="btn__label"><slot /></span>
    <span v-if="variant === 'primary'" class="btn__arrow" aria-hidden="true">&#8594;</span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  border: 0;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-weight: var(--fw-medium);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color var(--transition-base), color var(--transition-base);
}

.btn--primary {
  min-height: var(--btn-height);
  padding: 0 var(--btn-padding-x);
  background-color: var(--color-accent);
  color: var(--color-on-accent);
  font-size: var(--fs-sm);
}

.btn--primary:hover {
  background-color: var(--color-accent-hover);
  color: var(--color-on-accent);
}

.btn--primary:active {
  background-color: var(--color-accent-active);
}

.btn--link {
  padding: var(--space-2) 0;
  background-color: transparent;
  color: var(--color-accent);
  font-size: var(--fs-body);
  line-height: var(--lh-tight);
}

.btn--link:hover {
  color: var(--color-accent-hover);
}

.btn__arrow {
  font-size: 1.05em;
  line-height: 1;
  transition: transform var(--transition-base);
}

.btn--primary:hover .btn__arrow {
  transform: translateX(3px);
}
</style>
