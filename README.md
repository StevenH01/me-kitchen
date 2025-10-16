# Me Kitchen — Vietnamese Restaurant Website

A lightweight React single‑page site for a local Vietnamese restaurant (inspired by Saigon Ơi’s style). It’s mobile‑first, fast, and easy to customize: swap images, update business details, and deploy.

---

## Features

* **Clean, sectioned layout:** promo strip, hero, signature dishes, story, menu highlights, gallery, visit (location/hours/contact), CTA, footer.
* **Brand palette:** dark brown, bronze, cream, gold, orange, white (editable in CSS variables).
* **Logo support:** header brand area displays your provided logo.
* **Social ready:** Instagram/Facebook/YouTube/Yelp links.
* **Map embed:** Google Maps iframe pinned to your address + an “Open in Maps” link.
* **No backend required:** all static assets; easy to host on Vercel/Netlify/GitHub Pages.

---

## Tech Stack

* **React 18/19** (SPA)
* **CSS Modules (global stylesheet)** via `src/App.css`
* **react-icons** for icons

> If you prefer Next.js + Tailwind, there’s a matching scaffold we can migrate to later.

---

## Quick Start

### Prereqs

* Node.js **>= 18** and npm **>= 9**

### 1) Install deps

```bash
npm install
# if missing
npm i react-icons
```

### 2) Run

> Use the script that matches your setup (Vite vs CRA).

```bash
# Vite
npm run dev
# CRA
npm start
```

### 3) Build

```bash
# Vite
npm run build && npm run preview
# CRA
npm run build
```

---

## Project Structure

```
public/
  images/
src/
  App.js                       # main page markup
  App.css                      # theme + layout styles
  main.jsx / index.js          # app bootstrap (Vite/CRA)
```

---

## Configuration (edit in `src/App.js`)

At the top of the file you’ll find constants you can change:

```js
const RESTAURANT_NAME = "Me Kitchen";        // display name
const PHONE           = "(916) 555-1234";    // public phone
const ADDRESS         = "Fair Oaks, 2610 Fair Oaks Blvd, Sacramento, CA 95864";
const WAITLIST_URL    = "https://www.yelp.com/..."; // Yelp Waitlist (optional)
const INSTAGRAM_URL   = "https://instagram.com/your-handle";
const MAPS_URL        = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const HOURS = [
  { day: "Mon", time: "10:00 AM – 5:00 PM" },
  { day: "Tue", time: "10:00 AM – 5:00 PM" },
  { day: "Wed", time: "Closed" },
  { day: "Thu", time: "10:00 AM – 5:00 PM" },
  { day: "Fri", time: "10:00 AM – 5:00 PM" },
  { day: "Sat", time: "10:00 AM – 5:00 PM" },
  { day: "Sun", time: "10:00 AM – 5:00 PM" },
];
```

### Map Embed (inside the Visit section)

```jsx
<iframe
  title="Map"
  className="map"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps?hl=en&q=${encodeURIComponent(ADDRESS)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`}
/>
```

> For precise pins you can use a Place ID embed via Google Maps Embed API (requires API key).

---

## Styling & Theming

All theme colors are CSS custom properties in `src/App.css`:

```css
:root{
  --brown:#2d1f1a; --bronze:#b08d57; --cream:#f6efe7; --gold:#c7a008;
  --orange:#f97316; --white:#fff; --text:#312a25;
}
```

Update these to retheme instantly. Layout classes (`.container`, `.section`, `.cards-3`, `.tiles`, etc.) are defined in the same file.

### Logo

Place your exported logo at `public/logo-mek.png` (transparent PNG at ~2× render size). In the header, the brand block renders:

```jsx
<a href="#home" className="brand brand--stacked">
  <img src="/mek.png" alt="Me Kitchen by Saigon Oi!" className="brand-logo" />
  <span className="brand-name">{RESTAURANT_NAME}</span>
</a>
```

---

## Content Updates

* **Hero image:** replace `public/images/hero-placeholder.jpg`.
* **Signature dishes:** edit `SIGNATURES` array (name, image, blurb).
* **Menu preview:** edit `MENU_CATEGORIES` array.
* **Gallery:** replace `public/images/gallery-*.jpg`.
* **Socials:** change URLs in the footer and promo strip.

Use descriptive `alt` text for each image for accessibility & SEO.

---

## Accessibility & SEO

* Logical heading order (H1 → H2 → H3…).
* Sufficient contrast (gold on cream is used sparingly).
* `alt` text on all images.
* Add a favicon in `public/` and set `<title>`/`<meta name="description">` in your HTML template (`index.html`) if using Vite/CRA.
* Optional: add JSON‑LD `Restaurant` schema later for rich results.

---

## Deployment

### Vercel

1. Push to GitHub.
2. Import the repo on Vercel.
3. Framework preset: **Vite** or **Create React App** (match your setup).
4. Build command: `npm run build`. Output dir: `dist` (Vite) or `build` (CRA).

---

## Common Issues

* **Icons not rendering:** ensure `react-icons` is installed and imported from the correct set (e.g., `react-icons/lu`, `react-icons/si`).
* **Images not showing:** confirm files exist in `public/images` and paths match (case‑sensitive on Unix hosts).
* **Map shows wrong place:** verify the `ADDRESS` constant and the iframe `src` (use `encodeURIComponent`).

---

## Roadmap (nice‑to‑have)

* Dedicated `/menu` page with pricing
* Online ordering (Toast/Square/UberEats/DoorDash)
* Reservations / Yelp Waitlist integration
* Contact form (EmailJS or serverless function)
* Structured data (JSON‑LD) + OpenGraph images
* Light animations (Framer Motion) and scroll reveals

---

## License

MIT © 2025 Me Kitchen

---

## Credits

Design and implementation by Steven Ho.
