/** Row 3 — images align from two "beaten mirror" strips; paragraphs do not move. */
import { gsap } from '../lib/gsap';
import { createFacets } from '../lib/facets';
import { settle } from '../lib/reveal';
import { alt, q, qa } from '../lib/dom';
import { distance, duration, facets, stagger, triggers } from '../tokens';
import type { Scene } from '../types';

export const mealScene: Scene = ({ desktop }) => {
  const sec = q('[data-scene="meal"]');
  if (!sec) return;
  const medias = qa('[data-facets="media"]', sec);
  if (!desktop) {
    medias.forEach((m) => settle(m));
    return;
  }
  const all = medias.map((m) => {
    const f = createFacets(m, facets.media);
    gsap.set(f.layers, { y: (i: number) => `${alt(i) * distance.facetOffsetVh.desktop}vh` });
    gsap.to(f.layers, {
      y: 0,
      duration: duration.align,
      ease: 'reflect',
      stagger: stagger.facet,
      scrollTrigger: { trigger: m, start: triggers.reveal, once: true },
      onComplete: () => f.destroy(),
    });
    return f;
  });
  return () => all.forEach((f) => f.destroy());
};
