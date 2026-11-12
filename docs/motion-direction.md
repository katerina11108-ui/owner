# LAST DREAM — Motion Direction (Phase 1)

> Status: **for approval**. No code yet.
> Source of truth: Figma `dZJY6YNxmVsi85f4pbbjuH`, page **Dekstop → "Desktop design" (62:14, 1440 × 9578)**.
> Supporting pages read: **Presentation** (designer's notes, 55:367; earlier layout 55:292), **Prototype** (moodboard 1:16; iterations Desktop‑2/‑3).

---

## 0. What the Figma file tells us about the film

| | From Figma |
|---|---|
| Title | **Last Dream** |
| Logline / tagline | "A Provocative Cinematic Tale" |
| Genre | Experimental horror (copy, 62:25), a short about the **last meal** before an execution |
| References named in the copy | Argento's *Suspiria*, Demy's *The Umbrellas of Cherbourg*, Biller's *The Love Witch*: colour‑rich, saturated, theatrical |
| Credits | Director & Writer **Hugo Johnson**; Stars **Eloise Lovell Anderson, Brenda Patricia Garza, Oliver Mayo** |
| Tone | Slow dread and taboo, mixed with candy‑coloured beauty. Pink (#FF0D64) against near‑black (#0D0A0A) |
| **Designer's stated idea** (55:370) | *"Like a mirror, a dream can reflect our reality, but in a distorted way… For the main effect, I chose the metaphor of a mirror, sometimes 'beaten', which reflects the internal state of the hero, and additional blicks to enhance the immersion in the dream atmosphere. Also a few half‑tone effects."* |
| Font note (55:373) | Bebas Neue, taken from the poster: "massive and serious". |

The hero image (photo 01) is already a **mirror‑faceted** shot of lips, cut into slanted strips with **prism light leaks** ("blicks"). The `Prism_Light_Texture` layer (62:15) covers the lower half of the page. The motion system only puts that still image into time.

---

## 1. Motion concept

**"A reflection that won't hold still."** Every piece of content arrives as a *reflection*: it is sliced into mirror facets, slightly out of register, and then **slides into alignment**, the way a dream briefly resolves into something true. Between scenes the site **cuts** like a horror edit. It holds for a long, slow moment of dread, then makes a hard, instant cut, often to pink, with no crossfades.

Two tempos and nothing in between: **the hold** (slow, heavy, almost reluctant) and **the cut** (zero‑duration). The site never "bounces" or feels playful. The subject is an execution.

---

## 2. Motion principles

1. **Align, don't appear.** Elements are never just faded up. They are either *brought into register* (mirror facets or masked lines converging on their true Figma position) or *cut in* (instant). If something can't justify one of these two, it doesn't animate.
2. **Two tempos only: Hold and Cut.** Long decelerating eases (≥ 0.9 s) for reveals. Instant `set()` for scene changes and colour hits. No mid‑speed "UI" motion in content areas. Mid‑speed (0.24–0.4 s) is reserved for interface feedback (links, buttons).
3. **The frame never moves; the reflection does.** Layout, grid, type positions and section backgrounds are fixed, as in Figma. Only *images and display type* move, and every one of them comes to rest exactly at its Figma coordinates. No ambient floating, no random parallax.
4. **Light is the only thing that lives on its own.** The prism "blicks" are the one ambient element. They drift very slowly and react slightly to scroll speed, as if light catches on a mirror while you move past it.
5. **Restraint around the subject.** Facts about executions (the "17 prisoners" line) are never gamified: no counters, no glitch, no shake. They get the slowest, plainest reveal on the site.

---

## 3. Motion tokens (`src/motion/tokens.ts` in Phase 2)

### Durations (s)
| Token | Value | Use |
|---|---|---|
| `cut` | `0` | Hard cut (`gsap.set`) for scene changes and colour hits |
| `flash` | `0.08` | 1–2 frame pink flash on a cut (opacity only) |
| `ui` | `0.28` | Hover / focus feedback |
| `ui-out` | `0.2` | Hover exit (always faster than enter) |
| `align` | `0.9` | Mirror facets / line masks settling |
| `hold` | `1.4` | Display‑type reveals (H1 / H2 / statement lines) |
| `dread` | `2.2` | Intro image alignment, the slowest move on the site |
| `intro-max` | `2.8` | Hard cap for the whole intro, first visit |
| `intro-repeat` | `0.9` | Intro on a repeat visit in the same session |

### Easing (cubic‑bezier)
| Token | Curve | Character |
|---|---|---|
| `reflect` | `cubic-bezier(0.19, 0.86, 0.22, 1)` | Long, heavy deceleration with a reluctant settle. Default for "align" |
| `dread` | `cubic-bezier(0.62, 0.02, 0.32, 1)` | Slow start, slow end, used for held scale/opacity moves |
| `fracture` | `cubic-bezier(0.72, 0, 0.88, 0.32)` | Accelerating *away*, for exits (intro curtain, hover‑out of facets) |
| `ui` | `cubic-bezier(0.3, 0.7, 0.2, 1)` | Interface feedback only |
| `scrub` | `none` (linear) + Lenis smoothing | Scroll‑scrubbed scenes; inertia comes from Lenis, not from the curve |

Registered as GSAP `CustomEase`s with the same names. **`power2.out` is not used anywhere.**

### Staggers (s)
| Token | Value |
|---|---|
| `facet` | `0.07` (from centre outward) |
| `line` | `0.12` |
| `word` | `0.035` (credits/labels only, never body copy) |
| `list` | `0.09` (credits, cast list) |

### Distances
| Token | Value | Use |
|---|---|---|
| `facet-offset` | `±7vh` alternating (desktop), `±4vh` (mobile) | Out‑of‑register mirror strips |
| `line-mask` | `yPercent: 125` (clears the 0.08em glyph padding of the mask) | Display lines rising inside overflow masks |
| `mirror-flip` | `100%` + `scaleY(-1)` | Link hover reflection |
| `cast-drift` | `±6vw` max, scrubbed | Cast names / portraits converging |
| `media-settle` | `scale 1.08 → 1` | Images settling inside their frames |
| `blick-drift` | `±3%` translate, `±0.12` opacity from scroll velocity | Prism texture |

Facet count: **5** on desktop (matches the five visible strips in photo 01), **3** on mobile.

---

## 4. Storyboard

Figma node IDs refer to page *Dekstop / Desktop design*. "Reduced" = `prefers-reduced-motion: reduce` behaviour. Default HTML/CSS state is always the final Figma composition; JS sets the "before" state only when motion is allowed.

| # | Section (Figma) | Trigger | What animates | Technique | Duration & easing | Mobile behaviour |
|---|---|---|---|---|---|---|
| 0 | **Intro / preloader** (motion only, nothing added to layout) | load | Black (#0D0A0A) frame → one diagonal prism glint crosses → hero image arrives as 5 out‑of‑register facets that align → hard cut to the full hero | Gate on hero image + Bebas/Inter `document.fonts.ready` (timeout 1.6 s). 5 stacked copies of the hero `<img>` with static `clip-path` polygons, each animated on `y` only. Glint = gradient div, `x` + `opacity` | Glint 0.6 s `dread`; facets `dread` 2.2 s, stagger `facet` from centre; total ≤ 2.8 s. Repeat visit (sessionStorage): 0.9 s, facets only | 3 facets, `±4vh`, total ≤ 2.0 s |
| 1 | **Hero**: photo 01 (62:41), "LAST DREAM" (62:48), Menu (62:56), credits/Stars/Language (65:192) | load (after intro) | **LAST DREAM**: each of the 2 lines rises in a mask. **Menu + credits + stars + vertical "Language / English"**: cut in at once (hard cut, no fade) one beat after the title lands | SplitText lines + overflow mask; `gsap.set` for the cut | Title `hold` 1.4 s `reflect`, stagger `line`; cut at +0.2 s after the title settles | Same, title lines only; credits stack per mobile layout and cut in |
| 1b | Hero on scroll‑out | scroll (hero leaving) | Hero image re‑fractures: facets drift apart by up to `facet-offset/2` as the hero scrolls away (the dream losing hold) | Same 5 facet layers, scrubbed `y` | `scrub: true`, linear, from top 0 → bottom 0 | **Skipped**: single image layer, no scrub (cost/benefit on touch) |
| 2 | **Statement**: label "A Provocative Cinematic Tale" (62:36), "Did you know… 17 prisoners in 2020?" (62:37), image (62:35) | scroll (enter 75%) | Pink label: cut in. Statement: lines rise in masks, *slowest reveal on the site*. Image: settles `scale 1.08 → 1` inside its fixed frame | SplitText lines; image wrapper `overflow:hidden` + inner `scale` | Label `cut`; statement lines `hold` 1.4 s `reflect`, stagger 0.18 s; image `dread` 2.2 s | Same; stagger reduced to `line` |
| 3 | **Last meal** (62:26): paragraph 62:29, image 62:30, image 62:32, paragraph 62:33 | scroll (each item at 80%) | Two images arrive as **2‑facet mirror splits** aligning (small "beaten mirror" echo of the hero). Paragraphs: **no animation**, they're there when you arrive | 2 clip‑path facet layers per image, `y` only | `align` 0.9 s `reflect`, facet stagger 0.07 | Images: `media-settle` only (no facets) |
| 4 | **The cut to pink** (62:21): grey static half (62:22) + pink half (62:23) + texts 62:24, 62:25 | scroll (section top hits 60%) | **Signature moment #2** (see §5). Grey half holds; pink half **hard‑cuts** on with a 1‑frame flash; the pink statement lines then rise | `gsap.set` on pink panel + `flash` overlay; SplitText lines | Cut 0; flash `0.08`; lines `align` 0.9 s `reflect`, stagger `line` | Same cut (it's cheap); panels are stacked so the cut happens when the pink panel enters |
| 5 | **Foreword** (83:204 pink full‑bleed, heading 62:88, columns 62:20, 62:39) | scroll | Heading "A foreword from the director": lines rise in masks. Background image: very slow settle while the section is in view. Body columns: **static** | SplitText lines; background `scale 1.06 → 1` scrubbed over section height | Heading `hold` 1.4 s `reflect`; background scrub linear | Background scrub off; heading reveal kept |
| 6 | **Director's quote** (62:16 / 62:18) over b/w image (62:17) | scroll | Image arrives as 5 facets aligning (callback to the hero, the director's "reflection"). Quote: lines rise one by one | Facet layers (`y`); SplitText lines | Facets `align` 0.9 s; quote lines `hold` 1.4 s stagger `line`, starts after facets settle | 3 facets; quote lines kept |
| 7 | **Official Teaser Trailer** (62:60: heading 62:61, frame 62:62) | scroll (scrub, enter → centre) + click | Heading: lines rise. Player frame: scales `0.88 → 1` scrubbed as it approaches centre, prism texture (62:15) brightens as it does ("the mirror becomes a screen"). **Click**: poster facets fracture out → embed loads | ScrollTrigger scrub on wrapper `scale`; click: facets `y` + `opacity`, then inject `<iframe>`/`<video>` | Scrub linear; click‑fracture 0.5 s `fracture`, then iframe in | No scrub (static at scale 1); tap to play; poster always visible |
| 8 | **Our cast** (62:63) | scroll (scrub) + hover | **Signature moment #3** (see §5). Each name and its portrait move *opposite* to each other and meet at the Figma composition when the row is at centre, like an object and its reflection. "Our cast" (pink): cut in. "Director, Writer" / "Stars" labels: cut in | ScrollTrigger scrub per row, `x` only; portraits inside mask with `media-settle` | Scrub linear, `cast-drift` ±6vw → 0 at row centre, then **locked** (no drift past centre) | No scrub. Names: line mask reveal `align`; portraits: settle |
| 9 | **Contacts** (62:81) | scroll (enter 80%) | "CONTACTS": the 2 halves of the word mirror (top half from above, bottom half from below) and close like a mirror being closed; the last image of the site. Email + IMDB: cut in | Two clipped copies of the word (top/bottom 50%), `y` only | `hold` 1.4 s `reflect`; links cut at end | Same, distance halved |
| G1 | **Prism texture** (62:15) & glints | continuous / scroll velocity | Slow drift; opacity nudged by Lenis velocity | One `will-change: transform` layer, rAF throttled via `gsap.ticker` | ±3% over 18 s yoyo; velocity → opacity clamp ±0.12 | Static texture, no drift |
| G2 | **Long background plate** (62:38 "Image", spans 815–5876) | — | **Nothing.** Background plates never move (principle 3) | — | — | — |
| G3 | **Menu anchors** (About / Cast / Contact) | click | Lenis `scrollTo` the section, then the target heading reveals if it hasn't yet. No page transition (single page) | Lenis `scrollTo` with `reflect` easing; focus moved to target heading | ~1.2 s, capped by distance | Native smooth scroll (Lenis off on touch) |

---

## 5. Signature moments

### A. Intro: "The mirror finds its angle" (≤ 2.8 s)
1. **0.00**: Black. Nothing but #0D0A0A. Native cursor.
2. **0.15**: A single thin prism glint (green → pink, the `Stroke_Green_Pink` palette) crosses the frame diagonally top‑left → bottom‑right in 0.6 s, like light catching a mirror edge.
3. **0.45**: The hero image appears as **5 slanted strips** (angled like the facets in photo 01), each displaced vertically (alternating ±7vh) and at 0.6 opacity. Out of register, it reads as a distorted reflection.
4. **0.45 → 2.2**: The strips slide into register, centre first and edges last (`dread`, stagger `facet`). As they lock, opacity reaches 1. The image is now exactly the Figma hero.
5. **2.2**: **Cut.** The facet layers are swapped for the single real `<img>` (invisible swap).
6. **2.2 → 2.8**: "LAST" rises in its mask, then "DREAM" (`reflect`, 1.4 s, overlapping the cut).
7. **≈ 3.0**: Menu, credits, stars and the vertical "Language / English" **cut in** together, in one frame. The interface "switches on" the way a title card is cut in.

Skippable: any key, click or scroll jumps to step 7 (`timeline.progress(1)`).

### B. "The cut to pink" (section 62:21 → 83:204)
1. Scrolling out of the last‑meal section, the **grey static half** (62:22) enters first. TV noise, the quiet paragraph on capital punishment. Nothing moves. **Hold.**
2. When the section top reaches 60% of the viewport, the **pink half (62:23) cuts on**. It's already there at full colour in a single frame, with a 0.08 s white‑pink flash overlay (opacity 0 → 0.35 → 0). This is the edit: it's the first time the site's colour hits.
3. The pink statement "LAST DREAM SHOWCASES THIS PRACTICE…" rises line by line (`align`, stagger 0.12) in the pink panel.
4. Scroll on: the **Foreword** section (fully pink) is *already pink*. The cut has "infected" the next scene. Its heading reveals; its background only settles slowly. No transition between the two sections: the colour carries over, like a match cut.

*Why:* the film is about a beautiful ritual covering an ugly act. The site holds in grey (the fact) and then cuts hard to the candy colour (the film's vision).

### C. "Reflections meet" (Our cast, 62:63, scroll‑scrubbed, not pinned)
1. **Hugo Johnson row**: "HUGO" enters from −6vw, "JOHNSON" from +6vw, the portrait (photo 02) from below inside its mask. They are scrubbed to the scroll position. At the moment the row reaches viewport centre, all three lock **exactly** into the Figma composition, and "Director, Writer" cuts in.
2. **Stars**: each star's **name moves opposite to their portrait**. Eloise's name drifts right while her portrait drifts left, and they meet when the row is centred. The same goes for Brenda (name ←, portrait →) and Oliver. Each pair reads as object and reflection finding each other.
3. After a row has met, it **stays met** (the scrub clamps at centre). Content never drifts back out of alignment while you are reading it.
4. No pinning, so the scroll speed is always the user's.

---

## 6. Micro‑interactions

| Element | Behaviour | Why |
|---|---|---|
| **Cursor** | **Native cursor, everywhere.** One exception: over the trailer poster (fine pointer only), a small pink (#FF0D64) disc labelled "PLAY" in Bebas H5 follows the pointer (`quickTo`, `ui` ease). Hidden on touch, keyboard focus shows the same label centred | A global custom cursor would add noise. The only place an object "looks back" at you is the screen |
| **Text links** (Menu, email, IMDB, credits names if linked) | **Mirror flip**: the word slides up by 100% while its *reflection* (a `scaleY(-1)` copy) rises from below and flips upright into place. Underline: none (as in Figma). Focus‑visible: same flip + 1px pink outline offset 4px | The site's single hover idiom, taken directly from the metaphor |
| **Buttons** (Trailer play) | Press: `scale 0.97` 0.12 s. Release: back with `ui`. Click → poster fractures into 5 facets falling apart (`fracture`, 0.5 s) → embed | The image "breaks" to let the film through |
| **Media hover** (cast portraits, last‑meal images, fine pointer only) | The thin green→pink prism stroke (`Stroke_Green_Pink`) brightens. The image splits into **2 facets offset by 6px** (a "beaten mirror" hairline), and they re‑align on leave | A small echo of the hero. It decorates nothing and hides nothing |
| **Focus** | Every interactive element gets a visible 1px #FF0D64 outline (2px on pink sections, in white). Never removed | Accessibility |
| **Touch** | No hover states are required to reach anything. Tap targets ≥ 44×44 px (menu items get padding without changing their visual position) | Rules |

---

## 7. Technical guardrails (applied in Phase 2)

- Animate **only `transform` and `opacity`**. `clip-path` polygons are *static* (set once), and only the clipped layers' `y` moves.
- Facets = several `<img>` layers sharing **one decoded AVIF/WebP** (same `src`, browser cache) and are removed from the DOM after alignment.
- **Reduced motion:** Lenis off, no facets, no scrub, no intro. All content is shown at once, cuts stay as plain state, and the trailer works normally.
- **No‑JS:** the final Figma layout renders from HTML/CSS. The trailer falls back to a plain link.
- All ScrollTriggers live in `gsap.context()` per section and are reverted on `astro:before-swap`/unload. One Lenis instance drives `ScrollTrigger.update` via `gsap.ticker`.
- No layout shift: every image has explicit `width`/`height`/`aspect-ratio`; fonts are preloaded `woff2` with `font-display: swap` and metric‑matched fallbacks.
- WebGL: **not needed.** Facets and glints are DOM/CSS. I'd only reconsider if you want true refraction on the hero, and I'd ask first.

---

## 8. Open questions & missing assets

**Blocking or important**
1. **No mobile/tablet frames.** Only the 1440 desktop exists. Should I derive the mobile layout myself (same type scale, stacked, documented as a deviation), or will you provide a 390‑wide frame?
2. **Trailer.** The brief says `[FILL IN]`, and Figma "image 34" (62:62) is a *screenshot of a YouTube player*, UI chrome included. I need the trailer URL/file and ideally a clean still. Without them: a visible "Trailer link missing" placeholder on the poster.
3. **Fonts.** Figma uses **Bebas Neue Bold / Book / Regular** (the multi‑weight family) and **Inter Light**. Google Fonts' Bebas Neue only has Regular. Can you supply the `woff2`/licence for Bold and Book, or should I fall back to Regular (H1/H2 would look slightly lighter)?
4. **Image export.** In this environment the Figma asset host (`www.figma.com`) is blocked by the network proxy. I can read the images only as lower‑resolution previews. For pixel‑accurate AVIF/WebP I need either that host allowed for this environment or the originals exported (hero, 62:22/23 halves, 62:30, 62:32, 62:35, 62:17, foreword background, cast photos 01–04, prism texture 62:15, background plate 62:38).
5. **IMDB link** (62:84): text only, no URL.

**Content inconsistencies between pages** (I'll use *Desktop design* unless you say otherwise)
6. Third star: **Oliver Mayo** (final) vs **John D'Aloisio** (Presentation page).
7. Contact: **queries@lastdreamfilm.com** (final) vs **hugofilm@gmail.com + a phone number** (Presentation page).

**Minor**
8. Menu targets: About → statement section (62:34)? Cast → 62:63, Contact → 62:81. Please confirm.
9. "Language / English" (vertical, hero): is this static info (no language switcher)? I'll treat it as static text.
10. `Second/Half white` is defined as `#FFFFFF`. Is it meant to be white at 50% opacity? It's used for secondary labels ("Director, Writer", "Stars").
11. The Prototype page has no readable prototype interactions through the MCP. Confirm there was no earlier motion spec I should honour.
12. Favicon (125:9) and webclip (125:10) exist and will be used. Instagram posts are out of scope.
