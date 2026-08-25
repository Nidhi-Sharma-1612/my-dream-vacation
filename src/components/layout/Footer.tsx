import Link from "next/link";
import Image from "next/image";
import { Palmtree, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/properties", label: "All listings" },
      { href: "/#about", label: "About us" },
      { href: "/#amenities", label: "Amenities" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms and conditions" },
      { href: "/privacy-policy#cookies", label: "Cookie Preferences" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-ocean-900 text-cream/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ocean-600">
              <Palmtree size={18} />
            </span>
            <span className="font-display text-lg font-medium text-cream">
              My Dream Vacation Rentals
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            {siteConfig.description}
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-medium uppercase tracking-wide text-cream">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-sm font-medium uppercase tracking-wide text-cream">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/60">
            <li className="flex items-center gap-2">
              <Mail size={15} />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-cream"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/50 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p>
              © {new Date().getFullYear()} My Dream Vacation Rentals. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span>Design and developed by</span>
            <Image
              src="/design-by-dial-logo.png"
              alt="Design by Dial"
              width={110}
              height={26}
              className="h-5 w-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
