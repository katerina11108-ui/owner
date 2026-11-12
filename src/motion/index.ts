/**
 * Motion entry. Everything is created inside gsap.matchMedia so a breakpoint or
 * reduced-motion change reverts all tweens, ScrollTriggers, splits and inline styles.
 * Without JS, or with prefers-reduced-motion, the page is the static Figma composition.
 */
import { gsap, ScrollTrigger } from './lib/gsap';
import { createLenis } from './lib/lenis';
import { media } from './tokens';
import type { Scene } from './types';
import { heroScene } from './scenes/hero';
import { statementScene } from './scenes/statement';
import { mealScene } from './scenes/meal';
import { splitScene } from './scenes/split';
import { forewordScene } from './scenes/foreword';
import { quoteScene } from './scenes/quote';
import { trailerScene, wireTrailer } from './scenes/trailer';
import { castScene } from './scenes/cast';
import { contactsScene } from './scenes/contacts';
import { ambientScene } from './scenes/ambient';
import { anchorsScene } from './scenes/anchors';
import { mediaHover } from './scenes/mediaHover';

window.__ldMotion = true;

const scenes: Scene[] = [
  heroScene,
  statementScene,
  mealScene,
  splitScene,
  forewordScene,
  quoteScene,
  trailerScene,
  castScene,
  contactsScene,
  ambientScene,
  anchorsScene,
];

const motionOk = '(prefers-reduced-motion: no-preference)';
const mm = gsap.matchMedia();

mm.add(
  {
    desktop: `${media.desktop} and ${motionOk}`,
    mobile: `(max-width: 1099.98px) and ${motionOk}`,
  },
  (ctx) => {
    const { desktop } = ctx.conditions as { desktop: boolean };
    const { lenis, destroy } = createLenis();
    const cleanups = scenes.map((scene) => scene({ desktop, lenis })).filter(Boolean) as (() => void)[];
    return () => {
      cleanups.forEach((fn) => fn());
      destroy();
    };
  },
);

mm.add(`${media.finePointer} and ${motionOk}`, () => mediaHover());

mm.add(media.reducedMotion, () => {
  document.documentElement.classList.remove('js-motion');
});

wireTrailer();

// Lazy images have intrinsic sizes (no layout shift), but refresh once everything is in.
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
