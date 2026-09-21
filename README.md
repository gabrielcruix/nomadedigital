# Formação Nômade Digital — Landing Page

Landing page de venda direta, estática (HTML/CSS/JS puro, sem build step).

## Estrutura

```
index.html          → toda a página, seção por seção (comentários indicam cada bloco)
assets/css/style.css → design system (cores, tipografia, layout, responsividade)
assets/js/main.js    → accordion (FAQ/objeções), scroll reveal, header e CTA sticky
assets/img/          → imagens (placeholders SVG — trocar pelos arquivos reais)
```

## Como editar

- **Textos**: edite diretamente em `index.html`. Cada seção tem um comentário
  `<!-- ===== NOME DA SEÇÃO ===== -->` indicando onde ela começa.
- **Preço**: procure por `price-now` e `price-was` dentro da seção `#oferta`
  (e o mesmo valor aparece no hero e no rodapé/`sticky-cta`).
- **Imagens**: troque os arquivos em `assets/img/` mantendo o mesmo nome
  (`placeholder-hero.svg`, `placeholder-autoridade.svg`), ou aponte o `src`
  da tag `<img>` para o novo arquivo (`.jpg`/`.webp` funcionam normalmente).
- **Depoimentos**: dentro da seção "Prova social", duplique um `.testi-card`
  e substitua nome, foto (`.testi-avatar img`) e texto. Remova o
  `.testi-placeholder-badge` quando o depoimento for real.
- **Cores**: todas as cores estão centralizadas em `:root` no topo de
  `style.css` (`--cream`, `--ink`, `--gold`, etc.).

## Rodar localmente

Qualquer servidor estático funciona, por exemplo:

```
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.
