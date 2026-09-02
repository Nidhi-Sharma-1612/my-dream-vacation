"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "amenities", label: "Amenities" },
  { id: "house-rules", label: "House rules" },
  { id: "location", label: "Location" },
  { id: "similar-homes", label: "Similar homes" },
];

export default function PropertyStickyNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-(--nav-height) z-30 mt-8 border-b border-black/5 bg-cream/95 backdrop-blur-md">
      <div className="container-page scrollbar-none flex gap-2 overflow-x-auto py-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === s.id
                ? "bg-ocean-500 text-cream"
                : "text-ink-soft hover:bg-sand"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
