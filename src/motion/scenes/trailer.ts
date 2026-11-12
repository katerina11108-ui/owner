/**
 * Row 7 — heading rises; desktop: the frame grows 0.88 → 1 as it nears centre while the
 * prism texture brightens to its Figma value ("the mirror becomes a screen").
 * Click-to-play (fracture → embed) only exists when content.trailer.url is set;
 * the trailer is currently offline, so that part is inactive (see README).
 */
import { gsap } from '../lib/gsap';
import { createFacets } from '../lib/facets';
import { revealLines } from '../lib/reveal';
import { alt, q } from '../lib/dom';
import { distance, duration, facets, media as mq } from '../tokens';
import type { Scene } from '../types';

export const trailerScene: Scene = ({ desktop }) => {
  const sec = q('[data-scene="trailer"]');
  if (!sec) return;
  const heading = q('[data-lines="heading"]', sec);
  if (heading) revealLines(heading);
  const frame = q('[data-trailer-frame]', sec);
  const prism = q('[data-prism]');
  if (desktop && frame) {
    const st = { trigger: frame, start: 'top bottom', end: 'center center', scrub: true };
    gsap.fromTo(frame, { scale: distance.trailerScaleFrom }, { scale: 1, ease: 'none', scrollTrigger: st });
    if (prism) gsap.fromTo(prism, { opacity: distance.trailerPrismFrom }, { opacity: 0.5, ease: 'none', scrollTrigger: { ...st } });
  }
};

/** Always wired (also with reduced motion): the poster fractures away, then the embed loads. */
export function wireTrailer() {
  const btn = q<HTMLButtonElement>('[data-trailer-play]');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const src = btn.dataset.src;
    const frame = btn.closest<HTMLElement>('[data-trailer-frame]');
    const poster = frame?.querySelector<HTMLElement>('[data-facets="trailer"]');
    if (!src || !frame || !poster) return;
    const embed = () => {
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.title = btn.textContent?.trim() || 'Trailer';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.allowFullscreen = true;
      Object.assign(iframe.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', border: '0' });
      frame.appendChild(iframe);
      btn.remove();
      iframe.focus();
    };
    if (matchMedia(mq.reducedMotion).matches) return embed();
    const f = createFacets(poster, facets.desktop);
    gsap.to(f.layers, {
      y: (i: number) => `${alt(i) * 30}%`,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'fracture',
      stagger: { each: duration.flash / 2, from: 'center' },
      onComplete: () => {
        poster.style.visibility = 'hidden';
        embed();
      },
    });
  });
}
