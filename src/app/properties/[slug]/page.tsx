import type { CSSProperties } from "react";
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
  Mail,
} from "lucide-react";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyMap from "@/components/property/PropertyMap";
import PropertyStickyNav from "@/components/property/PropertyStickyNav";
import ShareButton from "@/components/property/ShareButton";
import BookingWidget from "@/components/property/BookingWidget";
import MobileBookingBar from "@/components/property/MobileBookingBar";
import PropertyCard from "@/components/shared/PropertyCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import {
  getPropertyBySlug,
  getSimilarProperties,
  properties,
} from "@/data/properties";
import { getUnavailableDates } from "@/data/availability";
import { siteConfig } from "@/data/site";

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

const statPills = (property: {
  guests: number;
  bedrooms: number;
  bathrooms: number;
}) => [
  { icon: Users, label: `${property.guests} guests` },
  { icon: BedDouble, label: `${property.bedrooms} bedrooms` },
  { icon: Bath, label: `${property.bathrooms} bathrooms` },
];

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
    <div
      className="pb-28 pt-10 sm:pb-14 sm:pt-14"
      style={{ "--scroll-offset": "calc(var(--nav-height) + 4.5rem)" } as CSSProperties}
    >
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

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4 animate-[fade-in-up_0.6s_ease-out_both]">
          <div>
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

          <ShareButton name={property.name} tagline={property.tagline} />
        </div>

        <div className="mt-8 animate-[fade-in-up_0.6s_ease-out_0.1s_both]">
          <PropertyGallery images={property.gallery} name={property.name} />
        </div>
      </div>

      <div>
        <PropertyStickyNav />

        <div className="container-page mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div id="overview">
              <div className="flex flex-wrap gap-3">
                {statPills(property).map((stat) => (
                  <span
                    key={stat.label}
                    className="flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm font-medium text-ink"
                  >
                    <stat.icon size={16} className="text-ocean-600" />
                    {stat.label}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4 border-t border-black/10 pt-8">
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

              <div className="mt-6 flex items-start gap-4 rounded-2xl bg-ocean-50 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean-500 text-cream">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-semibold text-ink">
                    Booked direct, no platform fees
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Reserve straight from {siteConfig.name} by email — no
                    third-party commission added to your rate.{" "}
                    <Link
                      href="/contact"
                      className="font-semibold text-ocean-600 hover:text-ocean-500"
                    >
                      Ask a question
                    </Link>
                  </p>
                </div>
              </div>

              <Reveal className="mt-10 border-t border-black/10 pt-10">
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
              </Reveal>
            </div>

            <div id="booking-widget" className="mt-10 lg:hidden">
              <BookingWidget
                pricePerNight={property.pricePerNight}
                maxGuests={property.guests}
                unavailableDates={getUnavailableDates(property.hostawayId)}
              />
            </div>

            <Reveal id="amenities" className="mt-14 border-t border-black/10 pt-10">
              <h2 className="font-display text-xl font-medium text-ink">
                Amenities
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-sand px-4 py-3 text-sm text-ink transition-colors hover:bg-sand-dark"
                  >
                    <CheckCircle2 size={16} className="text-ocean-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal id="house-rules" className="mt-14 border-t border-black/10 pt-10">
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
            </Reveal>

            <Reveal id="location" className="mt-14 border-t border-black/10 pt-10">
              <PropertyMap
                location={property.location}
                coordinates={property.coordinates}
              />
            </Reveal>
          </div>

          <div className="hidden lg:sticky lg:top-(--scroll-offset) lg:block lg:self-start">
            <BookingWidget
              pricePerNight={property.pricePerNight}
              maxGuests={property.guests}
              unavailableDates={getUnavailableDates(property.hostawayId)}
            />
          </div>
        </div>
      </div>

      <MobileBookingBar pricePerNight={property.pricePerNight} />

      <div id="similar-homes" className="container-page mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="You might also like"
            title="More homes worth booking direct."
          />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {similar.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <PropertyCard property={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
