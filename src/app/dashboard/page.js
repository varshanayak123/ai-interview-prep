import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function DashboardContent() {
  const supabase = await createClient();

  // Verify the user on the server (never trust the browser)
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (!claims) redirect("/login");

  // Read this user's own profile (RLS only allows their own row)
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", claims.sub)
    .single();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">
        Welcome, {profile?.full_name || claims.email}
      </h1>
      <p className="mt-2 text-slate-600">Signed in as {claims.email}</p>

      <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
        Language selection and interviews coming in Phase 4.
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={<p className="px-4 py-12 text-center text-slate-500">Loading...</p>}
    >
      <DashboardContent />
    </Suspense>
  );
}