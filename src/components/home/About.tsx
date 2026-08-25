import Image from "next/image";
import { Waves, Mail, PawPrint } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { properties } from "@/data/properties";

const points = [
  {
    icon: Waves,
    title: "Waterfront, always",
    description:
      "Every home in the collection sits directly on the water — canal, lake or beachfront — in Florida or Ontario, Canada.",
  },
  {
    icon: Mail,
    title: "Booked by email, direct",
    description:
      "No booking platform in between — reach out directly and we'll confirm availability and pricing with you personally.",
  },
  {
    icon: PawPrint,
    title: "Pet-friendly stays",
    description:
      "All three homes welcome well-behaved pets, with no extra platform fee to bring them along.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-sand py-24 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl">
            <Image
              src={properties[1].heroImage}
              alt={properties[1].name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-2xl bg-white p-5 shadow-lg sm:block">
            <p className="font-display text-3xl font-medium text-ocean-600">
              {properties.length} homes
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              across Florida and Ontario, Canada
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About My Dream Vacation Rentals"
            title="A small, hand-picked collection of waterfront homes."
            description="My Dream Vacation Rentals lists a handful of homes — a boater's canal house in Southwest Florida and two waterfront properties on Round Lake, Ontario. Every stay is booked the same way: directly, by email, without a platform in between."
          />

          <div className="mt-10 space-y-6">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600">
                  <point.icon size={20} />
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
        </div>
      </div>
    </section>
  );
}
