# Teste Front-End Econverse

Página de e-commerce feita em React + TypeScript com Sass, seguindo o layout do Figma do teste. A vitrine consome a lista de produtos de um JSON e, ao clicar em um produto, abre um modal com as informações dele.

## Tecnologias

- React 19 + TypeScript
- Vite
- Sass (SCSS com variáveis e BEM)

Nenhuma biblioteca de UI foi utilizada.

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Como rodar

O projeto fica dentro da pasta `vaga-econverse`:

```bash
cd vaga-econverse
npm install
npm run dev
```

Acesse http://localhost:5173

## Como compilar

```bash
npm run build
npm run preview
```

O `build` faz a checagem de tipos do TypeScript e gera os arquivos de produção na pasta `dist/`. O `preview` serve esse build localmente em http://localhost:4173.

## Como testar

```bash
npm run lint
npm run build
```

- `npm run lint`: analisa o código com o ESLint.
- `npm run build`: falha se houver qualquer erro de tipagem do TypeScript.

Para testar manualmente:

- Clique em **Comprar** em um card: o modal abre com o nome, o preço e a descrição daquele produto.
- No modal, os botões **-** e **+** alteram a quantidade (mínimo 1).
- O modal fecha pelo **x** ou clicando fora dele.
- As setas da vitrine rolam os produtos.
- O layout se adapta a tablet e celular (DevTools → modo responsivo).

## Estrutura

```
vaga-econverse/src/
├── assets/       # Imagens e ícones exportados do Figma
├── components/   # Cada seção da página com seu .tsx e .scss
├── data/         # Cópia local do JSON de produtos
├── styles/       # Variáveis do Sass (cores, fontes, breakpoints)
├── types/        # Tipagem dos produtos
└── App.tsx       # Busca os produtos e monta a página
```

## Decisões

- **Fallback do JSON:** a URL dos produtos é bloqueada por CORS quando a página roda em localhost. Por isso, se a requisição falhar, a página usa uma cópia local do mesmo JSON, em `src/data`.
- **Preço:** o JSON envia o valor em centavos (15000 = R$ 150,00). O parcelamento em 2x é calculado a partir dele.
- **Preço antigo:** a API não envia o preço "de", então ele é calculado 7% acima do preço atual, como no layout.
- **Vitrine reutilizável:** o componente `Showcase` recebe os produtos por props, e a mesma busca alimenta as 3 vitrines da página.
- **Carrossel sem biblioteca:** usa `scroll-snap` do CSS e as setas chamam `scrollBy`.
- **Responsivo:** breakpoints em 1024px (tablet) e 600px (celular).

## SEO e HTML semântico

- `lang="pt-BR"`, `title` e `meta description`.
- Tags `header`, `nav`, `main`, `section`, `article` e `footer`.
- Um único `h1` na página (o título do banner).
- Imagens com `alt`, formulários com `label` e botões de ícone com `aria-label`.