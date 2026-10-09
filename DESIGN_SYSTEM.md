# Mahmoud Atef — Vibrant Portfolio Design System

## Brief

An English-language personal developer portfolio: **modern, vivid, attractive, premium, professional**, while remaining honest about current skills and AI-assisted project work.

## UI/UX Pro Max research

The `ui-ux-pro-max` skill was used with a **Portfolio/Personal** product profile, a high-variance editorial layout, medium motion, and balanced density. Its searchable rules recommend readable 4.5:1 contrast, predictable navigation, visible focus, keyboard access, mobile-friendly layouts, limited decorative motion and reduced-motion support. The skill's portfolio palette uses neutral ink and an action-blue accent. We extended this base into brighter supporting tones to honor the requested vibrant aesthetic, rather than copying its monochrome recommendation unchanged. Search output is retained under `design-system/`.

## Direction

**Electric editorial** — oversized precise typography, dark cinematic first fold, real portrait photography, saturated project artwork, light spacious reading sections, violet/lime closing CTA.

The intent is vivid **without** rainbow gradients, exaggerated glassmorphism, fake statistics, or unnecessary widgets.

## Tokens

| Role | Hex | Use |
| --- | --- | --- |
| Night | `#171627` | Header + hero grounding |
| Ink | `#211E2D` | Body text |
| Paper | `#FAF9F6` | Work and skills backgrounds |
| Royal blue | `#5B53FF` | Primary creative anchor, POS and contact |
| Acid lime | `#D2FF67` | High-visibility CTA and graphic accent |
| Lavender | `#CFC3FF` | Editorial highlight and About section |
| Peach | `#FFAF92` | D4NGER Diploma artwork |
| Muted | `#615E6A` | Secondary body copy |

Typography: Space Grotesk (display), DM Sans (body), with system fallbacks. Spacing and radius tokens are in `styles.css`; radius 13–24px for selected visual surfaces and pills only for tags/CTAs.

## Structure

1. Hero — portfolio positioning and portrait
2. Bright transition ribbon — typographic wayfinding
3. Work — D4NGER-POS, D4NGER Diploma, Zamzam Travels, Abdullah Fekry
4. About — development journey, Al-Azhar University 2026, UP-Marketing Agency experience
5. Skills — foundations, learning now, exploratory technologies and creative software
6. Contact — email, WhatsApp, GitHub, resume download

## Proof and content fidelity

- The supplied portrait image is used without fabricating a person.
- Project cover graphics are **typographic editorial artwork**, not fake screenshots of existing projects.
- D4NGER-POS is described as **AI-assisted**; technologies in that project are **not** presented as individually mastered.
- React is "currently learning"; Node.js and Next.js are "next steps".
- LinkedIn is intentionally omitted: no link was provided.
- Avoid claims of a public D4NGER-POS demo, professional tenure or performance statistics.

## Motion, responsiveness, accessibility

- Hover elevation limited to project media and CTAs.
- Scroll progress is a subtle feedback layer, not scroll-jacking.
- CSS honors `prefers-reduced-motion`.
- Semantic `nav`/`main`/`section` landmarks, keyboard skip link, focus-visible indicators, 44px+ navigation controls on phones.
- Mobile menu exposes its expanded state and closes after choosing a section or pressing Escape.

## Editable versions

- `index.html`, `styles.css`, `script.js` — zero-build website.
- `react-vite/` — componentized React version for learning and further development.
- `Mahmoud_Atef_Vibrant_Preview.html` — one-file preview with image and DOCX embedded.

## D4NGER POS featured project update

The featured project preserves electric blue and lime while showing a real, user-provided cashier screenshot inside a compact browser frame. The entire screenshot and a clear `View case study` action lead to the public product case study. The destination is explicitly **not** an interactive POS demo. The screenshot has descriptive alt text and focus-visible states.


## Bilingual refinement (October 2026)
- Languages: English (LTR) and Egyptian Arabic (RTL), persisted locally, or `?lang=` selector.
- Arabic body / headings: Cairo with Tahoma fallback. English: original Space Grotesk / DM Sans pairing.
- Existing original portrait, project screenshots, colors, links and CV are preserved.
- Language switch uses actual buttons with accessible pressed state. Text-node translations do not destroy SVGs or functional anchors.
- Breakpoints are checked at 390 and 1440 pixels for both languages.
