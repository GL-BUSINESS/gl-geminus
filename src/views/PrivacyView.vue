<script setup>
import ContactCta from '../components/layout/ContactCta.vue'

/**
 * Estrutura da pagina de politica de privacidade.
 * O texto legal e placeholder — substitua pelo texto juridico oficial
 * antes de publicar. A marcacao e a tipografia ja estao no formato final.
 */
const sections = [
  {
    heading: null,
    paragraphs: [
      'A sua privacidade é importante para nós. Descreva aqui o compromisso da empresa com a privacidade dos dados coletados no site e nos demais canais que a empresa opera.',
      'Explique em quais situações informações pessoais são solicitadas, por quais meios e com qual finalidade, deixando claro que o titular é informado sobre a coleta e o uso dos dados.',
      'Descreva por quanto tempo os dados são retidos, quais medidas protegem o armazenamento e como a empresa evita perdas, acessos indevidos, divulgação ou modificação não autorizada.',
    ],
  },
  {
    heading: 'Cookies e publicidade',
    paragraphs: ['Liste aqui os serviços de terceiros utilizados e o que cada um coleta:'],
    list: [
      'Serviço de anúncios utilizado e qual cookie ele grava no navegador.',
      'Onde o usuário encontra a documentação oficial de privacidade desse serviço.',
      'Por que a publicidade é usada e como ela é personalizada.',
      'Como funcionam os cookies de rastreamento de parceiros afiliados.',
    ],
  },
  {
    heading: 'Compromisso do usuário',
    paragraphs: ['O usuário se compromete a fazer uso adequado dos conteúdos disponibilizados, e em caráter enunciativo mas não limitativo:'],
    list: [
      'A) Não se envolver em atividades ilegais ou contrárias à boa-fé e à ordem pública;',
      'B) Não difundir conteúdo de natureza discriminatória, ilegal ou que atente contra os direitos humanos;',
      'C) Não causar danos aos sistemas físicos e lógicos da empresa, de seus fornecedores ou de terceiros.',
    ],
  },
  {
    heading: 'Mais informações',
    paragraphs: [
      'Oriente o usuário sobre como proceder em caso de dúvida e informe o canal oficial de contato do encarregado de dados.',
      'Esta política é efetiva a partir de [data].',
    ],
  },
]
</script>

<template>
  <article class="policy">
    <!-- shell: container centralizado de 1152px.
         inner: coluna de leitura de 691px, alinhada a esquerda dentro dele. -->
    <div class="policy__shell">
      <div class="policy__inner">
        <h1 class="policy__title">Política de privacidade e termos de uso</h1>

        <section v-for="(section, i) in sections" :key="i" class="policy__section">
          <h2 v-if="section.heading" class="policy__heading">{{ section.heading }}</h2>
          <p v-for="p in section.paragraphs" :key="p" class="policy__text">{{ p }}</p>
          <ul v-if="section.list" class="policy__list">
            <li v-for="item in section.list" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
    </div>
  </article>

  <ContactCta />
</template>

<style scoped>
.policy {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  padding-block: var(--space-12) var(--space-10);
}

.policy__shell {
  max-width: 1152px;
  margin-inline: auto;
  padding-inline: var(--space-12);
}

/* Sem margem automatica: a coluna encosta a esquerda do shell, o que
   deixa o texto em x=288 numa tela de 1440 — como no original. */
.policy__inner {
  max-width: 691px;
}

.policy__title {
  margin: 0;
  font-size: var(--fs-h2);
  line-height: var(--lh-body);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  text-wrap: balance;
}

.policy__section {
  margin-top: var(--space-8);
}

.policy__heading {
  margin: 0 0 var(--space-3);
  font-size: var(--fs-lead);
  line-height: var(--lh-body);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
}

.policy__text {
  margin: 0 0 var(--space-6);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--color-surface-dark);
}

.policy__text:last-child {
  margin-bottom: 0;
}

.policy__list {
  margin: 0;
  padding-left: var(--space-8);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--color-surface-dark);
}

.policy__list li + li {
  margin-top: var(--space-3);
}

/* Abaixo de 1152px o recuo de 144px comeria a coluna de leitura. */
@media (max-width: 1151px) {
  .policy__shell {
    padding-inline: var(--section-padding-x);
  }
}

@media (max-width: 767px) {
  .policy {
    padding-top: calc(var(--navbar-height-sm) + var(--space-10));
  }
}
</style>
