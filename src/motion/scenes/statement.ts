/** Row 2 — label cuts in; the "17 prisoners" statement gets the slowest, plainest reveal. */
import { cutIn, revealLines, settle } from '../lib/reveal';
import { q } from '../lib/dom';
import { duration, stagger, triggers } from '../tokens';
import type { Scene } from '../types';

export const statementScene: Scene = () => {
  const sec = q('[data-scene="statement"]');
  if (!sec) return;
  const label = q('[data-cut]', sec);
  const text = q('[data-lines="statement"]', sec);
  const media = q('[data-settle]', sec);
  if (label) cutIn(label, sec, triggers.statement);
  if (text) revealLines(text, { duration: duration.hold, stagger: stagger.statementLine, start: triggers.statement });
  if (media) settle(media);
};
