// Завантажує фото й логотип з Figma у public/images.
// Запуск: FIGMA_TOKEN=xxxx npm run assets   (персональний токен: Figma → Settings → Security → Personal access tokens)
import { readFile, writeFile, mkdir } from 'node:fs/promises';
const token = process.env.FIGMA_TOKEN;
if (!token) { console.error('Потрібен FIGMA_TOKEN'); process.exit(1); }
const cfg = JSON.parse(await readFile(new URL('./figma-assets.json', import.meta.url)));
const out = new URL('../public/images/', import.meta.url);
await mkdir(out, { recursive: true });
const api = (p) => fetch('https://api.figma.com/v1' + p, { headers: { 'X-Figma-Token': token } }).then((r) => r.json());
const save = async (url, name) => { const r = await fetch(url); await writeFile(new URL(name, out), Buffer.from(await r.arrayBuffer())); console.log('✓', name); };
const fills = await api(`/files/${cfg.fileKey}/images`);
for (const [hash, name] of Object.entries(cfg.images)) {
  const url = fills.meta?.images?.[hash];
  if (url) await save(url, name); else console.warn('нема в файлі:', hash, name);
}
for (const n of cfg.nodes) {
  const r = await api(`/images/${cfg.fileKey}?ids=${encodeURIComponent(n.id)}&format=${n.format}`);
  const url = r.images?.[n.id]; if (url) await save(url, n.file);
}
