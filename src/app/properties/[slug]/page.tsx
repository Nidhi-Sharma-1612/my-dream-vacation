import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Star,
  MapPin,
  Users,
  BedDouble,
  Bath,
  CheckCircle2,
  Clock,
  PawPrint,
  Cigarette,
  ShieldCheck,
} from "lucide-react";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyMap from "@/components/property/PropertyMap";
import BookingWidget from "@/components/property/BookingWidget";
import MobileBookingBar from "@/components/property/MobileBookingBar";
import PropertyCard from "@/components/shared/PropertyCard";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  getPropertyBySlug,
  getSimilarProperties,
  properties,
} from "@/data/properties";
import { getUnavailableDates } from "@/data/availability";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  const title = `${property.name} | My Dream Vacation Rentals`;
  return {
    title,
    description: property.tagline,
    openGraph: {
      title,
      description: property.tagline,
      images: [
        { url: property.heroImage, width: 1280, height: 853, alt: property.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: property.tagline,
      images: [property.heroImage],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const similar = getSimilarProperties(property.slug);

  return (
    <div className="pb-28 pt-10 sm:pb-14 sm:pt-14">
      <div className="container-page">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-ink-soft"
        >
          <Link href="/" className="hover:text-ocean-600">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/properties" className="hover:text-ocean-600">
            All listings
          </Link>
          <ChevronRight size={12} />
          <span className="text-ink">{property.name}</span>
        </nav>

        <div className="mt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-600">
            {property.vibe}
          </span>
          <h1 className="font-display mt-2 text-3xl font-medium text-ink sm:text-4xl">
            {property.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} /> {property.location}
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-ink">
              <Star size={15} className="fill-coral-500 text-coral-500" />
              {property.rating.toFixed(1)}
              {property.reviewCount && (
                <span className="font-normal text-ink-soft">
                  ({property.reviewCount} reviews)
                </span>
              )}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <PropertyGallery images={property.gallery} name={property.name} />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-6 border-b border-black/10 pb-8 text-sm text-ink">
              <span className="flex items-center gap-2">
                <Users size={18} className="text-ocean-600" />
                {property.guests} guests
              </span>
              <span className="flex items-center gap-2">
                <BedDouble size={18} className="text-ocean-600" />
                {property.bedrooms} bedrooms
              </span>
              <span className="flex items-center gap-2">
                <Bath size={18} className="text-ocean-600" />
                {property.bathrooms} bathrooms
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="font-display text-xl font-medium text-ink">
                About this home
              </h2>
              {property.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-ink-soft"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-ink">
                Highlights
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-ocean-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-ink">
                Amenities
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-sand px-4 py-3 text-sm text-ink"
                  >
                    <CheckCircle2 size={16} className="text-ocean-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-medium text-ink">
                House rules & cancellation
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm text-ink-soft">
                  <Clock size={16} className="text-ocean-600" />
                  Check-in {property.houseRules.checkIn} · Check-out{" "}
                  {property.houseRules.checkOut}
                </li>
                <li className="flex items-center gap-2 text-sm text-ink-soft">
                  <PawPrint size={16} className="text-ocean-600" />
                  Pets: {property.houseRules.pets}
                </li>
                <li className="flex items-center gap-2 text-sm text-ink-soft">
                  <Cigarette size={16} className="text-ocean-600" />
                  Smoking: {property.houseRules.smoking}
                </li>
                <li className="flex items-start gap-2 text-sm text-ink-soft sm:col-span-2">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-ocean-600" />
                  {property.cancellationPolicy}
                </li>
              </ul>
            </div>

            <PropertyMap
              location={property.location}
              coordinates={property.coordinates}
            />
          </div>

          <div id="booking-widget" className="lg:sticky lg:top-24 lg:self-start">
            <BookingWidget
              pricePerNight={property.pricePerNight}
              maxGuests={property.guests}
              unavailableDates={getUnavailableDates(property.hostawayId)}
            />
          </div>
        </div>
      </div>

      <MobileBookingBar pricePerNight={property.pricePerNight} />

      <div className="container-page mt-20">
        <SectionHeading
          eyebrow="You might also like"
          title="More homes worth booking direct."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {similar.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
