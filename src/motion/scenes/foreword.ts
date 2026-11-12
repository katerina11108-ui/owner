/** Row 5 — heading lines rise; the background settles to scale 1 by the time the section reaches the top. Columns are static. */
import { gsap } from '../lib/gsap';
import { revealLines } from '../lib/reveal';
import { q } from '../lib/dom';
import { distance } from '../tokens';
import type { Scene } from '../types';

export const forewordScene: Scene = ({ desktop }) => {
  const sec = q('[data-scene="foreword"]');
  if (!sec) return;
  const heading = q('[data-lines="heading"]', sec);
  if (heading) revealLines(heading);
  const bg = q('[data-scrub-settle] .media__inner', sec);
  if (desktop && bg) {
    gsap.fromTo(
      bg,
      { scale: distance.forewordSettleScale },
      { scale: 1, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'top top', scrub: true } },
    );
  }
};
