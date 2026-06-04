# Mongma Studio Homepage

Production rebuild of the Mongma Studio site. The visual design is preserved
verbatim from `reference/Mongma Studio.html` (the Golden Master); the
internal structure is now a scalable Next.js / TypeScript codebase.

## Stack

- **Next.js 15** App Router
- **React 19** + TypeScript (strict)
- **Pure CSS** in 4 dedicated layers — no Tailwind, no CSS-in-JS
- **Google Fonts** loaded via `<link>` (DM Sans, Gowun Batang, Gowun Dodum,
  Instrument Serif, JetBrains Mono, Noto Sans/Serif SC)
- **next/image** for asset optimization

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
npm run type-check  # tsc --noEmit
```

## Routes

| URL | Source |
|---|---|
| `/` | `src/app/page.tsx` |
| `/games` | `src/app/games/page.tsx` |
| `/games/revenant-survivors` | `src/app/games/revenant-survivors/page.tsx` |
| `/press` | `src/app/press/page.tsx` |
| `/support` | `src/app/support/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

## Where to edit content

All editable copy and data lives under `src/content/`. Components read
from these files — no copy is hardcoded inside JSX where it might
realistically change.

| What to edit | File |
|---|---|
| Studio name, emails, social URLs, footer copy, copyright | `src/content/site.ts` |
| Games list, statuses, features, key visuals | `src/content/games.ts` |
| Navigation labels, dropdown menu, footer columns, **per-page community lists** | `src/content/navigation.ts` |
| Language dictionary (ko / en / zh), default language | `src/content/i18n.ts` |
| Home page section copy (hero, studio intro, news, future games CTA) | `src/content/home.ts` |
| Press factsheet, download buttons, inquiry block copy | `src/content/press.ts` |
| Support reasons + support option cards | `src/content/support.ts` |

### Adding a new game

```ts
// src/content/games.ts
games.push({
  id: "new-game-id",
  slug: "new-game-id",
  number: "No.02",
  title: "Title",
  titleItalic: "Suffix",     // optional — rendered in italic serif on h1
  status: "in-development",
  statusLabel: "In Development",
  genre: "...",
  platform: "PC · Steam",
  shortDescription: "...",
  description: "...",
  keyVisual: "/assets/new-game-key-visual.png",
  tags: ["Tag 1", "Tag 2"],
});
```

This automatically appears in the `/games` grid and in the Games dropdown
in the navbar. To give it a detail page like Revenant, add
`src/app/games/<slug>/page.tsx`.

### Adding a language

```ts
// src/content/i18n.ts
export const languages = [
  ...
  { code: "ja", label: "日本語", sub: "Japanese" },
];

export const i18n = {
  ...
  ja: { navHome: "ホーム", ... },
} as const;
```

The dropdown picks it up automatically.

## Project structure

```
src/
  app/
    layout.tsx               # root layout (nav, footer, lightbox, providers)
    page.tsx                 # /
    globals.css              # imports the 4 style layers
    games/page.tsx           # /games
    games/revenant-survivors/page.tsx
    press/page.tsx
    support/page.tsx
    contact/page.tsx
  components/
    common/                  # Logo, Button, Sticker, Kicker, Arrow,
                             # Reveal + useReveal, LanguageProvider,
                             # LanguageDropdown, MobileMenuController, Lightbox
    layout/                  # Navbar, MobileMenu, Footer
    home/                    # 8 home page sections + CommunitySection
    games/                   # GameCard
    revenant/                # RevGallery
  content/                   # data files (see "Where to edit content")
  styles/
    tokens.css               # design tokens (verbatim)
    golden-master.css        # component styles (verbatim)
    animations.css           # keyframes + reveal + reduced-motion
    responsive.css           # media queries
    fonts.ts                 # Google Fonts URL builder

public/
  assets/
    mongma-studio-logo.png
    revenant-survivors-key-visual.png
    revenant-survivors-icon.png

reference/
  Mongma Studio.html         # Golden Master visual reference (do not edit)
  claude_code_mongma_final_golden_master_prompt.md

_extract/                    # one-time analysis + screenshot tooling
  ANALYSIS.md
  extract-template.mjs       # decodes the original bundle
  screenshot-compare.mjs     # Playwright parity capture
  out/                       # decoded template + 403 extracted assets
  screenshots/               # 48 parity screenshots (orig + new × 6 × 4 vps)
```

## Visual parity

See `VISUAL_PARITY_REPORT.md` for the head-to-head comparison against
`reference/Mongma Studio.html` at the four required viewports
(1440×900, 1920×1080, 768×1024, 390×844).

To regenerate the screenshots:

```bash
npm run dev          # in one terminal
node _extract/screenshot-compare.mjs   # in another
# outputs to _extract/screenshots/
```

## Conventions

- **CSS preservation** — `src/styles/golden-master.css` must not be edited
  to "clean up" or "modernize". Values are verbatim from the original; the
  prompt forbids normalization, rounding, or approximation.
- **DOM preservation** — components emit the same class names and tag
  hierarchies as the original HTML, so the golden-master CSS works
  unchanged.
- **Reveal animation** — for any section that scrolls into view, either
  wrap in `<Reveal>` or attach `useReveal()` to the semantic tag directly.
  Both add the `.reveal` class and use the same IntersectionObserver
  threshold (0.12) as the original.

## License

© 2024–2026 Mongma Studio. All rights reserved.
