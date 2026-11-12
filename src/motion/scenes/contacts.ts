/** Row 9 — the two halves of "CONTACTS" close like a mirror; links cut in at the end. */
import { gsap } from '../lib/gsap';
import { q, qa } from '../lib/dom';
import { duration, triggers } from '../tokens';
import type { Scene } from '../types';

export const contactsScene: Scene = ({ desktop }) => {
  const sec = q('[data-scene="contacts"]');
  if (!sec) return;
  const top = q('.half--top', sec);
  const bottom = q('.half--bottom', sec);
  const links = qa('[data-cut]', sec);
  const d = desktop ? 60 : 30;
  gsap.set(links, { visibility: 'hidden' });
  gsap
    .timeline({ scrollTrigger: { trigger: sec, start: triggers.reveal, once: true } })
    .from(top, { yPercent: -d, duration: duration.hold, ease: 'reflect' }, 0)
    .from(bottom, { yPercent: d, duration: duration.hold, ease: 'reflect' }, 0)
    .set(links, { visibility: 'visible' });
};
