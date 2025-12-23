# Ascension Ranch — Static Site (Starter)

This is a minimal static starter website you can upload to InfinityFree (or any static hosting).

Files added:
- `index.html` — main page
- `css/styles.css` — basic styles

If you prefer a React + Vite project (recommended to keep the site's interactive UI and Tailwind styles), I scaffolded a Vite React app in this folder.

Files added for React app:
- `package.json` — scripts and dependencies (Vite, React, Tailwind, lucide-react)
- `vite.config.js` — Vite configuration
- `postcss.config.cjs` / `tailwind.config.cjs` — Tailwind setup
- `src/` — React source (`main.jsx`, `App.jsx`, `index.css`)
- `index.html` — Vite entry HTML

Local preview
---------------
From the project folder run a simple static server (Python 3 required):

```bash
# Static preview (simple):
cd "/Users/bk/Desktop/Ascension Ranch Website"
python3 -m http.server 8000
# then open http://localhost:8000 in your browser

# React / Vite preview (recommended for development):
npm install
npm run dev
# open the dev server URL shown by Vite (usually http://localhost:5173)
```

Deploying to InfinityFree
-------------------------
1. Sign up or log in to InfinityFree and create a hosting account (choose a free subdomain or add your own domain).
2. In the Control Panel open the **File Manager**, or use FTP. InfinityFree provides FTP credentials in the Control Panel (host, username, password).
3. Upload the site files into the hosting account's `htdocs` directory. Ensure `index.html` is at the root of `htdocs`.
4. If using FTP, use an FTP client (FileZilla, Cyberduck) and the credentials from the control panel. Upload the entire contents of this folder (not the parent folder itself) into `htdocs`.
5. Visit your site at the domain/subdomain provided by InfinityFree.

Deploying a built React site to InfinityFree
------------------------------------------
- Build the app locally:

```bash
npm run build
# this creates a `dist/` folder containing static files
```

- Upload the contents of `dist/` into your InfinityFree account's `htdocs` folder (via File Manager or FTP). Ensure `index.html` from `dist/` is at the root of `htdocs`.

Notes specific to React/Tailwind build
-------------------------------------
- The provided `package.json` lists dependencies; run `npm install` before `npm run build`.
- Tailwind classes are used in `src/App.jsx`. Tailwind is configured with `tailwind.config.cjs` and `postcss.config.cjs`.
- InfinityFree hosts static sites fine — just upload the built static files.

Notes & recommendations
-----------------------
- InfinityFree is a free shared host with some limitations: background processes are not allowed and outbound emails may be restricted. For contact forms, use a third-party form service (e.g., Formspree, Getform) or test a PHP form on their platform.
- To enable HTTPS, use Cloudflare's free plan or check InfinityFree's SSL options in the control panel.
- If you want a build step (Sass, bundlers), build locally and upload the generated static files to `htdocs`.

Next steps I can help with
-------------------------
- Add pages (About, Bookings, Gallery)
- Add a contact form integrated with Formspree
- Create a ZIP for upload or generate a deployment script for FTP
- Connect a custom domain and configure SSL

- Build the React app and upload `dist/` to InfinityFree (I can create a ZIP and an FTP script next).
