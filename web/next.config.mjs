/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the LAN preview host to load dev resources (HMR, chunks). Next 16 blocks
  // cross-origin dev requests by default, which otherwise stops the client from
  // hydrating when the app is opened via the machine's LAN IP. Dev-only.
  allowedDevOrigins: ["192.168.110.59"],
  experimental: {
    // Enables React's View Transitions API so route navigations crossfade.
    viewTransition: true,
  },
};

export default nextConfig;
