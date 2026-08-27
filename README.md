# gl-geminus

Landing page GL Capital — Vue 3 + Vite.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
src/
  assets/
    styles/tokens.css   Design tokens (cores, tipografia, espacamento, formas)
    styles/base.css     Reset, foco visivel, utilitarios de acessibilidade
    img/                Assets placeholder (ver secao abaixo)
  components/
    ui/                 Blocos reutilizaveis, sem conhecimento de conteudo
    layout/             Navbar, rodape de contato, faixa de CTA
    sections/           Uma secao da landing page por arquivo
  data/site.js          Todo o conteudo e dados de contato
  views/                HomeView, PrivacyView
  router/               Rotas + titulo por rota + scroll no topo
```

Regra do projeto: **componentes nao trazem valores literais de cor, tamanho
ou espacamento** — tudo vem de `tokens.css`. Mudar a identidade visual e
mexer em um arquivo so.

### Breakpoints

Dois pontos de virada, usados de forma consistente:

| Largura | O que muda |
|---|---|
| `< 768px` | Escala tipografica reduzida, navbar com icone, tabela vira acordeao, cards empilham |
| `768–1023px` | Tabela comparativa, cards em 3 colunas, secoes ainda em coluna unica |
| `>= 1024px` | Rodape e secao institucional em duas colunas |
| `>= 1300px` | Secao "O que e Home Equity" em duas colunas com foto |

A folha e mobile-first: o layout base e o de telas pequenas e as media
queries adicionam a partir dai.

## Assets

As imagens e o logotipo em `src/assets/img/` foram fornecidos:

| Arquivo | Onde aparece |
|---|---|
| `logo_gl.svg` | Navbar (130x40, renderizado a 100x31) |
| `banner-DMmhqFDB.webp` | Banner do topo (916x450) |
| `person-giving-little-house-to-another-CTUW5DDB.webp` | Secao "O que e Home Equity" (652x454) |
| `gl-fachadadaempresa-C3ukrhig.webp` | Secao institucional (430x357) |
| `setas-pontilhadas-2Ey7Wu8G.webp` | Setas do zigue-zague em "Vantagens" (345x448, exibida a 308x400) |
| `icon-chat.svg` | Icone de contato da navbar mobile — **ainda placeholder** |

Nota: `gl-fachadadaempresa` (430x357) e exibida em um espaco de 720x598 no
desktop, ou seja, ampliada ~1,7x. Uma versao em resolucao maior deixaria a
secao mais nitida.

O texto da pagina de politica de privacidade e placeholder: a estrutura, a
tipografia e o espacamento estao prontos, o conteudo juridico precisa ser
inserido antes de publicar. O e-mail em `src/data/site.js` (`contact.email`)
tambem segue como exemplo.

## Acessibilidade

- HTML semantico: `header`/`nav`/`main`/`section`/`footer`, `h1`–`h3` em ordem.
- Link "pular para o conteudo" visivel ao receber foco.
- Foco visivel de 3px em todo elemento interativo.
- Acordeao com `<button>`, `aria-expanded` e `aria-controls`.
- Tabela com `<th scope>`, `<caption>` e rolagem interna (sem overflow na pagina).
- Alvos de toque de no minimo 44x44px no mobile.
- `prefers-reduced-motion` respeitado.
- Imagens decorativas com `alt=""` e `aria-hidden`; `iframe` do mapa com `title`.
