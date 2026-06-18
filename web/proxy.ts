import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Refresh the Supabase session on navigation. Does NOT gate routes — lessons stay
// public/SSG; per-user data is protected by RLS. Excludes static assets + the
// public tutor API. (Next 16 renamed middleware.ts → proxy.ts; runs on Node.)
export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/tutor|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
