/**
 * Storyboard rows 0 (intro), 1 (hero reveal), 1b (hero re-fractures on scroll-out).
 * Signature moment A — "The mirror finds its angle".
 */
import { gsap } from '../lib/gsap';
import { createFacets } from '../lib/facets';
import { alt, q, qa } from '../lib/dom';
import { distance, duration, facets, intro, stagger } from '../tokens';
import type { Scene } from '../types';

let introDone = false;

const wait = (s: number) => new Promise((r) => setTimeout(r, s * 1000));
const seen = () => {
  try {
    return sessionStorage.getItem(intro.sessionKey) === '1';
  } catch {
    return false;
  }
};
const markSeen = () => {
  try {
    sessionStorage.setItem(intro.sessionKey, '1');
  } catch {
    /* private mode — intro simply plays in full again */
  }
};

export const heroScene: Scene = ({ desktop }) => {
  const hero = q('.hero');
  const media = q('[data-hero-media]');
  const overlay = q('[data-intro-overlay]');
  const glint = q('[data-intro-glint]');
  if (!hero || !media || !overlay || !glint) return;

  const lines = qa('[data-intro="title"] .line');
  const chrome = qa('[data-intro="chrome"]');
  const count = desktop ? facets.desktop : facets.mobile;
  const off = desktop ? distance.facetOffsetVh.desktop : distance.facetOffsetVh.mobile;
  const f = createFacets(media, count);

  const showFinal = () => {
    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(lines, { visibility: 'visible', yPercent: 0 });
    gsap.set(chrome, { visibility: 'visible' });
  };

  // 1b — desktop only: the strips stay; their content slides apart as the hero leaves.
  if (desktop) {
    gsap.to(f.pictures, {
      y: (i: number) => `${alt(i) * off * distance.heroRefracture}vh`,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  let removeSkip = () => {};

  if (introDone) {
    showFinal();
    if (!desktop) f.destroy();
  } else {
    const repeat = seen();
    gsap.set(lines, { visibility: 'visible', yPercent: distance.lineMaskYPercent });
    gsap.set(f.layers, { y: (i: number) => `${alt(i) * off}vh`, autoAlpha: 0.6 });
    gsap.set(overlay, { autoAlpha: 1 });

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        introDone = true;
        markSeen();
        removeSkip();
        if (!desktop) f.destroy();
      },
    });

    if (!repeat) {
      // 0.15 — a glint crosses the black frame, like light catching a mirror edge
      tl.fromTo(glint, { x: '-70vw', autoAlpha: 0 }, { x: '70vw', autoAlpha: 1, duration: duration.glint, ease: 'dread' }, 0.15)
        .to(glint, { autoAlpha: 0, duration: duration.flash * 2, ease: 'none' }, 0.15 + duration.glint - duration.flash * 2)
        // 0.45 — CUT to the out-of-register reflection
        .set(overlay, { autoAlpha: 0 }, 0.45)
        // 0.45 → ~2.2 — strips slide into register, centre first
        .to(f.layers, { y: 0, autoAlpha: 1, duration: duration.introAlign, ease: 'dread', stagger: { each: stagger.facet, from: 'center' } }, 0.45)
        // 1.6 — LAST, then DREAM rise in their masks
        .to(lines, { yPercent: 0, duration: duration.hold, ease: 'reflect', stagger: stagger.line }, 1.6);
    } else {
      // Repeat visit: no glint, a short alignment.
      tl.set(overlay, { autoAlpha: 0 }, 0)
        .to(f.layers, { y: 0, autoAlpha: 1, duration: duration.introRepeat, ease: 'reflect', stagger: { each: stagger.facet / 2, from: 'center' } }, 0)
        .to(lines, { yPercent: 0, duration: duration.introRepeat, ease: 'reflect', stagger: stagger.line / 2 }, 0.2);
    }
    // ≈3.0 — menu, credits, stars, language: cut in together, one frame.
    tl.set(chrome, { visibility: 'visible' }, `>${intro.chromeDelay}`);
    if (!desktop) tl.timeScale(1.25); // mobile intro ≤ ~2.2 s

    // Any input skips straight to the final frame.
    const skip = () => tl.progress(1);
    const evts = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
    evts.forEach((e) => window.addEventListener(e, skip, { passive: true, once: true }));
    removeSkip = () => evts.forEach((e) => window.removeEventListener(e, skip));

    // Gate: fonts + first hero clone decoded, capped.
    const img = f.pictures[0]?.querySelector('img');
    Promise.race([
      Promise.all([document.fonts.ready, img?.decode().catch(() => undefined)]),
      wait(intro.gateTimeout),
    ]).then(() => tl.play());

    return () => {
      removeSkip();
      if (!introDone) tl.progress(1);
      f.destroy();
    };
  }

  return () => f.destroy();
};
