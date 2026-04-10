/**
 * Paths for static files you host under `public/`.
 *
 * @TODO Mirror assets here (or set up your own CDN and switch callers to full URLs):
 * - `public/images/tech-stack-icons/{key}.svg` and `{key}-light.svg` / `{key}-dark.svg` when `theme` is set in tech-stack data
 * - `public/images/sprites/duck.webp` (duck follower)
 */
export function techStackIconPath(
  key: string,
  variant: "light" | "dark" | "single"
): string {
  if (variant === "single") {
    return `/images/tech-stack-icons/${key}.svg`
  }
  return `/images/tech-stack-icons/${key}-${variant}.svg`
}

export const DUCK_SPRITE_PATH = "/images/sprites/duck.webp"
