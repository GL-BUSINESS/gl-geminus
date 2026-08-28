/**
 * Conteudo da landing page.
 * Centralizado aqui para que as secoes sejam apenas apresentacao —
 * trocar copy ou dados de contato nao exige mexer em componente.
 */

/** Nome da marca exibido nos textos da pagina. */
export const brand = 'Gl Exponencial'

export const contact = {
  // `phone` e o texto exibido; `phoneDigits` alimenta o link tel:.
  phone: '+55 (47) 99911-0213',
  phoneDigits: '+5547999110213',
  addressLines: [
    'Rua Dos Pioneiros, 220 - Centro Sala 2',
    'Rio do Sul, Santa Catarina 89160063',
    'Brasil',
  ],
  cnpj: 'CNPJ 43.628.946/0001-00',
  legalName: 'Gl Exponencial LTDA',
  // Numero e mensagem usados no link de contato do topo e dos CTAs.
  whatsappNumber: '5547999110213',
  whatsappMessage: 'Ola, gostaria de saber mais sobre credito com garantia de imovel.',
  mapQuery: 'Rua Dos Pioneiros, 220 - Centro, Rio do Sul - SC, 89160-063',
}

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${encodeURIComponent(contact.whatsappMessage)}`

export const hero = {
  title: 'Captação de crédito com garantia de imóvel',
  subtitle: 'Segurança. Compromisso. Transparência.',
}

export const whatIs = {
  title: 'O que é Home Equity?',
  text: 'É uma modalidade de crédito que permite usar o valor do seu imóvel como garantia para obter recursos financeiros. É uma excelente opção para quem precisa de valores mais altos, com taxas de juros menores e prazos mais longos do que empréstimos pessoais ou cartões de crédito.',
  ctaLabel: 'Saiba Mais',
}

export const steps = [
  { number: '01', title: 'Simulação', text: 'Faça uma simulação online e descubra quanto você pode liberar do valor do seu imóvel.' },
  { number: '02', title: 'Análise', text: 'Nossa equipe avalia o seu pedido e entra em contato para confirmar os detalhes.' },
  { number: '03', title: 'Avaliação do Imóvel', text: 'Um especialista faz a avaliação do seu imóvel para definir o valor do crédito.' },
  { number: '04', title: 'Proposta Realizada', text: 'Você recebe uma proposta com as melhores condições de prazo, parcelas e taxas.' },
  { number: '05', title: 'Liberação do Crédito', text: 'Após a aprovação, o dinheiro é depositado na sua conta de forma rápida e segura.' },
]

/** `lead` sai em negrito; `rest` complementa a frase. */
export const advantages = [
  { prefix: 'Libera ', lead: 'até 60%', rest: ' do valor do imóvel' },
  { lead: 'Use o dinheiro para o que precisar:', rest: ' reformas, investimentos, pagamentos de dívidas, etc.' },
  { lead: 'Condições personalizadas:', rest: ' prazo e parcelas que se encaixam no seu orçamento.' },
  { lead: 'Segurança total:', rest: ' seu imóvel continua sendo seu durante todo o processo.' },
]

export const comparison = {
  title: 'Por que o Home Equity é a melhor opção pra você?',
  subtitle: 'Veja a comparação com outras linhas de crédito.',
  columns: ['Modalidade', 'Taxas', 'Prazo', 'Vantagens'],
  rows: [
    { tone: 'success', cells: ['Home Equity', 'A partir de 1,09% a.m', 'Até 240 meses', 'Juros baixos, prazo longo, seguro'] },
    { tone: 'danger', cells: ['Financiamento', 'A partir de 1,79% a.m', 'Até 60 meses', 'Sem garantia, mas com juros altos'] },
    { tone: 'danger', cells: ['Consignado', 'A partir de 1,29% a.m', 'Até 96 meses', 'Juros baixos, mas descontado direto do seu salário'] },
  ],
}

export const reasons = [
  { title: 'Taxas competitivas', text: 'Juros mais baixos que empréstimos pessoais e cartões de crédito.' },
  { title: 'Prazo flexível', text: 'Escolha o melhor período para pagar, de acordo com sua realidade.' },
  { title: '22 fundos para captação', text: 'Contamos com mais de 22 fundos imobiliários diferentes para conseguir a melhor condição para você!' },
]

export const about = {
  title: 'Segurança e Expertise em Home Equity',
  text: 'Somos especialistas em Home Equity, com anos de experiência no mercado financeiro. Nosso compromisso é oferecer soluções personalizadas, seguras e transparentes, para que você aproveite o valor do seu imóvel da melhor forma possível.',
}
