/** GSAP setup: plugins + the named curves from tokens.ts as CustomEases. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import { curves, type CurveName } from '../tokens';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

for (const [name, [x1, y1, x2, y2]] of Object.entries(curves)) {
  CustomEase.create(name, `M0,0 C${x1},${y1} ${x2},${y2} 1,1`);
}

// No generic default: anything that forgets an ease still moves with the site's character.
gsap.defaults({ ease: 'reflect' });

/** A curve as a plain (t) => number function (for Lenis). */
export const easeFn = (name: CurveName) => gsap.parseEase(name) as (t: number) => number;

export { gsap, ScrollTrigger, SplitText };
