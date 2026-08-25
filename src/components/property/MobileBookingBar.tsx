"use client";

import { useEffect, useState } from "react";

export default function MobileBookingBar({
  pricePerNight,
}: {
  pricePerNight: number;
}) {
  const [hideForFooter, setHideForFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideForFooter(entry.isIntersecting)
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-black/10 bg-white px-5 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 lg:hidden ${
        hideForFooter ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <p className="text-sm text-ink">
        <span className="font-display text-lg font-semibold">
          ${pricePerNight}
        </span>
        <span className="text-ink-soft"> / night</span>
      </p>
      <a
        href="#booking-widget"
        className="rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
      >
        Check availability
      </a>
    </div>
  );
}
