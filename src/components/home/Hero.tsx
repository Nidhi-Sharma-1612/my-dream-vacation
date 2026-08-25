import Image from "next/image";
import Link from "next/link";
import { Star, BadgePercent, ChevronDown } from "lucide-react";
import HeroSearchBar from "@/components/home/HeroSearchBar";
import { avgRating, siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-var(--nav-height))] flex-col overflow-visible bg-ocean-900">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://bookingenginecdn.hostaway.com/listing/93243-384967-SwabiCh1yoSRlpms3Wx6EPNwDazCliAXpMI5BhBRCxM-680ba6d258507?width=1280&quality=70&format=webp&v=2"
          alt="Canal-front pool home in Southwest Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/60 to-ocean-900/20" />
      </div>

      <div className="container-page relative flex flex-col items-center gap-10 pb-16 pt-36 text-center sm:pt-44">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
            Direct booking, no middleman
          </span>
          <h1 className="font-display mt-6 text-balance text-4xl font-medium leading-[1.1] text-cream sm:text-6xl">
            Find your dream stay, reserved{" "}
            <span className="italic text-coral-400">directly</span>.
          </h1>
          <p className="mt-4 text-base text-cream/75">{siteConfig.tagline}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-cream/80">
            <span className="flex items-center gap-2">
              <Star size={16} className="fill-coral-400 text-coral-400" />
              {avgRating} average rating
            </span>
            <span className="flex items-center gap-2">
              <BadgePercent size={16} className="text-coral-400" />
              0% platform fees
            </span>
          </div>
        </div>

        <div className="w-full max-w-4xl">
          <HeroSearchBar />
        </div>
      </div>

      <Link
        href="#about"
        className="group absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-cream/70 transition-colors hover:text-cream sm:flex"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </Link>
    </section>
  );
}
