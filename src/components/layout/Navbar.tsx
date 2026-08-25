"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Palmtree } from "lucide-react";

const navLinks = [
  { href: "/properties", label: "All Listings" },
  { href: "/#about", label: "About" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur-md">
      <div className="container-page flex h-[var(--nav-height)] items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean-500 text-cream">
            <Palmtree size={18} />
          </span>
          <span className="font-display text-lg font-medium text-ink">
            My Dream Vacation Rentals
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ocean-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/properties"
            className="inline-flex items-center rounded-full bg-ocean-500 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ocean-600"
          >
            Book Direct
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-cream md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-sand hover:text-ocean-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/properties"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ocean-500 px-5 py-3 text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Book Direct
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
