/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export a fully static site for S3/Pages deploys
  output: 'export',
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
  eslint: {
    // Do not fail the build on ESLint errors (parity with previous Gatsby CI)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
