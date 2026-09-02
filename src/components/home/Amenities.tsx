"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { amenityHighlights } from "@/data/site";

const INITIAL_MOBILE_COUNT = 4;

const bubbles = [
  { left: "6%", size: 10, duration: 9, delay: 0 },
  { left: "18%", size: 6, duration: 7, delay: 1.5 },
  { left: "34%", size: 8, duration: 11, delay: 3 },
  { left: "52%", size: 5, duration: 8, delay: 0.8 },
  { left: "68%", size: 9, duration: 10, delay: 2.4 },
  { left: "83%", size: 6, duration: 7.5, delay: 4 },
  { left: "93%", size: 7, duration: 9.5, delay: 1.2 },
];

export default function Amenities() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-ocean-900 py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 text-cream/5"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 motion-reduce:hidden"
      >
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-cream/20"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animation: `bubble-rise ${b.duration}s ease-in ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-10 w-full text-cream sm:h-14"
      >
        <path
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,50 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container-page relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Every stay includes"
            title="The comforts you'd expect from a 5-star hotel, in a home of your own."
            description="No hunting for hidden fees or missing basics — these standards apply across every home in the My Dream Vacation collection."
            light
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenityHighlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 90}
              className={i >= INITIAL_MOBILE_COUNT && !showAll ? "hidden sm:block" : ""}
            >
              <div className="group h-full rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10 transition-all hover:-translate-y-1 hover:bg-cream/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral-500/20 text-coral-400 transition-transform duration-300 group-hover:rotate-6">
                  <item.icon size={20} />
                </span>
                <h3 className="font-display mt-4 text-lg font-medium text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {amenityHighlights.length > INITIAL_MOBILE_COUNT && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mx-auto mt-8 flex items-center gap-1.5 rounded-full bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/20 sm:hidden"
          >
            {showAll ? "Show less" : "Show all amenities"}
            <ChevronDown
              size={16}
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-10 w-full text-cream sm:h-14"
      >
        <path
          d="M0,60 C240,10 480,90 720,50 C960,15 1200,85 1440,40 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
