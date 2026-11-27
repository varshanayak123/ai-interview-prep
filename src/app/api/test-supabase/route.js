export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return Response.json(
      { ok: false, problem: "Missing env variables. Check .env.local and restart the server." },
      { status: 500 }
    );
  }

  const res = await fetch(`${url}/auth/v1/health`, {
    headers: { apikey: key },
  });

  return Response.json({ ok: res.ok, status: res.status });
}