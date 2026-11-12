/**
 * Mirror facets: N slanted strips, each a clone of the frame's <picture> clipped by a
 * STATIC clip-path polygon. Only the strips' transform/opacity is ever animated.
 * Clones share the original srcset, so the browser reuses the same downloaded file.
 */
import { facets as facetTokens } from '../tokens';

export interface Facets {
  layers: HTMLElement[];
  /** The picture clone inside each strip (for moving content within a fixed strip). */
  pictures: HTMLElement[];
  destroy(): void;
}

export function createFacets(media: HTMLElement, count: number, skew: number = facetTokens.skew): Facets {
  const inner = media.querySelector<HTMLElement>('.media__inner')!;
  const picture = inner.querySelector<HTMLElement>('.media__picture')!;
  const wrap = document.createElement('div');
  wrap.className = 'facets';
  wrap.setAttribute('aria-hidden', 'true');

  // Edge k as % of width; outer edges overshoot so displaced strips never show a gap.
  const edge = (k: number, top: boolean) => {
    if (k === 0) return -50;
    if (k === count) return 150;
    return (k / count) * 100 + (top ? skew * 50 : -skew * 50);
  };

  const layers: HTMLElement[] = [];
  const pictures: HTMLElement[] = [];
  for (let i = 0; i < count; i++) {
    const strip = document.createElement('div');
    strip.className = 'facet';
    strip.style.clipPath = `polygon(${edge(i, true)}% 0%, ${edge(i + 1, true)}% 0%, ${edge(i + 1, false)}% 100%, ${edge(i, false)}% 100%)`;
    const clone = picture.cloneNode(true) as HTMLElement;
    clone.classList.replace('media__picture', 'facet__picture');
    clone.querySelector('img')?.setAttribute('alt', '');
    strip.appendChild(clone);
    wrap.appendChild(strip);
    layers.push(strip);
    pictures.push(clone);
  }

  picture.after(wrap);
  media.classList.add('has-facets');

  return {
    layers,
    pictures,
    destroy() {
      wrap.remove();
      media.classList.remove('has-facets');
    },
  };
}
