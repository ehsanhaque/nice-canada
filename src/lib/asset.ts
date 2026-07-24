// Prefix a public/ asset path with the configured basePath.
// next/image with `unoptimized` does NOT auto-apply basePath to src, so local
// image/asset paths must be prefixed manually to work on subpath deploys
// (e.g. GitHub Pages project sites served from /<repo>/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
