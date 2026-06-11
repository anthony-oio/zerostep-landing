# zerostep-landing

The apex landing page for **zerostep.cc** — a single static `index.html`,
deployed on Cloudflare Pages (free tier).

- Pure HTML + CSS, no build step, no JS framework (static-only by design).
- The animated `zerostep` wordmark is CSS-driven.
- App links are intentionally hidden from the rendered page and live only in
  the source (an HTML comment + a `hidden` `<nav>`) — an easter egg for anyone
  who opens DevTools.

## Deploy
Connected to Cloudflare Pages → builds on push to `main`.
Build command: *(none)* · Output directory: `/` (root).
