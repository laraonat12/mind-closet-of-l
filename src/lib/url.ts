// GitHub Pages serves this site under a /mind-closet-of-l/ subpath (see
// `base` in astro.config.mjs), so every internal link needs that prefix.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}
