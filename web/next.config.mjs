/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enables React's View Transitions API so route navigations crossfade.
    viewTransition: true,
  },
};

export default nextConfig;
