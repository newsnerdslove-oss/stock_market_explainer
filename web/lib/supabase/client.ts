import { createBrowserClient } from "@supabase/ssr";

// Browser-side Supabase client (Client Components). Reads the public env vars;
// the session lives in cookies managed by @supabase/ssr, refreshed by middleware.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

/** True only when the public Supabase env is configured (so we can degrade to localStorage-only). */
export function supabaseConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}
