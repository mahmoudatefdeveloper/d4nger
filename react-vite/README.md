# React + Vite variant

This is the React component version of the vibrant personal portfolio. The static root project offers a zero-build publishing alternative.

Run with Node.js and internet connectivity:

```
npm install
npm run dev
npm run build
```

The Vite config uses a relative base path for static hosting under subfolders (e.g. GitHub Pages). Local assets and the Word resume are inside `public/`. Components are functions in `src/App.jsx`; global styles are in `src/styles.css`.

**QA status:** JSX was parsed and transpiled successfully. npm dependencies were not available to install in this environment, so final React production execution must be confirmed after `npm install`.
