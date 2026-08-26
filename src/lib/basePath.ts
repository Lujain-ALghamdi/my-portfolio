/**
 * The app's base path when deployed to GitHub Pages (e.g. "/my-portfolio").
 * Empty locally and on any root-domain deployment.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a root-relative path (e.g. "/certificates/foo.pdf") with the
 * configured base path so static assets resolve correctly under
 * GitHub Pages project sites.
 */
export function withBasePath(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
