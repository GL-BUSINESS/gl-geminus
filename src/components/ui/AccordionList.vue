<script setup>
import { ref, useId } from 'vue'

/**
 * Acordeao de item unico aberto por vez (versao mobile da tabela comparativa).
 * Cada gatilho e um <button> real com aria-expanded/aria-controls, entao
 * funciona por teclado e e anunciado corretamente por leitores de tela.
 */
defineProps({
  items: { type: Array, required: true }, // [{ id, question, answer, tone }]
})

const uid = useId()
const openId = ref(null)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div class="accordion">
    <div v-for="item in items" :key="item.id" class="accordion__item">
      <h3 class="accordion__heading">
        <button
          class="accordion__trigger"
          type="button"
          :aria-expanded="openId === item.id"
          :aria-controls="`${uid}-panel-${item.id}`"
          :id="`${uid}-trigger-${item.id}`"
          @click="toggle(item.id)"
        >
          <span>{{ item.question }}</span>
          <span class="accordion__icon" :class="{ 'accordion__icon--open': openId === item.id }" aria-hidden="true" />
        </button>
      </h3>
      <div
        v-show="openId === item.id"
        class="accordion__panel"
        :class="`accordion__panel--${item.tone}`"
        :id="`${uid}-panel-${item.id}`"
        role="region"
        :aria-labelledby="`${uid}-trigger-${item.id}`"
      >
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  gap: var(--space-9);
  padding: var(--space-9) 0;
}

.accordion__heading {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

.accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: 100%;
  /* alvo de toque confortavel sem alterar o ritmo visual */
  min-height: 44px;
  padding: 0 0 var(--space-1);
  border: 0;
  background: transparent;
  color: var(--color-accent);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-weight: var(--fw-bold);
  text-align: center;
  transition: color var(--transition-base);
}

.accordion__trigger:hover {
  color: var(--color-accent-hover);
}

.accordion__icon {
  width: 9px;
  height: 9px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateY(-2px) rotate(45deg);
  transition: transform var(--transition-base);
}

.accordion__icon--open {
  transform: translateY(2px) rotate(-135deg);
}

.accordion__panel {
  padding-top: var(--space-1);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  text-align: center;
}

.accordion__panel--success {
  color: var(--color-success);
}

.accordion__panel--danger {
  color: var(--color-danger);
}
</style>
