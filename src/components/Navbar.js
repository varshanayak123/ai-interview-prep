"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          AI Interview Prep
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Sign Up
          </Link>
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
        <div className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {[...navLinks, { href: "/login", label: "Login" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-indigo-600 px-3 py-2 text-center font-semibold text-white"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}