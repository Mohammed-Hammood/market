# Market app
- React app download displays different products,
- can filter, shows how many products per page, search by title, brand name, or description. 
- The application can be easily installed on mobile devices.
- The application deployed on [https://online-market-1.vercel.app](https://online-market-1.vercel.app)


### Stack
- `Backend` NodeJs, Express
- `Frontend` React, TypeScript, Effector, clsx, Sass

## How to install the application?
- Clone the application to your locall machine `git clone repository_url`
- Install the dependances `yarn install` 
- Run the application `yarn dev`
- Port should be one of `5173`, `3000`, `3001` to avoid `CORS` errors.

## How to install the application on mobile devices?
- Open the https://online-market-1.vercel.app in your browser and install it from options



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
