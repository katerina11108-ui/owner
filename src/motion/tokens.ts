/**
 * LAST DREAM — motion tokens.
 * Single source of truth for every duration, curve, stagger and distance on the site.
 * Mirrors docs/motion-direction.md §3. Tune here; CSS receives the same values as
 * custom properties via src/layouts/Base.astro (see `cssVars`).
 *
 * Concept: "A reflection that won't hold still." Two tempos only: the Hold and the Cut.
 */

/** Seconds. */
export const duration = {
  /** Hard cut — applied with gsap.set / visibility, never tweened. */
  cut: 0,
  /** 1–2 frame colour hit on a cut (opacity only). */
  flash: 0.08,
  /** Interface feedback (hover / focus). */
  ui: 0.28,
  /** Hover exit — always faster than enter. */
  uiOut: 0.2,
  /** Mirror facets / masked lines settling into register. */
  align: 0.9,
  /** Display-type reveals (H1 / H2 / statements). */
  hold: 1.4,
  /** Slowest move on the site (image settles). */
  dread: 2.2,
  /** Intro: facet alignment of the hero (fits inside introMax). */
  introAlign: 1.6,
  /** Hard cap for the intro image sequence on a first visit. */
  introMax: 2.8,
  /** Intro on a repeat visit in the same session. */
  introRepeat: 0.9,
  /** Glint crossing the black frame at the start of the intro. */
  glint: 0.6,
  /** Menu anchor scroll (Lenis), upper bound. */
  anchorScroll: 1.2,
  /** Ambient prism drift — one half-cycle. */
  blickCycle: 18,
} as const;

/** cubic-bezier control points [x1, y1, x2, y2]. `power2.out` is intentionally absent. */
export const curves = {
  /** Long, heavy deceleration with a reluctant settle — default for "align". */
  reflect: [0.19, 0.86, 0.22, 1],
  /** Slow in, slow out — held scale / opacity moves. */
  dread: [0.62, 0.02, 0.32, 1],
  /** Accelerating away — exits and fractures. */
  fracture: [0.72, 0, 0.88, 0.32],
  /** Interface feedback only. */
  ui: [0.3, 0.7, 0.2, 1],
} as const;

export type CurveName = keyof typeof curves;

/** Seconds between items. */
export const stagger = {
  facet: 0.07,
  line: 0.12,
  /** The "17 prisoners" statement: slowest, plainest reveal on the site. */
  statementLine: 0.18,
  word: 0.035,
  list: 0.09,
} as const;

export const distance = {
  /** Out-of-register mirror strips, in vh, alternating sign. */
  facetOffsetVh: { desktop: 7, mobile: 4 },
  /** Hero facets drifting apart while the hero scrolls away (fraction of facetOffset). */
  heroRefracture: 0.5,
  /** Display lines rise from below their overflow mask. */
  lineMaskYPercent: 125,
  /** Cast: names / portraits converge from ±this many vw. */
  castDriftVw: 6,
  /** Portrait rise inside its frame (Hugo row), in % of frame height… */
  castPortraitRise: 8,
  /** …paired with this scale so the frame is always covered (1 + 2 × rise%). */
  castPortraitScale: 1.18,
  /** Images settle inside fixed frames. */
  mediaSettleScale: 1.08,
  /** Foreword background slow settle (scrubbed). */
  forewordSettleScale: 1.06,
  /** Trailer frame grows into place (scrubbed). */
  trailerScaleFrom: 0.88,
  /** Prism texture opacity at the start of the trailer scrub (Figma value is reached at the end). */
  trailerPrismFrom: 0.28,
  /** Ambient prism drift, % of the layer. */
  blickDriftPercent: 3,
  /** Extra prism slide from scroll velocity, in px per unit of Lenis velocity (clamped). */
  blickVelocityPx: 1.6,
  blickVelocityMaxPx: 40,
  /** "Beaten mirror" hairline on media hover, px. */
  mediaHoverSplitPx: 6,
  /** Flash overlay peak opacity on the cut to pink. */
  flashPeak: 0.35,
} as const;

export const facets = {
  /** Matches the five visible strips in photo 01. */
  desktop: 5,
  mobile: 3,
  /** Small "beaten mirror" echo on the last-meal images. */
  media: 2,
  /** Horizontal lean of facet edges, as a fraction of the frame width. */
  skew: 0.14,
} as const;

export const media = {
  desktop: '(min-width: 1100px)',
  finePointer: '(hover: hover) and (pointer: fine)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const;

export const intro = {
  sessionKey: 'ld:intro-seen',
  /** Max wait for fonts + hero image before the intro starts anyway (s). */
  gateTimeout: 1.6,
  /** Menu / credits cut in this long after the title lands (s). */
  chromeDelay: 0.2,
} as const;

/** ScrollTrigger start positions. */
export const triggers = {
  reveal: 'top 80%',
  statement: 'top 75%',
  cutToPink: 'top 60%',
} as const;

/** Values exposed to CSS as custom properties (used by CSS-only hover states). */
export const cssVars: Record<string, string> = {
  '--dur-ui': `${duration.ui}s`,
  '--dur-ui-out': `${duration.uiOut}s`,
  '--dur-align': `${duration.align}s`,
  '--ease-ui': `cubic-bezier(${curves.ui.join(',')})`,
  '--ease-reflect': `cubic-bezier(${curves.reflect.join(',')})`,
  '--ease-fracture': `cubic-bezier(${curves.fracture.join(',')})`,
  '--media-split': `${distance.mediaHoverSplitPx}px`,
};
