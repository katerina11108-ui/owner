/**
 * Row 8 — Signature moment C: "Reflections meet". Each name and its portrait arrive from
 * opposite sides, scrubbed to scroll, and lock at the Figma composition when the row is
 * centred (the trigger is then retired so content never drifts while being read). No pinning.
 */
import { gsap, ScrollTrigger } from '../lib/gsap';
import { cutIn, revealLines, settle } from '../lib/reveal';
import { q, qa } from '../lib/dom';
import { distance } from '../tokens';
import type { Scene } from '../types';

export const castScene: Scene = ({ desktop }) => {
  const sec = q('[data-scene="cast"]');
  if (!sec) return;
  const cuts = qa('[data-cut]', sec);
  cuts.forEach((el) => cutIn(el, el));

  const roles = q('[data-row-cut="hugo"]', sec);
  const hugoPhoto = q('.cast__photo--hugo', sec);

  if (!desktop) {
    if (roles) cutIn(roles, roles);
    qa('.cast__name', sec).forEach((n) => revealLines(n));
    qa('.cast__photo', sec).forEach((m) => settle(m));
    return;
  }

  if (roles && hugoPhoto) cutIn(roles, hugoPhoto, 'center center');

  const rows = [...new Set(qa('[data-row]', sec).map((el) => el.dataset.row!))];
  rows.forEach((row) => {
    const els = qa(`[data-row="${row}"]`, sec);
    const trigger = els.find((el) => el.classList.contains('cast__photo')) ?? els[0];
    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    els.forEach((el) => {
      const drift = Number(el.dataset.drift ?? 0);
      if (drift) tl.fromTo(el, { x: `${drift * distance.castDriftVw}vw` }, { x: 0 }, 0);
      if (el.hasAttribute('data-rise')) {
        const inner = el.querySelector('.media__inner');
        if (inner) tl.fromTo(inner, { yPercent: distance.castPortraitRise, scale: distance.castPortraitScale }, { yPercent: 0, scale: 1 }, 0);
      }
    });
    ScrollTrigger.create({
      trigger,
      start: 'top bottom',
      end: 'center center',
      scrub: true,
      animation: tl,
      onLeave: (self) => {
        // Met: lock in place for good.
        tl.progress(1);
        self.kill(false, true);
      },
    });
  });
};
