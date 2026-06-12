# zerostep-landing

The apex landing page for **zerostep.cc** — deployed on Cloudflare Pages (free tier).

A **Three.js** scene (loaded as a static CDN ES module — no build step, no server):
the `zerostep` wordmark as extruded, glowing 3D letters with a cyan→indigo
vertex gradient, a drifting particle/atmosphere field, and UnrealBloom, set in a
baked murky green-amber dusk. Palette is sampled from the glowing blue figure in
the reference animation. Letterbox bars, film grain and a vignette sit on top as
CSS overlays.

App links are intentionally hidden from the rendered page and live only in the
source (an HTML comment + a `hidden` `<nav>`) — an easter egg for inspectors.

## Wordmark geometry
The 3D letters are extruded from real Caveat Brush glyph outlines (not a
typeface-font conversion). To regenerate after a font/word change:

```
npm install                       # opentype.js
node make-path.cjs                # writes wordmark-path.json from CaveatBrush-Regular.ttf
# then inline wordmark-path.json's `d` into the WORD_D const in index.html
```

## Icons
`icon.html` renders the brushed `z` app icon; the PNGs (favicon 16/32,
apple-touch 180, PWA 192/512) are screenshotted from it.

## Deploy
Connected to Cloudflare Pages → builds on push to `main`.
Build command: *(none)* · Output directory: `/` (root).
