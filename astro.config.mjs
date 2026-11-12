// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Inline small stylesheets to avoid a render-blocking request on first paint.
  build: { inlineStylesheets: 'auto' },
  image: {
    // Sharp is the default service; keep remote images disabled — every asset is local.
    responsiveStyles: false,
  },
  prefetch: false,
});
