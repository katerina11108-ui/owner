/** Shared reveal primitives: masked lines (Hold) and hard cuts (Cut). */
import { gsap, ScrollTrigger, SplitText } from './gsap';
import { distance, duration, stagger, triggers } from '../tokens';

interface LineOpts {
  duration?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
  /** Element that triggers the reveal (default: the text itself). */
  trigger?: Element;
  start?: string;
}

/**
 * Lines rise inside overflow masks. autoSplit re-wraps on resize / font load;
 * once the reveal has played it is never replayed.
 */
export function revealLines(el: HTMLElement, o: LineOpts = {}) {
  let played = false;
  return SplitText.create(el, {
    type: 'lines',
    mask: 'lines',
    linesClass: 'ld-line',
    autoSplit: true,
    onSplit(self) {
      if (played) return;
      return gsap.from(self.lines, {
        yPercent: distance.lineMaskYPercent,
        duration: o.duration ?? duration.hold,
        ease: o.ease ?? 'reflect',
        stagger: o.stagger ?? stagger.line,
        delay: o.delay ?? 0,
        onComplete: () => {
          played = true;
        },
        scrollTrigger: { trigger: o.trigger ?? el, start: o.start ?? triggers.reveal, once: true },
      });
    },
  });
}

/** Hard cut: hidden until the trigger, then present in a single frame. Visibility only, so
 *  designed opacities (e.g. the 50% pink label) are untouched. */
export function cutIn(targets: Element | Element[], trigger: Element, start: string = triggers.reveal, onCut?: () => void) {
  const els = gsap.utils.toArray<Element>(targets);
  if (!els.length) return;
  gsap.set(els, { visibility: 'hidden' });
  ScrollTrigger.create({
    trigger,
    start,
    once: true,
    onEnter: () => {
      gsap.set(els, { visibility: 'visible' });
      onCut?.();
    },
  });
}

/** Image settles inside its fixed frame. */
export function settle(media: HTMLElement, o: { scale?: number; duration?: number; start?: string } = {}) {
  const inner = media.querySelector('.media__inner');
  if (!inner) return;
  gsap.from(inner, {
    scale: o.scale ?? distance.mediaSettleScale,
    duration: o.duration ?? duration.dread,
    ease: 'dread',
    scrollTrigger: { trigger: media, start: o.start ?? triggers.reveal, once: true },
  });
}
