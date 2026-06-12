# zerostep-landing

The apex landing page for **zerostep.cc** — deployed on Cloudflare Pages (free tier).

A **Three.js** scene (loaded as a static CDN ES module — no build step, no server):
a slowly rotating spiral-galaxy / accretion disk — ~14k particles in 2 logarithmic
spiral arms, dense gold core fading to amber/ember at the rim, a glowing nucleus,
distant background stars, and UnrealBloom, on near-black space. Tilted near
edge-on after a "universe from a distance" reference. Letterbox bars, film grain
and a vignette sit on top as CSS overlays.

App links are intentionally hidden from the rendered page and live only in the
source (an HTML comment + a `hidden` `<nav>`) — an easter egg for inspectors.

## Tuning
Open the page with `?tune` (local only) for a lil-gui panel of live sliders
(bloom, exposure, disk/core, spin, stars). The panel is gated behind `?tune`, so
it never loads in production. Baked defaults live in the `P` object in index.html.

## Icons
`icon.html` renders the brushed `z` app icon; the PNGs (favicon 16/32,
apple-touch 180, PWA 192/512) are screenshotted from it.

## Deploy
Cloudflare Workers static-assets, configured by `wrangler.jsonc`
(`assets.directory = ./public`) → deploys on push to `main`.

**Build command: _(none/empty)_.** The assets directory MUST stay `./public`,
not the repo root: Cloudflare's build installs Wrangler into `node_modules/`
(its `workerd` binary is ~119 MiB, over the 25 MiB per-asset limit), so uploading
the repo root fails. Keeping `node_modules` in `.gitignore` is not enough — the
build regenerates it. Serving only `public/` sidesteps it entirely.

## Layout
- `public/` — the deployed static site (index.html + icons + manifest); the only
  thing Cloudflare uploads.
- repo root — config + legacy tooling (`wrangler.jsonc`; plus `make-path.cjs` +
  the TTF from the earlier wordmark design, kept for reference); never deployed.
