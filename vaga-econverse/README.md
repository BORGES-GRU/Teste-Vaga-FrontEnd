# Teste Front-End Econverse

Página de e-commerce feita em React + TypeScript com Sass, seguindo o layout do Figma do teste. A vitrine consome a lista de produtos de um JSON e, ao clicar em um produto, abre um modal com as informações dele.

## Tecnologias

- React 18 + TypeScript
- Vite
- Sass (SCSS com variáveis e BEM)

Nenhuma biblioteca de UI foi utilizada.

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Como gerar o build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/   # Cada seção da página com seu .tsx e .scss
├── data/         # Cópia local do JSON de produtos
├── styles/       # Variáveis do Sass (cores, fontes, breakpoints)
├── types/        # Tipagem dos produtos
└── App.tsx       # Busca os produtos e monta a página
```

## Decisões

- **Fallback do JSON:** a URL dos produtos é bloqueada por CORS quando a página roda em localhost. Por isso, se a requisição falhar, a página usa uma cópia local do mesmo JSON, em `src/data`.
- **Preço:** o JSON envia o valor em centavos (15000 = R$ 150,00). O parcelamento em 2x é calculado a partir dele.
- **Vitrine reutilizável:** o componente `Showcase` recebe os produtos por props, e a mesma busca alimenta as 3 vitrines da página.
- **Carrossel sem biblioteca:** usa `scroll-snap` do CSS e as setas chamam `scrollBy`.
- **Responsivo:** breakpoints em 1024px (tablet) e 600px (celular).

## SEO e HTML semântico

- `lang="pt-BR"`, `title` e `meta description`.
- Tags `header`, `nav`, `main`, `section`, `article` e `footer`.
- Um único `h1` na página (o título do banner).
- Imagens com `alt` e formulário com `label`.