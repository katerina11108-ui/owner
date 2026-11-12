export const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);
export const qa = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));
/** Alternating facet direction: -1, 1, -1, … */
export const alt = (i: number) => (i % 2 ? 1 : -1);
