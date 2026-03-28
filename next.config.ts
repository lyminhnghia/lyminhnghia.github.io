import type { NextConfig } from "next"

// Set in CI (configure-pages). Locally run `pnpm build:pages` to emit ./out; plain `pnpm build` does not export.
const isGithubPagesExport = process.env.PAGES_BASE_PATH !== undefined

const nextConfig: NextConfig = {
  ...(isGithubPagesExport && { output: "export" as const }),
  ...(isGithubPagesExport && {
    basePath: process.env.PAGES_BASE_PATH || undefined,
    assetPrefix: process.env.PAGES_BASE_PATH || undefined,
  }),
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: [
    "lyminhnghia.localhost",
    // @TODO Add other local dev hostnames you use (e.g. custom `.localhost` domains).
  ],
  devIndicators: false,
  images: {
    ...(isGithubPagesExport && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/:section(blog|components)/writing-effect-inspired-by-apple",
        destination: "/:section/apple-hello-effect",
        permanent: true,
      },
      {
        source: "/:section(blog|components)/work-experience",
        destination: "/:section/work-experience-component",
        permanent: true,
      },
      {
        source: "/:section(blog|components)/theme-switcher-component",
        destination: "/:section/theme-switcher",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/wall-of-love",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/:section(blog|components)/:slug.mdx",
        destination: "/doc.mdx/:slug",
      },
      {
        source: "/:section(blog|components)/:slug",
        destination: "/doc.mdx/:slug",
        has: [
          {
            type: "header",
            key: "accept",
            value: "(?<accept>.*text/markdown.*)",
          },
        ],
      },
      {
        source: "/rss",
        destination: "/blog/rss",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss",
      },
    ]
  },
}

export default nextConfig
