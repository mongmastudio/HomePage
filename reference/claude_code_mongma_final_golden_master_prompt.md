# Claude Code Prompt — Mongma Studio Homepage Final Build

## Role
You are a senior frontend engineer and visual implementation specialist.
Your job is **not to redesign** the Mongma Studio homepage. Your job is to rebuild it into a scalable, maintainable homepage codebase while preserving the existing design exactly.

## Provided Reference Files
Use the following two files as the source of truth:

1. `Mongma Studio.html`
   - This is the **Golden Master** for the current visual design.
   - It contains the existing layout, typography, spacing, colors, animation behavior, and overall mood.
   - Treat its rendered result as the visual baseline.

2. `mongma-studio-logo.png`
   - Use this logo asset exactly as provided.
   - Do not redraw, reinterpret, recolor, trace, simplify, crop, stretch, or replace it.
   - Preserve its aspect ratio and visual weight.

---

# 1. Primary Objective

Build a scalable Mongma Studio homepage that can grow over time as the studio adds more games, pages, news, media, languages, and promotional content.

However, the most important rule is:

> **The final rendered homepage must visually match the provided `Mongma Studio.html` as closely as technically possible.**

Scalability is required, but scalability must not come at the cost of visual drift.

---

# 2. Absolute Design Preservation Rule

The existing HTML file is the visual source of truth.

Do **not** redesign, reinterpret, modernize, simplify, restyle, normalize, or improve the visual design.

The final homepage must preserve the original design, including but not limited to:

- typography
- font family
- font weight
- font size
- line height
- letter spacing
- text casing
- logo placement
- logo size
- color values
- background color
- section spacing
- layout proportions
- decorative elements
- shadows
- borders
- border radius
- hover effects
- transition timing
- animation duration
- animation delay
- animation easing
- keyframe behavior
- responsive behavior
- overall visual rhythm

Componentization is allowed only for maintainability.
Componentization must **not** change the rendered design.

## Strictly Forbidden

Do not do any of the following:

- Do not create a new design language.
- Do not replace the original style with Tailwind defaults.
- Do not apply generic modern SaaS styling.
- Do not change spacing to make it “cleaner.”
- Do not change fonts to make them “more readable.”
- Do not change colors to make them “more premium.”
- Do not change animations to make them “smoother.”
- Do not remove animations for simplicity.
- Do not turn the logo into plain text.
- Do not use a different logo.
- Do not hard-code a new layout from memory.
- Do not create a static single-page HTML clone as the final production structure.

---

# 3. Correct Development Approach

The correct approach is:

1. Render and inspect the provided `Mongma Studio.html` first.
2. Treat it as the Golden Master visual reference.
3. Extract or reproduce the original CSS, typography, spacing, colors, and animations as faithfully as possible.
4. Rebuild the internal code structure into maintainable components.
5. Move editable content into data files.
6. Keep the rendered visual output the same.
7. Verify the rebuilt page against the Golden Master before finishing.

In simple terms:

> **Preserve the visual result. Refactor only the internal structure.**

---

# 4. Recommended Technical Stack

If this repository does not already have a frontend framework, create the project using:

- Next.js App Router
- TypeScript
- React components
- CSS files or CSS modules
- Data files for scalable content management

If the repository already uses another React-based stack, do not migrate unnecessarily. Adapt this plan to the existing stack while preserving the same architecture principles.

Do not use Tailwind to replace the original design system unless the project already depends on Tailwind. Even then, Tailwind may only be used for non-visual structural convenience. The original CSS values remain authoritative.

---

# 5. Required File Structure

Create or refactor toward a structure similar to the following:

```txt
/src
  /app
    layout.tsx
    page.tsx
    globals.css
  /components
    /layout
      Navbar.tsx
      Footer.tsx
    /home
      HeroSection.tsx
      StudioIntroSection.tsx
      FeaturedGameSection.tsx
      GameCard.tsx
      MediaSection.tsx
      CTASection.tsx
    /common
      LanguageDropdown.tsx
      Logo.tsx
  /content
    site.ts
    games.ts
    i18n.ts
    navigation.ts
  /styles
    golden-master.css
    tokens.css
    animations.css
    responsive.css
/public
  /assets
    mongma-studio-logo.png
/reference
  Mongma Studio.html
```

The exact structure can be adjusted if the existing repository requires it, but the following principles are mandatory:

- visual styles must be separated from content data
- components must be reusable
- games must be data-driven
- language text must be data-driven
- logo must be an asset, not recreated text
- animations must be centralized and named clearly
- future pages must be easy to add

---

# 6. Styling Rules

## 6.1 Golden Master CSS

Create a style layer such as:

```txt
src/styles/golden-master.css
```

This file should contain the visual styles extracted or faithfully reproduced from the provided HTML.

Do not casually rewrite this CSS.
Do not normalize values.
Do not round values.
Do not convert values into approximate equivalents.

If the original uses exact values, keep them exact.

Examples:

```css
/* Correct */
letter-spacing: 0.14em;
transition: opacity 900ms cubic-bezier(...);
background: #f3eee2;

/* Incorrect */
letter-spacing: 2px;
transition: all 0.3s ease;
background: beige;
```

## 6.2 Design Tokens

If design tokens are created, they must reflect the original values.

Example:

```css
:root {
  --mongma-bg: /* exact original background value */;
  --mongma-ink: /* exact original text color */;
  --mongma-muted: /* exact original muted color */;
  --mongma-font-primary: /* exact original font stack */;
  --mongma-font-display: /* exact original display font */;
}
```

Do not invent new token values.

## 6.3 Fonts

Use the exact fonts from the original HTML.

If the original HTML references or embeds fonts, preserve those references or extract the font-face declarations into the new CSS structure.

Do not replace fonts with generic alternatives unless technically unavoidable.
If a fallback is required, document it clearly in the final report.

## 6.4 Animations

Animations are part of the design and must be preserved.

Move animations into:

```txt
src/styles/animations.css
```

But keep the original behavior intact.

Preserve:

- keyframe names if practical
- keyframe percentages
- transform values
- opacity values
- durations
- delays
- easing functions
- hover transitions
- scroll or entrance behavior

Do not replace original CSS animations with generic Framer Motion animations unless the visual result is exactly the same.

---

# 7. Component Rules

Components should be extracted for maintainability, but the rendered DOM and styles must remain visually equivalent.

Required components:

## `Logo.tsx`

- Uses `mongma-studio-logo.png`
- Preserves original logo size, placement, spacing, and aspect ratio
- Does not recreate the logo using text

## `Navbar.tsx`

- Preserves the original navbar style
- Includes a language dropdown on the right side
- Language dropdown options:
  - English
  - Chinese Simplified
- The dropdown must not disrupt the original navbar spacing or design

## `HeroSection.tsx`

- Preserves the original hero layout from the provided HTML
- Keeps the same animation timing and entrance behavior
- Keeps the same typography and logo presentation

## `FeaturedGameSection.tsx`

- Displays the current game in development using data from `games.ts`
- Must be designed so additional games can be added later without changing the component structure

## `GameCard.tsx`

- Reusable card for future game listings
- Uses data from `games.ts`
- Must visually match the existing design language from the provided HTML
- Do not invent a new card style if the original already implies one

## `Footer.tsx`

- Preserves visual consistency with the provided HTML
- Uses site data from `site.ts`

---

# 8. Data-Driven Content

Do not hard-code editable business content inside JSX when it may change later.

Create data files such as:

```txt
src/content/site.ts
src/content/games.ts
src/content/i18n.ts
src/content/navigation.ts
```

## `site.ts`

Should contain studio-level information:

```ts
export const site = {
  studioName: 'Mongma Studio',
  subtitle: 'Game Studio',
  description: '',
  logo: '/assets/mongma-studio-logo.png',
};
```

## `games.ts`

Should support multiple games from the beginning.

Use this structure or a similar scalable structure:

```ts
export type GameStatus = 'in-development' | 'coming-soon' | 'released';

export const games = [
  {
    id: 'revenant-survivors',
    title: 'Revenant Survivors',
    status: 'in-development' as GameStatus,
    description: '',
    keyVisual: '/assets/revenant-survivors-key-visual.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=_Ih3Dyanxxc',
    tags: [],
  },
];
```

If the key visual file is not present in the repository, create the data field but do not break the build. Use a safe placeholder area that follows the original design style without inventing a new visual direction.

## `i18n.ts`

Prepare language data for future expansion.

Current required languages:

```ts
export const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
];
```

For now, the dropdown may switch visible text if translations exist. If translations are not fully available yet, structure the system so translations can be added later without refactoring components.

---

# 9. Scalability Requirements

Build the homepage so it can later support:

- multiple games
- individual game detail pages
- game trailers
- screenshots
- press kits
- news posts
- language expansion
- contact page
- recruitment page
- investor or publisher inquiry page
- CMS integration later

Do not implement all of these pages now unless the repository already requires them.
But the structure must not block these future additions.

Recommended future route structure:

```txt
/
/games
/games/[slug]
/news
/news/[slug]
/about
/contact
```

For now, focus on the homepage and data architecture.

---

# 10. Visual Parity Verification

Before finishing, verify that the rebuilt homepage visually matches the original HTML.

## Required Viewports

Check at minimum:

- Desktop: 1440 × 900
- Desktop: 1920 × 1080
- Tablet: 768 × 1024
- Mobile: 390 × 844

## Verification Steps

1. Render the original `Mongma Studio.html`.
2. Render the new homepage.
3. Compare layout, spacing, typography, colors, and animation behavior.
4. Fix any visible drift.
5. Repeat until the new homepage is visually aligned with the original.

If possible, add a Playwright screenshot comparison setup.

Suggested files:

```txt
/tests/visual/homepage.spec.ts
/reference-screenshots/
```

Do not treat the task as complete until visual parity has been checked.

---

# 11. Build and Quality Requirements

The final project must:

- build successfully
- run locally without runtime errors
- preserve the design
- preserve animations
- use the provided logo
- avoid hard-coded repeated content
- be easy to expand later
- include a README with setup instructions

Run the appropriate commands before completion, for example:

```bash
npm install
npm run lint
npm run build
npm run dev
```

If some command is unavailable because the repository does not define it, document that clearly.

---

# 12. Required Deliverables

When finished, provide:

1. A list of created or modified files
2. A short explanation of the component structure
3. A short explanation of where to edit:
   - game data
   - language data
   - navigation data
   - global site data
4. A visual preservation report
5. Any known limitations
6. Commands to run the project locally

Create a report file:

```txt
VISUAL_PARITY_REPORT.md
```

The report should include:

- what was preserved from the original HTML
- what was extracted into components
- what was moved into data files
- whether animations were preserved
- whether any visual difference remains
- screenshots or notes if available

---

# 13. Implementation Priority

Follow this priority order strictly:

1. **Visual preservation**
2. **Animation preservation**
3. **Font preservation**
4. **Responsive preservation**
5. **Component structure**
6. **Data-driven scalability**
7. **Future expansion readiness**

If there is a conflict between visual preservation and refactoring elegance, choose visual preservation.

If there is a conflict between exact animation behavior and code simplification, choose exact animation behavior.

If there is a conflict between the original design and a modern frontend convention, choose the original design.

---

# 14. Final Instruction

Do not produce a visually new homepage.
Do not improve the design.
Do not simplify the design.
Do not reinterpret the brand.

Use the provided HTML and logo as the authoritative reference.

The final result should feel like the exact same Mongma Studio homepage, but with a clean, scalable, maintainable internal codebase ready for future growth.
