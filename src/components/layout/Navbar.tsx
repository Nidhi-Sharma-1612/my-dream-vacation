"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Palmtree } from "lucide-react";

const navLinks = [
  { href: "/properties", label: "All Listings", sectionId: null },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#amenities", label: "Amenities", sectionId: "amenities" },
  { href: "/#faq", label: "FAQ", sectionId: "faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;

    const sectionIds = navLinks
      .map((link) => link.sectionId)
      .filter((id): id is string => id !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [onHome]);

  const isActive = (link: (typeof navLinks)[number]) => {
    if (link.sectionId) return onHome && activeSection === link.sectionId;
    return pathname.startsWith(link.href);
  };

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
              className={`text-sm transition-colors ${
                isActive(link)
                  ? "font-bold text-ocean-600"
                  : "font-medium text-ink-soft hover:text-ocean-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/properties"
            className="inline-flex items-center rounded-full bg-ocean-500 px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:scale-105 hover:bg-ocean-600 active:scale-95"
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
          <span className="relative flex h-5.5 w-5.5 items-center justify-center">
            <Menu
              size={22}
              className={`absolute transition-all duration-200 ${
                open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={22}
              className={`absolute transition-all duration-200 ${
                open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-cream animate-[fade-in-up_0.25s_ease-out_both] md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive(link)
                    ? "bg-ocean-50 font-bold text-ocean-600"
                    : "font-medium text-ink-soft hover:bg-sand hover:text-ocean-600"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/properties"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ocean-500 px-5 py-3 text-sm font-semibold text-cream transition-transform active:scale-95"
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
