/** Row 6 — the director's "reflection": the still aligns from facets, then the quote rises line by line. */
import { gsap } from '../lib/gsap';
import { createFacets } from '../lib/facets';
import { revealLines } from '../lib/reveal';
import { alt, q } from '../lib/dom';
import { distance, duration, facets, stagger } from '../tokens';
import type { Scene } from '../types';

const START = 'top 65%';

export const quoteScene: Scene = ({ desktop }) => {
  const sec = q('[data-scene="quote"]');
  if (!sec) return;
  const media = q('[data-facets="quote"]', sec);
  const text = q('[data-lines="quote"]', sec);
  const count = desktop ? facets.desktop : facets.mobile;
  const off = desktop ? distance.facetOffsetVh.desktop : distance.facetOffsetVh.mobile;
  const alignTotal = duration.align + stagger.facet * Math.floor(count / 2);

  let f: ReturnType<typeof createFacets> | undefined;
  if (media) {
    f = createFacets(media, count);
    const layers = f.layers;
    gsap.set(layers, { y: (i: number) => `${alt(i) * off}vh` });
    gsap.to(layers, {
      y: 0,
      duration: duration.align,
      ease: 'reflect',
      stagger: { each: stagger.facet, from: 'center' },
      scrollTrigger: { trigger: sec, start: START, once: true },
      onComplete: () => f?.destroy(),
    });
  }
  if (text) revealLines(text, { duration: duration.hold, trigger: sec, start: START, delay: alignTotal * 0.6 });
  return () => f?.destroy();
};
