import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { X } from "lucide-react";
import PropertyCard from "@/components/shared/PropertyCard";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "All Listings | My Dream Vacation Rentals",
  description:
    "Browse our short term rental homes in Florida and Ontario, Canada — booked direct, no platform fees.",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; guests?: string }>;
}) {
  const { region, guests } = await searchParams;
  const regions = Array.from(new Set(properties.map((p) => p.region)));
  const minGuests = guests ? Number(guests) : undefined;

  const filtered = properties.filter(
    (p) =>
      (!region || p.region === region) &&
      (!minGuests || p.guests >= minGuests)
  );

  const regionHref = (r?: string) => {
    const params = new URLSearchParams();
    if (r) params.set("region", r);
    if (guests) params.set("guests", guests);
    const query = params.toString();
    return query ? `/properties?${query}` : "/properties";
  };

  const clearGuestsHref = () => {
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    const query = params.toString();
    return query ? `/properties?${query}` : "/properties";
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ocean-900 py-20 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://bookingenginecdn.hostaway.com/listing/93243-384968---1x8vIqYclaVvd1cI5JPgrKha0yaR3QKbxViXp3OUXw-680bb968477e1?width=1280&quality=70&format=webp&v=2"
            alt="Waterfront lake house on Round Lake, Ontario"
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/70 to-ocean-900/40" />
        </div>
        <div className="container-page relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-400">
            The full collection
          </span>
          <h1 className="font-display mt-3 max-w-2xl text-balance text-4xl font-medium text-cream sm:text-5xl">
            {properties.length} homes, hand-picked across {regions.length}{" "}
            destinations.
          </h1>
          <p className="mt-4 max-w-xl text-cream/75">
            Every property is booked directly with its host — no platform
            fees, no surprises at checkout.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            <Link
              href={regionHref()}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                !region
                  ? "bg-ocean-500 text-cream"
                  : "bg-sand text-ink-soft hover:bg-sand-dark"
              }`}
            >
              All regions
            </Link>
            {regions.map((r) => (
              <Link
                key={r}
                href={regionHref(r)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  region === r
                    ? "bg-ocean-500 text-cream"
                    : "bg-sand text-ink-soft hover:bg-sand-dark"
                }`}
              >
                {r}
              </Link>
            ))}

            {minGuests && (
              <Link
                href={clearGuestsHref()}
                className="flex items-center gap-1.5 rounded-full bg-ocean-500 px-4 py-1.5 text-xs font-semibold text-cream"
              >
                {minGuests}+ guests
                <X size={13} />
              </Link>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl bg-sand p-10 text-center text-sm text-ink-soft">
              No homes match those filters yet.{" "}
              <Link href="/properties" className="font-semibold text-ocean-600">
                Clear filters
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
