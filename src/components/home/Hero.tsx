import Link from "next/link";
import { Star, BadgePercent, ChevronDown } from "lucide-react";
import HeroSearchBar from "@/components/home/HeroSearchBar";
import { avgRating, siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-var(--nav-height))] flex-col overflow-visible bg-ocean-900">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full animate-[hero-zoom_22s_ease-in-out_infinite_alternate] object-cover opacity-60 motion-reduce:hidden motion-reduce:animate-none"
        >
          <source src="/videos/hero-ocean.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/60 to-ocean-900/20" />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center gap-10 pb-16 pt-36 text-center sm:pt-44">
        <div className="max-w-2xl animate-[fade-in-up_0.8s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
            Direct booking, no middleman
          </span>
          <h1 className="font-display mt-6 text-balance text-4xl font-medium leading-[1.1] text-cream sm:text-6xl">
            Find your dream stay, reserved{" "}
            <span className="relative inline-block italic text-coral-400">
              directly
              <svg
                aria-hidden
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 h-3 w-full text-coral-400/70"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14 C 40 4, 80 18, 100 10 C 130 0, 165 16, 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
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

        <div className="w-full max-w-4xl animate-[fade-in-up_0.8s_ease-out_0.15s_both]">
          <HeroSearchBar />
        </div>
      </div>

      <Link
        href="#about"
        className="group absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-cream/70 transition-colors hover:text-cream sm:flex"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </Link>

      <svg
        aria-hidden
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 z-1 h-16 w-full text-sand sm:h-24"
      >
        <path
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,50 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
