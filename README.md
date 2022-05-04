# Vue 3 Starter template

Another opinionated Vite starter template with [TailwindCSS](https://tailwindcss.com/)

This template is a personalized version of [Vitesse](https://github.com/antfu/vitesse) ❤️

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [yarn](https://yarnpkg.com/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/layouts)

- 🎨 [TailwindCSS](https://tailwindcss.com/)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, of course

<br>

See [Vitesse](https://github.com/antfu/vitesse) for full featureset.

## Dropped Features from [Vitesse](https://github.com/antfu/vitesse)

- ~~i18n~~
- ~~SSG~~
- ~~PWA~~
- ~~Markdown~~

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/) - With the [tailwind forms plugin](https://github.com/tailwindlabs/tailwindcss-forms).

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Try it now!

### Clone to local

```bash
npx degit benalink/vue3-starter-template my-vue-app
cd my-vue-app
yarn
```
