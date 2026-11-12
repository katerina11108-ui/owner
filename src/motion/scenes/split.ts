/** Row 4 — Signature moment B: grey holds, then a hard cut to pink with a one-frame flash. */
import { gsap, ScrollTrigger } from '../lib/gsap';
import { revealLines } from '../lib/reveal';
import { q } from '../lib/dom';
import { distance, duration, triggers } from '../tokens';
import type { Scene } from '../types';

export const splitScene: Scene = () => {
  const sec = q('[data-scene="split"]');
  if (!sec) return;
  const pink = q('[data-cut-pink]', sec);
  const flash = q('[data-flash]', sec);
  const text = q('[data-lines="pink"]', sec);
  if (!pink || !flash) return;

  gsap.set(pink, { visibility: 'hidden' });
  ScrollTrigger.create({
    trigger: sec,
    start: triggers.cutToPink,
    once: true,
    onEnter: () => {
      gsap.set(pink, { visibility: 'visible' }); // the cut — no tween
      gsap.fromTo(
        flash,
        { opacity: 0 },
        { keyframes: [{ opacity: distance.flashPeak, duration: duration.flash }, { opacity: 0, duration: duration.flash }], ease: 'none' },
      );
    },
  });
  if (text) revealLines(text, { duration: duration.align, trigger: sec, start: triggers.cutToPink, delay: duration.flash * 2 });
};
