// Generate a self-signed TLS cert for the HTTPS dev server (npm run dev:https), so
// the LAN preview is served over HTTPS — a SECURE browser context — without Next's
// mkcert path, which needs interactive sudo to install a CA. Self-signed means a
// one-time "proceed" warning in the browser; that's expected and harmless for dev.
//
// Idempotent: skips if the cert already exists. The SAN covers localhost + every
// current LAN IPv4, so the cert matches however you reach the box.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "certificates");
const certPath = path.join(dir, "localhost.pem");
const keyPath = path.join(dir, "localhost-key.pem");

if (existsSync(certPath) && existsSync(keyPath)) {
  console.log("certificates/ present — reusing the existing dev cert.");
  process.exit(0);
}

mkdirSync(dir, { recursive: true });

const ips = new Set(["IP:127.0.0.1", "IP:0.0.0.0"]);
for (const ifaces of Object.values(os.networkInterfaces())) {
  for (const i of ifaces ?? []) {
    if (i.family === "IPv4" && !i.internal) ips.add(`IP:${i.address}`);
  }
}
const san = `subjectAltName=DNS:localhost,${[...ips].join(",")}`;

try {
  execFileSync(
    "openssl",
    ["req", "-x509", "-newkey", "rsa:2048", "-nodes", "-keyout", keyPath, "-out", certPath, "-days", "825", "-subj", "/CN=localhost", "-addext", san],
    { stdio: ["ignore", "ignore", "inherit"] },
  );
} catch (err) {
  console.error("Could not generate a dev cert with openssl:", err?.message ?? err);
  console.error("Install openssl, or run `npm run dev` (http) instead.");
  process.exit(1);
}

console.log(`Generated a self-signed dev cert (${san}).`);
console.log("Browsers show a one-time 'proceed' warning for self-signed certs — expected.");
