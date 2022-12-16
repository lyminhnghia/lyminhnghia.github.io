/**
 * @type {import('next').NextConfig}
 */
const execSync = require("child_process").execSync;

const lastCommitCommand = "git rev-parse HEAD";
const buildId = execSync(lastCommitCommand).toString().trim();

const plugins = [];

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  compiler: {
    styledComponents: true,
  },
  async generateBuildId() {
    return buildId;
  },
  env: {
    // Inject process.env.BUILD_ID which is then added to the <body>
    BUILD_ID: buildId,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.child_process = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.dns = false;
      config.resolve.fallback.events = false;
      config.resolve.fallback.string_decoder = false;
    }

    return config;
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: typeof process.env.ANALYZE !== "undefined",
});

module.exports = () =>
  plugins.reduce((acc, next) => next(acc), withBundleAnalyzer(nextConfig));
