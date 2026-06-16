import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Server-side Supabase client (Server Components, Route Handlers, Server Actions).
// Cookie adapter uses ONLY getAll/setAll (the legacy get/set/remove break sessions).
// `cookies()` is sync on Next 14 but written async so a Next 15 upgrade is a no-op.
export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          // Throws when called from a Server Component render — harmless because
          // middleware is the one refreshing the session cookie.
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            /* called from a RSC; ignore */
          }
        },
      },
    },
  );
}
