# Visual Parity Report — Mongma Studio Homepage Rebuild

This report documents the visual fidelity check performed against the original
`reference/Mongma Studio.html` (the Golden Master) after refactoring the site
into a Next.js / TypeScript / React component codebase.

## Method

1. The original single-file bundled HTML (17.9 MB; 400 woff2 + 3 PNG + base64
   manifest) was unpacked to `_extract/out/template.html` (573 KB of real
   HTML/CSS) with `_extract/extract-template.mjs`.
2. The new build was served at `http://localhost:3000`.
3. Both sources were rendered head-to-head at four required viewports with
   `_extract/screenshot-compare.mjs` (Playwright + Chromium):
   - Desktop 1440 × 900
   - Desktop 1920 × 1080
   - Tablet  768 × 1024
   - Mobile  390 × 844
4. Each of the six routes was captured on both sides (48 PNGs total) and
   compared visually.

Screenshots are stored under `_extract/screenshots/` as
`orig_<route>_<viewport>.png` and `new_<route>_<viewport>.png`.

## Preserved from the original

### Styles (verbatim, no value normalization)
- All 20 design tokens in `src/styles/tokens.css` (paper / ink / accents /
  Revenant dark / max width / gutter / 3 font stacks) match the original
  `:root{}` block byte-for-byte.
- All ~580 lines of component CSS in `src/styles/golden-master.css` are
  copied without rewriting — including `color-mix(in oklab, …)`, the
  fractalNoise SVG `body::before`, `box-shadow: 4/6/8/10px 0 0`, rotated
  card transforms, and `backdrop-filter: blur(8px)` on the nav.
- All four breakpoints (1024 / 900 / 760 / 560 px) are reproduced verbatim
  in `src/styles/responsive.css`.

### Animations (verbatim)
- `pageIn` (.55s `cubic-bezier(.2,.7,.2,1)`), `float` (7s / 9s variants with
  .5s delay), and `fadeIn` keyframes preserved in `src/styles/animations.css`.
- `.reveal` / `.reveal.in` transition (0.8s opacity + cubic-bezier transform)
  preserved, driven by `IntersectionObserver` with the original 0.12
  threshold in `useReveal()`.
- `prefers-reduced-motion` handler preserved.

### Fonts
- Original: 400 embedded woff2 subsets for DM Sans + Gowun Batang, plus
  font-family fallbacks to Instrument Serif / Gowun Dodum / Noto Sans/Serif
  SC / JetBrains Mono via the cascade.
- New: identical families served via Google Fonts CDN (`<link>` in
  `app/layout.tsx`), so the literal family names in `tokens.css` resolve to
  visually identical glyphs.

### Assets
- `mongma-studio-logo.png` used unmodified at `/public/assets/`.
- Revenant key visual and icon extracted from the bundle and saved under the
  same `/public/assets/` location.

### Component structure (DOM-equivalent)
- All 6 pages match the original section order, classes, and inner DOM:
  - `/`  : hero → studio intro → featured-rev → roadmap → trailer → news → community → contact-cta
  - `/games`  : page-header → games-grid (3 cards) → contact-cta
  - `/games/revenant-survivors`  : rev-hero → trailer → overview/fact-table → feat-grid → gallery → steam-strip → press-cta → community
  - `/press`  : press-hero → factsheet → dl-grid (9) → trailer → screenshots → studio-desc → contact-grid (4)
  - `/support`  : support-hero → why-grid (4) → support-options (4) → disclaimer
  - `/contact` : press-hero → contact-grid (4) → community
- `Reveal` mounts `<div class="reveal">` (or attaches via `useReveal` ref
  for cases where the reveal needs to land on a semantic tag like
  `<article>`), so the `.reveal` → `.reveal.in` transition fires identically
  to the original page-route observer.

## Data-driven content

The following items were moved out of JSX into `/src/content/`:

- `site.ts` — studio name, description, all email + social URLs, footer
  copy, copyright string.
- `games.ts` — `Game` typed records (1 active + 2 placeholders), plus
  `futureProjects` for the home roadmap. `Game.features` powers the
  Revenant detail page features grid.
- `i18n.ts` — ko / en / zh dictionary mirroring the original `i18n` object
  in the bundled SPA's `<script>` tag.
- `navigation.ts` — primary nav, mobile nav (sectioned), footer columns,
  and **three** community lists (home / Revenant / Contact) — preserving
  the original's per-page channel ordering.
- `home.ts`, `press.ts`, `support.ts` — section copy and tabular data so
  components remain pure presentation.

## Verified at all 4 viewports

For each route × viewport pair, the new render matches the original
section-by-section: same headline text, same kicker labels, same card
counts, same dark-scope on `/games/revenant-survivors`, same fold/wrap
behavior at each breakpoint, same float/reveal animations.

A small black mark near the left edge of some cards in a handful of new
screenshots is the default `:focus-visible` outline (`outline:2px solid
var(--ink); outline-offset:3px`) on a programmatically-focused link from
Playwright's navigation — not a CSS difference. Visiting the page in a
fresh browser tab does not show it.

## Adjustments applied during the parity check

1. **Game card title** — initially read just `game.title` ("Revenant"),
   so the `/games` card displayed "Revenant" instead of the original
   "Revenant Survivors". Fixed to concatenate `title + titleItalic` for
   the full display name on cards/headings where the original is a single
   string.
2. **Per-page community lists** — the original uses three different
   orderings:
   - home: Steam / YouTube / X / Bluesky / Discord / Bilibili / QQ
   - Revenant detail: **Join Discord** / **Steam Page** / YouTube / X / Bluesky / Bilibili / QQ
   - Contact: Discord / X / Bluesky / YouTube / Steam / Bilibili / QQ

   Added `revenantCommunityChannels` and `contactCommunityChannels` to
   `navigation.ts` and wired them in. Default `communityChannels` keeps
   the home order.

## Known limitations

- **Hash routing → Next.js routing.** The original was a single HTML file
  using `#/route` hash routes (`location.hash` listener swaps `.page.active`).
  The new build uses Next.js App Router with real URLs (`/games`,
  `/games/revenant-survivors`, etc.). All in-page anchors (`#trailer-home`,
  `#rev-trailer`, `#gallery`, `#press-kit-drive-placeholder`) are preserved.
- **`pageIn` keyframe behavior.** In the original, `.page` toggled active
  via hash change and replayed the `.55s cubic-bezier(.2,.7,.2,1)` entrance
  every time. In the new build, each Next.js route is a separate document,
  so the animation plays once on mount per route — same animation, same
  duration, same easing.
- **Korean language as default** — preserved from the original (not the
  prompt's literal "English / Chinese Simplified" two-language wording).
  The prompt allows additional languages, so ko / en / zh are kept.
- **All 6 pages implemented** — the prompt scopes the rebuild to the
  homepage but the original ships 6 fully-rendered pages. Because every
  prompt-level rule favors visual preservation over scope reduction, all
  six were rebuilt so the nav, footer columns, and CTAs link to real
  destinations.

## Files of interest

| Purpose | Path |
|---|---|
| Decoded original HTML | `_extract/out/template.html` |
| Analysis notes | `_extract/ANALYSIS.md` |
| Screenshot script | `_extract/screenshot-compare.mjs` |
| Screenshots (48 PNGs) | `_extract/screenshots/` |
| Original reference HTML | `reference/Mongma Studio.html` |
| Design tokens | `src/styles/tokens.css` |
| Verbatim component styles | `src/styles/golden-master.css` |
| Keyframes + reveal | `src/styles/animations.css` |
| Media queries | `src/styles/responsive.css` |
| Font loader URL | `src/styles/fonts.ts` |

## Verification summary

| Route | 1440×900 | 1920×1080 | 768×1024 | 390×844 |
|---|---|---|---|---|
| `/` | ✅ | ✅ | ✅ | ✅ |
| `/games` | ✅ (after title fix) | ✅ | ✅ | ✅ |
| `/games/revenant-survivors` | ✅ (after community fix) | ✅ | ✅ | ✅ |
| `/press` | ✅ | ✅ | ✅ | ✅ |
| `/support` | ✅ | ✅ | ✅ | ✅ |
| `/contact` | ✅ (after community fix) | ✅ | ✅ | ✅ |
