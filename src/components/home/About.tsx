import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { properties } from "@/data/properties";

const points = [
  {
    number: "01",
    title: "Waterfront, always",
    description:
      "Every home in the collection sits directly on the water — canal, lake or beachfront — in Florida or Ontario, Canada.",
  },
  {
    number: "02",
    title: "Booked by email, direct",
    description:
      "No booking platform in between — reach out directly and we'll confirm availability and pricing with you personally.",
  },
  {
    number: "03",
    title: "Pet-friendly stays",
    description:
      "All three homes welcome well-behaved pets, with no extra platform fee to bring them along.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-sand py-24 sm:py-28">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div
            aria-hidden
            className="absolute -left-10 -top-10 hidden h-56 w-56 rounded-full bg-ocean-400/20 blur-3xl sm:block"
          />

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={properties[1].heroImage}
              alt={properties[1].name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-10 -left-8 hidden w-40 rotate-[-6deg] overflow-hidden rounded-2xl border-4 border-cream bg-cream shadow-xl transition-transform duration-500 hover:rotate-0 sm:block">
            <div className="relative aspect-square w-full">
              <Image
                src={properties[2].heroImage}
                alt={properties[2].name}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-2xl bg-white p-5 shadow-lg sm:block">
            <p className="font-display text-3xl font-medium text-ocean-600">
              {properties.length} homes
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              across Florida and Ontario, Canada
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="About My Dream Vacation Rentals"
            title="A small, hand-picked collection of waterfront homes."
            description="My Dream Vacation Rentals lists a handful of homes — a boater's canal house in Southwest Florida and two waterfront properties on Round Lake, Ontario. Every stay is booked the same way: directly, by email, without a platform in between."
          />

          <div className="mt-10 divide-y divide-black/10">
            {points.map((point) => (
              <div key={point.title} className="flex gap-5 py-5 first:pt-0">
                <span className="font-display shrink-0 text-3xl font-medium text-ocean-400/40">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
