# Phase 1 — Mongma Studio HTML 분석 보고서

## 1. 원본 파일 구조
- `Mongma Studio.html`: 17.9MB 번들 패턴 (base64+gzip 자산 인라인)
- 추출 결과:
  - `template.html` (573KB, 6893 lines) — 실제 HTML/CSS
  - 자산 403개 (woff2 400 + png 3 + html 1 + json 1)

## 2. 사이트 구조 — 단일 HTML, 해시 라우팅 SPA (6 페이지)

| Route | Page ID | Content |
|---|---|---|
| `#/` | `page-home` | Hero, Studio Intro, Featured Revenant, Future Games, Trailer, News, Community, Contact CTA |
| `#/games` | `page-games` | Page header, Games grid (3 cards), Contact CTA |
| `#/revenant` | `page-revenant` | **다크 테마.** Rev Hero, Trailer, Overview, Features (4), Gallery (8), Steam Strip, Press CTA, Community |
| `#/press` | `page-press` | Press Hero, Factsheet, Downloads (9), Trailer, Screenshots, Studio Desc, Inquiry (4) |
| `#/support` | `page-support` | Support Hero, Why (4), Options (4), Disclaimer |
| `#/contact` | `page-contact` | Press Hero, Contact Cards (4), Community |
| (shared) | Footer | Brand + 3 cols (Studio / Game / Community) + bottom strip |

## 3. 핵심 디자인 토큰 (CSS Variables)
```css
:root{
  --paper:#f3eee2; --paper-2:#ece6d6; --paper-edge:#e3dcc8;
  --ink:#181612; --ink-2:#2c2822; --ink-soft:#514a3f;
  --ink-mute:#8a8275; --rule:#d6cdb6;
  --violet:#6e5aa3; --yellow:#e8c757; --red:#b04e3a;
  --blue:#6a90c2; --green:#7a9a6e;
  --rev-bg:#0e0a0a; --rev-bg-2:#170c0c; --rev-ink:#f0e4dc;
  --rev-rule:#3a1e1e; --rev-red:#c8331a; --rev-red-2:#7a1e10;
  --max:1320px; --gutter:clamp(20px, 4vw, 56px);
  --f-display:'Instrument Serif','Gowun Batang','Noto Serif SC',Georgia,serif;
  --f-body:'DM Sans','Gowun Dodum','Noto Sans SC',system-ui,sans-serif;
  --f-mono:'JetBrains Mono',ui-monospace,'SFMono-Regular',monospace;
}
```

## 4. 폰트 — Google Fonts CDN 사용
- **DM Sans** (body) — weights 300/400/500/700, italic 400
- **Gowun Batang** (Korean serif fallback) — weight 400
- **Instrument Serif** (display, primary) — 원본에 @font-face 없음 → Google Fonts CDN 필요
- **Noto Serif SC / Noto Sans SC** (Chinese fallback) — 원본에 @font-face 없음
- **JetBrains Mono** (mono) — 원본에 @font-face 없음
- **Gowun Dodum** (Korean body fallback) — 원본에 @font-face 없음

**중요:** 400개 woff2는 DM Sans + Gowun Batang 서브셋만. 나머지(`Instrument Serif`, `JetBrains Mono`, `Noto`)는 시스템/CDN fallback.
**전략:** Next.js `next/font/google`로 동일 폰트 패밀리 로드 → 400개 woff2 파일을 자체 서빙할 필요 없음. 결과는 시각적으로 동일.

## 5. Keyframe 애니메이션 (정확히 보존 필수)
```css
@keyframes pageIn{ from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  /* duration: .55s, easing: cubic-bezier(.2,.7,.2,1) */
@keyframes float{ 0%,100%{translate:0 0} 50%{translate:0 -8px} }
  /* duration: 7s ease-in-out infinite (hero kv card); float--b: 9s, delay .5s */
@keyframes fadeIn{ from{opacity:0} to{opacity:1} }
  /* duration: .3s ease (lightbox) */
```

## 6. 핵심 트랜지션/효과 (각 컴포넌트별)
- **`.nav-links a::after`** — underline scaleX, `.35s cubic-bezier(.6,.05,.2,1)`
- **`.dropdown-menu`** — opacity + translateY, `.2s ease`, `box-shadow:8px 8px 0 0 var(--ink)`
- **`.btn:hover`** — `transform:translate(-2px,-2px); box-shadow:4px 4px 0 0 var(--ink)`, `.2s ease`
- **`.hero-card`** — `.5s cubic-bezier(.2,.8,.2,1)`, individual rotations (1.5deg/-2deg/4deg)
- **`.float`** — 7s/9s infinite, with `.5s` delay variant
- **`.mobile-menu`** — `translateY(-100%) → 0`, `.45s cubic-bezier(.7,0,.2,1)`
- **`.reveal`** — `opacity 0→1, translateY(18px)→0`, `.8s` (opacity ease) + `.8s cubic-bezier(.2,.8,.2,1)` (transform), triggered by IntersectionObserver `threshold:.12`
- **`.gcard:hover`** — `transform:translate(-4px,-4px)`, `.35s cubic-bezier(.2,.8,.2,1)`
- **`.gcard:hover .art img`** — `transform:scale(1.04)`, `.8s ease`
- **`.gallery .gtile:hover img`** — `transform:scale(1.08)`, `.8s ease`
- **`.news-card:hover`** — `transform:translate(-3px,-3px); box-shadow:5px 5px 0 0`, `.35s`
- **`.community-list a:hover`** — bg/color invert, `.25s ease`

## 7. 시그니처 디자인 요소 (절대 보존)
1. **Paper grain SVG noise overlay** (`body::before`) — fractalNoise filter, opacity .55, mix-blend-mode:multiply
2. **Hard offset shadows** (no blur) — `box-shadow: 4px 4px 0`, `6px 6px 0`, `8px 8px 0`, `10px 10px 0` (signature look)
3. **Rotated stickers/cards** — `transform:rotate(-3deg)`, `1.5deg`, `-2deg`, `4deg`
4. **Hero bgword** — 거대한 이태릭 "mongma" 워드 (opacity .06, font-size clamp 8rem~16rem)
5. **Backdrop-blur sticky nav** — `backdrop-filter:blur(8px)` + 92% opacity paper
6. **Dashed borders** — `border:1px dashed var(--ink-mute)` (placeholder/disclaimer)
7. **Repeating diagonal lines** — placeholder backgrounds (`repeating-linear-gradient(45deg,...)`)
8. **Radial gradient overlays** — featured-rev, rev-hero (crimson tint)
9. **Revenant dark scope** — `#0e0a0a` bg, crimson accents

## 8. 자산 매핑 (3 PNG)
| UUID | 사용처 | 설명 |
|---|---|---|
| `7d86c60d-2ea7-42b0-9d95-2625609cfe6c.png` (1.1MB) | nav/hero/footer/mobile | **Mongma Studio 로고** = 기존 `mongma-studio-logo.png`와 동일 |
| `789450a6-3770-4a0e-8209-0eb3a28ecb60.png` (2.5MB) | hero/featured-rev/games/rev-hero(bg)/press | **Revenant Survivors 키 비주얼** |
| `3a19a380-7486-4182-bd4a-169a37a07625.png` (60KB) | featured-rev/rev-hero(badge) | **Revenant 아이콘** |

## 9. 인터랙티브 동작 (JS)
1. **Hash routing** — 6 routes, `hashchange` 이벤트, `.page.active` 토글
2. **Dropdowns** — Games 메뉴 (hover desktop), Language 메뉴, outside-click 닫기
3. **Mobile menu** — Burger 토글, fixed overlay, lang 버튼 포함
4. **Lightbox** — gallery 클릭 시 이미지 확대, prev/next/close, keyboard nav
5. **Language switch** — ko/en/zh, nav 라벨만 변경 (3개 언어, 한국어 기본)
6. **Scroll reveal** — IntersectionObserver, `.reveal` → `.in`
7. **Smooth scroll** — `html{scroll-behavior:smooth}` + in-page anchors (`#trailer-home`, `#rev-trailer`, `#gallery`)
8. **Reduced motion** — `@media (prefers-reduced-motion: reduce)` 처리

## 10. 반응형 브레이크포인트
- `1024px` — nav-links → mobile burger
- `900px` — hero/featured-rev/two-col → 1col, studio/why → 2col, footer → 2col, etc.
- `760px` — contact-grid → 1col, support-options → 1col
- `560px` — news/studio → 1col, footer → 1col

## 11. 외부 URL 데이터 (절대 변경 금지)
- Steam: `https://store.steampowered.com/app/4617500/Revenant_Survivors/`
- YouTube trailer: `https://www.youtube.com/watch?v=_Ih3Dyanxxc` (embed: `/embed/_Ih3Dyanxxc`)
- YouTube channel: `https://www.youtube.com/@mongma_studio`
- X: `https://x.com/MongmaStudio`
- Bluesky: `https://bsky.app/profile/mongmastudio.bsky.social`
- Discord: `https://discord.gg/Gz2CtFPYBK`
- Bilibili: `https://space.bilibili.com/3706949717723779`
- QQ: `https://qm.qq.com/q/2JrWB3a2He` (number: 993073396)
- Emails: `contact@`, `press@`, `creators@`, `business@mongma-studio.com`
- Display email: `MONGMASTUDIO@GMAIL.COM` (footer)

## 12. 언어 설정 (원본 vs prompt)
- **원본:** 한국어 기본 + 영어 + 중국어 간체 (3개)
- **prompt:** 영어 + 중국어 간체 (2개)
- **결정:** 원본 디자인 보존 우선 — 3개 유지 (한국어 기본). prompt가 minimum 2개를 요구한 것을 한국어 추가로 만족.

## 13. 페이지 범위 결정 (원본 vs prompt)
- **원본:** 6 페이지 완전 구현
- **prompt:** "focus on homepage and data architecture"
- **결정:** 원본 디자인 보존 우선 — 6 페이지 모두 구현. nav 링크가 깨지지 않아야 디자인 보존 완성. data-driven 구조는 모든 페이지에 적용.

## 14. Next.js 라우팅 매핑 결정
| 원본 hash | Next.js 라우트 |
|---|---|
| `#/` | `/` |
| `#/games` | `/games` |
| `#/revenant` | `/games/revenant-survivors` 또는 `/revenant` |
| `#/press` | `/press` |
| `#/support` | `/support` |
| `#/contact` | `/contact` |

→ prompt section 9 권장: `/games/[slug]` 패턴. `revenant-survivors`를 slug로.

## 15. 컴포넌트 분해 매핑 (Section 5/7 + 실제 콘텐츠)

### 공통 (`/components/layout/`)
- `Navbar.tsx` — header.nav (logo + nav-links + dropdown + nav-right + burger)
- `Footer.tsx` — footer (brand + 3 fcol + foot-bot)
- `MobileMenu.tsx` — mobile-menu (data-mobile-menu)
- `Lightbox.tsx` — gallery 이미지 확대 (전역)

### 공통 (`/components/common/`)
- `Logo.tsx` — img with `mongma-studio-logo.png`
- `LanguageDropdown.tsx` — ko/en/zh switcher
- `Button.tsx` — `.btn`, `.btn--ghost`, `.btn--accent`, `.btn--sm`, `.btn--rev` 변형
- `Sticker.tsx` — `.sticker` (rotated label)
- `Kicker.tsx` — `.kicker` (label small caps)

### 홈 (`/components/home/`)
- `HeroSection.tsx` — hero
- `StudioIntroSection.tsx` — section / two-col + studio-grid (4 cards)
- `FeaturedGameSection.tsx` — featured-rev (dark scope)
- `FutureGamesSection.tsx` — roadmap (3 rm cards)
- `MediaSection.tsx` (trailer-home) — trailer-frame iframe + cta row
- `NewsSection.tsx` — news-grid (4 articles)
- `CommunitySection.tsx` — community-list
- `CTASection.tsx` — contact-cta

### 게임 (`/components/games/`)
- `GameCard.tsx` — gcard 또는 gcard.placeholder
- `GamesGrid.tsx` — games-grid

### Revenant 상세 (`/components/revenant/`)
- `RevHero.tsx`
- `OverviewSection.tsx` — fact-table
- `FeaturesSection.tsx` — feat-grid (4 feats)
- `GallerySection.tsx` — gallery + lightbox (8 tiles)
- `SteamStrip.tsx`
- `PressCTASection.tsx`

### Press (`/components/press/`)
- `PressHero.tsx`
- `FactsheetSection.tsx` — fs-table + fs-img
- `DownloadsSection.tsx` — dl-grid (9 dl cards)

### Contact / Inquiry (`/components/contact/`)
- `ContactGrid.tsx` — contact-grid (4 contact-blocks)

### Support (`/components/support/`)
- `SupportHero.tsx`
- `WhySection.tsx` — why-grid (4 why)
- `SupportOptionsSection.tsx` — support-options (4 support-cards)
- `DisclaimerSection.tsx`

## 16. 데이터 추출 대상
- `site.ts` — studio name, subtitle, description, logo, email, social links
- `games.ts` — 게임 (현재 1개: Revenant) + 미래 placeholder (2개: Untitled·02, Prototype Archive)
- `i18n.ts` — ko/en/zh 사전 (현재는 nav 라벨만)
- `navigation.ts` — primary nav (Home/Games/Press/Support/Contact) + games submenu + footer columns
- `content.ts` 또는 컴포넌트별 데이터 — hero stickers, studio cards, future games, news items, community channels, press inquiry blocks, support reasons, support options 등

## 17. 잠재 위험/고려사항
1. **400 woff2 자체 서빙 vs CDN** — CDN 사용 권장 (시각 동일, 빌드 가벼움). 폴백 명시 필요.
2. **`Instrument Serif` 폰트** — 원본에 @font-face 없음. Google Fonts에서 로드해야 함.
3. **`color-mix(in oklab,...)`** — 모던 CSS, 구형 브라우저 미지원. 원본도 사용 중이므로 그대로 유지.
4. **`backdrop-filter`** — Safari 일부 버전 prefix 필요할 수 있음. 원본도 prefix 없음 → 그대로.
5. **SVG fractalNoise** — body::before background-image. 그대로 보존.
6. **Hero hover 동작** — `.hero-card:hover{transform:translate(-3px,-3px) rotate(0deg)}` — rotate 0으로 reset (원래 rotation 무시). 정확히 보존.
7. **Footer 텍스트의 `&nbsp;`** — `Mongma Studio&nbsp;\n몽마 스튜디오...` — 정확히 보존.
8. **`color-mix` 동적 카드 배경** — 4 가지 색 mix (violet/yellow/blue/green) — 동적 계산, 그대로 유지.
