import type Lenis from 'lenis';

export interface SceneEnv {
  /** ≥1100px composition (otherwise the stacked mobile layout). */
  desktop: boolean;
  lenis: Lenis;
}
/** A scene sets up its tweens inside the active gsap.matchMedia context (auto-reverted)
 *  and may return extra cleanup for DOM it created or listeners it added. */
export type Scene = (env: SceneEnv) => void | (() => void);

declare global {
  interface Window {
    __ldMotion?: boolean;
  }
}
