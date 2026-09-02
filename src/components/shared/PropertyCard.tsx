import Image from "next/image";
import Link from "next/link";
import { Star, Users, BedDouble, MapPin, ArrowRight } from "lucide-react";
import { Property } from "@/types";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-ocean-600">
          {property.vibe}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-medium text-ink">
            {property.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ink">
            <Star size={14} className="fill-coral-500 text-coral-500" />
            {property.rating.toFixed(1)}
          </div>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-ink-soft">
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="absolute h-full w-full rounded-full bg-ocean-400 opacity-0 group-hover:animate-ping group-hover:opacity-40" />
            <MapPin size={14} className="relative" />
          </span>
          {property.location}
        </p>

        <p className="text-sm leading-relaxed text-ink-soft">
          {property.tagline}
        </p>

        <div className="mt-1 flex items-center gap-4 text-xs text-ink-soft">
          <span className="flex items-center gap-1">
            <Users size={14} /> {property.guests} guests
          </span>
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> {property.bedrooms} beds
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-4">
          <p className="text-sm text-ink">
            <span className="text-ink-soft">From </span>
            <span className="font-display text-lg font-semibold">
              ${property.pricePerNight}
            </span>{" "}
            <span className="text-ink-soft">/ night</span>
          </p>
          <span className="flex items-center gap-1 text-sm font-semibold text-ocean-600 group-hover:text-ocean-500">
            View stay <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
