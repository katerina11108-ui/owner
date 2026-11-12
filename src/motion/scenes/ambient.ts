/**
 * G1 — prism "blicks": the only element that lives on its own. Desktop only.
 * Slow drift, plus a small extra slide from Lenis scroll velocity (transform only, so the
 * resting image is exactly the Figma frame).
 */
import { gsap } from '../lib/gsap';
import { q } from '../lib/dom';
import { distance, duration } from '../tokens';
import type { Scene } from '../types';

export const ambientScene: Scene = ({ desktop, lenis }) => {
  const drift = q('[data-prism-drift]');
  if (!desktop || !drift) return;
  gsap.fromTo(
    drift,
    { xPercent: -distance.blickDriftPercent / 2 },
    { xPercent: distance.blickDriftPercent / 2, duration: duration.blickCycle, ease: 'dread', yoyo: true, repeat: -1 },
  );
  const inner = drift.querySelector('.media__inner');
  if (!inner) return;
  const toY = gsap.quickTo(inner, 'y', { duration: duration.dread, ease: 'reflect' });
  const clamp = gsap.utils.clamp(-distance.blickVelocityMaxPx, distance.blickVelocityMaxPx);
  const off = lenis.on('scroll', ({ velocity }: { velocity: number }) => toY(clamp(-velocity * distance.blickVelocityPx)));
  return off;
};
