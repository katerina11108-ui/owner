/** Micro-interaction: "beaten mirror" hairline on media hover (fine pointers only; CSS drives the motion). */
import { qa } from '../lib/dom';

export function mediaHover() {
  const made = qa('.media-hover').map((media) => {
    const inner = media.querySelector('.media__inner');
    const picture = inner?.querySelector('.media__picture');
    if (!inner || !picture) return null;
    const layer = document.createElement('div');
    layer.className = 'hover-split';
    layer.setAttribute('aria-hidden', 'true');
    const clone = picture.cloneNode(true) as HTMLElement;
    clone.classList.replace('media__picture', 'facet__picture');
    clone.querySelector('img')?.setAttribute('alt', '');
    layer.appendChild(clone);
    inner.appendChild(layer);
    return layer;
  });
  return () => made.forEach((l) => l?.remove());
}
