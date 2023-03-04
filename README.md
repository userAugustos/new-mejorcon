# new-mejorcon

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Mejor con Salud is a website that provide articles about all fields in health care

*Since this is a challenge, i will be writing down some insights, sources and etc...*

[first thing I read: SSR and NEXTJS](https://webera.blog/next-js-conceitos-de-ssr-e-roteamento-b%C3%A1sico-d22b32bdc0bf)

Quando li a descrição do desafio, inicialmente pensei em começar apenas com o vite, que usa webpack, mas Nextjs parece ser mais rápido e com algumas práticas para usar coisas como CSR ou SSR. Talvez eu vá com vite ou nextjs.
No fim, todos vão depender de como aplico, o que importa aqui é onde e como vou aplicar o SSR.

Depois de ler as docs de alguns plugins com Vite, vite-plugin-ssr e vite-plugin-tailwind, percebi que de certa forma, principalmente se é a primeira vez que vai implementar algo assim com vite, os plugins são algo a parte, aqui está um pensamento que tive hoje a tarde:

    vite realmente só entra para resolver problemas com bundling, server start, alocação enorme de memória do CRA ou webpack com qualquer coisa ou Parcel, até mesmo next.
    vite com swc é maravilhoso, rust-based vai ganhar o mundo, porém api pra plugins, HMR, simplesmente overkill e plugins que tem 30 issues de problemas com outros plugins
    além de cada um requerer sua configuração.

Isso foi só um pensamento, ainda estou apaixonado com Vite, mas não para aprender a usar plugin X aleatóriamente, se voltarmos no histórico de commits, consegui fazer algo funcional com tailwind e ssr routing, mas... Não bonito, ou com boa DX


### Repensando

Com o background que tenho em Nextjs, consigo fazer esse site em 8hrs, dois simples SSR, talvez até SSG, 1 hook, e bastante estudo de tailwind, vou tentar deixar a pagina de posts, mais bonita.
Então vamos lá:

- O Maior problema que posso ter aqui, é com tailwind, eu não vou mudar pra SCSS seria confortável, mas tailwind é belo também, então vamos de passo a passo:

- O que vai aconter:
  - [ ] Mobile First (Everywere)
  - [x] Dark Mode
  - [ ] Header Como a do site oficial
  - [ ] Mudar os posts da página inical para ficar como do dev.to (acho bem legal)
  - [ ] Alterar posição de itens na leitura de um post
  - [ ] Remover completamente aquela seção infinita de posts sugeridos no fim de post (ou é anúncio, não sei)

Dia 2 e sem duvidas, o maior problema é a curva de aprendizado com tailwind, pra fazer algo bonito e responsivo, os componentes prontos em coisas como de codesandbox ou tailwindcomponents, não são tão úties, te destraem e precisam de adaptação pra ser uma solução que faça sentido

Ontem li dois artigos sobre SEO, já que é importante em qualquer página profissional e será bem avaliado nesse teste:

https://blog.logrocket.com/how-next-js-can-help-improve-seo/

https://neilpatel.com/br/blog/melhore-seu-seo/

https://www.greengeeks.com/blog/html-tags-for-seo/

Também encontrei essa lib, que não vou usar, mas vou me basear na forma como ele gera as tags e organiza para o melhor SEO, essa lib é: https://github.com/catnose99/next-head-seo
e ela usa as melhores práticas do Google Webmaster Guidelines
