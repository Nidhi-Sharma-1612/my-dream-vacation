import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PropertyCard from "@/components/shared/PropertyCard";
import Reveal from "@/components/ui/Reveal";
import { getFeaturedProperties } from "@/data/properties";

export default function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section id="properties" className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The collection"
            title="Meet our waterfront homes."
            description="Three hand-picked properties across Southwest Florida and Round Lake, Ontario — each one bookable direct by email."
          />
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 transition-colors hover:text-ocean-500"
          >
            View all listings <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, i) => (
            <Reveal
              key={property.slug}
              delay={i * 100}
              className={`relative ${i % 2 === 1 ? "lg:mt-10" : ""}`}
            >
              <span
                aria-hidden
                className="font-display absolute -right-3 -top-3 z-1 flex h-10 w-10 items-center justify-center rounded-full bg-ocean-500 text-sm font-semibold text-cream shadow-lg ring-4 ring-cream"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
