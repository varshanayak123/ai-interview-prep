import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
];

export default async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} AI Interview Prep. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate-600 hover:text-indigo-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}