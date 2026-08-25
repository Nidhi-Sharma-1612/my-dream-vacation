import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PropertyCard from "@/components/shared/PropertyCard";
import { getFeaturedProperties } from "@/data/properties";

export default function FeaturedProperties() {
  const featured = getFeaturedProperties();

  return (
    <section id="properties" className="py-24 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The collection"
            title="Meet our waterfront homes."
            description="Three hand-picked properties across Southwest Florida and Round Lake, Ontario — each one bookable direct by email."
          />
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 hover:text-ocean-500"
          >
            View all listings <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
