import os from "node:os";

// The machine's current non-internal IPv4 address(es). Auto-detected so the LAN
// preview keeps working when the IP changes — no need to hand-edit a hardcoded IP.
function lanIPv4s() {
  const out = [];
  for (const ifaces of Object.values(os.networkInterfaces())) {
    for (const i of ifaces ?? []) {
      if (i.family === "IPv4" && !i.internal) out.push(i.address);
    }
  }
  return out;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the LAN preview host(s) to load dev resources (HMR, chunks). Next 16 blocks
  // cross-origin dev requests by default, which otherwise stops the client from
  // hydrating when the app is opened via the machine's LAN IP. Auto-detected +
  // a stable fallback. Dev-only (ignored by the production build).
  allowedDevOrigins: [...new Set(["192.168.110.59", ...lanIPv4s()])],
  experimental: {
    // Enables React's View Transitions API so route navigations crossfade.
    viewTransition: true,
  },
};

export default nextConfig;
