skilleamainpage
================

> **Nota:** La rama predeterminada es `main`. Ahí es donde se encuentran los últimos cambios de la landing page y la sección "Nosotros".

## 📄 Where is the README with the commands?

This document (`README.md`) lives in the root of the repository. Whenever you clone or open the project, you can find it alongside files like `package.json` and `vite.config.ts`. All of the commands you need to install dependencies, build the app, and open a preview server are documented below.

## 🚀 Local setup

1. Make sure you have a recent LTS version of [Node.js](https://nodejs.org) installed (the project was last verified with Node 18).
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Build the production bundle:

   ```bash
   npm run build
   ```

4. (Optional) Start a local development server with hot reloading:

   ```bash
   npm run dev
   ```

## 🌐 Previewing the site in your browser

To preview the production build from outside the container (for example, through Bolt or a forwarded port), run:

```bash
npm run preview:public
```

The command runs `vite preview` bound to `0.0.0.0:4173`. After starting the server:

1. Forward port **4173** in your environment.
2. Open `http://localhost:4173` (or the network URL that Vite prints) in your browser.

You should now see the latest version of the Skillea landing page, including the "Nosotros" section and updated color palette.
