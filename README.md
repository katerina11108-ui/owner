# Last Dream — promo site

A rebuild of the promo site for the short film **Last Dream** (dir. Hugo Johnson). It is built from the Figma design, which is the only source of truth for layout, type, colour, copy and imagery. The new layer is the motion system: *"a reflection that won't hold still"*. See [`docs/motion-direction.md`](docs/motion-direction.md).

Stack: **Astro 7** (static output) · **GSAP 3.15** (ScrollTrigger, SplitText, CustomEase) · **Lenis**. Vanilla TypeScript, no UI framework, no WebGL.

## Run

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Static build to `dist/` (images → AVIF + WebP srcsets via sharp; the first build takes about 1 min) |
| `npm run preview` | Serves `dist/` locally |
| `npm run check` | Type check (`astro check`) |

Requires Node ≥ 22.

## Deploy

- **Vercel:** import the repo. `vercel.json` sets the build command, `dist/` output and immutable caching for `/_astro/*`.
- **Netlify:** import the repo. `netlify.toml` does the same.
- **Any static host:** upload `dist/`.

## Where to tune motion

| What | Where |
|---|---|
| **All tokens** (durations, cubic-bezier curves, staggers, distances, facet counts, breakpoints, trigger positions) | `src/motion/tokens.ts` (single source of truth) |
| Curves registered as GSAP eases (`reflect`, `dread`, `fracture`, `ui`) | `src/motion/lib/gsap.ts` (reads tokens) |
| CSS-only hover timing (mirror-flip links, media hover) | Tokens are exposed as CSS vars by `src/layouts/Base.astro` (`cssVars` in tokens.ts) |
| One file per storyboard row | `src/motion/scenes/*.ts` |
| Shared primitives: mirror facets, masked lines, hard cuts, settle | `src/motion/lib/facets.ts`, `src/motion/lib/reveal.ts` |
| Boot, breakpoints, reduced motion, cleanup | `src/motion/index.ts` (everything lives in `gsap.matchMedia`, so a breakpoint or reduced-motion change reverts all tweens, ScrollTriggers, splits and inline styles) |

## Structure

```
src/
  assets/raw/          Figma image exports (originals; optimised at build)
  components/
    sections/          One component per Figma section (Hero, Statement, LastMeal, Split,
                       Foreword, Quote, Trailer, Cast, Contacts) + Intro overlay
    ui/                Media (responsive image in a Figma frame), FlipLink, Texture
  data/content.ts      All copy, verbatim from Figma, with node ids
  layouts/Base.astro   <head>, font preloads, motion gate, token CSS vars
  motion/              tokens.ts · index.ts · lib/ · scenes/
  styles/global.css    Figma styles, design unit, layout system, motion states
docs/motion-direction.md   Phase 1 (approved)
```

**Layout system.** At ≥1100px the page is the Figma 1440 frame. One design unit `--u = 100cqw / 1440` equals one Figma px, and elements are placed with `--x / --y / --w / --h` taken straight from Figma coordinates. This keeps it pixel-accurate at 1440 and fluid in between. Body text has a 15px floor. Below 1100px a stacked layout takes over (see Deviations).

**Accessibility.**
- `prefers-reduced-motion`: no Lenis, intro, splits, facets or scrub. The page renders as the static Figma composition.
- Without JS the page renders the same. If the motion bundle fails to boot, a 4s failsafe reveals everything.
- Keyboard: there is a skip link and visible pink focus rings. Menu anchors move focus to the target heading, and link hovers also trigger on `:focus-visible`.
- No content depends on hover.

---

## Final report

### Implemented

- Pixel-faithful rebuild of *Desktop design* (62:14). At 1440 the build's page height is exactly 9578px, matching Figma, with no horizontal overflow. I compared full-page renders side by side with the Figma export.
- All assets are exported from Figma and served as AVIF/WebP srcsets with intrinsic sizes. Images below the hero are lazy-loaded. The hero is preloaded with `fetchpriority=high`, and the fonts (Bebas Neue, Inter Light, latin subset) are preloaded.
- Motion system as approved in Phase 1. Resting states are verified: at every scroll stop the motion build's settled frame matches the reduced-motion (static) render pixel for pixel. The only differences are the ambient prism drift and the foreword background before it finishes settling, and both are designed to differ.
- No console errors at desktop (1440) or mobile (390). ScrollTriggers, SplitText instances, facet DOM and listeners are all created inside `gsap.matchMedia` contexts and cleaned up on revert.

### Storyboard coverage

| # | Row | Status |
|---|---|---|
| 0 | Intro: glint, 5-facet alignment, title, chrome cut (≤2.8s; 0.9s on repeat visits; skippable by any input) | ✅ |
| 1 | Hero reveal: masked title lines + chrome hard cut | ✅ |
| 1b | Hero re-fractures on scroll-out (desktop) | ✅ (mobile skipped, as specified) |
| 2 | Statement: label cut, slowest line reveal, image settle | ✅ |
| 3 | Last meal: 2-facet image alignment; paragraphs static | ✅ (mobile: settle only) |
| 4 | Cut to pink: hard cut + 1-frame flash, then lines | ✅ |
| 5 | Foreword: heading lines; scrubbed background settle (desktop) | ✅ |
| 6 | Quote: facets align, then lines | ✅ |
| 7 | Trailer: heading lines, frame scale and prism brighten (scrubbed, desktop) | ✅ |
| 7 | Trailer: click → poster fractures → embed; "PLAY" cursor | ⏸ **Inactive.** The trailer is no longer online. The code is in place (`wireTrailer`) and turns on as soon as `trailer.url` is set in `src/data/content.ts`. |
| 8 | Cast: names and portraits converge and lock at row centre (scrubbed, no pinning) | ✅ (mobile: line reveals + settle) |
| 9 | Contacts: word halves close like a mirror; links cut in | ✅ |
| G1 | Prism blicks: slow drift + scroll-velocity response (desktop) | ✅ (see deviation 5) |
| G2 | Background plate never moves | ✅ |
| G3 | Menu anchors via Lenis + focus management | ✅ |
| — | Micro-interactions: mirror-flip links, media "beaten mirror" hover + pink stroke, focus states | ✅ |

### Deviations from Figma, and why

1. **Mobile and tablet layout (<1100px) is derived.** The file has no mobile frame (approved). I used the same type styles, colours, images and order, with sections stacked, a 20px gutter, and fluid type with `clamp()`.
2. **Bebas Neue "Bold" and "Book" are rendered with Regular** (approved). Google's Bebas Neue only ships Regular. H1/H2 look a little lighter than Figma's Bold, and H4/P1 a little heavier than Book. Swapping in licensed font files later only needs new `@font-face` rules.
3. **Trailer:** the Figma still (a YouTube player screenshot) is shown with a visible "Placeholder — trailer no longer available" label. The video is gone (confirmed by the author).
4. **Quote section (62:16)** sits at x=0 instead of Figma's x=−12. The Figma frame leaves a 12px strip uncovered on the right, which looks like an accidental offset.
5. **Prism velocity response** moves the texture (transform) rather than changing its opacity as written in Phase 1. Changing opacity would have meant the resting brightness differs from Figma. With a transform, the resting frame is exactly the design.
6. **Line-mask distance** is `yPercent: 125` rather than 102. The mask's 0.08em glyph padding let the tops of the letters peek out at 102.
7. **Cast portrait rise** (Hugo row) pairs an 8% rise with a 1.18 scale, so the frame is never left with an empty band mid-scroll.
8. **Image resolution:** Figma serves most image fills at about 1024px wide (the cast photos are smaller), and these exports are used as-is. On large retina screens the hero and full-bleed images are softer than true 2× assets would be. Supplying higher-resolution originals would fix this without code changes.
9. **IMDB link** uses the URL supplied by the author (it isn't in Figma). The contact copy follows the final *Desktop design* (Oliver Mayo, queries@lastdreamfilm.com), not the older Presentation page.

### Not verified

- **Lighthouse score:** the audit run was stopped before it finished, so the 90+ target is **not measured**. Run `npx lighthouse http://localhost:4321 --preset=desktop` against `npm run preview` to check it. Things already in place for it: a static page, preloaded LCP image and fonts, AVIF, lazy loading, transform/opacity-only animation, and no layout shift from images or absolute text.
- Real-device testing (iOS Safari, a mid-range laptop at 60 fps). Checks so far ran in headless Chromium only.
