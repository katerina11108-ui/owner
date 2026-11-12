/** G3 — menu anchors: Lenis scroll with the "reflect" curve, then focus moves to the target heading. */
import { easeFn } from '../lib/gsap';
import { qa } from '../lib/dom';
import { duration } from '../tokens';
import type { Scene } from '../types';

export const anchorsScene: Scene = ({ lenis }) => {
  const links = qa<HTMLAnchorElement>('a[data-anchor]');
  const onClick = (e: MouseEvent) => {
    const a = e.currentTarget as HTMLAnchorElement;
    const id = a.hash;
    const target = id ? document.querySelector<HTMLElement>(id) : null;
    if (!target) return;
    e.preventDefault();
    const focusEl = target.querySelector<HTMLElement>('[tabindex="-1"]') ?? target;
    lenis.scrollTo(target, {
      duration: duration.anchorScroll,
      easing: easeFn('reflect'),
      onComplete: () => focusEl.focus({ preventScroll: true }),
    });
    history.replaceState(null, '', id);
  };
  links.forEach((a) => a.addEventListener('click', onClick));
  return () => links.forEach((a) => a.removeEventListener('click', onClick));
};
