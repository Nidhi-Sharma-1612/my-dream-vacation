"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { amenityHighlights } from "@/data/site";

const INITIAL_MOBILE_COUNT = 4;

export default function Amenities() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="amenities" className="bg-ocean-900 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Every stay includes"
          title="The comforts you'd expect from a 5-star hotel, in a home of your own."
          description="No hunting for hidden fees or missing basics — these standards apply across every home in the My Dream Vacation collection."
          light
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenityHighlights.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10 transition-colors hover:bg-cream/10 ${
                i >= INITIAL_MOBILE_COUNT && !showAll ? "hidden sm:block" : ""
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral-500/20 text-coral-400">
                <item.icon size={20} />
              </span>
              <h3 className="font-display mt-4 text-lg font-medium text-cream">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                {item.description}
              </p>
            </div>
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
    </section>
  );
}
