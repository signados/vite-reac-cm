# React + TypeScript + Vite + Docker + Azure

## Vite template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- npm run build y te genera el index el js y el html

## Vite test React

npm install -D vitest

Añadir en package.json  "test": "vitest" y ejecutar npm run test

Instalar: npm i -D jsdom @testing-library/react

Tocar el vite.config para añadir test. (reference es una directiva de typescript)

```js
/// < reference types='vitest'>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",

  }
})
```

- Más info: https://vitest.dev/

## Docker

docker init

- ? What application platform does your project use? Node
- ? What version of Node do you want to use? 21.6.2
- ? Which package manager do you want to use? npm
- ? Do you want to run "npm run build" before starting your server? Yes
- ? What directory is your build output to? (comma-separate if multiple) dist
- ? What command do you want to use to start the app? npm run preview
- ? What port does your server listen on? 4173

docker compose up –build

En el dockerfile están los comandos que se ejecutan en el paquete. Hay que modificarlo

1º Problema con Vite: npm i skips devDependencies when NODE_ENV=production is set and because the create-vite template includes vite in devDependencies, Vite won't be installed. https://docs.npmjs.com/cli/v9/commands/npm-install#:~:text=With%20the%20%2D%2Dproduction,to%20a%20project. Modificando el dockerfile para que lo instale se lo traga. (Use production node environment by default)
(Ver el dockerfile, he añadido las siguientes lineas)
- ENV NODE_ENV development
- COPY package*.json ./
- RUN npm install

2º Problema con Vite:
- Hacer que Vite escuche en todas las interfaces de red: Por defecto, Vite está configurado para escuchar solo en localhost dentro del contenedor. Para permitir que otros dispositivos en tu red accedan a tu aplicación, necesitas configurar Vite para que escuche en todas las interfaces de red. Esto se puede hacer agregando el flag --host al comando vite preview en tu package.json. Cambiaría a algo como esto: "preview": "vite preview --host"

Más info: https://docs.docker.com/reference/cli/docker/init/

## Ruteo

-  npm i react-router-dom
- import { Link, Route, Routes } from 'react-router-dom'
- Ejemplo:
```html
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/search-page" element={<SearchPage />} />
</Routes>
```
- Todo envuelto en BrowserRouter. import { BrowserRouter } from 'react-router-dom'
- Más info: https://reactrouter.com/en/main

## Variables de entorno

- Tiene que empezar por VITE_
- Y se accede: const envVar = import.meta.env.VITE_ENV_VAR;
- Recomendable ignorar el .env y crear un -env.example como guía
- Más info: https://es.vitejs.dev/guide/env-and-mode

## Tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- y lo añades en index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
- Ejemplo de componentes: https://tailwindcomponents.com/component/search-input

