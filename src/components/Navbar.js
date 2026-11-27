"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setMenuOpen(false);
    router.push("/");
    router.refresh();
  }

  const linkClass = "text-sm font-medium text-slate-600 hover:text-indigo-600";
  const primaryBtn =
    "rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          AI Interview Prep
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className={linkClass}>Home</Link>
          <Link href="/about" className={linkClass}>About</Link>
          {user ? (
            <>
              <Link href="/dashboard" className={linkClass}>Dashboard</Link>
              <button onClick={handleLogout} className={primaryBtn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className={linkClass}>Login</Link>
              <Link href="/signup" className={primaryBtn}>Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-md p-2 text-2xl text-slate-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/" className="rounded-md px-3 py-2 hover:bg-slate-100">Home</Link>
          <Link href="/about" className="rounded-md px-3 py-2 hover:bg-slate-100">About</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="rounded-md px-3 py-2 hover:bg-slate-100">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="mt-2 rounded-lg bg-indigo-600 px-3 py-2 font-semibold text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-md px-3 py-2 hover:bg-slate-100">Login</Link>
              <Link
                href="/signup"
                className="mt-2 rounded-lg bg-indigo-600 px-3 py-2 text-center font-semibold text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}