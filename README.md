# Mahmoud Atef — Bilingual Vibrant Portfolio

A premium, responsive personal portfolio supporting English and Arabic with full RTL layout, the original portrait, real project links, and editable Word CV.

## Static website (recommended)
Upload the contents of this folder to GitHub Pages or any static host. Keep `index.html`, `styles.css`, `script.js`, `locale.js`, `assets/`, and `cv/` together. Open `index.html` locally to preview. `EN / عربي` switches language without reloading. The chosen language is saved in localStorage. You can also open `?lang=ar` or `?lang=en` to choose the initial language.

## React + Vite variant
The `react-vite/` subfolder contains a matching React implementation with the same language script, styles, portrait and CV.

```
cd react-vite
npm install
npm run dev
npm run build
```

The static site was checked on phone and desktop for both languages. The React source was updated to match but `npm run build` could not be run here because dependencies were unavailable; validate after installation.

## Content
Translate copy in `locale.js` (also copied to `react-vite/public/locale.js`). English text is the HTML/React original. Do not modify portfolio projects to claim features that have not been verified. The live D4NGER-POS link is a **case study**, not an online cashier application.

## Contact
WhatsApp: +20 155 350 2428. Email: MahamoudAtefDevs@gmail.com.
