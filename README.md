# Nômade Digital — Landing Page

Landing page de venda direta, estática (HTML/CSS/JS puro, sem build step).

## Estrutura

```
index.html           → toda a página, seção por seção (comentários numerados indicam cada bloco)
assets/css/style.css  → todo o design (cores, tipografia, animações, responsividade)
assets/js/main.js     → accordion do FAQ e carrossel dos módulos
assets/img/           → fotos reais (Gabriel, viagens, depoimentos) e logo
```

## Como editar

- **Textos**: edite diretamente em `index.html`. Cada seção tem um comentário
  `<!-- ① NOME DA SEÇÃO -->` indicando onde ela começa.
- **Preço**: aparece em três lugares — hero (`.hero-price`), oferta
  (`.price-num` dentro de `#pricing`) e CTA final (`.fcta .price-num`).
- **Imagens**: troque os arquivos em `assets/img/` mantendo o mesmo nome, ou
  aponte o `src` da tag `<img>` para o novo arquivo.
- **Depoimentos**: as capturas de WhatsApp ficam em `.it-card img` (seção
  "Prova real") e `.pp-card img` / `.barca-card img` (seção de oferta).
  Basta trocar o arquivo de imagem correspondente.
- **Módulos**: cada card do carrossel é um `.mod-slide` dentro de
  `#carousel` — duplique/edite o bloco para adicionar ou alterar um módulo.
- **Bônus**: cada `.bonus-card` tem uma capa em SVG inline (fácil de reskinar
  as cores) e um corpo com nome, valor "de" e descrição.
- **Cores**: centralizadas em `:root` no topo de `style.css` (`--green`,
  `--dark`, `--bg`, etc.).

## Rodar localmente

Qualquer servidor estático funciona, por exemplo:

```
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.
