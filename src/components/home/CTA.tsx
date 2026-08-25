import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="pb-24 sm:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="https://bookingenginecdn.hostaway.com/listing/93243-387238-ZZtC2wD7tFXNmcaPBr3VS6y5KWQUwFQy1Gpbd6GnxlE-6814df7d2ee27?width=1280&quality=70&format=webp&v=2"
            alt="Sunset Bay Cottage waterfront at sunset"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-900/70 to-ocean-900/30" />

          <div className="relative flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-20 lg:max-w-xl">
            <span className="inline-flex items-center rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream">
              Ready when you are
            </span>
            <h2 className="font-display text-balance text-3xl font-medium text-cream sm:text-4xl">
              Your next dream stay is one direct booking away.
            </h2>
            <p className="text-base leading-relaxed text-cream/75">
              Browse the full collection, compare dates and lock in your rate
              — with no service fees and a real person to talk to along the
              way.
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
            >
              Explore all listings <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
